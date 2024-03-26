import React, { useState } from "react";
import useAuthAPI from "./useAuthAPI";

export default function useSUBMIT() {
  const [isPressed, setIsPressed] = useState(false);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {genAI} = useAuthAPI();

  async function handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && question.trim() !== "") {
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
    if (question.trim() !== "" && question) {
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
  }
  
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
  }
}
