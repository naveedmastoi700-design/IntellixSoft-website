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
      title: "Search Engine Optimization (SEO)",
      desc: `Learn how to optimize websites to rank higher on search engines. Understand keyword research, on-page and off-page SEO, and technical SEO to drive organic traffic.`,
      points: [
        "Keyword research & optimization",
        "On-page & off-page SEO strategies",
        "Technical SEO & website audits",
        "Link building & content strategy",
        "SEO performance tracking with analytics",
      ],
    },
    {
      title: "Social Media Marketing",
      desc: `Master the art of engaging audiences on platforms like Facebook, Instagram, LinkedIn, and TikTok. Learn content creation, campaign management, and analytics.`,
      points: [
        "Social media strategy & planning",
        "Content creation & scheduling",
        "Paid advertising campaigns",
        "Engagement & community management",
        "Performance tracking & reporting",
      ],
    },
    {
      title: "Paid Ads & Analytics",
      desc: `Learn how to run successful paid campaigns on Google Ads and social media platforms. Measure results, optimize budgets, and improve ROI using analytics tools.`,
      points: [
        "Google Ads & Facebook Ads campaigns",
        "Audience targeting & retargeting",
        "Conversion tracking & optimization",
        "Data-driven marketing insights",
        "Reporting & ROI analysis",
      ],
    },
  ];

  const modules = [
    {
      title: "Module 1: Introduction to Digital Marketing",
      points: [
        "Digital marketing landscape & opportunities`",
        "Understanding marketing channels (SEO, SEM, SMM, Email)",
        "Essential tools & software overview",
      ],
      tools: "Google Analytics, Canva, SEMrush, Hootsuite",
    },
    {
      title: "Module 2: SEO & Content Marketing",
      points: [
        "Keyword research & content planning",
        "On-page and off-page SEO techniques",
        "Creating high-quality content for blogs & websites",
        "Mini project: SEO-optimized blog post",
      ],
      tools: "Photoshop, Illustrator, Figma",
    },
    {
      title: "Module 3: Social Media Marketing",
      points: [
        "Planning campaigns for social media platforms",
        "Content creation, scheduling & management",
        "Paid advertising and performance optimization",
        "Mini project: Social media campaign for a brand",
      ],
      tools: "Canva, Meta Business Suite, Buffer, Hootsuite",
    },
    {
      title: "Module 4: Paid Ads & Analytics",
      points: [
        "Running Google Ads & social media ads",
        "Tracking conversions & performance metrics",
        "Optimizing campaigns for ROI",
        "Mini project: Paid ad campaign analysis",
      ],
      tools: " Google Ads, Meta Ads Manager, Google Analytics",
    },
    {
      title: "Module 5: Email Marketing & Automation  ",
      points: [
        "Creating effective email campaigns",
        "Automation workflows for lead nurturing",
        "Segmentation and personalization strategies",
      ],
      tools: ": Mailchimp, HubSpot, ActiveCampaign",
    },
    {
      title: "Module 6: Final Project & Certification",
      points: [
        "Create a full-scale digital marketing campaign for a real or simulated brand",
        "Analyze performance & present results",
        "Certificate of completion",
      ],
      tools: "All tools learned in the course",
    },

  ];

  const faqs = [
    {
      question: "Do I need prior experience?",
      answer: "No prior experience is required. This course is suitable for beginners and progresses to advanced digital marketing strategies. ",
    },
    {
      question: "What is the course duration?",
      answer: "Duration ranges from 3 to 6 months depending on the modules you choose and your learning pace.",
    },
    {
      question: "Is there a certificate?",
      answer: "Yes, you will receive a professional certificate in Digital Marketing upon successful completion.",
    },

  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become a Professional Digital Marketing Expert

          </h1>

          <p className="text-lg md:text-xl mb-6">
            Learn cutting-edge digital marketing strategies, grow online brands, and master tools used by top marketers worldwide.
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
            Course Overview Digital Marketing
          </h2>


          <p className="leading-relaxed text-center max-w-3xl mx-auto">
            The<strong>Digital Marketing Expert </strong>,  course equips you with essential skills in SEO, social media marketing, paid ads, email marketing, and analytics. Learn to create campaigns, grow audiences, and measure ROI using real-world projects.
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
            Our <span className="text-[#357873]"> Digital Marketing </span>Services
          </motion.h2>

          <p className="text-center mt-4 max-w-2xl mx-auto">
            We deliver practical, result-oriented digital marketing strategies. From SEO to social media campaigns, our team teaches you to grow brands, generate leads, and boost sales.
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
            Course Outline — Graphic Design
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