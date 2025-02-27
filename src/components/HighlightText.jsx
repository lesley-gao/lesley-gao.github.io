import React from 'react';
import { motion } from 'framer-motion';

const HighlightText = ({ children, color = "#FF9D23" }) => {
    return (
        <span className="relative inline-block">
            <span className="relative z-10">{children}</span>
            <motion.span
                className="absolute -z-10 left-0 right-0 -bottom-1"
                style={{
                    height: '30%',
                    backgroundColor: color,
                    borderRadius: '4px 8px 6px 10px',
                    opacity: 0.6,
                }}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                }}
            />
        </span>
    );
};

export default HighlightText;