export default function InputQuestion({ GPT, inputRef }) {
    return (
        <input
            ref={inputRef}
            type="text"
            className="grow text-center sm:text-left placeholder-center sm:placeholder-left"
            placeholder="Pergunte algo..."
            onKeyDown={(e) => GPT.handleSubmit(e)}
            value={GPT.question}
            onChange={(e) => GPT.setQuestion(e.target.value)}
        />
    )
}
