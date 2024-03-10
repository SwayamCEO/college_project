"use client"
import React, { useState } from 'react';

const TextToSpeech = ({ text }) => {
  const [speaking, setSpeaking] = useState(false);
  const synthesis = window.speechSynthesis;

  const speakText = () => {
    if (!speaking && synthesis !== undefined) {
      const utterance = new SpeechSynthesisUtterance(text);
      synthesis.speak(utterance);
      setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
    }
  };

  const stopSpeaking = () => {
    if (speaking && synthesis !== undefined) {
      synthesis.cancel();
      setSpeaking(false);
    }
  };

  return (
    <div>
      <button onClick={speakText} className="pt" disabled={speaking}>
      </button>
    </div>
  );
};

export default TextToSpeech;
