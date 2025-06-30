
# Voice Assistant AI – Full Stack Project

This is a **custom voice assistant** built using **[LiveKit](https://livekit.io/)** for real-time audio, transcription, and avatar-based interaction.

📦 **Tech Stack**
- 🎯 **Frontend**: Next.js + LiveKit SDK (`agent-starter-reac`)
- 🧠 **Backend**: Node.js / LiveKit Agent (`Voice_assis`)

![App screenshot](screenshot.png)


---

## 📁 Clone the Project

```bash
git clone https://github.com/your-username/your-voice-assistant-repo.git
cd your-voice-assistant-repo
```

---

## 🔑 Setup API Keys

Before running, make sure to configure LiveKit credentials:

1. Go to your project root and create a file named `.env.local` (both in frontend and backend folders if needed).
2. Copy the template from `.env.example` and fill in:
    ```
    LIVEKIT_API_KEY=your_api_key
    LIVEKIT_API_SECRET=your_api_secret
    LIVEKIT_URL=https://your-livekit-server.com
    ```

You can get these credentials from the [LiveKit Cloud Console](https://cloud.livekit.io/).

---

## 🚀 How to Run

### 🔹 1. Start the Backend (`Voice_assis`)

This handles the voice processing and AI interaction.

```bash
cd Voice_assis
pnpm install
pnpm dev
```

> 🛠 Ensure `.env.local` exists in this folder with proper API keys.

---

### 🔹 2. Start the Frontend (`agent-starter-reac`)

This is the UI for voice input, transcription, and avatar.

```bash
cd agent-starter-reac
pnpm install
pnpm dev
```

Then open 👉 [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 What This Uses

✅ **LiveKit Voice SDK** – for real-time voice capture and streaming  
✅ **LiveKit Transcription** – to convert speech to live text  
✅ **LiveKit Avatars** – to create an interactive, visual assistant

---

## 🌐 One-Click Deploy (Optional)

You can also deploy instantly with LiveKit Cloud:

```bash
lk app create --template voice-assistant-frontend
```

---

## ⚙️ Customization

- Update `.env.local` for API keys and configs
- Change avatar, model, or backend logic as needed
- Modify UI in `agent-starter-reac` folder to suit your design

---

## 🤝 Contributing

This is a self-built project using **LiveKit**’s tools.  
Ideas, improvements, and feedback are always welcome!

---

Made with ❤️ By AJ Using [LiveKit](https://livekit.io/)
