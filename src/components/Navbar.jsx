import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <>
      <nav className=' fixed top-0 right-0 left-0 z-50 bg-white flex justify-end p-10 mr-10 max-md:justify-center max-sm:mr-0 list-none'>
        {navItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            className="font-oregano mx-6 text-xl hover:underline underline-offset-4 clickeffect"
          >
            {item}
          </Link>
        ))}
      </nav>
    </>
  )
}

export default Navbar