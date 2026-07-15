import React, { useState } from "react";
import section from "../assets/images/section.png";
import Footer from "../Components/Footer";

const BookIcon = () => {
  return (
    <span className="w-7 h-7 rounded-lg bg-gradient-to-r from-[#145B55]/10 to-[#56A49E]/10 text-[#145B55] flex items-center justify-center border border-[#56A49E]/30 group-hover:scale-110 group-hover:bg-[#145B55] group-hover:text-white transition-all duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.5c-1.7-1-3.7-1.5-6-1.5v13c2.3 0 4.3.5 6 1.5m0-13c1.7-1 3.7-1.5 6-1.5v13c-2.3 0-4.3.5-6 1.5m0-13v13"
        />
      </svg>
    </span>
  );
};

const SkillDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const courses = [
    {
      title: "Web App Development",
      details: [
        {
          lecture: "Lecture 1: Introduction to Web Development",
          desc: "This lecture introduces students to modern web development, including how websites and web applications work. Learners understand frontend, backend, browsers, servers, and the complete development workflow.",
        },
        {
          lecture: "Lecture 2: HTML, CSS, and Responsive Design",
          desc: "Students learn how to build clean page structures using HTML and style them with CSS. This lecture also covers responsive layouts, media queries, and mobile-friendly design principles.",
        },
        {
          lecture: "Lecture 3: JavaScript Fundamentals",
          desc: "This lecture focuses on JavaScript basics including variables, functions, arrays, objects, events, DOM manipulation, and interactive website behavior.",
        },
        {
          lecture: "Lecture 4: React JS and Component-Based Development",
          desc: "Students learn how to build modern user interfaces using React. This lecture covers components, props, state, events, routing, and reusable UI structure.",
        },
        {
          lecture: "Lecture 5: Project Building and Deployment",
          desc: "The final lecture guides students in building a complete web application and deploying it online using platforms like Vercel or Netlify. Students also learn basic GitHub project management.",
        },
      ],
    },
    {
      title: "Mobile App Development",
      details: [
        {
          lecture: "Lecture 1: Introduction to Mobile App Development",
          desc: "This lecture explains the basics of mobile app development, types of mobile apps, Android and iOS platforms, and how mobile applications solve real-world business problems.",
        },
        {
          lecture: "Lecture 2: UI Design for Mobile Apps",
          desc: "Students learn how to design clean and user-friendly mobile screens. This lecture covers layouts, navigation, buttons, forms, and mobile user experience principles.",
        },
        {
          lecture: "Lecture 3: App Development Fundamentals",
          desc: "This lecture introduces the core concepts of mobile development including components, screens, state management, user input, and app navigation.",
        },
        {
          lecture: "Lecture 4: API Integration and Data Handling",
          desc: "Students learn how mobile apps connect with APIs, fetch data, submit forms, and display dynamic content inside the application.",
        },
        {
          lecture: "Lecture 5: Testing and App Deployment",
          desc: "The final lecture covers app testing, debugging, performance checking, and preparing mobile apps for launch on app stores or client delivery.",
        },
      ],
    },
    {
      title: "Python and Machine Learning",
      details: [
        {
          lecture: "Lecture 1: Introduction to Python Programming",
          desc: "This lecture introduces Python programming and its importance in automation, data science, and machine learning. Students learn variables, data types, conditions, loops, and functions.",
        },
        {
          lecture: "Lecture 2: Data Handling with Python",
          desc: "Students learn how to work with data using Python libraries. This lecture covers lists, dictionaries, file handling, and basic data cleaning concepts.",
        },
        {
          lecture: "Lecture 3: Introduction to Machine Learning",
          desc: "This lecture explains what machine learning is, how models learn from data, and where machine learning is used in real-world applications.",
        },
        {
          lecture: "Lecture 4: Model Training and Evaluation",
          desc: "Students learn how to train simple machine learning models, split data, test accuracy, and understand model performance using practical examples.",
        },
        {
          lecture: "Lecture 5: AI Project and Real-World Use Cases",
          desc: "The final lecture focuses on building a small machine learning project and understanding how AI solutions can be integrated into websites, apps, and business systems.",
        },
      ],
    },
    {
      title: "Graphic Designing",
      details: [
        {
          lecture: "Lecture 1: Introduction to Graphic Design",
          desc: "This lecture provides an overview of the world of graphic design, its importance in modern communication, and how creativity blends with technology. Students learn the basics of visual storytelling, design principles, and the role of a designer in shaping brand identity.",
        },
        {
          lecture: "Lecture 2: Understanding Design Tools",
          desc: "In this lecture, learners explore popular graphic design tools such as Adobe Photoshop, Illustrator, and Canva. They gain hands-on understanding of how these tools are used to create logos, posters, and digital artwork efficiently and professionally.",
        },
        {
          lecture: "Lecture 3: Color, Typography, and Layout",
          desc: "This lecture dives into the essentials of visual aesthetics. Students study the psychology of color, the art of selecting fonts, and how to structure layouts that capture attention and convey the right message.",
        },
        {
          lecture: "Lecture 4: Branding and Creative Projects",
          desc: "Students discover how design connects with branding. This lecture covers creating brand identities, logos, and marketing materials that reflect business values.",
        },
        {
          lecture: "Lecture 5: Portfolio Development and Freelancing Skills",
          desc: "The final lecture guides learners in building a professional design portfolio and exploring freelancing opportunities. Students learn how to present their work, deal with clients, set pricing, and grow a sustainable design career.",
        },
      ],
    },
    {
      title: "Digital Marketing",
      details: [
        {
          lecture: "Lecture 1: Introduction to Digital Marketing",
          desc: "This lecture introduces the core concepts of digital marketing and explains how businesses use online platforms to build awareness, attract customers, and increase sales.",
        },
        {
          lecture: "Lecture 2: Social Media Marketing",
          desc: "Students learn how to create effective marketing strategies for platforms like Facebook, Instagram, LinkedIn, and TikTok. This lecture covers content planning, audience targeting, and engagement.",
        },
        {
          lecture: "Lecture 3: Search Engine Optimization",
          desc: "This lecture explains how SEO helps websites rank better on search engines. Students learn keyword research, on-page SEO, technical SEO, and content optimization.",
        },
        {
          lecture: "Lecture 4: Paid Ads and Campaign Management",
          desc: "Students learn the basics of paid advertising, campaign setup, audience selection, budget planning, and performance tracking for better marketing results.",
        },
        {
          lecture: "Lecture 5: Analytics and Marketing Strategy",
          desc: "The final lecture covers how to measure campaign performance using analytics tools. Students learn how to improve marketing strategies based on data and user behavior.",
        },
      ],
    },
    {
      title: "Business Development",
      details: [
        {
          lecture: "Lecture 1: Introduction to Business Development",
          desc: "This lecture explains the role of business development in company growth. Students learn how businesses identify opportunities, build relationships, and create long-term value.",
        },
        {
          lecture: "Lecture 2: Market Research and Strategy",
          desc: "Students learn how to research markets, understand customer needs, analyze competitors, and create effective business growth strategies.",
        },
        {
          lecture: "Lecture 3: Client Communication and Lead Generation",
          desc: "This lecture focuses on finding potential clients, writing professional messages, handling client communication, and building strong business relationships.",
        },
        {
          lecture: "Lecture 4: Sales Process and Proposal Writing",
          desc: "Students learn how to manage the sales pipeline, prepare business proposals, present services, negotiate deals, and convert leads into clients.",
        },
        {
          lecture: "Lecture 5: Freelancing and Business Growth",
          desc: "The final lecture guides students on freelancing platforms, personal branding, client retention, pricing strategies, and scaling business opportunities.",
        },
      ],
    },
    {
      title: "Backend Web Development with Python",
      details: [
        {
          lecture: "Lecture 1: Introduction to Backend Web Development with Python",
          desc: "This lecture explains the fundamentals of backend development and the role of Python in building server-side applications. Students learn how web applications work, client-server architecture, and how backend systems power modern websites.",
        },
        {
          lecture: "Lecture 2: Python Basics for Backend Development",
          desc: "Students learn core Python concepts required for backend development including variables, functions, loops, error handling, and working with libraries to build a strong programming foundation.",
        },
        {
          lecture: "Lecture 3: Working with Databases and APIs",
          desc: "This lecture focuses on database management using SQL/NoSQL systems and how to connect applications with APIs. Students learn how to store, retrieve, and manage data efficiently.",
        },
        {
          lecture: "Lecture 4: Web Frameworks (Django & Flask)",
          desc: "Students explore popular Python frameworks like Django and Flask to build dynamic web applications, handle routing, create models, and develop secure backend systems.",
        },
        {
          lecture: "Lecture 5: Authentication, Deployment & Project Development",
          desc: "The final lecture covers user authentication, security practices, and deploying web applications. Students also build a complete backend project using Python from start to finish.",
        },
      ],
    },
    {
      title: "Data Science and Automation with Python",
      details: [
        {
          lecture: "Lecture 1: Introduction to Data Science & Automation with Python",
          desc: "This lecture explains the basics of data science and automation using Python. Students learn how data is used in modern industries and how automation improves efficiency and reduces manual work.",
        },
        {
          lecture: "Lecture 2: Python for Data Handling",
          desc: "Students learn Python fundamentals for data science including working with lists, dictionaries, NumPy, and Pandas to collect, clean, and organize data effectively.",
        },
        {
          lecture: "Lecture 3: Data Analysis and Visualization",
          desc: "This lecture focuses on finding potential clients, writing professional messages, handling client communication, and building strong business relationships.",
        },
        {
          lecture: "Lecture 4: Automation Techniques with Python",
          desc: "Students learn how to automate repetitive tasks such as file handling, web scraping, data entry, and report generation to save time and improve productivity.",
        },
        {
          lecture: "Lecture 5: Real-World Projects and Data Insights",
          desc: "The final lecture covers practical projects where students apply data science and automation skills to real datasets and generate meaningful business insights.",
        },
      ],
    },
  ];

  const handleCourseClick = (index) => {
    if (courses[index].details) {
      setActiveIndex(activeIndex === index ? null : index);
    } else {
      setActiveIndex(null);
    }
  };

  return (
    <section className="relative w-full bg-white py-14 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl lg:text-[66px] font-extrabold text-black leading-tight"
          style={{
            textShadow: "5px 6px 10px rgba(0,0,0,0.35)",
          }}
        >
          Skill Development Program
        </h1>

        {/* Paragraph */}
        <p className="mt-6 max-w-4xl text-[#0b1f44] text-base md:text-lg leading-7">
          Discover our expertly designed courses that enhance your skills, boost
          your knowledge, and prepare you <br className="hidden md:block" />
          for real-world professional success.
        </p>

        {/* Course List */}
        <div className="mt-10 w-full border border-gray-300">
          {courses.map((course, index) => (
            <div key={index}>
              {/* Course Item */}
              <div
                onClick={() => handleCourseClick(index)}
                className={`group flex items-center justify-between px-3 py-3 text-black text-base font-normal cursor-pointer transition-all duration-300 ${index !== courses.length - 1 ? "border-b border-gray-300" : ""
                  } ${activeIndex === index
                    ? "border-2 border-black"
                    : "hover:bg-gray-100"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span>{course.title}</span>
                  <BookIcon />
                </div>

                <span className="text-[#145B55] text-xl font-semibold transition-all duration-300 group-hover:translate-x-1">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Course Details */}
              {activeIndex === index && course.details && (
                <div className="px-6 md:px-10 py-6 text-center border-b border-gray-300">
                  {course.details.map((item, i) => (
                    <div key={i} className="mb-6 last:mb-0">
                      <h3 className="font-bold text-[#0b1f44] text-base">
                        {item.lecture}
                      </h3>

                      <p className="mt-2 text-[#0b1f44] text-base leading-7">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseBanner = () => {
  return (
    <>
      <section
        className="relative w-full min-h-[200px] sm:min-h-[350px] md:min-h-[200px] py-6 sm:py-6 md:py-20 px-2 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${section})`,
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-[36px] text-white leading-tight">
            Empower Your Future with Industry-Ready Skills
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-white text-base md:text-lg leading-7">
            Learn from experts and build real-world projects in Web Development,
            App <br />
            Development, Python & ML, Graphic Design, Business Development, and
            Digital <br />
            Marketing.
          </p>

          <div className="mt-7 flex justify-center">
            <a
              href="/WebAppDevelopment"
              className="w-fit cursor-pointer py-3 px-6 rounded-md text-black bg-[#eed025] font-[Sora] font-semibold text-sm sm:text-base hover:text-white transition ease-in-out duration-300 hover:bg-[#56A49E]"
            >
              Explore Courses
            </a>
          </div>
        </div>
      </section>

      <div id="skill-development">
        <SkillDevelopment />
      </div>
      <section className="w-full bg-gray-100 py-20 px-6 md:px-16 ">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Let’s Build Something <br />
              <span className="text-teal-600">Great Together.</span>
            </h1>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Whether you’re launching a product, upgrading systems, or exploring new
              ideas, we help you turn your vision into reality.
            </p>

            <h3 className="mt-6 font-semibold text-gray-900">
              Contact us now and get:
            </h3>

            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>✔ A customized project roadmap</li>
              <li>✔ Expert guidance on tech stack & budget</li>
              <li>✔ Dedicated consultation with experts</li>
            </ul>
          </div>

          {/* RIGHT FORM (COMPACT PROFESSIONAL) */}
          <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-100 p-5 md:p-6 transition-all duration-300 hover:shadow-[14px_14px_0px_rgba(20,91,85,0.15)]">

            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#145B55] to-[#56A49E]"></div>

            {/* Decorative Background Circles */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#56A49E]/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-yellow-400/10 rounded-full"></div>

            {/* Form Header */}
            <div className="relative text-center mb-4 pt-2">
              <h2 className="text-xl font-bold text-gray-900">
                Get In Touch
              </h2>

              <p className="text-gray-500 text-xs mt-1">
                Tell us about your project. We reply within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form className="relative space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:bg-white focus:border-[#56A49E] focus:ring-2 focus:ring-[#56A49E]/20 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:bg-white focus:border-[#56A49E] focus:ring-2 focus:ring-[#56A49E]/20 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:bg-white focus:border-[#56A49E] focus:ring-2 focus:ring-[#56A49E]/20 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details
                </label>
                <textarea
                  rows="3"
                  placeholder="Briefly describe your project"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:bg-white focus:border-[#56A49E] focus:ring-2 focus:ring-[#56A49E]/20 transition resize-none"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[25%] bg-[#eed025] hover:bg-[#56A49E] hover:text-white text-black font-semibold py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Submit
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 ">
                Your information is safe with us.
              </p>
            </form>
          </div>
        </div>
      </section>
      <Footer />

    </>
  );
};

export default CourseBanner;