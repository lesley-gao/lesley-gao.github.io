import React from 'react';
import ProjectList from './ProjectList';
import AnimatedSection from './AnimatedSection';
import ProjectCards from './ProjectCards'
import SectionTitle from './SectionTitle';

function Projects() {
    return (
        <div className="p-28 max-md:p-10" id='projects'>

            <SectionTitle intro='Browse My Recent' title='Projects' />

            <ProjectList />

            {/* <AnimatedSection delay={0.1}>
                <ProjectCards />
            </AnimatedSection> */}

        </div>
    );
}

export default Projects;