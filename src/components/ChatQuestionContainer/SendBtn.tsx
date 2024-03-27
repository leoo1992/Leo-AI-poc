import SendIcon from "../Icons/SendIcon";

export default function SendBtn({GPT}) {
  return (
    <div className="tooltip tooltip-primary tooltip-left" data-tip={GPT.lang.sendTooltip}>
    <button
    id="send-button"
    className="btn btn-square btn-secondary btn-sm shadow-lg hover:shadow-xl font-extrabold 
    hover:bg-primary hover:border-0 mr-2"
    onClick={() => GPT.handleSubmit2()}
  >
    <SendIcon />
  </button>
  </div>
  )
}
