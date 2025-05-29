import React from 'react'
import MoreProjects from '../components/MoreProjects'
import ScrollToTop from '../components/ScrollToTop'

function DashboardProject() {

    const projects = [
        {
            title: 'Pet Story',
            description: 'Centralized Pet Care Platform',
            image: '/petstory.png',
            link: '/uxui/pet-project'
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
                <div className='w-1/5 max-lg:hidden h-auto fixed pt-30 min-2xl:pt-40 p-10 space-y-5 border-r border-[#dcdcdc]'>
                    <h1 className='font-bold font-oregano text-5xl mb-5 max-xl:text-4xl '>VaccineView </h1>
                    <h2 className='font-bold text-xl mb-10'> Real-time Vaccine Confidence Dashboard</h2>
                    <h2>Table of Contents</h2>
                    <ul className='space-y-2 text-gray-500 list-disc pl-5'>
                        <li>Project Overview</li>
                        <li>Research & Discovery</li>
                        <li>Design Process</li>
                        <li>Key Design Solutions</li>
                        <li>Technical Implementation</li>
                        <li>Results & Impact</li>
                        <li>Key Learnings</li>
                        <li>Next Steps & Future Enhancements</li>
                    </ul>
                </div>

                <div className='flex flex-col w-4/5 ml-auto pt-40 max-lg:w-full px-10'>
                    <div>
                        <p className='text-xl font-bold mb-5 text-center '>This page is under construction right now.</p>
                        <p className='text-xl font-bold mb-5 text-center'>  It will be available soon.😊 </p>
                        <img src='/under-construction.jpg' alt='dashboard project' className='mb-10 mx-auto h-150' />
                        <ScrollToTop />
                    </div>
                    <MoreProjects projects={projects} />
                </div>
            </div>
        </>
    )
}

export default DashboardProject