import NavTitle from "./NavTitle";
import ThemeButton from "./ThemeButton";
import ToggleFullScreen from "./ToggleFullScreen";

export default function index({ GPT }) {

  return (
    <div className="flex justify-center align-middle items-center self-center w-11/12">
      <div className="navbar rounded-box glass bg-opacity-50 shadow-lg hover:shadow-xl p-1 m-0">
        <NavTitle />
        <div className="flex justify-end flex-1 p-0 m-0">
          <ToggleFullScreen GPT={GPT} />
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
