import React from 'react'

function ProjectViewB({ title, description, contribution, links, techStacks, imagePath }) {
    return (
        <div className='flex items-center gap-30 justify-evenly'>
            <div className=' w-1/3 space-y-3'>
                <h1 className='text-2xl font-semibold text-[#F8F3D9]'>{title}</h1>
                <h2 className='font-semibold text-[#504B38]'>{contribution}</h2>
                <p>{description}</p>

                {/* teck stack section */}
                <div className='flex gap-3'>
                    {techStacks.map((Icon, index) => (
                        <Icon key={index} className="text-2xl" />
                    ))}
                </div>

                {/* Github & Demo section */}
                <div className='flex gap-3'>
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm button border border-white px-10 "
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            <img src={imagePath} alt={title} className='h-96 border border-white/60 shadow-md rounded-4xl' />
        </div>
    )
}

export default ProjectViewB