import React, { useState } from "react";
import video from "../assets/images/video.mp4";
import request from "../assets/images/request.png";

import ClientSection from "../Components/Client";

import { FaArrowRight, FaLinkedinIn } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
import Footer from "../Components/Footer";

const platformCards = [
  {
    title: "Fiverr",
    desc: "Find my Fiverr gigs for creative solutions delivered quickly and professionally.",
    btn: "Hire Us on Fiverr",
    color: "#1DBF73",
    icon: <SiFiverr />,
    link: "https://www.fiverr.com/",
  },
  {
    title: "Upwork",
    desc: "Hire us on Upwork for quality-driven freelance services tailored to your needs.",
    btn: "Hire Us on Upwork",
    color: "#14A800",
    icon: <SiUpwork />,
    link: "https://www.upwork.com/",
  },
  {
    title: "LinkedIn",
    desc: "Connect with me on LinkedIn to explore opportunities and view journey.",
    btn: "Hire Us on LinkedIn",
    color: "#0A66C2",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/",
  },
];

const serviceCards = [
  {
    title: "Web App Development",
    border: "border-blue-100",
    circle: "bg-blue-100",
    shadow: "hover:shadow-[0px_25px_45px_rgba(59,130,246,0.25)]",
    desc: "Powerful development is more than coding — it’s about performance, security, and seamless flow. Our skilled developers turn ideas into fast, responsive, and scalable websites. Using modern frameworks and structured architecture, we create solutions that blend function with elegant design. Every line of code is optimized to improve speed, stability, and user experience.",
  },
  {
    title: "App Development",
    border: "border-emerald-100",
    circle: "bg-emerald-100",
    shadow: "hover:shadow-[0px_25px_45px_rgba(16,185,129,0.25)]",
    desc: "Smart development is more than features — it’s about performance, security, and smooth interaction. Our expert developers transform concepts into fast, responsive, and scalable mobile apps. Using modern frameworks and structured architecture, we build solutions that combine function with elegant design. Every element is refined to enhance speed, stability, and overall user experience.",
  },
  {
    title: "Python & Machine Learning",
    border: "border-violet-100",
    circle: "bg-violet-100",
    shadow: "hover:shadow-[0px_25px_45px_rgba(59,130,246,0.25)]",
    desc: "Smart innovation is more than data — it’s about logic, precision, and intelligent outcomes. Our experts use Python to build efficient, scalable, and data-driven solutions. With advanced algorithms and clean code structure, we create models that learn, adapt, and improve over time. Every process is refined to ensure accuracy, speed, and real-world performance.",
  },
  {
    title: "Graphic Designer",
    border: "border-orange-100",
    circle: "bg-orange-100",
    shadow: "hover:shadow-[0px_25px_45px_rgba(59,130,246,0.25)]",
    desc: "Creative design is more than visuals — it’s about emotion, clarity, and lasting impact. Our expert designers create visuals that are bold, elegant, and purpose-driven. Using modern tools and structured design systems, we craft graphics that balance creativity with powerful messaging. Every detail is refined to ensure consistency, engagement, and brand recognition — creating visuals that speak louder than words.",
  },
  {
    title: "Digital Marketing",
    border: "border-red-100",
    circle: "bg-red-100",
    shadow: "hover:shadow-[0px_25px_45px_rgba(59,130,246,0.25)]",
    desc: "Smart marketing is more than promotion — it’s about strategy, creativity, and measurable growth. Our skilled marketers design campaigns that are engaging, data-driven, and result-focused. Using modern tools and structured techniques, we connect brands with the right audience across every platform. Every campaign is refined to boost visibility, build trust, and drive meaningful conversions — turning awareness into real success.",
  },
  {
    title: "Business Development",
    border: "border-cyan-100",
    circle: "bg-cyan-100",
    shadow: "hover:shadow-[0px_25px_45px_rgba(59,130,246,0.25)]",
    desc: "Strategic growth is more than numbers — it’s about vision, connection, and long-term value. Our expert team builds strategies that are innovative, goal-driven, and result-oriented. Using modern tools and structured planning, we craft approaches that balance creativity with practical execution. Every step is refined to strengthen relationships, expand opportunities, and drive sustainable success.",
  },
  {
    title: "Backend Web Development With Python", 
    border: "border-cyan-100",
    circle: "bg-cyan-100",
    shadow: "hover:shadow-[0px_25px_45px_rgba(59,130,246,0.25)]",
    desc: "This course provides a comprehensive introduction to backend web development using Python. Learn how to build dynamic web applications, manage databases, create RESTful APIs, implement user authentication, and handle server-side logic. Gain practical experience with popular frameworks such as Django and Flask while developing secure, scalable, and efficient web solutions.",
  },
  {
    title: "Data Science & Automation With Python",
    border: "border-cyan-100",
    circle: "bg-cyan-100",
    shadow: "hover:shadow-[0px_25px_45px_rgba(59,130,246,0.25)]",
    desc: "This course introduces the fundamentals of data science and automation using Python. Learn how to collect, clean, analyze, and visualize data to extract meaningful insights. Explore automation techniques for repetitive tasks, data processing, and workflow optimization. Gain hands-on experience with popular Python libraries and tools used in real-world data-driven applications.",
  },
];

