import NotFullScreen from "../Icons/NotFullScreen";
import FullScreen from "../Icons/FullScreen";

export default function ToggleFullScreen({ GPT }) {
    return (
        <button
            className="btn btn-circle animate-pulse border border-black hover:border-gray-300 mr-1 hover:animate-spin"
            onClick={GPT.toggleFullScreen}>
            {GPT.isFullScreen ? <NotFullScreen /> : <FullScreen />}
        </button>
    )
}
