import { MdOutlineEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import AnimatedSection from './AnimatedSection';

function Contact() {

    const email = 'lesleygao.it@gmail.com';

    return (
        <div className='flex items-center justify-center p-20 ' id='contact'>
            <div className='flex flex-col space-y-3'>
                <AnimatedSection delay={0.1}>
                    <h4 className='text-center'>Get In Touch</h4>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                    <h1 className='text-5xl font-bold text-center mb-25'>Contact Me</h1>
                </AnimatedSection>
                <AnimatedSection delay={0.3} className='flex gap-5 border border-white px-10 py-5 rounded-4xl mb-25 max-md:px-4 max-md:flex-col  max-md:mb-10 '>
                    <div className='flex items-center gap-2 clickeffect'> <MdOutlineEmail className=' rounded-full size-8' /><a href={`mailto:${email}`} >{email}</a></div>
                    <div className='flex items-center gap-2 clickeffect'> <ImLinkedin className='rounded-full size-8 ' /> <a href='https://www.linkedin.com/in/lesley-gao/' target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                </AnimatedSection>
            </div>
        </div>
    )
}

export default Contact