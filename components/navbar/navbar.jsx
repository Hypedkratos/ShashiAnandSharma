import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-sky-950 shadow-lg py-2 z-100 ">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/Images/PortfolioLogo.jpg" alt="Logo" className="h-12 w-12 mr-2 rounded-full" />
            <span className="text-white font-semibold text-2xl px-6">Shashi Anand Sharma</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-7">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/skills">Skills</NavItem>
              <NavItem href="/contact">Contact Me</NavItem>
            </ul>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <li>
      <Link legacyBehavior href={href}>
      <a
          className={`text-white py-4 px-2 md:px-4 md:py-2 transition duration-300 ${isHovered && 'bg-gray-900'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        {children}
        </a>
      </Link>
    </li>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={handleToggle} className="text-white focus:outline-none">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-12 right-0 bg-gray-800 w-48 py-2 rounded-lg shadow-lg">
          <ul className="space-y-2">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/skills">Skills</NavItem>
            <NavItem href="/contact">Contact Me</NavItem>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
