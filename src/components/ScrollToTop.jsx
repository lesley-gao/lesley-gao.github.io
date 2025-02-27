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
            className="scrollbtn"
            aria-label="Scroll to top"
        >
            <BsFillArrowUpCircleFill size={24} />
        </button>
    ) : null;
}

export default ScrollToTop;