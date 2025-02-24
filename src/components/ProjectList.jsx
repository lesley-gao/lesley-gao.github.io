import React from 'react'
import ProjectViewOne from "./ProjectViewOne";
import ProjectViewTwo from "./ProjectViewTwo";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function ProjectList() {
    return (
        <div className='flex flex-col items-center space-y-20'>
            <ProjectViewOne
                title="A responsive web application"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis velit et aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eu nibh ac pulvinar."
                links={[
                    { label: 'Github', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                techStacks={[FaReact, RiTailwindCssFill]}
                imagePath="dashboard.png" />

            <ProjectViewTwo
                title="Project Two A responsive web application"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis velit et aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eu nibh ac pulvinar."
                links={[
                    { label: 'Github', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                techStacks={[FaReact, RiTailwindCssFill, FaPython]}
                imagePath="dashboard.png" />

            <ProjectViewOne
                title="Project Three A responsive web application"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis velit et aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eu nibh ac pulvinar."
                links={[
                    { label: 'Github', url: '#' },
                    { label: 'Demo', url: '#' }
                ]}
                techStacks={[FaJava, IoLogoJavascript]}
                imagePath="dashboard.png" />
        </div>
    )
}

export default ProjectList