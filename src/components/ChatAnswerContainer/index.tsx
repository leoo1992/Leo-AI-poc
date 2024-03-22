import AvatarChat from "../Icons/AvatarChat";
import "../../styles/Globals/App.css";

export default function ChatAnswerContainer({ GPT }) {
  return (
    <div className="flex justify-end align-bottom items-end content-end w-12/12 h-4/6 mt-16 mr-5 chat chat-end">
      <div className="chat-bubble-msg chat-bubble shadow-lg hover:shadow-xl m-2 text-accent font-semibold">
        {GPT.isLoading ? (
          <div className="text-center">
            <span className="loading loading-ring loading-md text-secondary"></span>
            <p className="text-center text-sm">Gerando resposta</p>
          </div>
        ) : !GPT.answer ? (
          <div className="text-center">
            <span className="loading loading-dots loading-md mt-3 text-secondary"></span>
            <p className="text-center text-sm">Aguardando pergunta</p>
          </div>
        ) : (
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl break-words">
            {GPT.answer}
          </div>
        )}
      </div>
      <AvatarChat />
    </div>
  );
}
