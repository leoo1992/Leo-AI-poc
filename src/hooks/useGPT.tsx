import { useState } from "react";
import useREC from "./useREC";
import useSCREEN from "./useSCREEN";
import useSUBMIT from "./useSUBMIT";

export default function useGPT() {
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);
  const { isRecording, startRecording, stopRecording } = useREC();
  const { isFullScreen, toggleFullScreen } = useSCREEN();
  const { handleSubmit2, handleSubmit, isPressed, answer, isLoading, setIsPressed, setAnswer, setQuestion, question } = useSUBMIT();

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
    startRecording: () => startRecording(setIsPressed, setQuestion, handleSubmit2),
    stopRecording,
    isFullScreen,
    toggleFullScreen,
    isMobileLandscape,
    setIsMobileLandscape,
  };
}
