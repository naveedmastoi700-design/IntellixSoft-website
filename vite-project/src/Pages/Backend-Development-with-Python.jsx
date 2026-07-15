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
            title: "API Development & Integration",
            desc: `Learn how to design and build RESTful APIs and connect backend systems with frontend applications and third-party services.`,
            points: [
                " REST API creation with Python",
                " JSON data handling",
                " API authentication & security",
                " Third - party service integration",
                " Testing and debugging APIs"
            ],
        },
        {
            title: "Web Frameworks & Backend Logic",
            desc: `Develop dynamic backend systems using popular Python frameworks like Django and Flask.`,
            points: [
                "Django & Flask fundamentals",
                "Routing and request handling",
                "Middleware & server-side logic",
                "MVC/MVT architecture understanding",
                "Building scalable web applications"
            ],
        },
        {
            title: "Security & Performance Optimization",
            desc: `Learn how to secure backend systems and improve application performance for real-world usage.`,
            points: [
               " User authentication & authorization",
                "Data encryption & security best practices",
                "Performance tuning techniques",
                "Error handling & debugging",
                "Deployment preparation & optimization"
            ],
        },
    ];

    const modules = [
        {
            title: "Module 1: Introduction to Backend Development",
            points: [
              "Understanding backend web development and server-side architecture",
              "Role of a backend developer in modern web applications",
              "Essential tools & setup for Python backend development"
            ],
            tools: "CRM software, Google Workspace, Notion",
        },
        {
            title: "Module 2: Python Programming & APIs",
            points: [
               "Core Python concepts for backend development",
                "Building and consuming RESTful APIs",
                "Handling requests, responses, and JSON data",
                "Mini project: Create a simple API for a web application"
            ],
            tools: "HubSpot, Salesforce, Pipedrive",
        },
        {
            title: "Module 3: Databases & Data Management",
            points: [
               "Understanding SQL & NoSQL databases",
                "Designing database schemas and relationships",
                "CRUD operations and query optimization",
                "Mini project: Build a database-driven application"
            ],
            tools: "Zoom, Slack, Notion, CRM Tools",
        },
        {
            title: "Module 4: Web Frameworks & Security",
            points: [
             "Working with Django and Flask frameworks",
              "Authentication, authorization, and user management",
              "Middleware, routing, and backend logic",
              "Mini project: Secure login-based web application"
            ],
            tools: " Excel, Notion, Trello, Analytics Tools",
        },
        {
            title: "Module 5: Final Project & Deployment ",
            points: [
              "Develop a complete backend system for a real or simulated application",
              "Deploy application on server or cloud platform",
              "Performance optimization and debugging",
              "Receive certification upon completion"
            ],
            tools: ": All tools learned in the course",
        },

    ];

    const faqs = [
        {
            question: "Do I need prior experience?",
            answer: "No prior experience is required. This course is suitable for beginners and gradually takes you from basic Python concepts to advanced backend development skills. ",
        },
        {
            question: "What is the course duration?",
            answer: "The course duration is typically 3 to 6 months, depending on your learning pace and project completion.",
        },
        {
            question: "Is there a certificate?",
            answer: "Yes, a professional certificate is provided upon successful completion of the course and final project.",
        },

    ];

    return (
        <>
            {/* HERO SECTION */}
            <section className="bg-white py-20 text-center">
                <div className="max-w-5xl mx-auto px-5">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Become a Professional Backend Developer with Python

                    </h1>

                    <p className="text-lg md:text-xl mb-6">
                        Master the skills to build powerful, scalable, and secure web applications using Python. Learn real-world backend development techniques used by professional developers to create high-performance server-side systems, manage databases, and develop modern web solutions.
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
                        Course Overview: Backend Web Development with Python
                    </h2>


                    <p className="leading-relaxed text-center max-w-3xl mx-auto">
                        The <strong> Professional Backend Web Development with Python </strong>course equips you with the skills to build powerful server-side applications, manage databases, and develop secure web systems. Learn API development, authentication, framework usage (Django & Flask), and real-world implementation through practical projects and hands-on coding experience.
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
                        Our <span className="text-[#357873]"> Backend Web Development with Python </span>Expertise
                    </motion.h2>

                    <p className="text-center mt-4 max-w-2xl mx-auto">
                        Learn practical backend development skills that help you build scalable, secure, and high-performance web applications. From API development to database management, gain hands-on experience with industry-standard tools and real-world project implementation.
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
                        Course Outline — Backend Web Development with Python
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
                            <li><strong>Projects:</strong> 5+ Real-World Backend Development Projects</li>
                            <li><strong>Certificate:</strong> Provided upon successful completion</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            Career Opportunities
                        </h2>

                        <ul className="space-y-2 text-white">
                            <li>Backend Developer (Python)</li>
                            <li>Python Web Developer</li>
                            <li>API Developer</li>
                            <li>Software Engineer (Backend)</li>
                            <li>Freelance Backend Developer</li>
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
                      Learn from industry experts, work on real-world backend development projects, and receive career guidance at every step. Our approach ensures you gain practical coding experience, build strong technical confidence, and develop in-demand Python backend skills.
                    </p>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

                        {[
                            {
                                title: "Expert Instructors",
                                desc:
                                    "Learn from experienced Python developers and software engineers with real industry experience. Get hands-on guidance, best practices, and mentorship to build a successful backend development career.",
                            },
                            {
                                title: "Practical Projects",
                                desc:
                                    "Work on real backend systems, APIs, databases, and full-stack integrations that you can showcase in your portfolio as real-world experience.",
                            },
                            {
                                title: "Career Support",
                                desc:
                                    "Receive guidance for job interviews, freelance opportunities, portfolio building, and career planning to become a professional Python backend developer.",
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