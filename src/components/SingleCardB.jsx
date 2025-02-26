import React, { useState } from 'react';

function SingleCardB({ title, description, links, imagePath }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-white/50 border border-white/70 rounded-lg shadow-lg overflow-hidden hover:scale-101 transition-all duration-200 relative
        "  onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            <img src={imagePath} alt={title} className="w-full h-full object-contain" />

            {/* Pseudo element overlay*/}
            <div
                className={`absolute bottom-0 right-0 bg-gradient-to-br from-white/60 to-[#8BB2B2] flex flex-col  justify-end transition-all duration-500 
                    ${isHovered
                        ? 'w-full h-full opacity-100'
                        : 'w-0 h-0 opacity-0 overflow-hidden'
                    }`}
                style={{
                    transformOrigin: 'top right',
                }}
            >
                <div className='p-5 space-y-3'>
                    <h3 className="text-2xl font-semibold text-[#F8F3D9]">{title}</h3>
                    <p className=" font-semibold text-[#504B38] mb-4 ">{description}</p>
                    <div className="flex gap-3">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                className="text-sm button border border-white px-10 "
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCardB;