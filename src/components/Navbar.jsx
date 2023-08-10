import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md p-4 mt-0 w-full">
      <div className="container mx-auto flex  items-center justify-between max-md:justify-start">
        <div className="flex items-center  max-sm:justify-evenly max-sm:w-full">
          <a
            href="#"
            className="text-2xl  text-[#f87c44] font-extrabold tracking-widest">
            <i className="em em-grinning">👻</i>LC
          </a>
          <button className="p-2 md:hidden " onClick={toggleMenu}>
            {isOpen ? <FaTimes color="black" /> : <FaBars color="black" />}
          </button>
        </div>

        <ul
          className={`flex flex-col gap-8 mfont md:flex-row ${
            isOpen
              ? "absolute top-full left-0 bg-white w-full text-center"
              : "hidden"
          } md:visible md:inline-flex`}>
          <li>
            <Link
              className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer hover:text-black underline-animation"
              to="home"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer hover:text-black underline-animation"
              spy={true}
              to="service"
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}>
              Services
            </Link>
          </li>
          <li>
            <Link
              className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer hover:text-black underline-animation"
              to="feature"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}>
              Features
            </Link>
          </li>
          <li>
            <Link
              className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer hover:text-black underline-animation"
              to="work"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}>
              Works
            </Link>
          </li>
          <li>
            <Link
              className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer hover:text-black underline-animation"
              to="team"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}>
              Team
            </Link>
          </li>
          <li>
            <Link
              className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer hover:text-black underline-animation"
              spy={true}
              to="contact"
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
