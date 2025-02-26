import { MdOutlineEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

function Contact() {

    const email = 'lesleygao.it@gmail.com';

    return (
        <div className='flex items-center justify-center p-20 ' id='contact'>
            <div className='flex flex-col space-y-3'>
                <h4 className='text-center'>Get In Touch</h4>
                <h1 className='text-5xl font-bold text-center mb-20'>Contact Me</h1>
                <div className='flex gap-5 border border-white px-10 py-5 rounded-4xl mb-20 max-md:px-4 max-md:flex-col  max-md:mb-10 '>
                    <div className='flex items-center gap-2 clickeffect'> <MdOutlineEmail className=' rounded-full size-8' /><a href={`mailto:${email}`} >{email}</a></div>
                    <div className='flex items-center gap-2 clickeffect'> <ImLinkedin className='rounded-full size-8 ' /> <a href='https://www.linkedin.com/in/lesley-gao/' target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                </div>
            </div>
        </div>
    )
}

export default Contact