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
      title: "Sales & Lead Generation)",
      desc: `Learn how to identify potential clients, generate leads, and develop effective sales pipelines to maximize revenue opportunities.`,
      points: [
        "Prospecting & lead qualification",
        "Cold calling & email outreach strategies",
        "CRM management & automation",
        "Sales funnel creation",
        "Tracking and improving conversion rates",
      ],
    },
    {
      title: "Client Relationship Management",
      desc: `Master the art of building strong, long-term relationships with clients. Understand their needs, provide value, and retain business effectively.`,
      points: [
        "Understanding client needs & goals",
        "Communication & negotiation skills",
        "Relationship building & client retention",
        "Handling objections & conflict resolution",
        "Building trust & credibility in business",
      ],
    },
    {
      title: "Business Strategy & Growth",
      desc: `Learn how to create and implement growth strategies for businesses. Analyze markets, competitors, and create actionable plans to scale operations.`,
      points: [
        "Market research & competitor analysis",
        "Strategic planning & business modeling",
        "Revenue growth & performance metrics",
        "Opportunity identification & risk management",
        "Scaling business operations effectively",
      ],
    },
  ];

  const modules = [
    {
      title: "Module 1: Introduction to Business Development",
      points: [
        "Understanding business growth and revenue models",
        "Role of a business developer",
        "Essential tools & setup for business growth",
      ],
      tools: "CRM software, Google Workspace, Notion",
    },
    {
      title: "Module 2: Sales & Lead Generation",
      points: [
        "Prospecting & qualifying leads",
        "Cold outreach via email and calls",
        "Sales funnel creation & optimization",
        "Mini project: Build a sales pipeline for a startup",
      ],
      tools: "HubSpot, Salesforce, Pipedrive",
    },
    {
      title: "Module 3: Client Relationship Management",
      points: [
        "Understanding client needs & building trust",
        "Negotiation & conflict resolution",
        "Retention strategies for long-term partnerships",
        "Mini project: Client communication & relationship plan",
      ],
      tools: "Zoom, Slack, Notion, CRM Tools",
    },
    {
      title: "Module 4: Business Strategy & Growths",
      points: [
        "Market research & competitor analysis",
        "Revenue growth strategies",
        "Opportunity identification & risk mitigation",
        "Mini project: Growth plan for a business",
      ],
      tools: " Excel, Notion, Trello, Analytics Tools",
    },
    {
      title: "Module 5: Final Project & Certification  ",
      points: [
        "Develop a complete business growth strategy for a real or simulated company",
        "Present analysis, strategy, and projected results",
        "Receive certification upon completion",
      ],
      tools: ": All tools learned in the course",
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
            Become a Professional Business Developer

          </h1>

          <p className="text-lg md:text-xl mb-6">
            Master strategies to grow businesses, acquire clients, and drive revenue. Learn practical skills used by top business development professionals worldwide.
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
            Course Overview Business Developer
          </h2>


          <p className="leading-relaxed text-center max-w-3xl mx-auto">
            The<strong> Professional Business Development </strong>,  course equips you with skills to identify opportunities, grow client relationships, and drive revenue. Learn sales strategies, negotiation techniques, business growth planning, and real-world implementation through practical projects and expert mentorship.
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
            Our <span className="text-[#357873]"> Business Development </span> Expertise
          </motion.h2>

          <p className="text-center mt-4 max-w-2xl mx-auto">
            Learn actionable business development strategies that help businesses expand, acquire clients, and increase revenue. From lead generation to deal closing, gain hands-on experience with proven methods.
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
            Course Outline — Business Development
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
              <li><strong>Projects:</strong> 5+ Live Design Projects</li>
              <li><strong>Certificate:</strong> Provided upon completion</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Career Opportunities
            </h2>

            <ul className="space-y-2 text-white">
              <li>Business Development Executive</li>
              <li>Sales Managerr</li>
              <li>Client Relationship Manager</li>
              <li>Freelance Business Consultant</li>
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
            Learn from industry experts, work on real business projects, and receive career guidance every step of the way. Our approach ensures you gain practical experience, build confidence, and develop skills needed to thrive as a professional business developer.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

            {[
              {
                title: "Expert Instructors",
                desc:
                  "Learn from seasoned business development professionals with years of real-world experience. Get hands-on guidance, insider tips, and mentorship to build your career.",
              },
              {
                title: "Practical Projects",
                desc:
                  "Work on real business scenarios, build sales pipelines, client strategies, and growth plans that you can showcase in your portfolio.",
              },
              {
                title: "Career Support",
                desc:
                  "Receive guidance for job interviews, freelance opportunities, portfolio reviews, and career planning to become a successful business development professional.",
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