import { BsGithub } from "react-icons/bs";
import React from 'react';
import { ImLinkedin } from "react-icons/im";
import AnimatedSection from './AnimatedSection';

function Header() {
    return (
        <div className='flex p-20 gap-32 items-center max-md:flex-col max-md:p-10 max-md:gap-16' delay={0.1}>

            <div className=' z-50 flex flex-col space-y-8'>
                <h1 className='text-5xl font-bold '>Hi, I'm Lesley</h1>
                <p>
                    After a successful seven-year career in media - including my role as Editor-in-Chief of The Chinese Herald - I recently completed my Master of Information Technology. Driven by a desire to challenge myself, I am making a career switch and looking for a UI designer or full-stack web developer role. I aim to leverage my professional experience and technical skills to make a significant impact on any development team.
                </p>

                <div className='flex space-x-3 items-center'>
                    <button className='border border-gray-500 bg-white  text-gray-600 button'><a href='https://drive.google.com/file/d/15dqGv3xrR4CmtXZ2t0FWcBZnTphTrZVV/view?usp=drive_link' target="_blank" rel="noopener noreferrer">Download CV</a></button>
                    <button className='border border-white bg-[#4f8a8b] text-white button'>Contact Info</button>
                    <a href='https://www.linkedin.com/in/lesley-gao/' target="_blank" rel="noopener noreferrer"> <ImLinkedin className='rounded-full size-8 clickeffect shadow-sm' /></a>
                    <a href='https://github.com/lesley-gao' target="_blank" rel="noopener noreferrer"> <BsGithub className=' size-8 clickeffect rounded-full shadow-sm' /></a>
                </div>
            </div>

            <img src='profile.jpg' alt='profile image' className='z-50 rounded-full w-1/3 border-4 border-white/60 shadow-md max-md:w-2/3' />
        </div>
    );
}

export default Header