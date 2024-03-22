import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function useGPT() {
  const [isPressed, setIsPressed] = useState(false);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const key = import.meta.env.VITE_GOOGLE_API_KEY;
  const genAI = new GoogleGenerativeAI(key);

  async function handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setIsLoading(true);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.0-pro-latest",
      });
      const prompt = question;
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      setAnswer(text);
      setQuestion("");
      setIsPressed(false);
      setIsLoading(false);
    }
  }
  async function handleSubmit2() {
    setIsLoading(true);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = question;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    setAnswer(text);
    setQuestion("");
    setIsPressed(false);
    setIsLoading(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!(event.target instanceof Node)) {
        setIsPressed(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return {
    handleSubmit2,
    handleSubmit,
    isPressed,
    answer,
    isLoading,
    setIsPressed,
    setAnswer,
    setQuestion,
    question
  };
}
