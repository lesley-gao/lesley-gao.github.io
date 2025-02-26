import { BsGithub } from "react-icons/bs";
import React from 'react'
import { ImLinkedin } from "react-icons/im";

function Header() {
    return (
        <div className='flex p-20 gap-30 items-center'>
            <div className='flex flex-col space-y-8'>
                <h1 className='text-5xl font-bold '>Hi, I'm Lesley</h1>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis velit et aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eu nibh ac pulvinar. </p>
                <div className='flex space-x-3 items-center'>
                    <button className='border border-gray-500 bg-white  text-gray-600 button'><a href='https://drive.google.com/file/d/15dqGv3xrR4CmtXZ2t0FWcBZnTphTrZVV/view?usp=drive_link' target="_blank" rel="noopener noreferrer">Download CV</a></button>
                    <button className='border border-white bg-[#4f8a8b] text-white button'>Contact Info</button>
                    <a href='https://www.linkedin.com/in/lesley-gao/' target="_blank" rel="noopener noreferrer"> <ImLinkedin className=' rounded-full size-8 clickeffect shadow-sm' /></a>
                    <a href='https://github.com/lesley-gao' target="_blank" rel="noopener noreferrer"> <BsGithub className=' size-8 clickeffect  rounded-full shadow-sm' /></a>
                </div>
            </div>

            <img src='profile.jpg' alt='profile image' className='rounded-full w-1/3 border-4 border-[#8BB2B2]' />
        </div>
    )
}

export default Header