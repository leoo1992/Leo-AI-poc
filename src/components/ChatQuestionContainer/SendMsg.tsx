export default function SendMsg({GPT}) {
  return (
    <span className="bg-neutral text-accent text-center font-extrabold p-3 rounded-lg border-secondary border-2">
    {GPT.lang.sendMsg}
    <br /><progress className="progress progress-success bg-secondary w-40"></progress>
  </span>
  )
}
