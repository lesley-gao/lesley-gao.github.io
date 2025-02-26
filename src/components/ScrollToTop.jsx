import { BsFillArrowUpCircleFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";

function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return showButton ? (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 p-3 rounded-full shadow-lg transition-all duration-300 animate-pulse"
            aria-label="Scroll to top"
        >
            <BsFillArrowUpCircleFill size={24} />
        </button>
    ) : null;
}

export default ScrollToTop;