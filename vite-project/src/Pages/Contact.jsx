import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import ContactImg from "../assets/images/Contact.png";
import Footer from "../Components/Footer";

const Contact = () => {
  const [search, setSearch] = useState("");
  const [mapLocation, setMapLocation] = useState("New York");

  const handleSearch = () => {
    if (search.trim() !== "") {
      setMapLocation(search);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[200px] sm:h-[260px] md:h-[360px] flex items-center justify-center">
        <img
          src={ContactImg}
          alt="Contact"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#000000a4]"></div>

        <div className="relative z-10 text-center max-w-[900px] px-4">
          <h1 className="text-white text-[42px] md:text-[52px] font-bold">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-[#F8FAFC] py-14 px-4 overflow-hidden">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#111827] leading-tight">
              Let’s Build Something Amazing
            </h2>
          </div>

          {/* MAIN GRID (IMPROVED RESPONSIVE WIDTH) */}
          <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] xl:grid-cols-[480px_1fr] gap-6">

            {/* LEFT CARD */}
            <div className="relative bg-gradient-to-br from-[#30716C] to-[#245854] rounded-[28px] p-6 sm:p-8 text-white shadow-2xl overflow-hidden min-h-[650px] flex flex-col justify-between">

              <div className="absolute -top-16 -right-16 w-[200px] h-[200px] bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">

                <h3 className="text-[30px] sm:text-[34px] font-bold mb-4">
                  Get In Touch
                </h3>

                <p className="text-white/70 text-[14px] sm:text-[15px] leading-relaxed mb-10">
                  Have any questions? Feel free to contact us anytime.
                </p>

                {/* CONTACT ITEMS */}
                <div className="space-y-6">

                  <div className="flex items-start gap-4">
                    <div className="min-w-[50px] h-[50px] rounded-2xl bg-white/15 flex items-center justify-center">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[17px] mb-1">Address</h4>
                      <p className="text-white/75 text-[14px]">
                        Bahawalpur, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="min-w-[50px] h-[50px] rounded-2xl bg-white/15 flex items-center justify-center">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[17px] mb-1">Phone</h4>
                      <p className="text-white/75 text-[14px]">
                        03063910240
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="min-w-[50px] h-[50px] rounded-2xl bg-white/15 flex items-center justify-center">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[17px] mb-1">Email</h4>
                      <p className="text-white/75 text-[14px]">
                        Intellixsoft.inc@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="min-w-[50px] h-[50px] rounded-2xl bg-white/15 flex items-center justify-center">
                      <FaClock />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[17px] mb-1">Open Time</h4>
                      <p className="text-white/75 text-[14px]">
                        Monday - Friday : 10:00 - 20:00
                      </p>
                    </div>
                  </div>

                </div>

                {/* SOCIAL ICONS */}
                <div className="mt-10">
                  <h4 className="font-semibold text-[20px] mb-4">
                    Stay Connected
                  </h4>

                  <div className="flex gap-3 flex-wrap">

                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                      <div className="w-[46px] h-[46px] rounded-2xl bg-white text-[#30716C] flex items-center justify-center hover:bg-[#EED025] hover:-translate-y-1 transition">
                        <FaFacebookF />
                      </div>
                    </a>

                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                      <div className="w-[46px] h-[46px] rounded-2xl bg-white text-[#30716C] flex items-center justify-center hover:bg-[#EED025] hover:-translate-y-1 transition">
                        <FaTwitter />
                      </div>
                    </a>

                    <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                      <div className="w-[46px] h-[46px] rounded-2xl bg-white text-[#30716C] flex items-center justify-center hover:bg-[#EED025] hover:-translate-y-1 transition">
                        <FaPinterestP />
                      </div>
                    </a>

                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                      <div className="w-[46px] h-[46px] rounded-2xl bg-white text-[#30716C] flex items-center justify-center hover:bg-[#EED025] hover:-translate-y-1 transition">
                        <FaInstagram />
                      </div>
                    </a>

                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                      <div className="w-[46px] h-[46px] rounded-2xl bg-white text-[#30716C] flex items-center justify-center hover:bg-[#EED025] hover:-translate-y-1 transition">
                        <FaYoutube />
                      </div>
                    </a>

                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full bg-white flex flex-col justify-center p-6 sm:p-10 rounded-[28px] shadow-2xl">

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Have A Project In Mind? Let's Talk!
              </h2>

              <form className="space-y-4 sm:space-y-5">

                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">

                  <input className="w-full border border-gray-300 rounded-lg p-3" placeholder="Full Name *" />

                  <input className="w-full border border-gray-300 rounded-lg p-3" placeholder="Email *" />

                </div>

                <input className="w-full border border-gray-300 rounded-lg p-3" placeholder="Phone *" />

                <input className="w-full border border-gray-300 rounded-lg p-3" placeholder="Subject *" />

                <textarea className="w-full border border-gray-300 rounded-lg p-3" rows="4" placeholder="Message *"></textarea>

                <button className="py-3 px-6 rounded-md text-black bg-[#eed025] font-semibold hover:bg-[#56A49E] hover:text-white transition">
                  Submit
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;