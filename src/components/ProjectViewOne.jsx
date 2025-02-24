import React from 'react'

function ProjectViewOne({ title, description, links, techStacks, imagePath }) {
  return (
    <div className='flex  items-center justify-start gap-20'>
      <img src={imagePath} alt={title} className=' h-96' />
      <div className=' w-1/3 space-y-3'>
        <h1 className='text-2xl font-semibold text-[#F8F3D9]'>{title}</h1>
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
              className="text-sm button border border-white  text-white "
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ProjectViewOne