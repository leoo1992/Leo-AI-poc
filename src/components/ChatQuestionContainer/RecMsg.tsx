export default function RecMsg({GPT}) {
  return (
    <span className="bg-neutral text-center text-accent font-extrabold p-3 rounded-lg border-primary border-2">
      {GPT.lang.recording}
      <br /><progress className="progress progress-warning w-40 bg-primary"></progress>
    </span>
  )
}
