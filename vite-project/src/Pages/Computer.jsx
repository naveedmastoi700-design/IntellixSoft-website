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
            title: "Computer Fundamentals",
            desc: `Learn basic computer concepts, operating systems, hardware, software, and essential computer skills required in professional environments.`,
            points: [
                "Introduction to computer systems",
                "Hardware & software understanding",
                "Windows operating system",
                "File management & security",
                "Basic troubleshooting skills",
            ],
        },

        {
            title: "Office Applications",
            desc: `Master professional office tools used in companies, businesses, and organizations for daily productivity.`,
            points: [
                "Microsoft Word document creation",
                "Excel formulas & data management",
                "PowerPoint presentations",
                "Professional documentation",
                "Office productivity techniques",
            ],
        },

        {
            title: "Advanced Computer Skills",
            desc: `Develop advanced computer knowledge including internet skills, databases, networking basics, and digital tools.`,
            points: [
                "Internet & email management",
                "Database fundamentals",
                "Basic networking concepts",
                "Cyber security awareness",
                "Professional computer workflow",
            ],
        },
    ];


    const modules = [
        {
            title: "Module 1: Introduction to Computer Applications",
            points: [
                "Understanding computer systems",
                "Types of computers and applications",
                "Hardware and software basics",
                "Operating system introduction",
            ],
            tools: "Windows, Computer Hardware",
        },

        {
            title: "Module 2: Microsoft Office Applications",
            points: [
                "Creating professional documents",
                "Working with Excel sheets and formulas",
                "Creating PowerPoint presentations",
                "Managing office files",
            ],
            tools: "MS Word, MS Excel, MS PowerPoint",
        },

        {
            title: "Module 3: Internet & Digital Skills",
            points: [
                "Internet browsing techniques",
                "Email communication",
                "Online productivity tools",
                "Cloud storage basics",
            ],
            tools: "Google Workspace, Internet Tools",
        },

        {
            title: "Module 4: Database & Data Management",
            points: [
                "Introduction to databases",
                "Creating and managing data",
                "Database concepts",
                "Data organization techniques",
            ],
            tools: "MS Access, Database Systems",
        },

        {
            title: "Module 5: Computer Security & Networking",
            points: [
                "Basic networking concepts",
                "Computer security practices",
                "Virus protection methods",
                "Safe internet usage",
            ],
            tools: "Networking Tools, Antivirus Software",
        },

        {
            title: "Module 6: Final Project & Certification",
            points: [
                "Create professional office projects",
                "Apply computer skills in real scenarios",
                "Complete practical assignments",
                "Certificate of completion",
            ],
            tools: "All Computer Application Tools",
        },
    ];

    const faqs = [
        {
            question: "Do I need prior computer knowledge?",
            answer:
                "No prior computer experience is required. This course starts from basic computer concepts and gradually teaches advanced applications.",
        },

        {
            question: "What will I learn in Computer Application course?",
            answer:
                "You will learn computer fundamentals, MS Office, internet skills, databases, digital tools, and professional computer applications.",
        },

        {
            question: "Which software will be used in this course?",
            answer:
                "You will work with Microsoft Word, Excel, PowerPoint, MS Access, Google Workspace, and other computer productivity tools.",
        },

        {
            question: "Can I get a job after completing this course?",
            answer:
                "Yes, after completing this course you will have essential computer skills required for office jobs and professional environments.",
        },

        {
            question: "Is there a certificate after completion?",
            answer:
                "Yes, you will receive a professional Computer Applications certificate after successfully completing the course.",
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
                        <h1>
                            Become a Professional Computer Applications Expert
                        </h1>
                    </h1>

                    <p className="text-lg md:text-xl mb-6">
                        Learn essential computer applications, Microsoft Office skills, data management, internet technologies, and professional digital tools used in modern workplaces.
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
                        Course Overview — Computer Applications
                    </h2>


                    <p className="leading-relaxed text-center max-w-3xl mx-auto">
                        <p className="leading-relaxed text-center max-w-3xl mx-auto">
                            The <strong>Computer Applications Expert</strong> course equips you with essential skills in computer fundamentals, MS Office, data management, internet technologies, and digital productivity tools. Learn to use professional applications and improve workplace efficiency through practical projects.
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
                        Our <span className="text-[#357873]"> Computer Applications </span> Services
                    </motion.h2>

                    <p className="text-center mt-4 max-w-2xl mx-auto">
                        We provide professional Computer Applications training, including computer fundamentals,
                        Microsoft Office skills, data management, internet technologies, digital tools, and
                        practical workplace solutions to help students improve their technical skills and
                        increase productivity in modern professional environments.
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
                        Course Outline — Computer Applications
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