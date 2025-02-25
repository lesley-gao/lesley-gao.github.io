
import React from 'react'
import ProjectList from './ProjectList';
import ProjectCards from './ProjectCards';

function Projects() {
    return (
        <div className="p-30">
            <h4 className='text-center'>Browse My Recent</h4>
            <h1 className='text-5xl font-bold text-center mb-10'>Projects</h1>
            <ProjectList />
            <ProjectCards />
            
        </div>
    )
}

export default Projects