"use client"
import React, { useState, useEffect } from 'react';

const TextToSpeech = ({ text }) => {
  const [synthesis, setSynthesis] = useState(null);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      setSynthesis(window.speechSynthesis);
    }
  }, []);

  const speakText = () => {
    if (!speaking && synthesis !== null) {
      const utterance = new SpeechSynthesisUtterance(text);
      synthesis.speak(utterance);
      setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
    }
  };

  const stopSpeaking = () => {
    if (speaking && synthesis !== null) {
      synthesis.cancel();
      setSpeaking(false);
    }
  };

  return (
    <div>
      <button onClick={speakText} disabled={speaking}>
        Speak
      </button>
      <button onClick={stopSpeaking} disabled={!speaking}>
        Stop
      </button>
    </div>
  );
};

export default TextToSpeech;
