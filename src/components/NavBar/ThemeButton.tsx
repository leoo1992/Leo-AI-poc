import ThemeIcon from "../Icons/ThemeIcon";

export default function ThemeButton() {
  return (
    <button tabIndex={0} role="button" className="btn btn-circle glass">
      <ThemeIcon />
    </button>
  );
}
