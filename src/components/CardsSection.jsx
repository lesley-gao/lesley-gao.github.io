import React from 'react'
import ProjectCard from "./ProjectCard";

function CardsSection() {
    return (
        <div className="grid grid-cols-3 gap-6 mt-20">

            <ProjectCard
                title="Project One"
                description="A responsive web application"
                links={[
                    { label: 'Github', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                imagePath="avatar.png"
            />

            <ProjectCard
                title="Project Two"
                description="An interactive dashboard"
                links={[
                    { label: 'Github', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                imagePath="avatar.png"
            />

            <ProjectCard
                title="Project Three"
                description="An interactive dashboard"
                links={[
                    { label: 'Github', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                imagePath="avatar.png"
            />
        </div>
    )
}

export default CardsSection