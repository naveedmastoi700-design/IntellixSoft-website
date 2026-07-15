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
      title: "Python Programming",
      desc: `Learn Python from scratch to advanced topics. Build a solid foundation in programming and software development.`,
      points: [
        "Python syntax and data structures",
        "Object-Oriented Programming",
        "File handling and exception management",
        "Libraries: NumPy, Pandas, Matplotlib",
        "Automating tasks with Python scripts",
      ],
    },
    {
      title: "Machine Learning",
      desc: `Master the concepts of supervised and unsupervised learning, model evaluation, and real-world applications.`,
      points: [
        "Data preprocessing & visualization",
        "Regression, Classification & Clustering",
        "Model evaluation metrics",
        "Scikit-learn and TensorFlow basics",
        "Deploying ML models in Python",
      ],
    },
    {
      title: "AI & Data Projects",
      desc: `Apply your Python and ML skills to build intelligent solutions and practical AI projects.`,
      points: [
        "Data analysis & visualization projects",
        "Predictive model building",
        "Natural Language Processing basics",
        "Image recognition and computer vision projects",
        "End-to-end AI project deployment",
      ],
    },
  ];

  const modules = [
    {
      title: "Module 1: Introduction to Python",
      points: [
        "Python installation & environment setup",
        "Python syntax, variables, and data types",
        "Conditional statements and loops",
        "Functions and modules",
      ],

    },
    {
      title: "Module 2: Advanced Python & Libraries",
      points: [
        "Object-Oriented Programming (OOP) in Python",
        "Working with files and exceptions",
        "NumPy for numerical computing",
        "Pandas for data analysis",
        "Matplotlib & Seaborn for data visualization",
      ],
    },
    {
      title: "Module 3: Introduction to Machine Learning",
      points: [
        "ML fundamentals: supervised vs unsupervised learning",
        "Regression and classification models",
        "Data preprocessing and feature engineering",
        "Model evaluation and validation",
      ],
    },
    {
      title: "Module 4: Advanced Machine Learning",
      points: [
        "Clustering and dimensionality reduction",
        "Neural networks with TensorFlow/Keras",
        "Natural Language Processing (NLP) basics",
        "Computer vision fundamentals",
      ],
    },
    {
      title: "Module 5: AI & Data Projects  ",
      points: [
        "End-to-end data science projects",
        "Predictive model deployment in Python",
        "Real-world datasets & case studies",
        "Portfolio-ready ML projects",
      ],
    },
    {
      title: "Module 6: Final Capstone Project",
      points: [
        "Build and deploy a complete ML solution",
        "Integrate Python scripting and AI models",
        "Present project in portfolio and showcase skills",
      ],
    },

  ];

  const faqs = [
    {
      question: "Do I need coding experience?",
      answer:
        "No prior experience needed. This course starts from basics to advanced step-by-step.",
    },
    {
      question: "Will I learn libraries like NumPy, Pandas, and TensorFlow?",
      answer: "Yes! You will learn Python, Data Science libraries, Machine Learning, and Deep Learning tools.",
    },
    {
      question: "Do you provide real projects?",
      answer: "Yes, we provide real-world ML projects including prediction models, AI apps, and datasets.",
    },
    {
      question: "Is a certificate included?",
      answer: "Yes, you will receive an official certificate after completing the course and projects.",
    },
    {
      question: "Can I get a job or freelance after the course?",
      answer: "Absolutely! We teach portfolio creation, freelancing skills, and provide job guidance for AI careers",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become a Professional Python & Machine Learning Developer

          </h1>

          <p className="text-lg md:text-xl mb-6">
            Master Python programming and build intelligent machine learning solutions for real-world applications.
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
            Course Overview – Python & Machine Learning
          </h2>


          <p className="leading-relaxed text-center max-w-3xl mx-auto">
            At <strong>Intellix Soft</strong>, we prepare you to become a professional Python & Machine Learning developer. Learn Python programming, data analysis, and machine learning model development. This course covers fundamentals, advanced AI concepts, and practical projects to train predictive models, automate intelligent solutions, and implement AI in real-world applications.
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
            Our <span className="text-[#357873]"> Python & Machine Learning </span>Services
          </motion.h2>

          <p className="text-center mt-4 max-w-2xl mx-auto">
            Master Python programming and Machine Learning with Intellix Soft. This course guides you from Python fundamentals to building AI models and analyzing real-world data projects.
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
            Course Outline — Python & Machine Learning
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
                  {module.tech}
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
              <li><strong>Duration:</strong> 4 – 6 months</li>
              <li><strong>Mode:</strong> Online / On-Campus</li>
              <li><strong>Level:</strong> Beginner to Advanced</li>
              <li><strong>Projects:</strong> 5+ Real-world ML Projects</li>
              <li><strong>Certificate:</strong> Provided upon completion</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Career Opportunities
            </h2>

            <ul className="space-y-2 text-white">
              <li>Python Developer</li>
              <li>Machine Learning Engineer</li>
              <li>Data Analyst / Scientist</li>
              <li>AI Specialist</li>
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
            Learn from AI and Python experts, work on real machine learning projects, and receive career guidance every step of the way. Gain practical experience, build confidence, and develop skills to thrive in the AI and data-driven industry.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

            {[
              {
                title: "Expert Instructors",
                desc:
                  "Learn directly from experienced Python and Machine Learning professionals. Gain deep insights into AI concepts, data preprocessing, model training, and deployment. Our instructors provide practical examples, hands-on exercises, and mentorship to ensure you understand both the theory and real-world applications.",
              },
              {
                title: "Practical Projects",
                desc:
                  "Work on hands-on Python and Machine Learning projects. Gain experience in data cleaning, feature engineering, model selection, and AI deployment. These projects are designed to replicate real industry challenges, giving you a portfolio that showcases your skills to employers.",
              },
              {
                title: "Career Support",
                desc:
                  "Receive comprehensive support for launching your career in Python and AI. Get guidance on job preparation, portfolio optimization, freelancing, and interview readiness. Our career mentors help you stand out in competitive AI and data science roles.",
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