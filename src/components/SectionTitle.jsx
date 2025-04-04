import React from 'react';
import AnimatedSection from './AnimatedSection';

function SectionTitle({intro, title}) {

    return (
        <div className='relative flex justify-center w-full mb-10'>
            <AnimatedSection delay={0.1}>
                <img src='watercolour-splatter.jpg' alt='section header' className='mx-auto w-1/3 min-xl:w-1/4 max-md:w-2/3 opacity-85' />
            </AnimatedSection>

            <div className="absolute inset-0 top-[10%] flex flex-col items-center justify-center"> 
                <AnimatedSection delay={0.2}>
                    <h4 className='text-center mb-1'>{intro}</h4>
                    <h1 className='text-5xl font-oregano font-bold text-center mb-10 max-md:text-3xl'>{title}</h1>
                </AnimatedSection>
            </div>
        </div>
    );
}

export default SectionTitle;