import React, { useState } from 'react';
import { Link, Events, animateScroll as scroll } from 'react-scroll';
import logo from '../images/logo-RTN-Dakar.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActive = (to) => {
    console.log('Active section:', to);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#000336] text-white z-50">
      <div className="container mx-auto py-2">
        <div className="flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-2">
              <img src={logo} alt="Logo" className="w-12 h-10" />
            </div>
            <h1 className="text-white font-semibold text-lg">RTN</h1>
          </div>

          <button
            onClick={toggleMenu}
            className="block md:hidden text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 19a7 7 0 110-14 7 7 0 010 14zm0-2a5 5 0 100-10 5 5 0 000 10z" />
              <path
                fill-rule="evenodd"
                d="M4.293 7.293a1 1 0 011.414 0L12 12.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="md:flex md:space-x-4">
              <li>
                <Link
                  activeClass="active"
                  to="Hero"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Expertises"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  Expertises
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Domaines"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  Domaines
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Actualites"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  Actualités
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  Contactez - Nous 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
