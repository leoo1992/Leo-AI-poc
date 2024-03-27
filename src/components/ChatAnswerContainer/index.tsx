import MakeAnswerTxt from "./MakeAnswerTxt";
import WaitAnswer from "./WaitAnswer";
import SetAnswer from "./SetAnswer";
import AvatarChat from "../Icons/AvatarChat";
import "../../styles/Globals/App.css";

export default function ChatAnswerContainer({ GPT }) {
  return (
    <div className="flex justify-end align-bottom items-end content-end w-12/12 h-4/6 mt-16 mr-5 chat chat-end">
      <div className="chat-bubble-msg chat-bubble shadow-lg hover:shadow-xl ml-2 text-accent font-semibold">
        {GPT.isLoading ? (
          <MakeAnswerTxt GPT={GPT}/>
        ) : !GPT.answer ? (
          <WaitAnswer GPT={GPT}/>
        ) : (
          <SetAnswer GPT={GPT} />
        )}
      </div>
      <AvatarChat />
    </div>
  );
}
