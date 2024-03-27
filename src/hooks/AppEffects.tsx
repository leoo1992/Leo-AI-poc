import { useEffect } from "react";

export default function AppEffects({ GPT }) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "F12") {
        event.preventDefault();
      }
    }
  
    function handleContextMenu(event: MouseEvent) {
      event.preventDefault();
    }
  
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("contextmenu", handleContextMenu);
  
    console.warn = () => {};
    console.info = () => {};
    console.error = () => {};
    console.log = () => {};
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!(event.target instanceof Node)) {
        GPT.setIsPressed(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [GPT]);

  useEffect(() => {
    if (GPT.isFullScreen && document.fullscreenEnabled) {
      document.documentElement.requestFullscreen().catch(() => {
        alert("Erro ao entrar em tela cheia");
      });
    } else if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {
        alert("Erro ao sair da tela cheia");
      });
    }
  }, [GPT.isFullScreen]);

  useEffect(() => {
    const checkOrientation = () => {
      GPT.setIsMobileLandscape(
        typeof window !== "undefined" &&
        window.matchMedia("(orientation: landscape)").matches &&
        window.innerWidth <= 768 && window.innerHeight <= 520
      );
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, [GPT]);

  return null; 
}

