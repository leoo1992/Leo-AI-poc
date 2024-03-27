import { useEffect, useRef } from "react";
import RecMsg from "./RecMsg";
import InputQuestion from "./InputQuestion";
import RecBtn from "./RecBtn";
import SendBtn from "./SendBtn";
import SendMsg from "./SendMsg";

export default function ChatQuestionContainer({ GPT }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      className="App flex justify-center align-middle items-center 
        w-full flex-col gap-5 z-0 self-center content-center p-2"
    >
      {GPT.isRecording && <RecMsg GPT={GPT}/>}
      {!GPT.isRecording && GPT.showSendPrompt && <SendMsg GPT={GPT}/>}
      <label
        className="input input-bordered flex items-center justify-center self-center 
       content-center gap-2 w-full lg:w-8/12 mb-1 shadow-lg hover:shadow-xl text-accent"
      >
        <InputQuestion GPT={GPT} inputRef={inputRef} />
        <RecBtn GPT={GPT} />
        <SendBtn GPT={GPT} />
      </label>
    </div>
  );
}
