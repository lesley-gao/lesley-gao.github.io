import { SiGooglemaps } from "react-icons/si";
import { SiPlotly } from "react-icons/si";
import React from 'react'
import ProjectViewA from "./ProjectViewA";
import ProjectViewB from "./ProjectViewB";
import AnimatedSection from './AnimatedSection';
import { SiMui, SiSvelte, SiPostman, SiSqlite, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaPython, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { AiFillGithub, AiOutlineHtml5 } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { BsGit } from "react-icons/bs";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";

function ProjectList() {
    return (
        <div className='flex flex-col items-center space-y-30 max-md:space-y-20'>

            <AnimatedSection delay={0.2}>
                <ProjectViewA
                    title="A Vaccine Confidence Dashboard Project"
                    description="This team project, VaccineView, visualizes vaccine-related data and public sentiment from social media regarding vaccine safety.I led the UI design and frontend development, creating an intuitive interface with interactive charts that make complex data accessible. I focused on clean visualizations and user friendly UI and functionalities. As project coordinator, I facilitated team communication and ensured timely delivery of milestones. Our team won the Top Group Award among 17 teams for our project result and overall perform."
                    contribution='UI Design & Frontend Development'
                    links={[
                        { label: 'GitHub', url: 'https://Github.com/lesley-gao/vaccine-confidence-dashboard-project' },
                        { label: 'Demo', url: 'https://drive.google.com/file/d/1AZYAXiMg99GJSVliujlR63u4uSDmDkBP/view?usp=drive_link' }
                    ]}
                    techStacks={[CgFigma, FaReact, SiTailwindcss, AiOutlineHtml5, IoLogoJavascript, SiPlotly, BsGit, AiFillGithub, SiGooglemaps]}
                    imagePath="dashboard-project.png" />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <ProjectViewB
                    title="An Event-based Real-time Social Web App"
                    description="Hippos! is a mobile-optimized web app connecting users with nearby spontaneous activities. It features location filtering, real-time notifications, and integrated messaging. I handled UI design and frontend development, creating a responsive interface with lively style and seamless user experience. Our project received an A grade, with evaluators praising the appealing design and responsive UI."
                    contribution='UI Design & Frontend Development'
                    links={[
                        { label: 'GitHub', url: 'https://Github.com/lesley-gao/event-based-real-time-social-app' },
                        { label: 'Demo', url: 'https://drive.google.com/file/d/1gPh_QOOdHQUUjvk9EHO31aNr-AAB7clZ/view' }
                    ]}
                    techStacks={[CgFigma, FaReact, SiTailwindcss, AiOutlineHtml5, IoLogoJavascript, SiMongodb, BsGit, AiFillGithub,]}
                    imagePath="activity-project.png" />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <ProjectViewA
                    title="A Travel-themed Blogging Website"
                    description="Blog Your Journey is a blogging website where travel enthusiast can browse and share travel stories with the world. As the UI designer, I created a visually rich environment showcasing travel photography while maintaining intuitive navigation.  I also contributed to backend and frontend development. Our project achieved an A+ grade, with specific praise for the exceptional CSS styling."
                    contribution='UI Design & Full-stack Development'
                    links={[
                        { label: 'GitHub', url: 'https://Github.com/lesley-gao/travel-themed-blogging-website' },
                        { label: 'Demo', url: 'https://drive.google.com/file/d/1YB70KMBh1vlhGcaGgWhrpDxcYgTXJ2bd/view' }
                    ]}
                    techStacks={[SiSvelte, AiOutlineHtml5, IoLogoCss3, IoLogoJavascript, SiSqlite, SiExpress, FaNodeJs, SiPostman, BsGit, AiFillGithub,]}
                    imagePath="blog-project.png" />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <ProjectViewB
                    title="A Centralized Pet Care Management Platform"
                    description="Pet Story (proposed platform) integrates iris recognition, AI health assessment, and unified communication platform to simplify pet care management, such as recording medical history, finding lost pets, seeking help in pet owner community. My UI design features playful icons and an intuitive layout, making pet care management engaging."
                    contribution='UI Design '
                    links={[
                        { label: 'Preview', url: 'https://www.figma.com/design/CiAxtZq7lLrvHdn7AUKnep/Pet-Story?node-id=1-2&p=f&t=t7daKY9CZV2nND7n-0' },
                        { label: 'Demo', url: 'https://drive.google.com/file/d/1lQ3jRUHjD0yl1N9Ij1Jnk13TOYHVCw_k/view?usp=drive_link' }
                    ]}
                    techStacks={[CgFigma]}
                    imagePath="petstory.gif" />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <ProjectViewA
                    title="A portfolio website showing personal projects"
                    description="This portfolio website showcases my projects and highlights my passion for design and development. Built with React, Tailwind CSS and Framer Motion, it features responsive design and thoughtful animations."
                    contribution='UI Design & Frontend Development'
                    links={[
                        { label: 'GitHub', url: 'https://github.com/lesley-gao/my-personal-portfolio' },
                        { label: 'Website', url: 'https://lesley-gao.github.io' }
                    ]}
                    techStacks={[CgFigma, FaReact, SiTailwindcss, AiOutlineHtml5, IoLogoJavascript, BsGit, AiFillGithub]}
                    imagePath="portfolio-project.png" /> </AnimatedSection>
        </div>
    )
}

export default ProjectList