import { useState } from "react";

export default function useREC() {
    const [isRecording, setIsRecording] = useState(false);

    async function startRecording(setIsPressed, setQuestion, handleSubmit2) {
    setIsRecording(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const recognition = window.webkitSpeechRecognition;
    if (!recognition) {
      alert('O navegador não suporta o reconhecimento de voz.');
      setIsRecording(false);
      setIsPressed(false);
      return;
    }

    const recognitionInstance = new recognition();
    recognitionInstance.lang = "pt-BR";
    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
      stopRecording(setIsPressed);
    };
    recognitionInstance.onend = () => {
      setIsRecording(false);
      setIsPressed(false);
      handleSubmit2();
    };
    recognitionInstance.start();
  }

  function stopRecording(setIsPressed) {
    setIsRecording(false);
    setIsPressed(false);
  }

  return {
    isRecording,
    startRecording,
    stopRecording,
    setIsRecording
  };
}
