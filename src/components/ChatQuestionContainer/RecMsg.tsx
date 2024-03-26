export default function RecMsg() {
  return (
    <span className="bg-neutral text-center text-accent font-extrabold p-3 rounded-lg border-primary border-2">
      Gravando...
      <br /><progress className="progress progress-warning w-40 bg-primary"></progress>
    </span>
  )
}
