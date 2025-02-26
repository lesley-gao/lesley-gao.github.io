import React from 'react'
import ProjectViewA from "./ProjectViewA";
import ProjectViewB from "./ProjectViewB";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function ProjectList() {
    return (
        <div className='flex flex-col items-center space-y-30'>
            <ProjectViewA
                title="Vaccine Confidence Dashboard Project"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis velit et aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eu nibh ac pulvinar."
                contribution='UI Design & Frontend Development'
                links={[
                    { label: 'GitHub', url: 'https://Github.com/lesley-gao/vaccine-confidence-dashboard-project' },
                    { label: 'Demo', url: '#' }
                ]}
                techStacks={[FaReact, RiTailwindCssFill]}
                imagePath="dashboard-project.png" />

            <ProjectViewB
                title="Project Two A responsive web application"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis velit et aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eu nibh ac pulvinar."
                contribution='UI Design & Frontend Development'
                links={[
                    { label: 'GitHub', url: 'https://Github.com/lesley-gao/event-based-real-time-social-app' },
                    { label: 'Demo', url: 'https://drive.google.com/file/d/1gPh_QOOdHQUUjvk9EHO31aNr-AAB7clZ/view' }
                ]}
                techStacks={[FaReact, RiTailwindCssFill, FaPython]}
                imagePath="activity-project.png" />

            <ProjectViewA
                title="Project Three A responsive web application"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis velit et aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eu nibh ac pulvinar."
                contribution='UI Design & Full-stack Development'
                links={[
                    { label: 'GitHub', url: 'https://Github.com/lesley-gao/travel-themed-blogging-website' },
                    { label: 'Demo', url: 'https://drive.google.com/file/d/1YB70KMBh1vlhGcaGgWhrpDxcYgTXJ2bd/view' }
                ]}
                techStacks={[FaJava, IoLogoJavascript]}
                imagePath="blog-project.png" />

            <ProjectViewB
                title="Project Two A responsive web application"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis velit et aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eu nibh ac pulvinar."
                contribution='UI Design & Frontend Development'
                links={[
                    { label: 'Preview', url: 'https://www.figma.com/design/CiAxtZq7lLrvHdn7AUKnep/Pet-Story?node-id=1-2&p=f&t=t7daKY9CZV2nND7n-0' },
                    { label: 'Demo', url: 'https://drive.google.com/file/d/1gPh_QOOdHQUUjvk9EHO31aNr-AAB7clZ/view' }
                ]}
                techStacks={[FaReact, RiTailwindCssFill, FaPython]}
                imagePath="petstory.gif" />
        </div>
    )
}

export default ProjectList