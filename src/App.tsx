import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import ImgCenterPage from "./components/ImgCenterPage";
import NavBar from "./components/NavBar";
import "./styles/Globals/App.css";
import useGPT from "./hooks/useGPT";
import Footer from "./components/Footer";
import ChatAnswerContainer from "./components/ChatAnswerContainer";
import ChatQuestionContainer from "./components/ChatQuestionContainer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const GPT = useGPT();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!(event.target instanceof Node)) {
        GPT.setIsPressed(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    if (GPT.isFullScreen && document.fullscreenEnabled) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Erro ao entrar em tela cheia:", err);
      });
    } else if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error("Erro ao sair da tela cheia:", err);
      });
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [GPT]);

  useEffect(() => {
    const checkOrientation = () => {
      GPT.setIsMobileLandscape(
        typeof window !== "undefined" &&
          window.matchMedia("(orientation: landscape)").matches &&
          window.innerWidth <= 768 && window.innerHeight <= 520
      );
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, [GPT]);

  return (
    <Router>
        <div className="pt-3 h-screen flex flex-col justify-between glass opacity-100">
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
