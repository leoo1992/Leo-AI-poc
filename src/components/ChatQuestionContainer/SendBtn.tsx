import SendIcon from "../Icons/SendIcon";

export default function SendBtn({GPT}) {
  return (
    <button
    id="send-button"
    className="btn btn-square btn-secondary btn-sm shadow-lg hover:shadow-xl font-extrabold 
    hover:bg-primary hover:border-0 mr-2"
    onClick={() => GPT.handleSubmit2()}
  >
    <SendIcon />
  </button>
  )
}
