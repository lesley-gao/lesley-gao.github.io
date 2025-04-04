import { MdOutlineEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import AnimatedSection from './AnimatedSection';
import SectionTitle from "./SectionTitle";

function Contact() {

    const email = 'lesleygao.it@gmail.com';

    return (
        <div className='flex items-center justify-center p-20 ' id='contact'>

            <div className='flex flex-col items-center space-y-3 w-full'>
                <SectionTitle intro='Get In Touch' title='Contact Me' />

                <AnimatedSection delay={0.3} className='flex justify-center gap-10 border   border-black/70 px-10 py-5 rounded-4xl mb-25 max-md:px-4 max-md:flex-col max-md:mb-10 '>
                    <div className='flex items-center gap-2 clickeffect'> <MdOutlineEmail className=' rounded-full size-8' /><a href={`mailto:${email}`} >{email}</a></div>
                    <div className='flex items-center gap-2 clickeffect'> <ImLinkedin className='rounded-full size-8 ' /> <a href='https://www.linkedin.com/in/lesley-gao/' target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                </AnimatedSection>
            </div>
        </div>
    )
}

export default Contact