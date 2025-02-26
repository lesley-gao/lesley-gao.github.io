import React from 'react'
import ProjectList from './ProjectList';

function Projects() {
    return (
        <div className="p-28 max-md:p-10">
            <h4 className='text-center'>Browse My Recent</h4>
            <h1 className='text-5xl font-bold text-center mb-10'>Projects</h1>
            <ProjectList /> 
        </div>
    )
}

export default Projects