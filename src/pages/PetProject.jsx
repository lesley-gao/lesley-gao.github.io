import React from 'react'
import MoreProjects from '../components/MoreProjects'

function PetProject() {

    const projects = [
        {
            title: 'VaccineView',
            description: 'Real-time Vaccine Confidence Dashboard',
            image: '/dashboard-project.png',
            link: '/uxui/dashboard-project'
        },
        {
            title: 'Hippos',
            description: 'Real-Time Social Connection Web Application',
            image: '/activity-project.png',
            link: '/uxui/activity-project'
        },
        {
            title: 'Blog Project',
            description: 'Travel Blogging Platform',
            image: '/blog-project.png',
            link: '/uxui/blog-project'
        }
    ]

    return (
        <>
            <div className='flex max-sm:flex-col'>
                <div className='w-1/5 max-lg:hidden h-screen fixed pt-30 min-2xl:pt-40 p-10 space-y-5 border-r border-[#dcdcdc]'>
                    <h1 className='font-bold font-oregano text-5xl mb-5 max-xl:text-4xl '>Pet Story </h1>
                    <h2 className='font-bold text-xl mb-10'> Centralized Pet Care Platform</h2>
                    <h2>Table of Contents</h2>
                    <ul className='min-2xl:space-y-2 text-gray-500 list-disc pl-5'>
                        <li>Project Overview</li>
                        <li>Research & Discovery</li>
                        <li>Design Process</li>
                        <li>Key Design Solutions</li>
                        <li>Technical Design Considerations</li>
                        <li>User Interface Showcase</li>
                        <li>Innovation & Impact</li>
                        <li>Key Learnings & Design Insights</li>
                        <li>Future Vision & Scalability</li>
                        <li>Design Impact & Recognition</li>
                    </ul>
                </div>

                <div className='flex flex-col w-4/5 ml-auto pt-40 max-lg:w-full px-10'>
                    <p className='text-xl font-bold mb-5 text-center '>This page is under construction right now.</p>
                    <p className='text-xl font-bold mb-5 text-center'>  It will be available soon.😊 </p>
                    <img src='/under-construction.jpg' alt='dashboard project' className='mb-10 mx-auto h-150' />

                    <MoreProjects projects={projects} />
                </div>

            </div>
        </>
    )
}

export default PetProject 