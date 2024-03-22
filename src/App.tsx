import { Analytics } from "@vercel/analytics/react";
import ImgCenterPage from "./components/ImgCenterPage";
import NavBar from "./components/NavBar";
import "./styles/Globals/App.css";
import useGPT from "./hooks/useGPT";
import Footer from "./components/Footer";
import ChatAnswerContainer from "./components/ChatAnswerContainer";
import ChatQuestionContainer from "./components/ChatQuestionContainer";

function App() {
  const GPT = useGPT();
  return (
    <div className="pt-3 h-screen flex flex-col justify-between glass opacity-100">
      <NavBar />
      <Analytics />
      <ImgCenterPage GPT={GPT}/>
      <ChatAnswerContainer GPT={GPT}/>
      <ChatQuestionContainer GPT={GPT}/>
      <Footer />
    </div>
  );
}

export default App;
