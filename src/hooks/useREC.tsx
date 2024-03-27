import { useState } from "react";

export default function useREC() {
  const [isRecording, setIsRecording] = useState(false);
  const [showSendPrompt, setShowSendPrompt] = useState(false);

  async function startRecording(setIsPressed, setQuestion, handleSubmit2, recognitionLanguage) {
    setIsRecording(true);
    setShowSendPrompt(false);
    setQuestion('');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const recognition = window.webkitSpeechRecognition;
    if (!recognition) {
      alert('O navegador não suporta o reconhecimento de voz.');
      setIsRecording(false);
      setIsPressed(false);
      setShowSendPrompt(false);
      return;
    }

    const recognitionInstance = new recognition();
    recognitionInstance.lang = recognitionLanguage;
    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
      stopRecording(setIsPressed);
    };
    recognitionInstance.onend = () => {
      setIsRecording(false);
      setIsPressed(false);
      setShowSendPrompt(true);
      const timer = setTimeout(() => {
        setShowSendPrompt(false);
      }, 3000);
      return () => clearTimeout(timer);
    };
    handleSubmit2();
    recognitionInstance.start();
  }

  function stopRecording(setIsPressed) {
    setIsRecording(false);
    setIsPressed(false);
    setShowSendPrompt(false);
  }

  return {
    isRecording,
    startRecording,
    stopRecording,
    setIsRecording,
    showSendPrompt
  };
}
