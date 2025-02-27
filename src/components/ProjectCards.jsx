import React from 'react'
import SingleCardA from "./SingleCardA";
import SingleCardB from "./SingleCardB";
import AnimatedSection from './AnimatedSection';

function ProjectCards() {
    return (
        <AnimatedSection className="grid grid-cols-3 gap-6 mt-30 max-md:grid-cols-1" delay={0.1}>

            <SingleCardA
                title="Project One"
                description="A responsive web application"
                links={[
                    { label: 'GitHub', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                imagePath="dashboard.png"
            />

            <SingleCardB
                title="Project Two"
                description="An interactive dashboard"
                links={[
                    { label: 'GitHub', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                imagePath="dashboard.png"
            />

            <SingleCardA
                title="Project Three"
                description="An interactive dashboard"
                links={[
                    { label: 'GitHub', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                imagePath="dashboard.png"
            />
        </AnimatedSection>
    )
}

export default ProjectCards