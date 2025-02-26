import { BsFillArrowDownCircleFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";

function ScrollDown() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 1000) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        showButton ? (
            <button
                onClick={scrollToBottom}
                className="fixed bottom-6 right-6 md:bottom-10 md:right-10 p-3 rounded-full shadow-lg transition-all duration-300 animate-pulse"
                aria-label="Scroll down"
            >
                <BsFillArrowDownCircleFill size={24} />
            </button>
        ) : null)
}

export default ScrollDown