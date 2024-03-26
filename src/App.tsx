import { Analytics } from "@vercel/analytics/react";
import ImgCenterPage from "./components/ImgCenterPage";
import NavBar from "./components/NavBar";
import "./styles/Globals/App.css";
import useGPT from "./hooks/useGPT";
import Footer from "./components/Footer";
import ChatAnswerContainer from "./components/ChatAnswerContainer";
import ChatQuestionContainer from "./components/ChatQuestionContainer";
import { BrowserRouter as Router } from "react-router-dom";
import AppEffects from "./hooks/AppEffects";

function App() {
  const GPT = useGPT();

  return (
    <Router>
      <div className="pt-3 h-screen flex flex-col justify-between glass opacity-100">
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

export default App;
