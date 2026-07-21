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
            title: "Data Science Fundamentals",
            desc: `Learn the foundations of data science, data analysis, statistics, and machine learning. Understand how professionals convert raw data into meaningful insights.`,
            points: [
                "Python programming for data science",
                "Data cleaning & preprocessing",
                "Statistics and probability basics",
                "Data visualization techniques",
                "Real-world data analysis projects",
            ],
        },
        {
            title: "Machine Learning & AI",
            desc: `Master machine learning algorithms and build intelligent systems. Learn predictive modeling, classification, regression, and AI-based solutions.`,
            points: [
                "Supervised & unsupervised learning",
                "Regression and classification models",
                "Model training & evaluation",
                "Feature engineering techniques",
                "AI-powered project development",
            ],
        },
        {
            title: "Automation & Data Tools",
            desc: `Learn automation techniques to improve productivity using modern tools, APIs, and programming workflows.`,
            points: [
                "Python automation scripts",
                "Web scraping & data extraction",
                "API integration",
                "Workflow automation",
                "Building automated solutions",
            ],
        },
    ];


    const modules = [
        {
            title: "Module 1: Introduction to Data Science",
            points: [
                "Understanding Data Science concepts",
                "Data science lifecycle and applications",
                "Introduction to Python programming",
                "Working with datasets",
            ],
            tools: "Python, Jupyter Notebook, Google Colab",
        },

        {
            title: "Module 2: Python for Data Analysis",
            points: [
                "Python programming fundamentals",
                "Working with NumPy and Pandas",
                "Data cleaning and transformation",
                "Mini project: Data analysis report",
            ],
            tools: "Python, NumPy, Pandas",
        },

        {
            title: "Module 3: Data Visualization",
            points: [
                "Creating meaningful data visualizations",
                "Charts and dashboard creation",
                "Understanding data patterns",
                "Mini project: Interactive dashboard",
            ],
            tools: "Matplotlib, Seaborn, Power BI, Tableau",
        },

        {
            title: "Module 4: Machine Learning",
            points: [
                "Introduction to machine learning algorithms",
                "Regression and classification techniques",
                "Model training and testing",
                "Mini project: Machine learning prediction model",
            ],
            tools: "Scikit-learn, TensorFlow, Keras",
        },

        {
            title: "Module 5: Automation with Python",
            points: [
                "Automating repetitive tasks",
                "Working with APIs and automation scripts",
                "Web scraping techniques",
                "Building productivity automation tools",
            ],
            tools: "Python, Selenium, BeautifulSoup, APIs",
        },

        {
            title: "Module 6: Final Project & Certification",
            points: [
                "Develop complete Data Science project",
                "Analyze real-world datasets",
                "Deploy machine learning solutions",
                "Certificate of completion",
            ],
            tools: "All Data Science & Automation Tools",
        },
    ];


    const faqs = [
        {
            question: "Do I need programming experience for Data Automation?",
            answer:
                "No prior programming experience is required. This course starts from basics and gradually teaches Python, automation concepts, and advanced workflows.",
        },

        {
            question: "What will I learn in Data Automation course?",
            answer:
                "You will learn Python automation, data processing, APIs, workflow automation, web scraping, and building real-world automation solutions.",
        },

        {
            question: "Which tools will be used in this course?",
            answer:
                "You will work with Python, Pandas, NumPy, APIs, Selenium, Power Automate, Zapier, and other modern automation tools.",
        },

        {
            question: "Is there a certificate after completion?",
            answer:
                "Yes, you will receive a professional Data Automation certificate after successfully completing the course and final project.",
        },

        {
            question: "What is the course duration?",
            answer:
                "The course duration is approximately 3 to 6 months depending on your learning speed and selected modules.",
        },
    ];
    return (
        <>
            {/* HERO SECTION */}
            <section className="bg-white py-20 text-center">
                <div className="max-w-5xl mx-auto px-5">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Become a Professional Data Automation Expert

                    </h1>

                    <p className="text-lg md:text-xl mb-6">
                        Learn how to automate business processes, work with data pipelines,
                        build intelligent workflows, and create powerful automation solutions
                        using modern tools and technologies.
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
                        Course Overview Data-Automation
                    </h2>


                    <p className="leading-relaxed text-center max-w-3xl mx-auto">
                        <p className="leading-relaxed text-center max-w-3xl mx-auto">
                            The <strong>Data Automation Expert</strong> course equips you with essential skills
                            in data processing, Python automation, workflow optimization, APIs, and
                            intelligent automation systems. Learn to automate repetitive tasks, manage data
                            efficiently, build automated solutions, and improve business productivity using
                            real-world projects.
                        </p>
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
                        Our <span className="text-[#357873]"> Data-Automation </span>Services
                    </motion.h2>

                    <p className="text-center mt-4 max-w-2xl mx-auto">
                        We provide practical automation solutions to simplify data processes,
                        improve workflow efficiency, and help businesses save time using modern
                        automation technologies.
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
                        Course Outline — Data Automation
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
                                        <li key={i}>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-gray-500">
                                    <strong>Tools: </strong>{module.tools}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </section>
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

                                <h3 className="font-semibold">
                                    {item.question}
                                </h3>

                                {openIndex === index && (
                                    <p className="text-gray-700 mt-2">
                                        {item.answer}
                                    </p>
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