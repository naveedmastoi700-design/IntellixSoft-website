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
            title: "SEO Fundamentals",
            desc: `Learn the basics of Search Engine Optimization and understand how websites rank higher on Google and other search engines.`,
            points: [
                "Understanding search engines",
                "Keyword research strategies",
                "SEO ranking factors",
                "Website SEO audit basics",
                "SEO best practices",
            ],
        },

        {
            title: "On-Page & Technical SEO",
            desc: `Master website optimization techniques to improve search visibility, user experience, and search engine rankings.`,
            points: [
                "Title tags & meta descriptions",
                "Content optimization",
                "Website speed optimization",
                "Technical SEO improvements",
                "Mobile SEO optimization",
            ],
        },

        {
            title: "Off-Page SEO & Analytics",
            desc: `Learn advanced SEO strategies including link building, content marketing, and performance tracking.`,
            points: [
                "Link building strategies",
                "Backlink analysis",
                "SEO content marketing",
                "Google Search Console",
                "SEO performance tracking",
            ],
        },
    ];


    const modules = [
        {
            title: "Module 1: Introduction to SEO",
            points: [
                "Understanding SEO and search engines",
                "How Google ranking works",
                "SEO career opportunities",
                "SEO tools overview",
            ],
            tools: "Google Search Console, Google Analytics",
        },

        {
            title: "Module 2: Keyword Research & Content SEO",
            points: [
                "Finding profitable keywords",
                "Search intent analysis",
                "SEO-friendly content writing",
                "Content optimization techniques",
            ],
            tools: "Ahrefs, SEMrush, Google Keyword Planner",
        },

        {
            title: "Module 3: On-Page SEO",
            points: [
                "Optimizing website pages",
                "Meta tags optimization",
                "Internal linking strategies",
                "Image SEO and URL structure",
            ],
            tools: "Yoast SEO, Rank Math, Screaming Frog",
        },

        {
            title: "Module 4: Technical SEO",
            points: [
                "Website speed optimization",
                "XML sitemap creation",
                "Schema markup implementation",
                "Fixing technical SEO issues",
            ],
            tools: "Google Search Console, PageSpeed Insights",
        },

        {
            title: "Module 5: Off-Page SEO & Link Building",
            points: [
                "Building quality backlinks",
                "Guest posting strategies",
                "Competitor backlink analysis",
                "SEO outreach techniques",
            ],
            tools: "Ahrefs, SEMrush, Moz",
        },

        {
            title: "Module 6: SEO Project & Certification",
            points: [
                "Complete website SEO audit",
                "Create SEO improvement strategy",
                "Track ranking performance",
                "Certificate of completion",
            ],
            tools: "All SEO Tools",
        },
    ];

    const faqs = [
        {
            question: "Do I need prior SEO experience?",
            answer:
                "No prior SEO experience is required. This course starts from the basics and teaches advanced SEO strategies step by step.",
        },

        {
            question: "What will I learn in the SEO course?",
            answer:
                "You will learn keyword research, on-page SEO, technical SEO, link building, content optimization, and SEO analytics.",
        },

        {
            question: "Which tools will be used in this course?",
            answer:
                "You will work with Google Search Console, Google Analytics, Ahrefs, SEMrush, Moz, Screaming Frog, and other SEO tools.",
        },

        {
            question: "Can I rank websites after completing this course?",
            answer:
                "Yes, after completing this course you will have the skills to optimize websites and improve search engine rankings.",
        },

        {
            question: "Is there a certificate after completion?",
            answer:
                "Yes, you will receive a professional SEO certification after successfully completing the course and final project.",
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
                        Become a Professional SEO Expert
                    </h1>

                    <p className="text-lg md:text-xl mb-6">
                        Learn advanced SEO strategies, keyword research, website optimization, technical SEO, and link building techniques to rank websites higher on search engines and grow online businesses.
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
                        Course Overview — SEO Optimization
                    </h2>


                    <p className="leading-relaxed text-center max-w-3xl mx-auto">
                        <p className="leading-relaxed text-center max-w-3xl mx-auto">
                            The <strong>SEO Expert</strong> course equips you with essential skills in keyword research, on-page SEO, technical SEO, content optimization, link building, and analytics. Learn to improve website rankings, increase organic traffic, and manage real-world SEO projects.
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
                        Our <span className="text-[#357873]">SEO Optimization</span> Services
                    </motion.h2>

                    <p className="text-center mt-4 max-w-2xl mx-auto">
                        We provide professional SEO solutions, including keyword research, on-page optimization,
                        technical SEO audits, content optimization, link building strategies, and SEO analytics
                        to help websites improve search rankings, increase organic traffic, and grow online.
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
                        Course Outline — SEO Optimization
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