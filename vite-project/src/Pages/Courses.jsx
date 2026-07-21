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
      title: "Website Development",
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
      title: "Backend Web Development With Python",
      details: [
        {
          lecture: "Lecture 1: Introduction to Backend Development with Python",
          desc: "This lecture explains the fundamentals of backend development, server-side programming, how websites communicate with servers, and the role of Python in building powerful web applications.",
        },
        {
          lecture: "Lecture 2: Python Programming Fundamentals",
          desc: "Students learn core Python concepts including variables, data types, functions, object-oriented programming, error handling, and writing clean and efficient backend code.",
        },
        {
          lecture: "Lecture 3: Django & Flask Framework Basics",
          desc: "This lecture introduces popular Python web frameworks like Django and Flask, covering project structure, routing, views, templates, and building scalable web applications.",
        },
        {
          lecture: "Lecture 4: Database Integration & API Development",
          desc: "Students learn how to connect applications with databases, perform CRUD operations, design REST APIs, handle data securely, and integrate backend services with frontend applications.",
        },
        {
          lecture: "Lecture 5: Authentication, Security & Deployment",
          desc: "The final lecture covers user authentication, authorization, security best practices, server deployment, performance optimization, and preparing Python applications for production.",
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
      title: "Data Science & Automation",
      details: [
        {
          lecture: "Lecture 1: Introduction to Data Science & Automation",
          desc: "This lecture explains the fundamentals of data science, automation concepts, the importance of data-driven decision making, and how Python is used to analyze data and automate business processes.",
        },
        {
          lecture: "Lecture 2: Python for Data Analysis",
          desc: "Students learn Python libraries like NumPy, Pandas, and Matplotlib to clean, process, analyze, and visualize datasets for extracting meaningful insights.",
        },
        {
          lecture: "Lecture 3: Data Visualization & Insights",
          desc: "This lecture covers creating charts, graphs, and interactive visualizations to understand data patterns, identify trends, and support better business decisions.",
        },
        {
          lecture: "Lecture 4: Machine Learning & Predictive Analytics",
          desc: "Students learn the basics of machine learning algorithms, model training, prediction techniques, and how intelligent systems can solve real-world problems.",
        },
        {
          lecture: "Lecture 5: Automation & Workflow Optimization",
          desc: "The final lecture covers task automation, data processing pipelines, API automation, and building efficient workflows that save time and improve productivity.",
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
      title: "E-Commerce & Shopify",
      details: [
        {
          lecture: "Lecture 1: Introduction to E-Commerce & Shopify",
          desc: "This lecture explains the fundamentals of e-commerce, online business models, Shopify platform basics, and how digital stores help businesses sell products globally.",
        },
        {
          lecture: "Lecture 2: Shopify Store Setup & Customization",
          desc: "Students learn how to create and configure Shopify stores, customize themes, manage layouts, add products, and build a professional online shopping experience.",
        },
        {
          lecture: "Lecture 3: Product Management & Store Features",
          desc: "This lecture covers product listings, categories, inventory management, pricing strategies, collections, customer accounts, and essential e-commerce store features.",
        },
        {
          lecture: "Lecture 4: Payment Integration & E-Commerce Optimization",
          desc: "Students learn about payment gateways, checkout processes, shipping settings, security practices, and techniques to improve store performance and customer experience.",
        },
        {
          lecture: "Lecture 5: SEO, Marketing & Shopify Store Growth",
          desc: "The final lecture covers Shopify SEO, digital marketing strategies, analytics tracking, conversion optimization, and methods to scale an online store successfully.",
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
      title: "YouTube Content Automation",
      details: [
        {
          lecture: "Lecture 1: Introduction to YouTube Content Automation",
          desc: "This lecture explains the basics of YouTube automation, channel management, content creation workflows, and how automation helps creators build and scale successful YouTube channels.",
        },
        {
          lecture: "Lecture 2: Content Research & Video Strategy",
          desc: "Students learn how to research trending topics, analyze competitors, identify profitable niches, and create effective content strategies to attract and engage audiences.",
        },
        {
          lecture: "Lecture 3: Script Writing & AI Content Creation",
          desc: "This lecture covers script writing techniques, storytelling methods, AI-powered content tools, and creating engaging video scripts that improve audience retention.",
        },
        {
          lecture: "Lecture 4: Video Production & YouTube SEO",
          desc: "Students learn video editing workflows, thumbnail creation, title optimization, keyword research, descriptions, tags, and SEO techniques to increase video visibility.",
        },
        {
          lecture: "Lecture 5: Channel Growth & Automation Management",
          desc: "The final lecture covers content scheduling, analytics tracking, audience growth strategies, workflow automation, and techniques to build a scalable YouTube channel.",
        },
      ],
    },


    {
      title: "Search Engine Optimization (SEO)",
      details: [
        {
          lecture: "Lecture 1: Introduction to SEO & Search Engines",
          desc: "This lecture explains the fundamentals of SEO, how search engines work, ranking factors, and the importance of organic search visibility for websites and online businesses.",
        },
        {
          lecture: "Lecture 2: Keyword Research & SEO Strategy",
          desc: "Students learn how to find profitable keywords, analyze search intent, study competitors, and create effective SEO strategies to target the right audience.",
        },
        {
          lecture: "Lecture 3: On-Page SEO Optimization",
          desc: "This lecture covers optimizing website content, meta titles, descriptions, headings, images, URLs, internal links, and other elements to improve search rankings.",
        },
        {
          lecture: "Lecture 4: Technical SEO & Off-Page Optimization",
          desc: "Students learn technical SEO practices including website speed, mobile optimization, indexing, backlinks, domain authority, and external ranking improvements.",
        },
        {
          lecture: "Lecture 5: SEO Analytics & Growth Optimization",
          desc: "The final lecture covers SEO tools, traffic analysis, ranking tracking, performance reports, and strategies to achieve long-term organic growth.",
        },
      ],
    },
    {
      title: "Computer Applications & Office Solutions",
      details: [
        {
          lecture: "Lecture 1: Introduction to Computer Applications",
          desc: "This lecture explains the fundamentals of computer applications, office productivity tools, and how software solutions help improve business, educational, and professional workflows.",
        },
        {
          lecture: "Lecture 2: Microsoft Word & Document Management",
          desc: "Students learn how to create professional documents, format text, design reports, manage tables, insert images, and use advanced MS Word features for effective documentation.",
        },
        {
          lecture: "Lecture 3: Microsoft Excel & Data Management",
          desc: "This lecture covers Excel basics, formulas, functions, data organization, charts, tables, and techniques for analyzing and managing information efficiently.",
        },
        {
          lecture: "Lecture 4: Microsoft PowerPoint & Presentation Design",
          desc: "Students learn how to create professional presentations using slides, layouts, animations, graphics, and visual design techniques to deliver impactful content.",
        },
        {
          lecture: "Lecture 5: Office Automation & Productivity Skills",
          desc: "The final lecture covers advanced Office tools, file management, productivity techniques, digital workflows, and best practices for improving daily computer-based tasks.",
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