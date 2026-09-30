import { useEffect } from "react";

export default function AppEffects({ GPT }) {
  const { isFullScreen, setIsMobileLandscape } = GPT;
  useEffect(() => {
    const saved = localStorage.getItem("leo-ai-theme");
    document.documentElement.setAttribute("data-theme", saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (isFullScreen && document.fullscreenEnabled) {
      document.documentElement.requestFullscreen().catch(() => undefined);
    } else if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => undefined);
    }
  }, [isFullScreen]);

  useEffect(() => {
    const checkOrientation = () => setIsMobileLandscape(window.matchMedia("(orientation: landscape)").matches && window.innerWidth <= 768 && window.innerHeight <= 520);
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, [setIsMobileLandscape]);

  return null;
}
