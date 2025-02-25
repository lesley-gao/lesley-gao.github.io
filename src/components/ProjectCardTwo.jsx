import React from 'react'

function ProjectCardTwo({ title, description, links, imagePath }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-101 transition-all duration-200">
            <div className=" bg-gray-200">
                <img src={imagePath} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="p-4">
                <h3 className="font-bold mb-2 text-gray-600 ">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex gap-2 text-gray-600 ">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            className="px-4 py-2 bg-slate-100 rounded-full text-sm clickeffect"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCardTwo