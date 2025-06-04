import React from 'react'
import MoreProjects from '../components/MoreProjects'
import ScrollToTop from '../components/ScrollToTop'
import scrollToSection from '../utils/scrollToSection'

function BlogProject() {

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
      title: 'Hippos',
      description: 'Real-Time Social Connection Web Application',
      image: '/activity-project.png',
      link: '/uxui/activity-project'
    }
  ]

  return (
    <>
      <div className='flex max-sm:flex-col'>
        <div className='w-1/5 max-lg:hidden h-screen fixed pt-30 min-2xl:pt-40 p-10 space-y-5 border-r border-[#dcdcdc]'>
          <h1 className='font-bold font-oregano text-5xl mb-5 max-xl:text-4xl '>Blog Your Journey</h1>
          <h2 className='font-bold text-xl mb-10'> Travel Blogging Platform</h2>
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
                'Results & Technical Achievements',
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
            <h1 className="text-3xl font-bold border-b-3 pb-4 mb-4">UI/UX Designer & Frontend Developer | Academic Project | 2023</h1>
            <p className="text-gray-500">🏆 Successfully delivered full-stack travel blogging platform in 2.5 weeks using Agile methodology</p>
          </header>

          <p className='text-xl font-bold my-5 text-center text-orange-500'>This page is under construction right now.</p>
          <p className='text-xl font-bold mb-5 text-center text-orange-500'>  More content will be available soon.😊 </p>
          <img src='/under-construction.jpg' alt='dashboard project' className='mb-10 mx-auto h-120' />

          <section id='ProjectOverview' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>📋 Project Overview</h2>
            <p><strong>Challenge:</strong> Create a platform for travel enthusiasts to share experiences visually and interactively.</p>
            <p><strong>Solution:</strong> A responsive, full-stack travel blogging platform with continent-based organization, timeline displays, and gallery-style visuals.</p>
            <p><strong>My Role:</strong> UI/UX Designer & Frontend Developer – Led visual system, built 6+ core pages and components.</p>
            <p><strong>Duration:</strong> 2.5 weeks | <strong>Team:</strong> 4 members</p>
          </section>

          <section id='ResearchDiscovery' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>🔍 Research & Discovery</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>Identified core needs: visual blogging, geographic categorization, and community interaction.</li>
              <li>Targeted travel bloggers, photography lovers, and explorers seeking engagement.</li>
              <li>Positioned against general-purpose blogging platforms with travel-focused design.</li>
            </ul>
          </section>

          <section id='DesignProcess' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>💭 Design Process</h2>
            <p><strong>Visual Philosophy:</strong> A gallery-style interface with polaroid card effects and immersive continent themes.</p>
            <p><strong>Color & Aesthetics:</strong> Light, clean color palette to prioritize user photos and atmosphere of wanderlust.</p>
            <p><strong>Component System:</strong> Built reusable Svelte components for destinations, articles, timelines, and profile views.</p>
          </section>

          <section id='KeyDesignSolutions' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>🎨 Key Design Solutions</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li><strong>Gallery-style layout</strong> showcasing travel photos with object-fit cover techniques.</li>
              <li><strong>Interactive timeline</strong> on user profiles to display journeys chronologically.</li>
              <li><strong>Continental pages</strong> using reusable design components and location imagery.</li>
              <li><strong>Advanced search</strong> supporting filters by title, date, user, and location.</li>
            </ul>
          </section>

          <section id='TechnicalImplementationDesignSystems' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>🛠 Technical Implementation & Design Systems</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li><strong>Frontend:</strong> Svelte with responsive custom CSS</li>
              <li><strong>Architecture:</strong> Component-driven, gallery-focused design</li>
              <li><strong>Components:</strong> AbstractCard, Timeline, Continent, CommentTree, MoreReadings</li>
              <li><strong>Styling:</strong> Pseudo-elements, overlays, custom scrollbars</li>
            </ul>
          </section>

          <section id='UserInterfaceShowcase' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>📱 User Interface Showcase</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li><strong>Creation Flow:</strong> Register → Profile → Write → Publish by continent</li>
              <li><strong>Discovery Flow:</strong> Home → Browse Destinations → Read → Comment</li>
              <li><strong>Profiles:</strong> Avatar, Timeline, Stats, My Articles</li>
              <li><strong>Page Highlights:</strong> Video backgrounds, hero images, polaroid layouts</li>
            </ul>
          </section>

          <section id='ResultsTechnicalAchievements' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>📊 Results & Technical Achievements</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>✅ Delivered full-stack responsive platform in 2.5 weeks</li>
              <li>✅ Component reuse across 15+ pages</li>
              <li>✅ Photo-first design for immersive travel stories</li>
              <li>✅ Timeline & gallery features improved user retention</li>
            </ul>
          </section>

          <section id='KeyLearningsDesignInsights' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>💡 Key Learnings & Design Insights</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>📸 Visual hierarchy essential for image-driven platforms</li>
              <li>🧩 Component modularity speeds up collaborative work</li>
              <li>📱 Mobile-first testing is critical for travel audiences</li>
              <li>🎨 Design system consistency improves perceived quality</li>
            </ul>
          </section>

          <section id='FutureEnhancementsScalability' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>🔮 Future Enhancements & Scalability</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>🗺️ Map-based article discovery</li>
              <li>📷 Photo gallery enhancements (lightbox, slideshow)</li>
              <li>📡 Offline functionality and PWA support</li>
              <li>🤝 Group trip planning and social features</li>
            </ul>
          </section>

          <section id='DesignImpactMethodology' className='my-8 space-y-2 scroll-mt-40'>
            <h2 className='text-3xl font-bold mb-4'>🎯 Design Impact & Methodology</h2>
            <p><strong>Agile Workflow:</strong> Daily standups and wireframe-to-dev coordination</p>
            <p><strong>Design Strategy:</strong> Travel-specific visual goals + real user feedback</p>
            <p><strong>Leadership:</strong> Owned design consistency and front-end implementation across pages</p>
          </section>

          <p className="mt-4 italic border-b-3 pb-10 ">This project demonstrates my ability to lead design systems for content-focused applications, balancing aesthetic appeal with functional requirements while managing both design and frontend development responsibilities in a fast-paced team environment.</p>

          <ScrollToTop />
          <MoreProjects projects={projects} />
        </div>

      </div>
    </>
  )
}

export default BlogProject