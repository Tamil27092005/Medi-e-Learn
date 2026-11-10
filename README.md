# Medi-e-Learn – AI-Powered Medical Learning Platform

## Overview
**Medi-e-Learn** is a state-of-the-art, single-page application (SPA) designed specifically for medical students. Aligned with the **NMC CBME (National Medical Commission - Competency-Based Medical Education)** guidelines, this platform serves as an interactive, AI-driven study companion. It integrates intelligent clinical simulations, voice-enabled AI tutoring, dynamic assessments, and collaborative learning tools into a seamless dashboard.

## Key Features

### 📚 Competency-Based Learning
* **NMC CBME Alignment:** Track academic progress across subjects (Anatomy, Physiology, General Medicine, Surgery, etc.) mapped directly to official NMC competencies.
* **Granular Progress Tracking:** Visual rings and progress bars monitor mastery levels (Must Know, Desirable, Nice to Know) across academic years.

### 🏥 AI Clinical Practice Simulator
* **Virtual Patient Encounters:** Engage in realistic, chat-based history-taking with AI-simulated patients.
* **Multilingual Support:** Communicate with patients in regional Indian languages (Hindi, Tamil, Telugu, etc.) with integrated text-to-speech.
* **Diagnosis & Management Evaluation:** Submit clinical diagnoses and treatment plans to receive immediate, structured feedback from the "AI Examiner."

### 🤖 Intelligent AI Assistants
* **AI Medical Tutor:** A dedicated tutor for deep-diving into specific competencies, featuring voice interaction and automated high-yield exam tips.
* **DocBot:** A floating, global AI assistant accessible from any screen for quick medical queries, definitions, and navigation help.
* **Voice Engine Integration:** Utilizes browser-native speech synthesis and Sarvam AI for high-fidelity, multilingual medical text-to-speech capabilities.

### 📝 Dynamic AI Assessments
* **Auto-Generated MCQs:** Dynamically generates 5-question mock quizzes based on the current competency using LLMs.
* **Short Note Evaluation:** AI evaluates subjective essay answers, automatically extracting "Good Points," "Missing Points," and offering actionable improvement tips.

### 🔬 UG Research Assistant
* **Guided Research Workflow:** A 5-step wizard helping undergraduates formulate research topics, select study designs, and build a complete methodological framework.
* **AI Refinement:** Analyzes topic feasibility, suggests designs, and auto-generates structured methodology proposals ready for export/printing.

### 👥 Small Group Teaching (SGT)
* **Jitsi Meet Integration:** Built-in video conferencing for peer-to-peer discussions and faculty-led small group clinical teachings, protected by secure PIN access.

## Technology Stack

* **Frontend:** HTML5, CSS3 (Vanilla, CSS Variables for theming), JavaScript (ES6+).
* **Architecture:** Monolithic Single-Page Application (SPA) with DOM-manipulation-based routing.
* **Integrations:**
    * **Groq API (Llama 3 / GPT-oss):** Powers the core conversational AI, Tutor, and Research Assistant.
    * **Sarvam AI API:** Provides advanced Indic-language Text-to-Speech (TTS) for regional patient simulations.
    * **Jitsi Meet External API:** Facilitates native video conferencing for SGT.
    * **Web Speech API & MediaRecorder:** Handles fallback text-to-speech and microphone capture for Whisper transcription.

## Setup and Installation

Medi-e-Learn is built as a zero-build, dependency-free HTML file. 

1. **Clone or Download** the repository.
2. **Open** `SRM_eLEARN_v7.html` directly in any modern web browser (Chrome, Edge, Firefox, Safari).
3. **Local Server (Optional but Recommended):** While no local server is strictly required for the UI, serving it via a basic HTTP server (e.g., VS Code Live Server, Python `http.server`) ensures microphone and WebRTC permissions work flawlessly.

## API Configuration & Security Note

The application relies on external LLM and TTS providers. Currently, API routing is handled client-side with a robust fallback and rotation strategy embedded in the `AI_CONFIG` object.

Live Link : https://6a0dfe4494ed0f46de164280--exquisite-pudding-54106c.netlify.app/
