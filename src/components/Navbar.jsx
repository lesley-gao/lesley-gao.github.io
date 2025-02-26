function Navbar() {

  const navIterms = ["About", "Skills", "Projects", "Contact"];

  return (
    <>
      <ul className='flex justify-end p-10 mr-10 max-md:justify-center '>
        {navIterms.map((item, index) => (
          <li key={index} className='mx-5 hover:underline underline-offset-4 clickeffect'>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default Navbar