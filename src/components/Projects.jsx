import React from 'react';
import ProjectList from './ProjectList';
import AnimatedSection from './AnimatedSection';
import ProjectCards from './ProjectCards'

function Projects() {
    return (
        <div className="p-28 max-md:p-10" id='projects'>
            <AnimatedSection delay={0.1}>
                <h4 className='text-center'>Browse My Recent</h4>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
                <h1 className='text-5xl font-bold text-center mb-10'>Projects</h1>
            </AnimatedSection>
            <ProjectList />
            {/* <AnimatedSection delay={0.1}>
                <ProjectCards />
            </AnimatedSection> */}
        </div>
    );
}

export default Projects;