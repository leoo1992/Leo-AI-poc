import ThemeIcon from "../Icons/ThemeIcon";
import DropBoxTheme from "./DropBoxTheme";

export default function ThemeButton({ GPT }) {
  return (
    <div className="tooltip tooltip-primary tooltip-bottom" data-tip={GPT.lang.themeTooltip}>
      <div className="flex justify-center align-middle content-center items-center self-center">
        <div className="dropdown dropdown-left flex justify-center align-middle content-center items-center self-center">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-circle animate-pulse border border-black hover:border-gray-300 
          hover:animate-none flex justify-center align-middle content-center items-center self-center"
          >
            <ThemeIcon />
          </button>
          <DropBoxTheme GPT={GPT} />
        </div>
      </div>
    </div>
  );
}



