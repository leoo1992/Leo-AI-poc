const themes = [
  { value: "light", label: "light" },
  { value: "dark", label: "dark" },
  { value: "aqua", label: "aqua" },
  { value: "synthwave", label: "purple" },
];

export default function DropBoxTheme({ GPT }) {
  const selectTheme = (value: string) => {
    document.documentElement.setAttribute("data-theme", value);
    localStorage.setItem("leo-ai-theme", value);
  };

  return (
    <ul tabIndex={0} className="dropdown-content z-[50] p-2 m-0 mr-2 shadow-xl bg-base-200 rounded-box w-36 border border-base-300">
      {themes.map((theme) => (
        <li key={theme.value}>
          <button type="button" className="btn btn-sm btn-ghost btn-block justify-start" onClick={() => selectTheme(theme.value)}>
            {GPT.lang[theme.label]}
          </button>
        </li>
      ))}
    </ul>
  );
}
