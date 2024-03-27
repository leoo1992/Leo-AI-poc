export default function MakeAnswerTxt({ GPT }) {
    return (
        <div className="text-center">
            <span className="loading loading-ring loading-md text-secondary"></span>
            <p className="text-center text-sm">{GPT.lang.makeAnswer}</p>
        </div>
    )
}
