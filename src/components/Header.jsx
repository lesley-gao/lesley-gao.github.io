import React from 'react';
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { Link } from 'react-scroll';
import HighlightText from './HighlightText'
function Header() {
    return (
        <div className='flex p-24 gap-32 items-center max-md:flex-col max-md:p-10 max-md:gap-16' delay={0.1}>

            <div className=' z-50 flex flex-col space-y-8'>
                <h1 className='text-5xl font-bold '>Hi, I'm Lesley</h1>
                <p className=' mb-4 text-justify leading-7  '>
                    After a successful seven-year career in media - including my role as Editor-in-Chief of The Chinese Herald - I recently completed my <span className=' text-[#315354]'>Master of Information Technology</span>. 
                    Driven by a desire to challenge myself, I am making a career switch and looking for a  <HighlightText>UI designer or front-end web developer</HighlightText> role.
                </p>
                <p className=' text-justify leading-7 '>
                    My background has sharpened my <span className=' text-[#315354]'>attention to detail, adaptability, and I love collaborating with people</span>. I aim to leverage my professional experience and technical skills to make a significant impact on any future team.
                </p>
                <div className='flex space-x-3 items-center'>
                    <button className='border border-[#504B38] bg-white text-[#504B38] button'><a href='https://drive.google.com/file/d/15dqGv3xrR4CmtXZ2t0FWcBZnTphTrZVV/view?usp=drive_link' target="_blank" rel="noopener noreferrer">Download CV</a></button>
                    <Link to='contact' smooth={true} duration={500}>
                        <button className='border border-white bg-[#4f8a8b] text-white button'>Contact Info</button>
                    </Link>
                    <a href='https://www.linkedin.com/in/lesley-gao/' target="_blank" rel="noopener noreferrer"> <ImLinkedin className='rounded-full size-8 clickeffect shadow-sm' /></a>
                    <a href='https://github.com/lesley-gao' target="_blank" rel="noopener noreferrer"> <BsGithub className=' size-8 clickeffect rounded-full shadow-sm' /></a>
                </div>
            </div>

            <img src='profile.jpg' alt='profile image' className='z-50 rounded-full w-1/3 border-4 border-white/60 shadow-lg hover:shadow-xl max-md:w-2/3' />
        </div>
    );
}

export default Header