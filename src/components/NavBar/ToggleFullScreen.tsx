import NotFullScreen from "../Icons/NotFullScreen";
import FullScreen from "../Icons/FullScreen";

export default function ToggleFullScreen({ GPT }) {
    return (
        <div className="tooltip tooltip-primary tooltip-bottom" data-tip={GPT.isFullScreen ? GPT.lang.screenTooltip : GPT.lang.fullScreenTooltip}>
            <div className="flex justify-center align-middle content-center items-center self-center">
                <button
                    className="btn btn-circle animate-pulse border border-black hover:border-gray-300 mr-1 hover:animate-spin"
                    onClick={GPT.toggleFullScreen}>
                    {GPT.isFullScreen ? <NotFullScreen /> : <FullScreen />}
                </button>
            </div>
        </div>
    )
}
