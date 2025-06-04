import React from 'react'
import MoreProjects from '../components/MoreProjects'
import ScrollToTop from '../components/ScrollToTop'
import scrollToSection from '../utils/scrollToSection'

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
                        <li onClick={() => scrollToSection('ProjectOverview')} className='TOC'>Project Overview</li>
                        <li onClick={() => scrollToSection('ResearchDiscovery')} className='TOC'>Research & Discovery</li>
                        <li onClick={() => scrollToSection('DesignProcess')} className='TOC'>Design Process</li>
                        <li onClick={() => scrollToSection('KeyDesignSolutions')} className='TOC'>Key Design Solutions</li>
                        <li onClick={() => scrollToSection('TechnicalDesign')} className='TOC'>Technical Design Considerations</li>
                        <li onClick={() => scrollToSection('InterfaceShowcase')} className='TOC'>User Interface Showcase</li>
                        <li onClick={() => scrollToSection('InnovationImpact')} className='TOC'>Innovation & Impact</li>
                        <li onClick={() => scrollToSection('KeyLearnings')} className='TOC'>Key Learnings & Design Insights</li>
                        <li onClick={() => scrollToSection('FutureVision')} className='TOC'>Future Vision & Scalability</li>
                        <li onClick={() => scrollToSection('DesignImpact')} className='TOC'>Design Impact & Recognition</li>
                    </ul>
                </div>

                <div className='flex flex-col w-4/5 ml-auto pt-30 min-2xl:pt-40 max-lg:w-full px-20'>

                    <header className="mb-6">
                        <h1 className="text-3xl font-bold border-b-3 pb-4 mb-4">UI/UX Designer & Product Designer | Academic Project | 2024</h1>
                        <p className="text-gray-500">🏆 Received A+ grade for innovation and design excellence</p>
                    </header>

                    <p className='text-xl font-bold my-5 text-center text-orange-500'>This page is under construction right now.</p>
                    <p className='text-xl font-bold mb-5 text-center text-orange-500'>  More content will be available soon.😊 </p>
                    <img src='/under-construction.jpg' alt='dashboard project' className='mb-10 mx-auto h-120' />

                    <section id='ProjectOverview' className='my-8 space-y-2 scroll-mt-40'>
                        <h2 className='text-2xl font-semibold mb-4'>📋 Project Overview</h2>
                        <p><strong>The Challenge:</strong> New Zealand pet owners face fragmented pet healthcare systems, low microchip registration rates, and scattered pet care information sources.</p>
                        <p><strong>The Solution:</strong> Pet Story - an innovative mobile platform that integrates iris recognition, AI health assistance, and community features.</p>
                        <p><strong>My Role:</strong> UI/UX Designer - Led the mobile interface design from concept to high-fidelity prototypes</p>
                        <p><strong>Duration:</strong> 12 weeks academic project</p>
                        <p><strong>Team:</strong> 5 members (Design: 1, Research: 2, Technical Architecture: 2)</p>
                    </section>

                    <section id='ResearchDiscovery' className='scroll-mt-40 my-8 space-y-2'>
                        <h2 className='text-2xl font-semibold mb-2'>🔍 Research & Discovery</h2>
                        <h3 className='font-bold mt-4'>Market Research & Problem Identification</h3>
                        <ul className='list-disc list-inside ml-4'>
                            <li><strong>Fragmented Healthcare Systems:</strong> Medical records scattered, limited access during emergencies</li>
                            <li><strong>Ineffective Pet Identification:</strong> Low microchip registration, difficult to confirm ownership</li>
                            <li><strong>Scattered Care Information:</strong> Unreliable advice, no centralized source, rural access issues</li>
                        </ul>
                        <h3 className='font-bold mt-4'>Competitive Analysis</h3>
                        <p>Analyzed 8 platforms including Share My Pet, Petzbe, Tractive GPS, and TTcare. None offered an integrated, NZ-specific pet care solution.</p>
                    </section>

                    <section id='DesignProcess' className='scroll-mt-40 my-8 space-y-2'>
                        <h2 className='text-2xl font-semibold mb-2'>💭 Design Process</h2>
                        <h3 className='font-bold'>User-Centered Design Approach</h3>
                        <ul className='list-disc list-inside ml-4'>
                            <li>Pet owners</li>
                            <li>Veterinarians</li>
                            <li>Community members</li>
                        </ul>
                        <h3 className='font-bold mt-4'>Information Architecture</h3>
                        <ul className='list-disc list-inside ml-4'>
                            <li>Home</li>
                            <li>Community</li>
                            <li>PawBot</li>
                            <li>Lost</li>
                            <li>Profile</li>
                        </ul>
                        <h3 className='font-bold mt-4'>Design Innovation: Iris Recognition</h3>
                        <p>Implemented a cost-effective, accurate iris-based pet ID system using standard cameras.</p>
                    </section>

                    <section id='KeyDesignSolutions' className='scroll-mt-40 my-8 space-y-2'>
                        <h2 className='text-2xl font-semibold mb-2'>🎨 Key Design Solutions</h2>
                        <h3 className='font-bold'>Mobile-First Interface</h3>
                        <ul className='list-disc list-inside ml-4'>
                            <li>Card-based layout</li>
                            <li>Bottom nav bar</li>
                            <li>Accessibility-focused UI</li>
                        </ul>
                        <h3 className='font-bold mt-4'>Pet Registration Flow</h3>
                        <p>Guided iris scan onboarding and ID generation</p>
                        <h3 className='font-bold mt-4'>Lost Pet Recovery</h3>
                        <p>Combined visual/photo match with privacy-controlled iris scanning</p>
                        <h3 className='font-bold mt-4'>Community Integration</h3>
                        <ul className='list-disc list-inside ml-4'>
                            <li>Service sharing</li>
                            <li>Expert-verified advice</li>
                            <li>Location-based tools</li>
                        </ul>
                    </section>

                    <section id='TechnicalDesign' className='scroll-mt-40 my-8 space-y-2'>
                        <h2 className='text-2xl font-semibold mb-2'>🛠 Technical Design Considerations</h2>
                        <p>Designed mobile app with Android Studio frontend, Node.js/Django backend, OAuth & JWT security, GDPR-compliant storage.</p>
                    </section>

                    <section id='InterfaceShowcase' className='scroll-mt-40 my-8 space-y-2'>
                        <h2 className='text-2xl font-semibold mb-2'>📱 User Interface Showcase</h2>
                        <ul className='list-disc list-inside ml-4'>
                            <li>Onboarding with iris scan guide</li>
                            <li>Home dashboard for pet health</li>
                            <li>Emergency one-tap lost pet report</li>
                        </ul>
                    </section>

                    <section id='InnovationImpact' className='scroll-mt-40 my-8 space-y-2'>
                        <h2 className='text-2xl font-semibold mb-2'>📊 Innovation & Impact</h2>
                        <ul className='list-disc list-inside ml-4'>
                            <li>Iris ID + AI chatbot = first-of-kind combo</li>
                            <li>Cost-saving, accessible, accurate</li>
                            <li>Supports 64.4% of NZ households with pets</li>
                        </ul>
                    </section>

                    <section id='KeyLearnings' className='scroll-mt-40 my-8 space-y-2'>
                        <h2 className='text-2xl font-semibold mb-2'>💡 Key Learnings & Design Insights</h2>
                        <ul className='list-disc list-inside ml-4'>
                            <li>Guided UI reduces complexity for advanced tech</li>
                            <li>Privacy and community trust are core</li>
                            <li>Inclusive mobile-first design is essential</li>
                        </ul>
                    </section>

                    <section id='FutureVision' className='scroll-mt-40 my-8 space-y-2'>
                        <h2 className='text-2xl font-semibold mb-2'>🔮 Future Vision & Scalability</h2>
                        <p>Next steps include vet portals, predictive pet scores, international scaling, and insurer partnerships.</p>
                    </section>

                    <section id='DesignImpact' className='scroll-mt-40 my-8 space-y-2'>
                        <h2 className='text-2xl font-semibold mb-2'>🎯 Design Impact & Recognition</h2>
                        <ul className='list-disc list-inside ml-4'>
                            <li>A+ grade for design innovation</li>
                            <li>Commended by faculty and peers</li>
                            <li>Showcases human-centered, ethical, inclusive thinking</li>
                        </ul>
                    </section>

                    <p className="mt-4 italic border-b-3 pb-10 ">This project demonstrates my ability to design innovative mobile experiences that address complex real-world problems through user-centered design, emerging technology integration, and comprehensive market analysis.</p>

                    <ScrollToTop />
                    <MoreProjects projects={projects} />
                </div>

            </div>
        </>
    )
}

export default PetProject 