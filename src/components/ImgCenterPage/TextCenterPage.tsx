import type { GPTProps } from "../../types/gpt";
export default function TextCenterPage({ GPT }: GPTProps) {
  return (
    <h1 className="text-center text-xl font-extrabold pt-5 animate-pulse">
      {GPT.lang.help}
    </h1>
  )
}
