import { BrowserRouter as Router } from "react-router-dom";
import useGPT from "./hooks/useGPT";
import AppEffects from "./hooks/AppEffects";
import NavBar from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import ImgCenterPage from "./components/ImgCenterPage";
import ChatAnswerContainer from "./components/ChatAnswerContainer";
import ChatQuestionContainer from "./components/ChatQuestionContainer";
import Footer from "./components/Footer";
import "./styles/Globals/App.css";
import Particles from "./components/Particles/Particles";

export default function App() {
  const GPT = useGPT();
  return (
    <Router>
      <div className="leo-ai-shell">
        <Particles />
        <AppEffects GPT={GPT} />
        <header className="leo-ai-header"><NavBar GPT={GPT} /></header>
        <Analytics />
        <main className="leo-ai-main">
          <ImgCenterPage GPT={GPT} />
          <ChatAnswerContainer GPT={GPT} />
        </main>
        <div className="leo-ai-composer"><ChatQuestionContainer GPT={GPT} /></div>
        <Footer />
      </div>
    </Router>
  );
}