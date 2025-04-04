import React from 'react';
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { Link } from 'react-scroll';
import HighlightText from './HighlightText'

function Header() {

    const cvLink = 'https://drive.google.com/file/d/1sKGUQNVNCNy2JcOOp6rhYK2kytB6WKAg/view?usp=drive_link';

    return (
        <div className='flex items-center justify-center gap-20 p-40 max-md:flex-col max-md:p-10 max-md:gap-16'>

            <div className='  flex flex-col space-y-10'>
                <h1 className='text-6xl font-bold font-oregano'>Hi, I'm Lesley</h1>

                <h2 className='text-4xl leading-12'>A <b>Web Developer</b><br />
                    with great passion in <b>UI/UX Design</b></h2>

                <div className='flex space-x-3 items-center'>
                    <button className='border border-[#504B38] bg-white button max-sm:text-sm'><a href={cvLink} target="_blank" rel="noopener noreferrer">Download CV</a></button>
                    <Link to='contact' smooth={true} duration={500}>
                        <button className='border border-[#dcdcdc] bg-[#cdc7f8] button max-sm:text-sm'>Contact Info</button>
                    </Link>
                    <a href='https://www.linkedin.com/in/lesley-gao/' target="_blank" rel="noopener noreferrer"> <ImLinkedin className='rounded-full size-8 clickeffect shadow-sm' /></a>
                    <a href='https://github.com/lesley-gao' target="_blank" rel="noopener noreferrer"> <BsGithub className=' size-8 clickeffect rounded-full shadow-sm' /></a>
                </div>
            </div>

            <img src='watercolor-profile.png' alt='profile image' className='w-2/5 max-md:w-2/3' />

        </div>
    );
}

export default Header