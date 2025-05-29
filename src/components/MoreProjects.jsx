import React from 'react'
import { Link } from 'react-router-dom'

function MoreProjects({ projects }) {

    return (
        <div className='my-20'>
            <h1 className='text-3xl font-bold mb-10'>More Projects</h1>
            <div className='grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1'>
                {projects.map((project, index) => (
                    <Link to={project.link} key={index} className='flex flex-col space-y-2'>
                        <img src={project.image} alt={project.title} className='w-full h-60 min-2xl:h-80 object-cover' />
                        <h2 className='text-xl font-bold'>{project.title}</h2>
                        <p className='text-gray-500  '>{project.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MoreProjects