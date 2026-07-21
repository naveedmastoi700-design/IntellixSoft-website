import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (window.scrollY > 20) {
        setIsOpen(false);
        setMobileCoursesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileCoursesOpen(false);
  };

  const linkStyle = ({ isActive }) =>
    `${isScrolled ? "text-black" : "text-white"
    } hover:text-[#4F9C96] text-[15px] font-semibold border-b-2 pb-[3px] transition-colors duration-300 ${isActive ? "border-[#4F9C96] text-[#4F9C96]" : "border-transparent"
    }`;

  const dropdownLinkStyle = ({ isActive }) =>
    `block px-4 py-3 text-[14px] font-medium transition-colors duration-300 ${isActive
      ? isScrolled
        ? "text-[#4F9C96] bg-gray-100"
        : "text-[#4F9C96] bg-[#111]"
      : isScrolled
        ? "text-black hover:text-[#4F9C96] hover:bg-gray-100"
        : "text-white hover:text-[#4F9C96] hover:bg-[#111]"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`w-full h-[75px] sticky top-0 left-0 z-50 flex items-center transition-all duration-300 ${isScrolled
          ? "bg-white border-b border-gray-200 shadow-md"
          : "bg-black border-b border-[#2b2b2b]"
          }`}
      >
        {/* LOGO */}
        <div className="absolute left-[50px] top-1/2 -translate-y-1/2">
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[118px] h-auto object-contain"
            />
          </NavLink>
        </div>

        {/* DESKTOP MENU (CENTER FIXED) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-[30px]">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/services" className={linkStyle}>
            Services
          </NavLink>

          {/* Courses Dropdown */}
          <div className="relative group flex items-center -top-[1px]">
            <NavLink to="/courses" className={linkStyle}>
              <span className="flex items-center gap-[4px]">
                Courses
                <IoIosArrowDown className="text-[15px] mt-[2px] transition-transform duration-300 group-hover:rotate-180" />
              </span>
            </NavLink>

            <div
              className={`absolute left-0 top-full mt-3 w-[260px] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden ${isScrolled
                ? "bg-white border border-gray-200"
                : "bg-black border border-[#2b2b2b]"
                }`}
            >
              <NavLink to="/courses/web-app-development" className={dropdownLinkStyle}>
                Website Development
              </NavLink>

              <NavLink to="/courses/Backend-Development-with-Python" className={dropdownLinkStyle}>
                Backend Web Development With Python
              </NavLink>

              <NavLink to="/courses/python-machine-learning" className={dropdownLinkStyle}>
                Python & Machine Learning
              </NavLink>
              <NavLink
                to="/courses/Data-Automation"
                className={dropdownLinkStyle}
              >
                Data Science & Automation
              </NavLink>


              <NavLink to="/courses/digital-marketing" className={dropdownLinkStyle}>
                Digital Marketing
              </NavLink>
              <NavLink
                to="/courses/shopify"
                className={dropdownLinkStyle}
              >
                E-Commerce & Shopify
              </NavLink>

              <NavLink to="/courses/graphic-designer" className={dropdownLinkStyle}>
                Graphic Designer
              </NavLink>


              <NavLink to="/courses/business-development" className={dropdownLinkStyle}>
                Business Development
              </NavLink>

              <NavLink to="/courses/Youtube" className={dropdownLinkStyle}>
                YouTube Content Automation
              </NavLink>

              <NavLink to="/courses/SEO" className={dropdownLinkStyle}>
                (SEO) Search Engine Optimization
              </NavLink>

              <NavLink to="/courses/Computer" className={dropdownLinkStyle}>
                Computer Applications
              </NavLink>
            </div>
          </div>

          <NavLink to="/team" className={linkStyle}>
            Our Team
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden absolute right-5 text-3xl">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={isScrolled ? "text-black" : "text-white"}
          >
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* MOBILE SIDEBAR (HEIGHT CONTROLLED) */}
      <div
        className={`fixed top-0 right-0 w-[270px] z-50 transform transition-transform duration-300 overflow-y-auto max-h-[420px] mt-[75px] rounded-l-xl shadow-xl ${isOpen ? "translate-x-0" : "translate-x-full"
          } ${isScrolled ? "bg-white" : "bg-black"}`}
      >
        <div className="flex flex-col px-6 py-6 gap-4">

          <NavLink onClick={closeMenu} to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink onClick={closeMenu} to="/services" className={linkStyle}>
            Services
          </NavLink>


          {/* MOBILE COURSES DROPDOWN */}
          <div>
            <div className="flex items-center justify-between">
              <NavLink
                onClick={closeMenu}
                to="/courses"
                className={linkStyle}
              >
                Courses
              </NavLink>

              <button
                type="button"
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                className={`${isScrolled ? "text-black" : "text-white"
                  }`}
              >
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${mobileCoursesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
            </div>
            {mobileCoursesOpen && (
              <div className="mt-2 ml-3 flex flex-col gap-2">
                <NavLink onClick={closeMenu} to="/courses/web-app-development" className={linkStyle}>
                  Web App Development
                </NavLink>

                <NavLink onClick={closeMenu} to="/courses/mobile-app-development" className={linkStyle}>
                  Mobile App Development
                </NavLink>

                <NavLink onClick={closeMenu} to="/courses/python-machine-learning" className={linkStyle}>
                  Python & Machine Learning
                </NavLink>

                <NavLink onClick={closeMenu} to="/courses/graphic-designer" className={linkStyle}>
                  Graphic Designer
                </NavLink>

                <NavLink onClick={closeMenu} to="/courses/digital-marketing" className={linkStyle}>
                  Digital Marketing
                </NavLink>

                <NavLink onClick={closeMenu} to="/courses/business-development" className={linkStyle}>
                  Business Development
                </NavLink>

                {/* ✅ FIXED THESE 2 */}
                <NavLink onClick={closeMenu} to="/courses/Backend-Development-with-Python" className={linkStyle}>
                  Backend Development with Python
                </NavLink>

                <NavLink onClick={closeMenu} to="/courses/Data-Science-and-Automation-with-Python" className={linkStyle}>
                  Data Science and Automation with Python
                </NavLink>

              </div>
            )}
          </div>

          <NavLink onClick={closeMenu} to="/team" className={linkStyle}>
            Our Team
          </NavLink>

          <NavLink onClick={closeMenu} to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink onClick={closeMenu} to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
