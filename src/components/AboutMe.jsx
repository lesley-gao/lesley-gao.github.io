import React from 'react'

function AboutMe() {

    return (
        <div className='flex flex-col items-center justify-center p-30 space-y-3'>

            <h4 className='text-center'>Get To Know More</h4>
            <h1 className='text-5xl font-bold text-center mb-10'>About Me</h1>

            <div className='flex gap-20 p-15 items-center justify-center border border-white/70 rounded-4xl shadow-md hover:shadow-lg' >
                <img src='avatar-transparent.png' alt='avatar' className='w-1/3 animate-wiggle' />
                <div className='flex flex-col space-y-10 justify-center'>
                    <p className='s'><span className='text-2xl font-bold'>Frontend Developer</span><br />
                        I'm a front-end developer with experience in building responsive and optimized sites</p>

                    <p className=''><span className='text-2xl font-bold'>Backend Developer</span><br />
                        I have experience developing fast and optimised back-end systems and APIs</p>

                    <p><span className='text-2xl font-bold'>UI Designer</span><br />
                        I have designed multipl e landing pages and have created design systems as well</p>
                </div >
            </div>
        </div>
    )
}

export default AboutMe