import React from 'react'

function ProjectViewB({ title, description, contribution, links, techStacks, imagePath }) {
    return (
        <div className='flex items-center gap-15 justify-evenly max-md:flex-col max-md:gap-10'>

            {/* left side  */}
            <div className=' w-1/2 space-y-3 max-md:w-full'>
                <h1 className='text-2xl font-semibold text-[#F8F3D9]'>{title}</h1>
                <h2 className='font-semibold text-[#504B38]'>{contribution}</h2>
                <p>{description}</p>

                {/* teck stack section */}
                <div className='flex gap-3'>
                    {techStacks.map((Icon, index) => (
                        <Icon key={index} className="text-2xl" />
                    ))}
                </div>

                {/* Github & Demo links section */}
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

            {/* right side  */}
            <img src={imagePath} alt={title} title={title} className='h-80 border border-white/60 shadow-md rounded-3xl' />
        </div>
    )
}

export default ProjectViewB