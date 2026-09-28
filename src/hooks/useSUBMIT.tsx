import React, { useState } from "react";
import useAuthAPI from "./useAuthAPI";

export default function useSUBMIT() {
  const [isPressed, setIsPressed] = useState(false);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { endpoint } = useAuthAPI();

  async function submit(promptValue = question) {
    const prompt = promptValue.trim();
    if (!prompt || isLoading) return;
    setIsLoading(true);
    setAnswer("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data?.error || "Não foi possível gerar a resposta.");
      setAnswer(data.text || "Não recebi conteúdo para esta pergunta.");
      setQuestion("");
      setIsPressed(false);
    } catch (error) {
      setAnswer(error instanceof Error ? error.message : "O serviço de IA está temporariamente indisponível.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      await submit();
    }
  }

  async function handleSubmit2(promptValue?: string) {
    await submit(typeof promptValue === "string" ? promptValue : question);
  }

  return { handleSubmit2, handleSubmit, isPressed, answer, isLoading, setIsPressed, setAnswer, setQuestion, question };
}
