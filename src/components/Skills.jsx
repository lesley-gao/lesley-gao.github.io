import { SiMui, SiSvelte, SiPostman, SiBootstrap, SiSqlite, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaPython, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { AiFillGithub, AiOutlineHtml5 } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { BsGit } from "react-icons/bs";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

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
        <div className='flex flex-col items-center justify-center p-20 space-y-3' id='skills'>

            <AnimatedSection delay={0.1}>
                <h4 className='text-center'>Explore My</h4>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
                <h1 className='text-5xl font-bold text-center mb-10'>Skills</h1>
            </AnimatedSection>

            <div className='grid grid-cols-6 gap-6 space-y-6 max-md:grid-cols-4 max-sm:grid-cols-3'>
                {skills.map((skill, index) => (
                    <motion.div
                        className='flex flex-col items-center hover:scale-105 hover:text-[#504B38]'
                        key={skill.name}
                        title={skill.name}
                        aria-label={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.05 * index }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div
                            className="text-5xl mb-2 max-md:text-2xl"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.05 * index + 0.2,
                                type: "spring"
                            }}
                        >
                            {skill.icon}
                        </motion.div>
                        <p className="max-md:text-sm">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills