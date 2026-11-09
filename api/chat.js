const POOLS = {
  general:  () => (process.env.GROQ_KEYS || '').split(',').map(k => k.trim()).filter(Boolean),
  research: () => (process.env.GROQ_RESEARCH_KEYS || '').split(',').map(k => k.trim()).filter(Boolean),
  tutor:    () => [process.env.GROQ_TUTOR_KEY].filter(Boolean)
};
const cursor = { general: 0, research: 0, tutor: 0 };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: { message: 'Method not allowed' } });

  const { messages, system, json, pool = 'general', temperature, max_tokens } = req.body || {};
  if (!Array.isArray(messages) || messages.length > 40 || !POOLS[pool]) {
    return res.status(400).json({ error: { message: 'Bad request' } });
  }

  const keys = POOLS[pool]();
  if (!keys.length) return res.status(500).json({ error: { message: 'Server not configured' } });

  const payload = {
    model: 'openai/gpt-oss-120b',                       // fixed on the server
    messages: system ? [{ role: 'system', content: String(system) }, ...messages] : messages,
    temperature: typeof temperature === 'number' ? Math.min(Math.max(temperature, 0), 1.5) : 0.7,
    max_tokens: Math.min(Number(max_tokens) || 1500, 2000),
    stream: false,
    ...(json && { response_format: { type: 'json_object' } })
  };

  // Key rotation moved to the server
  for (let i = 0; i < keys.length; i++) {
    const idx = (cursor[pool] + i) % keys.length;
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${keys[idx]}` },
      body: JSON.stringify(payload)
    });
    if (r.status === 429) continue;                      // rate limited, try next key
    cursor[pool] = idx;
    const data = await r.json().catch(() => ({}));
    return res.status(r.status).json(data);
  }
  return res.status(429).json({ error: { message: 'All keys are rate limited. Try again in a minute.' } });
}
