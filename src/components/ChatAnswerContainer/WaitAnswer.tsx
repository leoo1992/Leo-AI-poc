export default function WaitAnswer({GPT}) {
  return (
    <div className="text-center">
      <span className="loading loading-dots loading-md mt-3 text-secondary"></span>
      <p className="text-center text-sm">{GPT.lang.waitQuestion}</p>
    </div>
  )
}
