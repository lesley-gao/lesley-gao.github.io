import React from 'react'
import MoreProjects from '../components/MoreProjects'
import ScrollToTop from '../components/ScrollToTop'
import scrollToSection from '../utils/scrollToSection.js'

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
                <div className='w-1/5 max-lg:hidden h-screen fixed pt-30 min-2xl:pt-40 p-10 space-y-5 border-r border-[#dcdcdc]'>
                    <h1 className='font-bold font-oregano text-5xl mb-5 max-xl:text-4xl '>VaccineView </h1>
                    <h2 className='font-bold text-xl mb-10'> Real-time Vaccine Confidence Dashboard</h2>
                    <h2>Table of Contents</h2>
                    <ul className='space-y-2 text-gray-500 list-disc pl-5 '>
                        <li onClick={() => scrollToSection('ProjectOverview')} className='TOC'> Project Overview</li>
                        <li onClick={() => scrollToSection('ResearchDiscovery')} className='TOC'>Research & Discovery</li>
                        <li onClick={() => scrollToSection('DesignProcess')} className='TOC'>Design Process</li>
                        <li onClick={() => scrollToSection('KeyDesignSolutions')} className='TOC'>Key Design Solutions</li>
                        <li onClick={() => scrollToSection('TechnicalImplementation')} className='TOC'>Technical Implementation</li>
                        <li onClick={() => scrollToSection('ResultsImpact')} className='TOC'>Results & Impact</li>
                        <li onClick={() => scrollToSection('KeyLearnings')} className='TOC'>Key Learnings</li>
                        <li onClick={() => scrollToSection('NextSteps')} className='TOC'>Next Steps & Future Enhancements</li>
                    </ul>
                </div>

                <div className='flex flex-col w-4/5 ml-auto pt-30 min-2xl:pt-40 max-lg:w-full px-20'>

                    <header className="mb-6">
                        <h1 className="text-3xl font-bold border-b-3 pb-4 mb-4">Product Designer & Frontend Developer | 10-week project | 2024</h1>
                        <p className="text-gray-500">🏆 Winner: Top Group Award among 17 teams</p>
                    </header>

                    <p className='text-xl font-bold my-5 text-center text-orange-500'>This page is under construction right now.</p>
                    <p className='text-xl font-bold mb-5 text-center text-orange-500'>  More content will be available soon.😊 </p>
                    <img src='/under-construction.jpg' alt='dashboard project' className='mb-10 mx-auto h-120' />


                    <section className="my-8 space-y-2 scroll-mt-40" id='ProjectOverview'>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">📋 Project Overview</h2>
                        <p><strong>The Challenge:</strong> New Zealand lacks real-time monitoring of public vaccine confidence, with fragmented information sources and limited local data.</p>
                        <p><strong>The Solution:</strong> VaccineView – a web platform integrating real-time sentiment, survey data, and official statistics.</p>
                        <p><strong>My Role:</strong> UI/UX Designer & Frontend Developer</p>
                        <p><strong>Duration:</strong> 10 weeks (Nov 2024 – Feb 2025)</p>
                        <p><strong>Team:</strong> 5 members (2 Frontend, 1 Backend, 2 ML/Data)</p>
                    </section>

                    <section className="my-8 space-y-2 scroll-mt-40" id='ResearchDiscovery'>
                        <h2 className="text-2xl font-semibold mb-2">🔍 Research & Discovery</h2>
                        <h3 className="font-bold mt-4">Understanding the Problem</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>Real-time Monitoring Gap:</strong> No system to detect emerging concerns promptly</li>
                            <li><strong>Information Fragmentation:</strong> Data spread across sources</li>
                            <li><strong>Data Quality Issues:</strong> Confidence data often outdated</li>
                        </ul>

                        <h3 className="font-bold mt-4 ">User Research Insights</h3>
                        <ul className="list-disc list-inside ml-4 space-y-2">
                            <li>
                                <strong>Primary Users:</strong>
                                <ul className="list-disc list-inside ml-6 mt-1">
                                    <li>Healthcare professionals</li>
                                    <li>General public</li>
                                    <li>Public health officials</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Key Needs:</strong>
                                <ul className="list-disc list-inside ml-6 mt-1">
                                    <li>Consolidated vaccine information</li>
                                    <li>Real-time sentiment tracking capabilities</li>
                                    <li>Easy-to-understand data visualizations</li>
                                    <li>Location-based vaccination services</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section className="my-8 space-y-2 scroll-mt-40" id='DesignProcess'>
                        <h2 className="text-2xl font-semibold mb-2">💭 Design Process</h2>
                        <h3 className="font-bold mt-4">1. Information Architecture</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li>Dashboard</li>
                            <li>Social Media Analysis</li>
                            <li>Survey Data</li>
                            <li>Interactive Map</li>
                            <li>User Management</li>
                        </ul>

                        <h3 className="font-bold mt-4">2. Design System & Visual Identity</h3>
                        <p><strong>Color Strategy:</strong> Blue theme, minimalist layout, emphasis on data clarity</p>
                        <p><strong>Accessibility:</strong> WCAG contrast, responsive, dark/light toggle</p>

                        <h3 className="font-bold mt-4">3. Wireframing & Prototyping</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li>Sketches → Wireframes → Prototypes</li>
                            <li>Iterative feedback from mentors</li>
                        </ul>
                    </section>

                    <section className="mb-8 space-y-2 scroll-mt-40" id='KeyDesignSolutions'>
                        <h2 className="text-2xl font-semibold mb-2">🎨 Key Design Solutions</h2>

                        <h3 className="font-bold mt-4">Dashboard Redesign</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li>Component-based layout</li>
                            <li>Interactive charts (Plotly, Recharts)</li>
                            <li>Vaccine selector, real-time data updates</li>
                        </ul>

                        <h3 className="font-bold mt-4">Interactive Map</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li>Google Maps API with filters</li>
                            <li>Search by vaccine/provider/location</li>
                            <li>Get Directions + Book Now</li>
                        </ul>

                        <h3 className="font-bold mt-4">Survey Data Visualization</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li>Interactive demographic views</li>
                            <li>Time-series trends</li>
                            <li>Educational context + animations</li>
                        </ul>
                    </section>

                    <section className="mb-8 space-y-2 scroll-mt-40" id='TechnicalImplementation'>
                        <h2 className="text-2xl font-semibold mb-2">🛠 Technical Implementation</h2>

                        <h3 className="font-bold mt-4">Frontend Architecture</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li>React.js + Context API</li>
                            <li>Tailwind CSS</li>
                            <li>Plotly, Recharts, Framer Motion</li>
                            <li>Google Maps API, Google OAuth</li>
                        </ul>

                        <h3 className="font-bold mt-4">Design-to-Development</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li>Figma reusable components</li>
                            <li>Documented specs</li>
                            <li>Responsive testing & iteration</li>
                        </ul>
                    </section>

                    <section className="mb-8 space-y-2 scroll-mt-40" id='ResultsImpact'>
                        <h2 className="text-2xl font-semibold mb-2">📊 Results & Impact</h2>
                        <ul className="list-disc list-inside ml-4">
                            <li>🏆 Top Group Award</li>
                            <li>5 features delivered on time</li>
                            <li>8 vaccine indicators integrated</li>
                            <li>Fully responsive on all devices</li>
                        </ul>
                    </section>

                    <section className="mb-8 space-y-2 scroll-mt-40" id='KeyLearnings'>
                        <h2 className="text-2xl font-semibold mb-2">💡 Key Learnings</h2>
                        <h3 className="font-bold mt-4">Design Insights</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li>Group related data for clarity</li>
                            <li>Simplify without losing accuracy</li>
                            <li>Regular expert input critical</li>
                        </ul>

                        <h3 className="font-bold mt-4">Technical Growth</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li>React component and state design</li>
                            <li>Plotly & Recharts for data viz</li>
                            <li>Responsive design with Tailwind</li>
                        </ul>

                        <h3 className="font-bold mt-4">Process Improvements</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li>Better DB structure planning</li>
                            <li>User segmentation by role</li>
                            <li>Daily standups improved focus</li>
                        </ul>
                    </section>

                    <section className="my-8 space-y-2 scroll-mt-40" id='NextSteps'>
                        <h2 className="text-2xl font-semibold mb-2">🔮 Next Steps & Future Enhancements</h2>
                        <ul className="list-disc list-inside ml-4">
                            <li>Custom dashboards by user role</li>
                            <li>Built-in survey creation</li>
                            <li>PWA functionality</li>
                            <li>Expand vaccine types</li>
                            <li>Outbreak prediction analytics</li>
                            <li>Public API for data sharing</li>
                        </ul>
                    </section>

                    {/* <section className="my-8 space-y-2" id='ProjectLinks'>
                                <h2 className="text-2xl font-semibold mb-2">🔗 Project Links</h2>
                                <ul className="list-disc list-inside ml-4">
                                    <li><a href="https://github.com/lesley-gao/vaccine-confidence-dashboard-project" className="text-blue-600 hover:underline" target="_blank">GitHub Repository</a></li>
                                    <li><a href="https://www.youtube.com/watch?v=M8YTA1voUN0" className="text-blue-600 hover:underline" target="_blank">Demo Video</a></li>
                                </ul>
                            </section> */}

                    <p className="mt-4 italic border-b-3 pb-10 ">This project demonstrates my ability to lead end-to-end product design in a complex healthcare domain, from research and stakeholder interviews to implementation and refinement.</p>

                    <ScrollToTop />

                    <MoreProjects projects={projects} />
                </div>
            </div >
        </>
    )
}

export default DashboardProject