const faqs = [
  {
    question: "1. What courses do you offer at your institute?",
    answer:
      "We offer professional training in Web Development, App Development, Python & Machine Learning, Graphic Design, Business Development, and Digital Marketing — all designed to help students gain real-world skills.",
  },
  {
    question: "2. Do you provide practical, hands-on learning?",
    answer:
      "Yes, every course includes live projects and practical sessions. Students work on real client-based projects to build a strong portfolio and professional confidence.",
  },
  {
    question: "3. Can I work on client projects while learning?",
    answer:
      "Absolutely! We give our students opportunities to collaborate on real client work under expert guidance, helping them gain valuable industry experience.",
  },
  {
    question: "4. Do you offer online or in-person classes?",
    answer:
      "We offer both online and in-person classes with flexible schedules, allowing students to learn at their own pace while staying connected with mentors.",
  },
  {
    question: "5. Do you provide job or internship support after course completion?",
    answer:
      "Yes, we assist our students with internships, freelancing guidance, and job placement opportunities through our network of industry partners.",
  },
  {
    question: "6. Do you also provide services to businesses?",
    answer:
      "Yes, besides teaching, our professional team works directly with clients on projects like website creation, app development, branding, and digital marketing campaigns.",
  },
];

const HeroSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[80vh] lg:h-screen overflow-hidden">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden">
          <div className="absolute w-52 sm:w-72 h-52 sm:h-72 bg-[#56A49E]/20 blur-3xl rounded-full animate-pulse"></div>

          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-[#4FD1C5]/10 blur-3xl rounded-full -top-10 right-10 animate-pulse"></div>

          <h1 className="relative text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-[#56A49E] drop-shadow-[0_0_20px_rgba(86,164,158,0.5)] animate-[fadeUp_1s_ease]">
            Transforming Ideas Into <br />
            <span className="text-[#56A49E]">Digital Excellence</span>
          </h1>

          <div className="relative w-40 sm:w-56 md:w-80 h-[3px] mb-8 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#56A49E] to-transparent animate-[moveLine_2s_linear_infinite]"></div>
          </div>

          <p className="text-gray-200 text-base sm:text-lg md:text-2xl max-w-[900px] leading-relaxed animate-[fadeUp_1.2s_ease] px-2">
            We craft Fast, Secure & Scalable Web Apps, Mobile Applications and
            next-generation AI Solutions to accelerate your digital
            transformation.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="bg-white py-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 font-[Poppins]">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-[63px] text-black text-center">
            Our <span className="text-[#56A49E]">Services</span>
          </h2>

          <p className="text-black font-light text-base md:text-lg pt-6 text-center">
            We deliver innovative digital solutions that empower brands to grow
            and succeed. From startups to global businesses, our team <br />
            provides expert services built on creativity, strategy, and
            precision. Every project reflects our commitment <br />
            to quality, collaboration, and lasting results that go beyond
            expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-10 mt-4 w-full">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className={`w-full bg-white p-[35px] rounded-[28px] relative overflow-hidden transition-all duration-500 border ${service.border} hover:-translate-y-3 ${service.shadow}`}
            >
              <div
                className={`w-[120px] h-[120px] ${service.circle} rounded-full absolute -top-10 -right-10`}
              ></div>

              <h2 className="text-[#56A49E] text-[25px] mb-[18px] relative font-bold">
                {service.title}
              </h2>

              <p className="text-slate-600 leading-8 text-[15px] relative mb-8">
                {service.desc}
              </p>

              <a
                href="/contact"
                className="relative inline-flex justify-start px-6 py-2 text-sm font-medium rounded-full overflow-hidden w-fit bg-[#eed025] text-black transition-all duration-500 before:content-[''] before:absolute before:inset-0 before:bg-[#56A49E] before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-in-out before:rounded-full hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Us Now
                  <FaArrowRight className="text-[14px]" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Request Section */}
      <section className="relative w-full px-2 md:px-4 flex justify-center">
        <div
          className="relative w-full md:w-full   max-w-[1340px] min-h-[300px] md:min-h-[500px] flex items-center justify-center rounded-[20px] overflow-hidden bg-cover bg-center "
          style={{
            backgroundImage: `url(${request})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#145B55] to-[#56A49E]/60"></div>

          <div className="relative z-10 w-full max-w-3xl flex flex-col items-center justify-center gap-4 text-center px-6">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold ">
              Request a Customized
              <br className="hidden sm:block" />
              Solution for Your Business!
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-normal text-[#EDF2F4] ">
              Every business is unique. Request a tailored solution crafted
              specifically for your organization's challenges and goals.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 text-sm sm:text-base font-semibold text-black bg-[#eed025] rounded-full hover:bg-white hover:text-[#56A49E] transition-all duration-300 w-fit"
            >
              Contact Us
              <FaArrowRight className="text-[14px]" />
            </a>
          </div>
        </div>
      </section>

      <ClientSection />

      {/* Platforms Section */}
      <section className="w-full py-24 px-6 bg-[#f4f7fb] overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-[35px] font-bold text-[#39827C]">
            Collaborative Platforms
          </h2>

          <p className="text-black text-3xl md:text-[55px] mx-auto font-bold">
            Work with Us on Reliable{" "}
            <span className="text-[#39827C]">Networks</span>
          </p>
        </div>

        <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {platformCards.map((item, index) => (
            <div
              key={index}
              className="group relative h-[450px] rounded-[40px] overflow-hidden bg-white transition-all duration-700 hover:shadow-[0px_35px_80px_rgba(0,0,0,0.15)] border border-gray-300"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                  background: `linear-gradient(135deg, ${item.color}, #56A49E)`,
                }}
              ></div>

              <div
                className="absolute -top-24 -left-24 w-[260px] h-[260px] rounded-full blur-3xl opacity-20 group-hover:scale-150 transition-all duration-1000"
                style={{
                  background: item.color,
                }}
              ></div>

              <div
                className="absolute -bottom-24 -right-24 w-[220px] h-[220px] rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-all duration-1000"
                style={{
                  background: "#56A49E",
                }}
              ></div>

              <div className="absolute inset-[1px] rounded-[40px] bg-white/80 backdrop-blur-xl group-hover:bg-black/10 transition-all duration-700"></div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10">
                <div
                  className="relative w-[120px] h-[120px] rounded-full flex items-center justify-center text-[55px] text-white shadow-2xl transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-90"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, #56A49E)`,
                  }}
                >
                  <div className="absolute inset-0 rounded-full border-4 border-white/20 scale-125 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                  {item.icon}
                </div>

                <h3 className="mt-6 text-[38px] font-black text-black group-hover:text-white transition-all duration-500">
                  {item.title}
                </h3>

                <p className="mt-4 text-[16px] leading-8 text-gray-600 group-hover:text-white/90 transition-all duration-500">
                  {item.desc}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="relative overflow-hidden mt-10 px-8 py-3 rounded-full bg-black text-white font-semibold flex items-center gap-3 transition-all duration-500 hover:scale-105"
                >
                  <span
                    className="absolute top-0 left-[-100%] w-full h-full group-hover:left-0 transition-all duration-700"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, #56A49E)`,
                    }}
                  ></span>

                  <span className="relative z-10">{item.btn}</span>
                  <FaArrowRight className="relative z-10 text-[14px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="frequently-questions" className="bg-[#EDEDED]">
        <div className="w-full bg-[rgba(0,0,0,0.07)] shadow-lg rounded-lg p-6 flex flex-col items-center py-20">
          <h2 className="font-[Sora] sm:text-[50px] text-[25px] font-bold leading-[35px] sm:leading-[55px] pb-5 text-center">
            <span className="font-bold bg-gradient-to-r from-[#56A49E] to-[#56A49E] bg-clip-text text-transparent">
              Frequently
            </span>{" "}
            Asked Questions
          </h2>

          <div className="space-y-4 w-[94%] my-5">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center gap-4 p-4 bg-white hover:bg-gray-50 transition text-left"
                >
                  <span className="font-serif text-gray-800 font-[Sora]">
                    {faq.question}
                  </span>

                  <div className="bg-gradient-to-r from-[#FFE43E] to-[#56A49E] min-h-[30px] min-w-[35px] rounded-[5px] flex items-center justify-center">
                    <span className="text-white text-center text-[19px] font-bold">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 px-4 ${openIndex === index ? "max-h-[250px]" : "max-h-0"
                    }`}
                >
                  <p className="py-3 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes moveLine {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
      <Footer />
    </>
  );
};

export default HeroSection;