import { useState, type Dispatch, type SetStateAction } from "react";

type BooleanSetter = Dispatch<SetStateAction<boolean>>;
type StringSetter = Dispatch<SetStateAction<string>>;
type SubmitHandler = (promptValue?: string) => Promise<void>;
type SpeechRecognitionEventLike = { results: { [index: number]: { [index: number]: { transcript: string } } } };
type SpeechRecognitionInstance = {
  lang: string;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onend: (() => void) | null;
  start: () => void;
};
type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

export default function useREC() {
  const [isRecording, setIsRecording] = useState(false);
  const [showSendPrompt, setShowSendPrompt] = useState(false);

  async function startRecording(
    setIsPressed: BooleanSetter,
    setQuestion: StringSetter,
    handleSubmit2: SubmitHandler,
    recognitionLanguage: string,
  ) {
    setIsRecording(true);
    setShowSendPrompt(false);
    setQuestion('');
    const recognition = (window as Window & { webkitSpeechRecognition?: SpeechRecognitionConstructor }).webkitSpeechRecognition;
    if (!recognition) {
      alert('O navegador não suporta o reconhecimento de voz.');
      setIsRecording(false);
      setIsPressed(false);
      setShowSendPrompt(false);
      return;
    }

    const recognitionInstance = new recognition();
    recognitionInstance.lang = recognitionLanguage;
    recognitionInstance.onresult = (event: SpeechRecognitionEventLike) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
      stopRecording(setIsPressed);
    };
    recognitionInstance.onend = () => {
      setIsRecording(false);
      setIsPressed(false);
      setShowSendPrompt(true);
      setTimeout(() => setShowSendPrompt(false), 3000);
    };
    await handleSubmit2();
    recognitionInstance.start();
  }

  function stopRecording(setIsPressed: BooleanSetter) {
    setIsRecording(false);
    setIsPressed(false);
    setShowSendPrompt(false);
  }

  return { isRecording, startRecording, stopRecording, setIsRecording, showSendPrompt };
}
