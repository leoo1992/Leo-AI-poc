import FullScreen from "../Icons/FullScreen";
import NotFullScreen from "../Icons/NotFullScreen";

export default function ToggleFullScreen({ GPT }) {
    return (
        <button
            className="btn btn-circle animate-pulse border border-black hover:border-gray-300 mr-1"
            onClick={GPT.toggleFullScreen}>
            {GPT.isFullScreen ? <NotFullScreen /> : <FullScreen />}
        </button>
    )
}
