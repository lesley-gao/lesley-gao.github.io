import React from 'react'
import SingleCardA from "./SingleCardA";
import ProjectCardTwo from "./SingleCardB";

function ProjectCards() {
    return (
        <div className="grid grid-cols-3 gap-6 mt-20">

            <SingleCardA
                title="Project One"
                description="A responsive web application"
                links={[
                    { label: 'Github', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                imagePath="dashboard.png"
            />

            <ProjectCardTwo
                title="Project Two"
                description="An interactive dashboard"
                links={[
                    { label: 'Github', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                imagePath="dashboard.png"
            />

            <SingleCardA
                title="Project Three"
                description="An interactive dashboard"
                links={[
                    { label: 'Github', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                imagePath="dashboard.png"
            />
        </div>
    )
}

export default ProjectCards