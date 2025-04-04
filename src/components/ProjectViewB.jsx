import React from 'react'
import { LiaHandsHelpingSolid } from "react-icons/lia";
import AnimatedSection from './AnimatedSection';

function ProjectViewB({ title, description, contribution, links, techStacks, imagePath }) {
    return (
        <div className='flex items-center gap-15 justify-evenly max-lg:flex-col max-md:gap-10'>

            {/* left side  */}
            <AnimatedSection className=' w-1/2 space-y-8 max-lg:w-full' delay={0.2}>
                <h1 className='text-3xl font-semibold max-md:text-2xl '>{title}</h1>
                <h2 className=' flex items-center font-semibold gap-3'> <LiaHandsHelpingSolid className='size-6' title='My Contribution' /> My Contribution: <span className='text-[#60a1fa]'> {contribution}</span></h2>
                <div className='leading-7'>
                    {description.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-3">{paragraph}</p>
                    ))}
                </div>

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
                            className="text-sm button border border-gray-600 px-10"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </AnimatedSection>

            {/* right side  */}
            <img src={imagePath} alt={title} title={title} className='h-80 border border-white/60 shadow-md rounded-3xl hover:scale-103 transition-all duration-300' />
        </div>
    )
}

export default ProjectViewB