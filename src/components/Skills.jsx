import { SiMui, SiSvelte, SiPostman, SiBootstrap, SiSqlite, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaPython, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { AiFillGithub, AiOutlineHtml5 } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { BsGit } from "react-icons/bs";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import React from 'react'

function Skills() {

    const skills = [
        { name: 'Figma', icon: <CgFigma /> },
        { name: 'HTML3', icon: <AiOutlineHtml5 /> },
        { name: 'CSS', icon: <IoLogoCss3 /> },
        { name: 'JavaScript', icon: <IoLogoJavascript /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Svelte', icon: <SiSvelte /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'Material UI', icon: <SiMui /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'SQLite', icon: <SiSqlite /> },
        { name: 'Git', icon: <BsGit /> },
        { name: 'GitHub', icon: <AiFillGithub /> },
        { name: 'Postman', icon: <SiPostman /> },
    ];

    return (
        <div className='flex flex-col items-center justify-center p-20 space-y-3'>
            <h4 className='text-center'>Explore My</h4>
            <h1 className='text-5xl font-bold text-center mb-10'>Skills</h1>
            <div className='grid grid-cols-6 gap-6 space-y-6 max-md:grid-cols-4'>
                {skills.map(skill => (
                    <div className='flex flex-col items-center hover:scale-105 hover:text-[#504B38]' key={skill.name} title={skill.name} aria-label={skill.name}>
                        <div className="text-5xl mb-2 "> {skill.icon} </div>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills