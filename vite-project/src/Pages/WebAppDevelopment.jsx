import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const HeroSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const cardData = [
    {
      title: "Frontend Development",
      desc: `Transform static designs into interactive websites. Learn HTML5, CSS3, and JavaScript to build responsive layouts and user interfaces. Master modern frameworks like React.js to create dynamic web applications with smooth user experiences.`,
      points: [
        "Responsive web design using HTML5 & CSS3",
        "Interactive websites with JavaScript",
        "Modern web apps using React.js",
        "Styling and layout with Tailwind CSS",
        "Optimizing UI for performance and speed",
      ],
    },
    {
      title: "Backend Development",
      desc: `Power the web behind the scenes. Learn to handle server-side logic, manage databases, and build secure APIs. Gain skills to create scalable, high-performance backend systems that support modern web applications.`,
      points: [
        "Server-side programming with Node.js & Express.js",
        "Database management: MongoDB, SQL/NoSQL",
        "REST API design and integration",
        "Authentication and secure data handling",
        "Building scalable backend applications",
      ],
    },
    {
      title: "Full-Stack Development",
      desc: `Become a complete developer by combining frontend and backend skills. Build dynamic web apps from scratch, integrate databases, implement authentication, and deploy full-stack solutions that work seamlessly for users.`,
      points: [
        "Frontend: HTML5, CSS3, JavaScript, React.js",
        "Backend: Node.js, Express.js",
        "Database integration with MongoDB",
        "Authentication and secure APIs",
        "Deploying full-stack applications",
      ],
    },
  ];

  const modules = [
    {
      title: "Module 1: Introduction to Web Development",
      points: [
        "Understanding the web ecosystem (Frontend, Backend, Full-Stack)",
        "Front-end vs Back-end development roles",
        "Essential tools and setup (VS Code, Node.js, Git)",
      ],
      tech: "VS Code, Node.js, Git, Browsers",
    },
    {
      title: "Module 2: HTML5 & CSS3 Fundamentals",
      points: [
        "Semantic HTML structure (headings, forms, lists)",
        "CSS styling, layouts, Flexbox & Grid",
        "Responsive design for mobile, tablet, and desktop",
        "Mini project: Personal portfolio website",
      ],
      tech: "HTML5, CSS3, TailwindCSS, Bootstrap",
    },
    {
      title: "Module 3: JavaScript (Beginner to Advanced)",
      points: [
        "Core JavaScript concepts (variables, loops, functions)",
        "DOM manipulation and events (Frontend)",
        "APIs and async programming (Frontend + Backend basics)",
        "Mini project: Interactive web app (To-Do App, Calculator)",
      ],
      tech: "JavaScript (ES6+), Fetch API, JSON, Node.js basics",
    },
    {
      title: "Module 4: Frontend Framework (React.js)",
      points: [
        "Component-based architecture (React Components, Props, State)",
        "Hooks, routing, and UI optimization",
        "Mini project: Single-page React application",
      ],
      tech: "React.js, JSX, React Router, TailwindCSS",
    },
    {
      title: "Module 5: Backend Development (Node.js & Express)",
      points: [
        "Server-side logic and Express.js setup",
        "Database integration with MongoDB",
        "APIs, authentication, and CRUD operations",
      ],
      tech: "Node.js, Express.js, MongoDB, REST APIs, JWT",
    },
    {
      title: "Module 6: Version Control & Deployment",
      points: [
        "Git and GitHub for version control and collaboration",
        "Deploying frontend apps (Netlify, Vercel)",
        "Deploying full-stack apps (Render, Heroku)",
      ],
      tech: "Git, GitHub, Netlify, Vercel, Render, Heroku",
    },
    {
      title: "Module 7: Final Project & Certification",
      points: [
        "Build a complete full-stack project (Frontend + Backend)",
        "Project presentation and review",
        "Certificate of completion",
      ],
      tech: "React.js, Node.js, Express.js, MongoDB, TailwindCSS",
    },
  ];

  const faqs = [
    {
      question: "Do I need prior experience?",
      answer:
        "No prior experience needed. This course starts from basics to advanced step-by-step.",
    },
    {
      question: "What is the course duration?",
      answer: "The course lasts 3–6 months depending on your pace.",
    },
    {
      question: "Is there a certificate?",
      answer: "Yes, a certificate is provided upon successful completion.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become a Professional Web Developer
          </h1>

          <p className="text-lg md:text-xl mb-6">
            Learn. Build. Launch your web development career with confidence.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mt-6">
            <a href="/contact">
              <button className="py-3 px-6 rounded-md text-black bg-[#eed025] border border-[#eed025] font-semibold hover:text-white hover:bg-[#56A49E] transition duration-300">
                Enroll Now
              </button>
            </a>

            <a href="#outline">
              <button className="py-3 px-6 rounded-md text-white bg-black font-semibold hover:bg-[#56A49E] transition duration-300">
                View Outline
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* COURSE OVERVIEW */}
      <section className="py-16 bg-gradient-to-r from-[#114a45] to-[#56A49E] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Course Overview
          </h2>

          <p className="leading-relaxed text-center max-w-3xl mx-auto">
            The Web Development course at <strong>Intellix Soft</strong> transforms beginners into professional developers. You’ll learn front-end and back-end technologies including HTML, CSS, JavaScript, React, and Node.js through practical, project-based lessons.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION (FULL FIXED FRAMER MOTION HOVER) */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black text-center"
          >
            Our <span className="text-[#357873]">Services</span>
          </motion.h2>

          <p className="text-center mt-4 max-w-2xl mx-auto">
            We deliver innovative digital solutions that empower brands to grow and succeed. From startups to global businesses, our team provides expert services built on creativity, strategy, and precision. Every project reflects our commitment to quality, collaboration, and lasting results that go beyond expectations.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {cardData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.07, y: -10 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full min-h-[420px]"
              >
                <h3 className="text-xl font-bold text-black mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4">{item.desc}</p>

                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* COURSE OUTLINE */}
      <section id="outline" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Course Outline
          </h2>

          <div className="space-y-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {module.title}
                </h3>

                <ul className="list-disc pl-6 text-gray-700 mb-3 space-y-1">
                  {module.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <p className="text-gray-500">
                  <strong>Technologies:</strong> {module.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE DETAILS */}
      <section className="py-16 bg-black">
        <div className="px-6 flex items-center justify-start md:flex-nowrap flex-wrap sm:gap-20 gap-10">

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Course Details
            </h2>

            <ul className="space-y-2 text-white">
              <li><strong>Duration:</strong> 3 – 6 months</li>
              <li><strong>Mode:</strong> Online / On-Campus</li>
              <li><strong>Level:</strong> Beginner to Advanced</li>
              <li><strong>Projects:</strong> 5+ Live Projects</li>
              <li><strong>Certificate:</strong> Provided upon completion</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Career Opportunities
            </h2>

            <ul className="space-y-2 text-white">
              <li>Front-End Developer</li>
              <li>Full-Stack Developer</li>
              <li>UI Developer</li>
              <li>Freelance Web Developer</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Intellix Soft
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-10">
           Learn from industry experts, work on real projects, and receive career guidance every step of the way. Our approach ensures you gain practical experience, build confidence, and develop the skills needed to thrive in the tech industry.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

            {[
              {
                title: "Expert Instructors",
                desc:
                  "Learn directly from seasoned professionals with years of real-world experience. Our instructors provide hands-on guidance, insider tips, and mentorship to ensure you understand both theory and practical application. They teach modern practices, industry standards, and problem-solving techniques that prepare you for the professional world.",
              },
              {
                title: "Practical Projects",
                desc:
                  "Gain hands-on experience by working on real-world projects that simulate industry requirements. From frontend interfaces to backend systems, you’ll complete multiple live projects that strengthen your portfolio. This approach ensures you learn by doing, improving your coding skills and confidence for future jobs or freelance opportunities.",
              },
              {
                title: "Career Support",
                desc:
                  "We guide you through freelancing opportunities, job placements, and interview preparation. Receive CV reviews, portfolio feedback, and mock interview sessions. Our career support ensures you not only learn to code but also know how to present your skills effectively to employers or clients, giving you a competitive edge in the tech industry.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group p-6 bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#145B55] to-[#56A49E] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 z-0"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold">{item.question}</h3>

                {openIndex === index && (
                  <p className="text-gray-700 mt-2">{item.answer}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
};

export default HeroSection;