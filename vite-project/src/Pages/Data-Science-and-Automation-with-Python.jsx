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
      title: "Data Analysis & Visualization",
      desc: `Learn how to explore, analyze, and visualize complex datasets to extract meaningful insights for better decision-making.`,
      points: [
        " Data cleaning & preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Charts, graphs & dashboards creation",
        "Pattern & trend identification",
        "Data storytelling for insights"
      ],
    },
    {
      title: "Automation with Python",
      desc: `Learn how to automate repetitive tasks and workflows using Python to save time and improve productivity.`,
      points: [
        "File handling & data automation",
        "Web scraping techniques",
        "API-based automation",
        "Task scheduling & workflow automation",
        "Scripting for daily operations"
      ],
    },
    {
      title: "Machine Learning Basics & Data Intelligence",
      desc: `Understand core machine learning concepts and build simple predictive models to solve real-world problems.`,
      points: [
        " Introduction to machine learning",
        "Training & testing models",
        "Basic prediction systems",
        "Data-driven decision making",
        "Model evaluation techniques"
      ],
    },
  ];

  const modules = [
    {
      title: "Module 1: Introduction to Data Science & Automation",
      points: [
      " Understanding data science concepts and real-world applications",
        "Role of a data scientist and automation engineer in modern industries",
        "Essential tools & setup for Python data science workflow",
        "Tools: Python, Jupyter Notebook, Anaconda"
      ],
      tools: "CRM software, Google Workspace, Notion",
    },
    {
      title: "Module 2: Python Programming for Data Handling",
      points: [
        "Core Python concepts for data processing and analysis",
        "Working with structured and unstructured data",
        "Handling datasets using Python libraries",
        "Mini project: Data cleaning and preprocessing task",
        "Tools: Python, NumPy, Pandas"
      ],
      tools: "HubSpot, Salesforce, Pipedrive",
    },
    {
      title: "Module 3: Data Analysis & Visualization",
      points: [
        "Exploring datasets to find trends and patterns",
        "Creating charts, graphs, and dashboards",
        "Performing Exploratory Data Analysis (EDA)",
        "Mini project: Build a data visualization report"
      ],
      tools: "Zoom, Slack, Notion, CRM Tools",
    },
    {
      title: "Module 4: Automation with Python",
      points: [
        "Automating repetitive tasks and workflows",
        "Web scraping and data extraction techniques",
        "Working with APIs for automation tasks",
        "Mini project: Build an automation tool for real-world use"
      ],
      tools: " Excel, Notion, Trello, Analytics Tools",
    },
    {
      title: "Module 5: Final Project & Deployment ",
      points: [
        "Develop a complete data science and automation project using real datasets",
        "Apply data analysis, visualization, and automation techniques",
        "Present insights and results in a professional format",
        "Receive certification upon completion"
      ],
      tools: ": All tools learned in the course",
    },

  ];

  const faqs = [
    {
      question: "Do I need prior experience?",
      answer: "No prior experience is required. This course is designed for beginners and gradually guides you from basic Python programming to advanced data analysis, automation, and machine learning concepts. ",
    },
    {
      question: "What is the course duration?",
      answer: "The course duration is typically 3 to 6 months, depending on your learning pace, practice sessions, and project completion.",
    },
    {
      question: "Is there a certificate?",
      answer: "Yes, a professional certificate is provided upon successful completion of the course, projects, and final assessment.",
    },

  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become a Professional Data Scientist & Automation Expert with Python

          </h1>

          <p className="text-lg md:text-xl mb-6">
            Master the skills to analyze data, extract meaningful insights, and automate complex tasks using Python. Learn real-world data science and automation techniques used by professionals to work with large datasets, build intelligent solutions, and improve efficiency through data-driven decision making and smart automation systems.
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
            Course Overview: Data Science & Automation with Python
          </h2>
          <p className="leading-relaxed text-center max-w-3xl mx-auto">
            The Professional <strong> Data Science & Automation with Python </strong>course equips you with the skills to analyze complex data, build predictive models, and automate real-world workflows. Learn data processing, visualization, machine learning basics, and automation techniques using Python through practical projects, real datasets, and hands-on implementation experience.
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
            Our <span className="text-[#357873]"> Data Science & Automation with Python </span>Expertise
          </motion.h2>

          <p className="text-center mt-4 max-w-2xl mx-auto">
            Learn practical data science and automation skills that help you analyze data, build intelligent models, and automate repetitive tasks. From data processing to machine learning basics, gain hands-on experience with industry-standard tools and real-world project implementation.
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
            Course Outline — Data Science & Automation with Python 
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
                  <strong>Tools:  </strong>{module.tech}
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
              <li><strong>Projects:</strong> 5+ Real-World Data Science & Automation Projects</li>
              <li><strong>Certificate:</strong> Provided upon successful completion</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Career Opportunities
            </h2>

            <ul className="space-y-2 text-white">
              <li>Data Scientist</li>
              <li>Data Analyst</li>
              <li>Python Automation Developer</li>
              <li>Machine Learning Engineer (Entry Level)</li>
              <li>Business Intelligence Analyst</li>
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
            Learn from industry experts, work on real-world data science and automation projects, and receive career guidance at every stage of your learning journey. Our hands-on approach helps you build analytical thinking, practical Python skills, and the confidence needed to succeed in data-driven careers.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

            {[
              {
                title: "Expert Instructors",
                desc:
                  "Learn from experienced data scientists, automation specialists, and Python professionals with real industry expertise. Gain valuable insights, practical techniques, and mentorship to build a successful career in data science and automation.",
              },
              {
                title: "Practical Projects",
                desc:
                  "Work on real datasets, automation workflows, data visualization dashboards, and predictive analysis projects that strengthen your portfolio and demonstrate your practical skills to employers and clients.",
              },
              {
                title: "Career Support",
                desc:
                  "Receive guidance for job interviews, portfolio development, freelancing opportunities, resume building, and career planning to help you become a professional Data Science and Automation specialist.",
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
      <Footer />
    </>
  );
};

export default HeroSection;