import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

function AboutMe() {
    return (
        <div className='flex flex-col items-center justify-center p-30 space-y-3 max-md:p-10' id='about'>

            <SectionTitle intro='Get To Know More' title='About Me' />

            <AnimatedSection
                className='flex gap-20 max-md:gap-10 p-15 items-center justify-center bg-gray-100/50 rounded-4xl shadow-md hover:shadow-lg max-md:flex-col'
                delay={0.3}
            >
                <img src='jumping-avatar.png' alt='avatar' className='w-1/3  max-md:w-2/3 opacity-75 hover:opacity-100' />

                <div className='flex flex-col space-y-10 justify-center'>

                    <AnimatedSection delay={0.4} direction="left">
                        <p className='leading-7'>
                            My journey into tech began in an unexpected place – while working as a translator and news editor, I found myself fascinated by the HTML code in our content management system.
                            That spark of curiosity led me to pursue a <b>Master's in Information Technology</b>  and completely reinvent my career path.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.45} direction="left">
                        <p className='leading-7'>
                            Today, I blend my communication background with technical skills to create user experiences that truly connect.
                            I love diving into <b>UI/UX design</b> with Figma; building <b>responsive interfaces</b> with React, Svelte, and JavaScript; crafting <b>backend solutions</b> with Node.js and REST APIs; as well as working with <b>databases</b> like SQL and MongoDB. My editorial eye helps me spot the details that make digital experiences feel polished and intuitive.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.5} direction="left">
                        <p className='leading-7'>
                            I'm the teammate who quietly ensures everything works smoothly, who finds joy in solving complex problems, and who believes <b>a supportive environment brings out everyone's best work</b>.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.55} direction="left">
                        <p className='leading-7'>
                            When I'm not coding, you'll find me exploring more about <b>technical writing</b> and <b>digital marketing</b>, solving puzzles, building Lego creations, capturing city moments through my camera lens, or exploring Auckland's spicy food scene after a refreshing hike.
                        </p>
                    </AnimatedSection>
                </div>
            </AnimatedSection>
        </div>
    );
}

export default AboutMe;