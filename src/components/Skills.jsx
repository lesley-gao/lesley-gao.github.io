import { SiMui } from "react-icons/si";
import { SiSvelte } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { SiSqlite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
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
            <div className='grid grid-cols-6 gap-6 space-y-6'>
                {skills.map(skill => (
                    <div className='flex flex-col items-center' key={skill.name} title={skill.name} aria-label={skill.name}>
                        <div className="text-5xl mb-2"> {skill.icon} </div>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills