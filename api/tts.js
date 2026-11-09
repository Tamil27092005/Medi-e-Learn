export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { text, language, voice } = req.body || {};
  if (!text || String(text).length > 1500) return res.status(400).json({ error: 'Bad request' });

  const r = await fetch('https://api.vachana.ai/api/v1/tts/inference', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-API-Key-ID': process.env.GNANI_API_KEY },
    body: JSON.stringify({
      model: 'timbre-v2.5', language, voice, text,
      audio_config: { sample_rate: 24000, container: 'wav' }
    })
  });
  if (!r.ok) return res.status(r.status).send(await r.text());
  res.setHeader('Content-Type', 'audio/wav');
  return res.status(200).send(Buffer.from(await r.arrayBuffer()));
}
