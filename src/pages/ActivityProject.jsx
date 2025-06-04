import React from 'react'
import MoreProjects from '../components/MoreProjects'
import ScrollToTop from '../components/ScrollToTop'
import scrollToSection from '../utils/scrollToSection'

function ActivityProject() {

  const projects = [
    {
      title: 'VaccineView',
      description: 'Real-time Vaccine Confidence Dashboard',
      image: '/dashboard-project.png',
      link: '/uxui/dashboard-project'
    },
    {
      title: 'Pet Story',
      description: 'Centralized Pet Care Platform',
      image: '/petstory.png',
      link: '/uxui/pet-project'
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
          <h1 className='font-bold font-oregano text-5xl mb-5 max-xl:text-4xl '>Hippos</h1>
          <h2 className='font-bold text-lg mb-10'> Real-Time Social Connection Web Application</h2>
          <h2>Table of Contents</h2>
          <div className='scroll-auto overflow-y-auto hide-scrollbar h-90'>
            <ul className='min-2xl:space-y-2 text-gray-500 list-disc pl-5'>
              {[
                'Project Overview',
                'Research & Discovery',
                'Design Process',
                'Key Design Solutions',
                'Technical Implementation & Design Systems',
                'User Interface Showcase',
                'Results & Impact',
                'Key Learnings & Design Insights',
                'Future Enhancements & Scalability',
                'Design Impact & Methodology'
              ].map((title) => (
                <li key={title} onClick={() => scrollToSection(title.replace(/ & | /g, ''))} className='TOC'>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-col w-4/5 ml-auto pt-40 max-lg:w-full px-20'>

          <header className="mb-6">
            <h1 className="text-3xl font-bold border-b-3 pb-4 mb-4">UI/UX Designer & Frontend Developer | 8-week project | 2024</h1>
            <p className="text-gray-500">🏆 Successfully delivered all core features on time using Agile methodology</p>
          </header>

          <p className='text-xl font-bold my-5 text-center text-orange-500'>This page is under construction right now.</p>
          <p className='text-xl font-bold mb-5 text-center text-orange-500'>  More content will be available soon.😊 </p>
          <img src='/under-construction.jpg' alt='dashboard project' className='mb-10 mx-auto h-120' />

          <section id='ProjectOverview' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>📋 Project Overview</h2>
            <p className='mb-4'>
              <strong>The Challenge:</strong> Existing event platforms like Meetup and Facebook Events focus on pre-planned, formal activities that lack flexibility for spontaneous, last-minute social connections. There's a growing need for casual, impromptu gatherings that can be organized and joined on short notice.
            </p>
            <p className='mb-4'>
              <strong>The Solution:</strong> Hippos - a real-time social connection web application that enables users to post and join activities within 24 hours, fostering spontaneous community engagement through real-time notifications and GPS mapping.
            </p>
            <ul className='list-disc list-inside space-y-1 mb-4'>
              <li><strong>My Role:</strong> UI/UX Designer & Frontend Developer - Led complete interface design and implemented 5 core pages</li>
              <li><strong>Duration:</strong> 10 weeks (March - June 2024)</li>
              <li><strong>Team:</strong> 6 members (Frontend: 2, Backend: 2, Integration: 2)</li>
            </ul>
          </section>

          <section id='ResearchDiscovery' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>🔍 Research & Discovery</h2>
            <h3 className='text-2xl font-semibold mb-2'>Problem Identification</h3>
            <p className='mb-4'>
              <strong>Market Gap Analysis:</strong> Through research of existing event-based social networks, I identified a critical gap in the market:
            </p>
            <ul className='list-disc list-inside space-y-1 mb-4'>
              <li><strong>Meetup:</strong> 52M+ members globally but focuses on pre-planned, formal events</li>
              <li><strong>Facebook Events:</strong> Commercial-oriented with rigid scheduling requirements</li>
              <li><strong>Eventbrite:</strong> Primarily for ticketed, professional events</li>
            </ul>
            <p className='mb-4'><strong>Core Problem:</strong> No platform exists for casual, spontaneous activities that can be organized and joined within hours, not days or weeks.</p>

            <h3 className='text-2xl font-semibold mb-2'>Inspiration & User Need Validation</h3>
            <p className='mb-4'>
              <strong>Real-world story that shaped our design:</strong> A New Zealand father posted on social media when no one showed up to his 3-year-old son's birthday party. The local community rallied together and showed up to celebrate - highlighting the need for spontaneous, real-time social connections.
            </p>
            <h4 className='text-xl font-semibold mt-4 mb-2'>User Research Insights:</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li>People want to find companions for last-minute activities (movies, sports, celebrations)</li>
              <li>Existing platforms create social pressure with formal planning requirements</li>
              <li>Users need flexibility for activities happening "right now" or within hours</li>
              <li>Location-based discovery is crucial for spontaneous meetups</li>
            </ul>
          </section>

          <section id='DesignProcess' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>💭 Design Process</h2>
            <p className='mb-2'><strong>Target Users:</strong> Young adults, busy professionals, and community members seeking spontaneous connections.</p>
            <p className='mb-2'><strong>Core User Needs:</strong> Find activities within 24 hours, location-based discovery, and low-commitment ways to join events.</p>
            <p className='mb-2'><strong>Design Pivot:</strong> Switched from vibrant to gradient color schemes to prioritize content clarity and activity image visibility.</p>
            <p><strong>Mobile-First Rationale:</strong> Activities often happen on-the-go, so a mobile-first experience with intuitive UI and notification focus was critical.</p>
          </section>

          <section id='KeyDesignSolutions' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>🎨 Key Design Solutions</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li><strong>Dual-view Discovery:</strong> Map + List views for browsing real-time events</li>
              <li><strong>Location-Based UI:</strong> Interactive maps with filters and previews</li>
              <li><strong>Live Notifications:</strong> Push notifications based on tags and timing</li>
              <li><strong>Quick Posting Flow:</strong> Minimalist form, auto-fill suggestions, and live preview</li>
            </ul>
          </section>

          <section id='TechnicalImplementationDesignSystems' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>🛠 Technical Implementation & Design Systems</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li><strong>Frontend:</strong> React.js + Tailwind CSS</li>
              <li><strong>Maps:</strong> Google Maps API</li>
              <li><strong>Notifications:</strong> Firebase Cloud Messaging</li>
              <li><strong>Reusable Components:</strong> EventInfoPreview, EventMap, AvatarSelector, CategoryFilter, NavigationMenu</li>
            </ul>
          </section>

          <section id='UserInterfaceShowcase' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>📱 User Interface Showcase</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li><strong>Discovery Flow:</strong> Homepage → Map View → Details → Real-time updates</li>
              <li><strong>Creation Flow:</strong> Post → Location → Tagging → Push setup</li>
              <li><strong>User Profiles:</strong> Register → Setup → Dashboard → Preferences</li>
              <li><strong>Design Elements:</strong> Animations, overlays, mobile nav, custom markers</li>
            </ul>
          </section>

          <section id='ResultsImpact' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>📊 Results & Impact</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>✅ Real-time posting and push notifications</li>
              <li>✅ Location-based activity mapping</li>
              <li>✅ Responsive UI across devices</li>
              <li>✅ Full-featured interest tracking and filter system</li>
            </ul>
          </section>

          <section id='KeyLearningsDesignInsights' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>💡 Key Learnings & Design Insights</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>✅ Swapping color schemes improved hierarchy</li>
              <li>✅ Real-time feedback critical to decision-making</li>
              <li>✅ Location context increases user trust</li>
              <li>✅ Reusable components sped up development</li>
            </ul>
          </section>

          <section id='FutureEnhancementsScalability' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>🔮 Future Enhancements & Scalability</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>📱 Convert to native app (PWA or mobile)</li>
              <li>💬 Add messaging and group tools</li>
              <li>🧠 Smart recommendations & analytics</li>
              <li>🌐 Internationalization and localization features</li>
            </ul>
          </section>

          <section id='DesignImpactMethodology' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>🎯 Design Impact & Methodology</h2>
            <p className='mb-2'><strong>Agile Methodology:</strong> Weekly sprints, cross-functional syncs, iterative design refinement</p>
            <p className='mb-2'><strong>User-Centered Focus:</strong> Research-led decisions and stakeholder validation</p>
            <p><strong>Outcome:</strong> Launched full-featured MVP with successful user testing and positive peer reviews</p>
          </section>

          <p className="mt-4 italic border-b-3 pb-10 ">This project demonstrates my ability to lead UI/UX design for complex real-time applications, working within technical constraints while maintaining focus on user needs and business objectives. The successful delivery of all core features using Agile methodology showcases both design leadership and collaborative development skills.</p>

          <ScrollToTop />
          <MoreProjects projects={projects} />

        </div>

      </div>
    </>
  )
}

export default ActivityProject