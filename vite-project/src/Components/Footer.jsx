import React from "react";
import { Link } from "react-router-dom";
import myimage from "../assets/images/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const services = [
    "Mobile App Development",
    "Web App Development",
    "UI/UX Design",
    "SaaS Product Development",
    "Custom Chatbot Development",
    "Custom ChatGPT App Development",
    "Digital Marketing",
    "Search Engine Optimization",
  ];

  const quickLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Courses",
      path: "/courses",
    },
    {
      name: "Our Team",
      path: "/team",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <footer className="bg-[#30716C] text-white px-5 md:px-14 pt-7 pb-3 relative overflow-hidden">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center">
        <Link to="/" onClick={scrollToTop}>
          <img
            src={myimage}
            alt="Logo"
            className="h-[70px] object-contain cursor-pointer"
          />
        </Link>
      </div>

      <div className="w-full h-[1px] bg-white/20 my-5"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Services */}
        <div>
          <h3 className="text-[18px] font-semibold mb-4 relative inline-block cursor-pointer">
            Services
            <span className="absolute left-0 bottom-[-5px] w-[35px] h-[2px] bg-[#EED025]"></span>
          </h3>

          <ul className="space-y-2 text-[13px] text-white/90">
            {services.map((item, index) => (
              <li key={index}>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="inline-block hover:tracking-[1px] transition-all ease-in-out duration-300 cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[18px] font-semibold mb-4 relative inline-block cursor-pointer">
            Quick Links
            <span className="absolute left-0 bottom-[-5px] w-[35px] h-[2px] bg-[#EED025]"></span>
          </h3>

          <ul className="space-y-2 text-[13px] text-white/90">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={scrollToTop}
                  className="inline-block hover:tracking-[1px] transition-all ease-in-out duration-300 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-[18px] font-semibold mb-4 relative inline-block cursor-pointer">
            Get in Touch
            <span className="absolute left-0 bottom-[-5px] w-[35px] h-[2px] bg-[#EED025]"></span>
          </h3>

          <div className="space-y-2 text-[13px] text-white/90">
            <p>
              <span className="font-semibold text-white">Email:</span>
              <br />
              <a
                href="mailto:officialintelliixSoft@gmail.com"
                className="hover:tracking-[1px] transition-all ease-in-out duration-300"
              >
               Intellixsoft.inc@gmail.com
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">Phone:</span>
              <br />
              <a
                href="tel:+3336454377"
                className="hover:tracking-[1px] transition-all ease-in-out duration-300"
              >
                03063910240
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">Location:</span>
              <br />
              Bahawalpur, Pakistan
            </p>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="w-[36px] h-[36px] rounded-full bg-white text-[#30716C] flex items-center justify-center text-[14px]  hover:bg-[#EED025] hover:text-white hover:tracking-[1px] transition-all ease-in-out duration-300 cursor-pointer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="w-[36px] h-[36px] rounded-full bg-white text-[#30716C] flex items-center justify-center text-[14px] hover:bg-[#EED025] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="w-[36px] h-[36px] rounded-full bg-white text-[#30716C] flex items-center justify-center text-[14px] hover:bg-[#EED025] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[18px] font-semibold mb-4 relative inline-block">
            Newsletter
            <span className="absolute left-0 bottom-[-5px] w-[35px] h-[2px] bg-[#EED025]"></span>
          </h3>

          <p className="text-[13px] text-white/80 leading-6 mb-4">
            At IntelliixSoft, we turn ideas into powerful digital realities.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center overflow-hidden rounded-[5px] border border-white/30 bg-white/10 backdrop-blur-md hover:border-[#EED025] transition-all duration-500"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-4 py-2.5 text-white placeholder:text-white/60 outline-none text-[13px]"
            />

            <Link to="/">
              <button
                type="submit"
                className="bg-[#EED025] min-w-[100px] h-[42px] text-black text-[13px] font-semibold transition-all duration-500 hover:bg-[#bf8a37] hover:text-white cursor-pointer"
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>

      <div className="w-full h-[1px] bg-white/20 my-5"></div>

      <div className="text-center text-white/70 text-[12px]">
        © 2025 IntelliixSoft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;