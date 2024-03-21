import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react"
import AvatarChat from "./components/Icons/AvatarChat";
import SendIcon from "./components/Icons/SendIcon";
import VoiceREC from "./components/Icons/VoiceREC";
import ImgCenterPage from "./components/ImgCenterPage";
import NavBar from "./components/NavBar";
import "./styles/Globals/App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const [isPressed, setIsPressed] = useState(false);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const key = import.meta.env.VITE_GOOGLE_API_KEY;
  const genAI = new GoogleGenerativeAI(key);

  async function handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setIsLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro-latest" });
      const prompt = question;
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      setAnswer(text.substring(0, 310));
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
    setAnswer(text.substring(0, 310));
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

  return (
    <div className="pt-3 px-3 pb-5 h-screen flex flex-col justify-between glass opacity-100">
      <NavBar />
      <Analytics />
      <ImgCenterPage />
      <div className="flex justify-end align-bottom items-end content-end w-12/12 h-4/6 chat chat-end">
        <div className="chat-bubble-msg chat-bubble shadow-lg hover:shadow-xl mr-2 text-accent font-semibold">
          {isLoading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            answer
          )}
        </div>
        <AvatarChat />
      </div>
      <div
        className="App flex justify-center align-middle items-center 
        w-full flex-col gap-5 z-0 self-center content-center"
      >
        <label
          className="input input-bordered flex items-center justify-center self-center 
       content-center gap-2 w-full lg:w-8/12 mb-2 shadow-lg hover:shadow-xl text-accent"
        >
          <input
            type="text"
            className="grow"
            placeholder="Pergunte algo..."
            onKeyDown={(e) => handleSubmit(e)}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            className={`pressable ${isPressed ? "animate-ping" : ""}`}
            onClick={() => setIsPressed(!isPressed)}
          >
            <VoiceREC />
          </button>
          <button
            className="btn btn-square btn-secondary btn-sm shadow-lg hover:shadow-xl font-extrabold 
          hover:bg-primary hover:border-0"
            onClick={() => handleSubmit2()}
          >
            <SendIcon />
          </button>
        </label>
      </div>
    </div>
  );
}

export default App;
