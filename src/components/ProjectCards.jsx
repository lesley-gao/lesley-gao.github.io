import React from 'react'
import SingleCard from "./SingleCard";
import ProjectCardTwo from "./ProjectCardTwo";

function ProjectCards() {
    return (
        <div className="grid grid-cols-3 gap-6 mt-20">

            <SingleCard
                title="Project One"
                description="A responsive web application"
                links={[
                    { label: 'Github', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                imagePath="avatar.png"
            />

            <ProjectCardTwo
                title="Project Two"
                description="An interactive dashboard"
                links={[
                    { label: 'Github', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                imagePath="avatar.png"
            />

            <SingleCard
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

export default ProjectCards