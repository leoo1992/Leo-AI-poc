import ThemeIcon from "../Icons/ThemeIcon";

export default function ThemeButton() {
  return (
    <button
      tabIndex={0}
      role="button"
      className="btn btn-circle  animate-pulse border border-black hover:border-gray-300"
    >
      <ThemeIcon />
    </button>
  );
}
