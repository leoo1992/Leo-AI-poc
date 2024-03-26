import ThemeIcon from "../Icons/ThemeIcon";
import DropBoxTheme from "./DropBoxTheme";

export default function ThemeButton() {
  return (
    <div className="flex items-stretch">
      <div className="dropdown dropdown-left">
        <button
          tabIndex={0}
          role="button"
          className="btn btn-circle animate-pulse border border-black hover:border-gray-300 hover:animate-none"
        >
          <ThemeIcon />
        </button>
        <DropBoxTheme />
      </div>
    </div>
  );
}
