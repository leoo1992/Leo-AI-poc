import { useState } from "react";

export default function useSCREEN() {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen((prev) => !prev);
    };

    return {
        isFullScreen,
        toggleFullScreen,
        setIsFullScreen,
    };
}