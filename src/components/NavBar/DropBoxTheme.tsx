export default function DropBoxTheme() {
  return (
    <ul
      tabIndex={0}
      className="dropdown-content z-[1] p-2 m-0 mr-2 shadow-lg hover:shadow-xl bg-base-300 rounded-box w-26 border-2 border-accent"
    >
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          className="theme-controller btn btn-sm btn-block btn-ghost justify-center p-1"
          aria-label="Light"
          value="default"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          className="theme-controller btn btn-sm btn-block btn-ghost justify-center p-1"
          aria-label="Dark"
          value="dark"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          className="theme-controller btn btn-sm btn-block btn-ghost justify-center p-1"
          aria-label="Aqua"
          value="aqua"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          className="theme-controller btn btn-sm btn-block btn-ghost justify-center p-1"
          aria-label="Purple"
          value="synthwave"
        />
      </li>
    </ul>
  );
}
