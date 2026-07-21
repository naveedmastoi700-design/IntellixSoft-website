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
            title: "Shopify Store Development",
            desc: `Learn how to create professional Shopify stores, customize themes, manage products, and build high-converting e-commerce websites.`,
            points: [
                "Shopify store setup & configuration",
                "Theme customization",
                "Product & inventory management",
                "Payment gateway integration",
                "Creating responsive online stores",
            ],
        },

        {
            title: "E-Commerce Marketing & Sales",
            desc: `Master strategies to grow online stores, attract customers, increase sales, and optimize e-commerce performance.`,
            points: [
                "Product research & optimization",
                "SEO for Shopify stores",
                "Conversion rate optimization",
                "Email marketing strategies",
                "Customer retention techniques",
            ],
        },

        {
            title: "Shopify Advanced Tools & Automation",
            desc: `Learn how to automate Shopify workflows using apps, integrations, and modern e-commerce tools to improve business efficiency.`,
            points: [
                "Shopify apps integration",
                "Order & inventory automation",
                "Third-party API integration",
                "Analytics & sales tracking",
                "Building scalable e-commerce solutions",
            ],
        },
    ];


    const modules = [
        {
            title: "Module 1: Introduction to Shopify & E-Commerce",
            points: [
                "Understanding e-commerce business models",
                "Introduction to Shopify platform",
                "Setting up Shopify store",
                "Understanding online selling process",
            ],
            tools: "Shopify, Shopify Admin, E-Commerce Tools",
        },

        {
            title: "Module 2: Shopify Store Setup & Customization",
            points: [
                "Creating and configuring Shopify store",
                "Theme installation and customization",
                "Customizing homepage and product pages",
                "Creating responsive store layouts",
            ],
            tools: "Shopify Themes, Liquid, HTML, CSS",
        },

        {
            title: "Module 3: Products & Store Management",
            points: [
                "Adding and managing products",
                "Product categories and collections",
                "Inventory and order management",
                "Shipping and payment configuration",
            ],
            tools: "Shopify Dashboard, Payment Gateways",
        },

        {
            title: "Module 4: Shopify Development & Liquid Programming",
            points: [
                "Introduction to Shopify Liquid",
                "Creating custom sections and templates",
                "Editing Shopify theme code",
                "Building custom store features",
            ],
            tools: "Liquid, HTML, CSS, JavaScript",
        },

        {
            title: "Module 5: Shopify Marketing & Optimization",
            points: [
                "SEO optimization for Shopify stores",
                "Conversion rate optimization",
                "Email marketing strategies",
                "Analytics and sales tracking",
            ],
            tools: "Google Analytics, Shopify Analytics, Email Tools",
        },

        {
            title: "Module 6: Final Project & Certification",
            points: [
                "Build a complete Shopify e-commerce store",
                "Customize theme and add products",
                "Optimize store performance",
                "Certificate of completion",
            ],
            tools: "Shopify, Liquid, Marketing & Analytics Tools",
        },
    ];

    const faqs = [
        {
            question: "Do I need prior experience in Shopify?",
            answer:
                "No prior Shopify experience is required. This course starts from the basics and gradually teaches you store setup, customization, and advanced e-commerce development.",
        },

        {
            question: "What will I learn in the Shopify course?",
            answer:
                "You will learn Shopify store creation, theme customization, product management, Liquid programming, payment setup, SEO, and e-commerce optimization.",
        },

        {
            question: "Which tools will be used in this course?",
            answer:
                "You will work with Shopify, Shopify Themes, Liquid, HTML, CSS, JavaScript, Google Analytics, and various e-commerce marketing tools.",
        },

        {
            question: "Can I build a complete online store after this course?",
            answer:
                "Yes, after completing this course you will be able to create, customize, and manage professional Shopify e-commerce stores.",
        },

        {
            question: "Is there a certificate after completion?",
            answer:
                "Yes, you will receive a professional Shopify & E-Commerce Development certificate after successfully completing the course and final project.",
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
                        Become a Professional Shopify & E-Commerce Expert
                    </h1>

                    <p className="text-lg md:text-xl mb-6">
                        Learn how to build professional Shopify stores, customize themes, manage products,
                        integrate payments, and create high-converting e-commerce solutions used by
                        successful online businesses.
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
                        Course Overview — Shopify & E-Commerce
                    </h2>


                    <p className="leading-relaxed text-center max-w-3xl mx-auto">
                        <p className="leading-relaxed text-center max-w-3xl mx-auto">
                            The <strong>Shopify & E-Commerce Expert</strong> course equips you with essential
                            skills in Shopify store development, theme customization, product management,
                            payment integration, SEO, and online business strategies. Learn to build
                            professional e-commerce stores, optimize sales, and manage real-world Shopify
                            projects.
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
                        Our <span className="text-[#357873]"> Shopify & E-Commerce </span>Services
                    </motion.h2>

                    <p className="text-center mt-4 max-w-2xl mx-auto">
                        We provide professional Shopify and E-Commerce solutions, including store
                        development, theme customization, product management, payment integration,
                        and sales optimization strategies to help businesses grow online.
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
                        Course Outline — Shopify & E-Commerce Development
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