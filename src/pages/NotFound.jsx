import React from 'react'

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center  space-y-5 text-gray-800'>
      <img src='/pagenotfound.jpg' alt='page not found' className='mx-auto h-90' />
      <p>Oops! I can't find the destination.</p>
      <p>The page you are looking for does not exist.</p>
      <a href='/'>
        <button className='button mt-10 px-10 py-4 border border-gray-400 bg-gradient-to-br from-[#60a1fa]/80 to-[#c6b4fe]/80 '>Back to Homepage</button>
      </a>
    </div>
  )
}

export default NotFound