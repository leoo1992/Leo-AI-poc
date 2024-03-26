import MicrophoneOff from "../Icons/MicrophoneOff";
import MicrophoneOn from "../Icons/MicrophoneOn";

export default function RecBtn({GPT}) {
    return (
        <button
            id="microphone-button"
            className={`pressable btn btn-square btn-sm shadow-lg 
            hover:shadow-xl btn-primary text-secondary
            glass rounded-xl swap ${GPT.isPressed ?? "animate-pulse"}`}
            onClick={() => {
                if (!GPT.isRecording) {
                    GPT.startRecording();
                } else {
                    GPT.stopRecording();
                }
                GPT.setIsPressed(!GPT.isPressed);
            }}
        >
            {GPT.isPressed ? <MicrophoneOn /> : <MicrophoneOff />}
        </button>
    )
}
