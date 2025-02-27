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
                className="scrollbtn"
                aria-label="Scroll down"
            >
                <BsFillArrowDownCircleFill size={24} />
            </button>
        ) : null)
}

export default ScrollDown