import { useState } from "react";
import useREC from "./useREC";
import useSCREEN from "./useSCREEN";
import useSUBMIT from "./useSUBMIT";
import useLang from "./useLang";

export default function useGPT() {
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);
  const { isRecording, startRecording, stopRecording, showSendPrompt } = useREC();
  const { isFullScreen, toggleFullScreen } = useSCREEN();
  const { handleSubmit2, handleSubmit, isPressed, answer, isLoading, setIsPressed, setAnswer, setQuestion, question } = useSUBMIT();
  const {lang, setLang, EN, PT} = useLang();

  return {
    handleSubmit2,
    handleSubmit,
    isPressed,
    answer,
    isLoading,
    setIsPressed,
    setAnswer,
    setQuestion,
    question,
    isRecording,
    startRecording: () => startRecording(setIsPressed, setQuestion, handleSubmit2, lang.recognitionInstance),
    stopRecording,
    isFullScreen,
    toggleFullScreen,
    isMobileLandscape,
    setIsMobileLandscape,
    showSendPrompt,
    lang, 
    setLang,
    EN,
    PT,
    handleChangeLang: (selectedLang) => setLang(selectedLang),
  };
}
