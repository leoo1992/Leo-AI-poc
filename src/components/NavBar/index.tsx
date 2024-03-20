import NavTitle from "./NavTitle";
import ThemeButton from "./ThemeButton";
import DropBoxTheme from "./DropBoxTheme";

export default function index() {
  return (
    <div className="navbar rounded-box glass shadow-lg hover:shadow-xl">
      <NavTitle />
      <div className="flex justify-end flex-1 p-0 m-0">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-left">
            <ThemeButton />
            <DropBoxTheme />
          </div>
        </div>
      </div>
    </div>
  );
}
