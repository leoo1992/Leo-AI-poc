import NavTitle from "./NavTitle";
import ToggleFullScreen from "./ToggleFullScreen";
import ThemeButton from "./ThemeButton";
import ToggleLang from "./ToggleLang";

export default function index({ GPT }) {
  return (
    <div className="flex justify-center align-middle items-center self-center w-11/12">
      <div className="navbar rounded-box glass bg-opacity-50 shadow-lg hover:shadow-xl p-1 m-0">
        <NavTitle />
        <div className="flex justify-end flex-1 p-0 m-0">
          <ToggleFullScreen GPT={GPT} />
          <ToggleLang GPT={GPT} />
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
