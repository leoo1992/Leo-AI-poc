import { useEffect } from "react";

export default function AppEffects({ GPT }) {
  useEffect(() => {
    const saved = localStorage.getItem("leo-ai-theme");
    document.documentElement.setAttribute("data-theme", saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (GPT.isFullScreen && document.fullscreenEnabled) {
      document.documentElement.requestFullscreen().catch(() => undefined);
    } else if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => undefined);
    }
  }, [GPT.isFullScreen]);

  useEffect(() => {
    const checkOrientation = () => GPT.setIsMobileLandscape(window.matchMedia("(orientation: landscape)").matches && window.innerWidth <= 768 && window.innerHeight <= 520);
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, [GPT.setIsMobileLandscape]);

  return null;
}
