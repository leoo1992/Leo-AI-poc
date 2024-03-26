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
      <div className="pt-3 h-screen flex flex-col justify-between">
        <Particles />
        <AppEffects GPT={GPT} />
        <NavBar GPT={GPT} />
        <Analytics />
        <ImgCenterPage GPT={GPT} />
        <ChatAnswerContainer GPT={GPT} />
        <ChatQuestionContainer GPT={GPT} />
        <Footer />
      </div>
    </Router>
  );
}
