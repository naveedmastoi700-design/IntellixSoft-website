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
            title: "YouTube Channel Creation & Setup",
            desc: `Learn how to create professional YouTube channels, optimize settings, and build a strong foundation for successful content creation.`,
            points: [
                "YouTube channel setup & branding",
                "Channel optimization techniques",
                "Niche research & selection",
                "Content planning strategies",
                "YouTube SEO basics",
            ],
        },

        {
            title: "Content Creation & Growth Strategy",
            desc: `Master techniques to create engaging content, grow audiences, and increase views using effective YouTube strategies.`,
            points: [
                "Video content planning",
                "Script writing & storytelling",
                "Thumbnail and title optimization",
                "Audience growth strategies",
                "YouTube analytics understanding",
            ],
        },

        {
            title: "YouTube Automation & Monetization",
            desc: `Learn how to build automated YouTube channels using AI tools, outsourcing, and smart workflows to generate revenue.`,
            points: [
                "AI tools for content creation",
                "Video editing automation",
                "Voiceover and script automation",
                "Outsourcing workflow management",
                "YouTube monetization strategies",
            ],
        },
    ];


    const modules = [
        {
            title: "Module 1: Introduction to YouTube Automation",
            points: [
                "Understanding YouTube automation business model",
                "How automated YouTube channels work",
                "Finding profitable YouTube niches",
                "Channel creation and setup",
            ],
            tools: "YouTube Studio, Google Trends, Niche Research Tools",
        },

        {
            title: "Module 2: YouTube Channel Branding & SEO",
            points: [
                "Creating professional channel branding",
                "Keyword research for YouTube videos",
                "Optimizing titles, descriptions, and tags",
                "Improving video discoverability",
            ],
            tools: "TubeBuddy, VidIQ, Canva",
        },

        {
            title: "Module 3: Content Creation & Video Production",
            points: [
                "Video ideas and content planning",
                "Script writing techniques",
                "AI-assisted content creation",
                "Voiceover and video editing workflow",
            ],
            tools: "ChatGPT, AI Tools, CapCut, Premiere Pro",
        },

        {
            title: "Module 4: YouTube Automation Workflow",
            points: [
                "Building automated content workflows",
                "Managing writers, editors, and voice artists",
                "Video production outsourcing",
                "Creating consistent upload systems",
            ],
            tools: "Project Management Tools, Freelance Platforms",
        },

        {
            title: "Module 5: YouTube Growth & Monetization",
            points: [
                "Understanding YouTube algorithm",
                "Increasing views and subscribers",
                "YouTube Partner Program requirements",
                "Revenue strategies and analytics",
            ],
            tools: "YouTube Analytics, Google Analytics",
        },

        {
            title: "Module 6: Final Project & Certification",
            points: [
                "Create and manage an automated YouTube channel",
                "Publish optimized videos",
                "Analyze channel performance",
                "Certificate of completion",
            ],
            tools: "All YouTube Automation Tools",
        },
    ];

    const faqs = [
        {
            question: "Do I need prior experience in YouTube?",
            answer:
                "No prior YouTube experience is required. This course starts from the basics and teaches you channel creation, content strategy, automation, and monetization techniques.",
        },

        {
            question: "What will I learn in the YouTube Automation course?",
            answer:
                "You will learn YouTube channel setup, niche research, SEO optimization, content creation, AI tools, video production workflow, and monetization strategies.",
        },

        {
            question: "Which tools will be used in this course?",
            answer:
                "You will work with YouTube Studio, Canva, ChatGPT, AI content tools, CapCut, Premiere Pro, TubeBuddy, VidIQ, and analytics tools.",
        },

        {
            question: "Can I create a successful YouTube channel after this course?",
            answer:
                "Yes, after completing this course you will be able to create, manage, and grow automated YouTube channels with professional strategies.",
        },

        {
            question: "Is there a certificate after completion?",
            answer:
                "Yes, you will receive a professional YouTube Automation certificate after successfully completing the course and final project.",
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
                        Become a Professional YouTube Automation Expert
                    </h1>

                    <p className="text-lg md:text-xl mb-6">
                        Learn how to create and grow automated YouTube channels, research profitable
                        niches, use AI tools for content creation, optimize videos, and build
                        successful YouTube businesses with modern automation strategies.
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap mt-6">

                        <a href="/contact">
                            <button
                                className="py-3 px-6 rounded-md text-black bg-[#eed025] 
                    border border-[#eed025] font-semibold 
                    hover:text-white hover:bg-[#56A49E] transition duration-300"
                            >
                                Enroll Now
                            </button>
                        </a>


                        <a href="#outline">
                            <button
                                className="py-3 px-6 rounded-md text-white bg-black 
                    font-semibold hover:bg-[#56A49E] transition duration-300"
                            >
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
                        Course Overview — YouTube Automation
                    </h2>

                    <p className="leading-relaxed text-center max-w-3xl mx-auto">
                        The <strong>YouTube Automation Expert</strong> course equips you with
                        essential skills in YouTube channel creation, niche research, content
                        strategy, AI-powered video creation, SEO optimization, and monetization
                        techniques. Learn to build automated YouTube channels, grow audiences,
                        and create profitable content systems using real-world projects.
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
                        Our <span className="text-[#357873]"> YouTube Automation </span>Services
                    </motion.h2>


                    <p className="text-center mt-4 max-w-2xl mx-auto">
                        We provide complete YouTube automation solutions including channel setup,
                        niche research, content strategy, AI-powered video creation, SEO optimization,
                        and monetization strategies to help creators grow successful YouTube channels.
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


                                <p className="text-gray-600 mb-4">
                                    {item.desc}
                                </p>


                                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                                    {item.points.map((p, i) => (
                                        <li key={i}>
                                            {p}
                                        </li>
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
                        Course Outline — YouTube Automation
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