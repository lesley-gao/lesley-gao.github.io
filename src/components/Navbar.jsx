import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const navItems = ["About", "Skills", "Projects", "UX/UI", "Contact"];
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleSectionClick = (item) => {

    const sectionId = item.toLowerCase();

    if (isHomePage) {
      // if item is "UX/UI", navigate to the UX/UI page
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // else, navigate to the home page and scroll to the section
      navigate('/');
      // use setTimeout to ensure the page has rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  return (
    <nav className='fixed top-0 right-0 left-0 z-50 bg-white flex justify-end items-center p-10 max-md:justify-center max-sm:mr-0 list-none'>
      <Link to='/' className="absolute left-20 w-24 max-md:hidden animate-bounce">
        <img src="/logo.png" alt="Logo" />
      </Link>

      {navItems.map((item) => {
        if (item === 'UX/UI') {
          return (
            <Link
              key={item}
              to="/uxui"
              className="font-oregano mx-6 text-xl max-sm:text-md max-sm:mx-3 hover:underline underline-offset-4 clickeffect"
            >
              {item}
            </Link>
          );
        }
        else {
          return (
            <button
              key={item}
              onClick={() => handleSectionClick(item)}
              className="font-oregano mx-6 text-xl max-sm:text-md max-sm:mx-3 hover:underline underline-offset-4 clickeffect bg-transparent border-none cursor-pointer"
            >
              {item}
            </button>
          );
        }
      })}
    </nav>
  );
}

export default Navbar;