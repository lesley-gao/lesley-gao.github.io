import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { BsFillArrowDownLeftCircleFill, BsFillArrowDownRightCircleFill } from "react-icons/bs";
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from "../components/ScrollToTop";

function UXUIPage() {

  const [isRightBtn1Hovered, setIsRightBtn1Hovered] = useState(false);
  const [isLeftBtn1Hovered, setIsLeftBtn1Hovered] = useState(false);
  const [isRightBtn2Hovered, setIsRightBtn2Hovered] = useState(false);
  const [isLeftBtn2Hovered, setIsLeftBtn2Hovered] = useState(false);

  // Always scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='h-auto min-h-screen py-20 min-2xl:py-30'>
      <div className='p-30 gap-20'>
        <Link to={'/uxui/dashboard-project'} >
          <div className='flex justify-evenly px-10 gap-10'>
            <div className='space-y-15 w-1/2'>
              <h1 className='text-5xl flex gap-10'>VACCINE VIEW
                {isRightBtn1Hovered ? <BsArrowRightCircle onMouseLeave={() => setIsRightBtn1Hovered(false)} /> : <BsFillArrowDownRightCircleFill onMouseEnter={() => setIsRightBtn1Hovered(true)} />}
              </h1>
              <p className="text-gray-500">VaccineView - a comprehensive web platform that integrates real-time social media sentiment analysis, demographic survey data, and official health statistics to provide actionable insights into vaccine confidence trends.</p>
            </div>
            <img src='/dashboard-project.png' alt='dashboard project' className='h-90' />
          </div>
        </Link>

        <hr className='my-20 border-t-2' />

        <Link to={'/uxui/pet-project'} >
          <div className='flex justify-evenly px-10 gap-10'>
            <img src='/petstory.png' alt='petstory project' className='h-90' />
            <div className='space-y-15 w-1/2'>
              <h1 className='text-5xl flex gap-10'>
                {isLeftBtn1Hovered ? <BsArrowLeftCircle onMouseLeave={() => setIsLeftBtn1Hovered(false)} /> : <BsFillArrowDownLeftCircleFill onMouseEnter={() => setIsLeftBtn1Hovered(true)} />}
                PET STORY</h1>
              <p className="text-gray-500">Pet Story - an innovative mobile platform that integrates iris recognition technology, AI-powered health assistance, and community features to provide centralized, low-cost pet care management. </p>
            </div>
          </div>
        </Link>

        <hr className='my-20 border-t-2' />

        <Link to={'/uxui/activity-project'} >
          <div className='flex justify-evenly px-10 gap-10'>
            <div className='space-y-15 w-1/2'>
              <h1 className='text-5xl flex gap-10'>HIPPOS
                {isRightBtn2Hovered ? <BsArrowRightCircle onMouseLeave={() => setIsRightBtn2Hovered(false)} /> : <BsFillArrowDownRightCircleFill onMouseEnter={() => setIsRightBtn2Hovered(true)} />}
              </h1>
              <p className="text-gray-500">Hippos - a real-time social connection web application that enables users to post and join activities within 24 hours, fostering spontaneous community engagement through real-time notifications and GPS mapping.</p>
            </div>
            <img src='/activity-project.png' alt='activity project' className='h-90' />
          </div>
        </Link>

        <hr className='my-20 border-t-2' />

        <Link to={'/uxui/blog-project'} >
          <div className='flex justify-evenly px-10 gap-10'>
            <img src='/blog-project.png' alt='bloging project' className='h-90 ' />
            <div className='space-y-15 w-1/2'>
              <h1 className='text-5xl  flex gap-10'>
                {isLeftBtn2Hovered ? <BsArrowLeftCircle onMouseLeave={() => setIsLeftBtn2Hovered(false)} /> : <BsFillArrowDownLeftCircleFill onMouseEnter={() => setIsLeftBtn2Hovered(true)} />}
                BLOG YOUR JOURNEY</h1>
              <p className="text-gray-500">"Blog Your Journey" - a responsive, full-stack travel blogging platform tailored specifically for travelers, featuring continent-based content organization, interactive timeline displays, and gallery-style visual design.</p>
            </div>
          </div>
        </Link>

      </div>

      <ScrollToTop />
    </div>
  )
}

export default UXUIPage