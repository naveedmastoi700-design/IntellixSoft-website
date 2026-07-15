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
      title: "Frontend (UI/UX) Development",
      desc: `Create visually stunning and interactive mobile interfaces. Learn to build responsive, cross-platform apps with modern frameworks and tools.`,
      points: [
        "Design mobile UI with Figma & Adobe XD",
        "Develop interfaces using Flutter and React Native",
        "jsAdd animations, gestures, and interactive navigation",
        "Ensure responsive design on Android & iOS",
        "Optimize app performance for smooth user experience",
      ],
    },
    {
      title: "Backend Development",
      desc: `Learn server-side logic, data management, and APIs to power mobile apps. Ensure secure and scalable backends for production-ready apps.`,
      points: [
        "Server-side programming with Node.js, Express.js, or Firebase",
        "Database integration: MongoDB, MySQL, Firebase",
        "RESTful API creation and integration integration",
        "User authentication and secure data handling",
        "Real-time functionality with Firebase or WebSockets",
      ],
    },
    {
      title: "Full-Stack Mobile App Development",
      desc: `Combine frontend and backend skills to build complete mobile apps. Deploy and manage apps on Play Store and App Store.`,
      points: [
        "Cross-platform app development using Flutter & React Native",
        "Backend setup with Node.js, Firebase, or Express.js",
        "API integration and authentication management",
        "Database handling and offline support",
        "Deploy apps on Android & iOS platforms",
      ],
    },
  ];

  const modules = [
    {
      title: "Module 1: Introduction to Mobile App Development",
      points: [
        "Overview of Android & iOS platforms",
        "Native vs Cross-Platform Development",
        "Setting up Flutter & React Native development environments",
        "Understanding app structure and lifecycle",
      ],
     
    },
    {
      title: "Module 2: Frontend (UI/UX) for Mobile Apps",
      points: [
        "Designing responsive UIs with Flutter & React Native)",
        "Using layouts, components, and styling effectively",
        "Adding navigation, gestures, and animations",
        "Ensuring compatibility across devices & screen sizes",
      ],
     
    },
    {
      title: "Module 3: Module 3: Backend Integration & APIs",
      points: [
        "Connecting apps with RESTful APIs",
        "Dynamic data fetching and state management",
        "User authentication & security best practices",
        "Integration with third-party services (Firebase, Google Maps, etc.)",
      ],
    },
    {
      title: " Module 4: Database & Cloud Connectivity",
      points: [
        "Using Firebase Firestore & Realtime Database",
        "Local storage with SQLite & Hive",
        "Offline data sync and caching",
        "Cloud functions for automation",
      ],
    },
    {
      title: "Module 5: App Performance & Deployment",
      points: [
        "Optimizing app performance & memory usage",
        "Debugging and testing mobile applications ",
        "Publishing apps on Google Play Store & Apple App Store",
        "Maintaining and updating apps efficiently",

      ],
    },
    {
      title: "Module 6: Final Project",
      points: [
        "Build a complete cross-platform mobile application",
        "Apply frontend, backend, and deployment concepts",
        "Showcase your project in your portfolio",
      ],
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
            Become a Professional Mobile App Developer
          </h1>

          <p className="text-lg md:text-xl mb-6">
           Learn to build robust and scalable mobile applications for Android and iOS using Flutter and React Native.
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
            Course Overview – Mobile App Development
          </h2>

          <p className="leading-relaxed text-center max-w-3xl mx-auto">
            At <strong> Intellix Soft,</strong> we equip you with the skills to create high-quality mobile apps. Learn to design, develop, and deploy applications with Flutter and React Native. This course includes UI/UX design, backend integration, database handling, and app publishing. Build real projects and gain hands-on experience with tools used by professional mobile developers.
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
            Our <span className="text-[#357873]">Mobile App Development</span>   Services
             
          </motion.h2>

          <p className="text-center mt-4 max-w-2xl mx-auto">
           We deliver full-featured mobile apps for businesses and individuals. From design to deployment, our team ensures responsive, interactive, and user-friendly applications for Android and iOS.
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
            Course Outline — Mobile App Development
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
              <li>Mobile App Developer</li>
              <li>Flutter Developer</li>
              <li>React Native Developer</li>
              <li>Full-Stack Mobile Developer</li>
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
           Gain practical experience, work on real mobile projects, and get career guidance from experts. Our program ensures you acquire industry-ready skills and confidence to succeed in mobile app development.
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