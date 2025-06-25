// app/voice-assistant/page.tsx
"use client";

import React, { useEffect, useRef } from "react";

export default function VoiceAssistantUI() {
  const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const text = event.results[event.resultIndex][0].transcript;
      console.log("User said:", text);
      speak("Yes, I am listening carefully."); // Gemini response bhi yahan laa sakta hai
    };

    recognition.onerror = (e: any) => console.error(e);

    recognition.start();
    recognitionRef.current = recognition;

    return () => recognition.stop();
  }, []);

  const speak = (text: string) => {
    if (!synth) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1;
    utterance.rate = 1;
    synth.speak(utterance);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0 animate-pulse blur-3xl opacity-30 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500" />
      
      <div className="z-10 flex flex-col items-center justify-center text-white">
        <div className="animate-ping w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute w-24 h-24 bg-white/20 rounded-full animate-pulse" />
        <p className="mt-10 text-xs text-gray-400">Listening...</p>
      </div>
    </div>
  );
}
