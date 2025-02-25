import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";

function Header() {
    return (
        <div className='flex p-20 gap-30 items-center'>
            <div className='flex flex-col space-y-8'>
                <h1 className='text-5xl font-bold '>Hi, I'm Lesley</h1>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis velit et aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eu nibh ac pulvinar. </p>
                <div className='flex space-x-3 items-center'>
                    <button className='border border-gray-500 bg-white  text-gray-600 button'>Download CV</button>
                    <button className='border border-white bg-[#4f8a8b] text-white button'>Contact Info</button>
                    <a href='https://www.linkedin.com/in/lesley-gao/' target="_blank" rel="noopener noreferrer"> <ImLinkedin className=' rounded-full size-8 clickeffect' /></a>
                    <a href='https://github.com/lesley-gao' target="_blank" rel="noopener noreferrer"> <IoLogoGithub className=' size-9 clickeffect' /></a>
                </div>
            </div>

            <img src='profile.jpg' alt='profile' className='rounded-full w-1/3 border-1 border-white' />
        </div>
    )
}

export default Header