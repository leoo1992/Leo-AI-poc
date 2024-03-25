import GitHubLink from "../Icons/GitHubLink";
import LinkedinLink from "../Icons/LinkedinLink";

export default function index() {
  return (
    <footer className="footer items-center p-2 bg-neutral text-neutral-content">
      <nav
        className="flex items-center gap-5 justify-center place-self-center sm:place-self-center md:place-self-end
       md:justify-self-end md:mr-5"
      >
        <a href="https://www.linkedin.com/in/leocustodio1992/" target="_blank" title="Linkedin">
          <LinkedinLink />
        </a>
        <a href="https://github.com/leoo1992" target="_blank" title="GitHub">
          <GitHubLink />
        </a>
      </nav>
    </footer>
  );
}
