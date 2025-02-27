import React from 'react'
import { LiaHandsHelpingSolid } from "react-icons/lia";
import AnimatedSection from './AnimatedSection';

function ProjectViewA({ title, description, contribution, links, techStacks, imagePath }) {
  return (
    <div className='flex items-center justify-evenly gap-15 max-lg:flex-col max-md:gap-0'>

      {/* left side  */}
      <img src={imagePath} alt={title} title={title} className=' h-80 object-contain hover:scale-103 transition-all duration-300' />

      {/* right side  */}
      <AnimatedSection className=' w-1/2 space-y-5 max-lg:w-full' delay={0.2}>

        <h1 className='text-2xl font-semibold text-[#F8F3D9]'>{title}</h1>
        <h2 className='flex items-center font-semibold text-[#504B38] gap-3'> <LiaHandsHelpingSolid className='size-6' title='My Contribution' /> {contribution}</h2>
        <p className='text-justify'>{description}</p>

        {/* teck stack section */}
        <div className='flex gap-3 '>
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
      </AnimatedSection>
    </div>
  )
}

export default ProjectViewA