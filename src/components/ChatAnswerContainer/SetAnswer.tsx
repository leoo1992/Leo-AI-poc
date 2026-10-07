import type { GPTProps } from "../../types/gpt";
export default function SetAnswer({ GPT }: GPTProps) {
    return (
        <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl break-words">
            {GPT.answer}
        </div>
    )
}
