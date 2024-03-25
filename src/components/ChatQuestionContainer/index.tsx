import { useEffect, useRef } from "react";
import MicrophoneOff from "../Icons/MicrophoneOff";
import MicrophoneOn from "../Icons/MicrophoneOn";
import SendIcon from "../Icons/SendIcon";

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
      {GPT.isRecording && (
        <h1 className="flex justify-end align-end items-end text-center self-center absolute text-xl">
          Gravando...
        </h1>
      )}
      <label
        className="input input-bordered flex items-center justify-center self-center 
       content-center gap-2 w-full lg:w-8/12 mb-1 shadow-lg hover:shadow-xl text-accent"
      >
        <input
         ref={inputRef}
          type="text"
          className="grow"
          placeholder="Pergunte algo..."
          onKeyDown={(e) => GPT.handleSubmit(e)}
          value={GPT.question}
          onChange={(e) => GPT.setQuestion(e.target.value)}
        />
        <button
          id="microphone-button"
          className={`pressable btn btn-square btn-sm shadow-lg 
            hover:shadow-xl btn-primary text-secondary
            glass rounded-xl swap ${GPT.isPressed ?? "animate-pulse"}`}
          onClick={() => {
            if (!GPT.isRecording) {
              GPT.startRecording();
            } else {
              GPT.stopRecording();
            }
            GPT.setIsPressed(!GPT.isPressed);
          }}
        >
          {GPT.isPressed ? <MicrophoneOn /> : <MicrophoneOff />}
        </button>

        <button
          id="send-button"
          className="btn btn-square btn-secondary btn-sm shadow-lg hover:shadow-xl font-extrabold 
          hover:bg-primary hover:border-0"
          onClick={() => GPT.handleSubmit2()}
        >
          <SendIcon />
        </button>
      </label>
    </div>
  );
}
