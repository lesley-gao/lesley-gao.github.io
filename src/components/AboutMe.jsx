import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

function AboutMe() {
    return (
        <div className='flex flex-col items-center justify-center p-30 space-y-3 max-md:p-10' id='about'>
            <AnimatedSection delay={0.1}>
                <h4 className='text-center'>Get To Know More</h4>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
                <h1 className='text-5xl font-bold text-center mb-10'>About Me</h1>
            </AnimatedSection>

            <AnimatedSection
                className='flex gap-20 max-md:gap-10 p-15 items-center justify-center border border-white/70 rounded-4xl shadow-md hover:shadow-lg max-md:flex-col'
                delay={0.3}
            >
                <motion.img
                    src='avatar-transparent.png'
                    alt='avatar'
                    className='w-1/3 animate-wiggle max-md:w-2/3'
                    initial={{ scale: 0.9, opacity: 0.8 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <div className='flex flex-col space-y-10 justify-center'>
                    <AnimatedSection delay={0.4} direction="left">
                        <p>
                            <span className='text-2xl font-bold '>UI Design</span><br />
                            I have taken charge of UI design for multiple team projects and have created design systems as well.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.5} direction="left">
                        <p>
                            <span className='text-2xl font-bold'>Frontend Development</span><br />
                            I am passionate about front-end development and have experience building responsive, optimized websites.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.6} direction="left">
                        <p>
                            <span className='text-2xl font-bold'>Backend Development</span><br />
                            I have experience setting up databases and implementing CRUD operations using RESTful APIs.
                        </p>
                    </AnimatedSection>
                </div>
            </AnimatedSection>
        </div>
    );
}

export default AboutMe;