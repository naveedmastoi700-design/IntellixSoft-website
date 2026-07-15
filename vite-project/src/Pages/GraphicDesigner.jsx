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
      title: "Visual Design",
      desc: `Learn the fundamentals of design including layout, color theory, typography, and composition to create visually stunning graphics for digital and print media.`,
      points: [
        "Color theory & typography essentials",
        "Layout and composition principles",
        "Design for digital & print platforms",
        "Brand identity basics",
        "Creative problem-solving techniques",
      ],
    },
    {
      title: "Design Software",
      desc: `Master industry-standard tools to bring your creative ideas to life. From vector illustrations to photo editing, gain hands-on skills with top design software.`,
      points: [
        "Adobe Photoshop & Illustrator",
        "Figma & Adobe XD for UI/UX",
        "Canva & other creative tools",
        "Prototyping & wireframing",
        "Efficient workflow & productivity tips",
      ],
    },
    {
      title: "Branding & Portfolio",
      desc: `Build a strong personal brand and professional portfolio that showcases your skills. Learn to create client-ready designs and develop a signature style.`,
      points: [
        "Logo and brand identity design",
        "Portfolio development & presentation",
        "Client communication and briefs",
        "Freelance design opportunities",
        "Career guidance for designers",
      ],
    },
  ];

  const modules = [
    {
      title: "Module 1: Introduction to Graphic Design",
      points: [
        "Understanding visual communication",
        "Overview of design principles",
        "Design tools and workspace setup",
      ],
      tech: "Photoshop, Illustrator, Figma",
    },
    {
      title: "Module 2: Color, Typography & Layout",
      points: [
        "Color theory, contrast, and harmony",
        "Typography fundamentals and pairing",
        "Layout, grids, and composition",
        "Mini project: Poster design",
      ],
      tech: "Photoshop, Illustrator, Figma",
    },
    {
      title: "Module 3: Image Editing & Illustration",
      points: [
        "Photo editing & retouching",
        "Vector illustration techniques",
        "Creative artwork for branding & social media",
        "Mini project: Social media graphics",
      ],
      tech: "Photoshop, Illustrator, Figma",
    },
    {
      title: "Module 4: UI/UX Design Basics",
      points: [
        "Understanding user experience",
        "Wireframing & prototyping",
        "Designing interfaces for web & apps",
        "Mini project: App interface design",
      ],
      tech: "Photoshop, Illustrator, Figma",
    },
    {
      title: "Module 5: Branding & Portfolio Development  ",
      points: [
        "Creating logos and brand identities",
        "Portfolio setup & project presentation",
        "Client briefs and freelance tips",
      ],
      tech: "Photoshop, Illustrator, Figma",
    },
    {
      title: "Module 6: Final Project & Certification",
      points: [
        "Design a full brand identity project",
        "Submit portfolio for review",
        "Receive certificate of completion",
      ],
      tech: "Photoshop, Illustrator, Figma",
    },

  ];

  const faqs = [
    {
      question: "Do I need experience in graphic design?",
      answer:"No, beginners are welcome. All tools, principles, and professional techniques are taught from scratch. ",
    },
    {
      question: "Will I learn Photoshop, Illustrator, and Figma?",
       answer: "Yes! You will master Photoshop, Illustrator, Figma, Canva, and optional motion graphics tools like After Effects.",
    },
    {
      question: "Do you provide a certificate?",
      answer: "Yes, a professional Graphic Design certificate is awarded after course completion.",
    },
    {
      question: "Can I start freelancing after this course?",
      answer: "Absolutely! You will learn portfolio building, client handling, and freelancing platforms like Fiverr & Upwork.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become a Professional Graphic Designer

          </h1>

          <p className="text-lg md:text-xl mb-6">
            Master visual design, branding, and creative tools to craft stunning designs and real-world projects with hands-on guidance.
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
            Course Overview Graphic Designer
          </h2>


          <p className="leading-relaxed text-center max-w-3xl mx-auto">
            The Graphic Design <strong>Intellix Soft</strong>,  course  transforms beginners into creative professionals. You’ll master visual storytelling, color theory, typography, and design software like Photoshop, Illustrator, and Figma through practical, project-based lessons.
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
            Our <span className="text-[#357873]"> Graphic Design </span>Services
          </motion.h2>

          <p className="text-center mt-4 max-w-2xl mx-auto">
            We empower brands and individuals with creative design solutions. From concept to final output, our team delivers designs that communicate, engage, and leave a lasting impression.
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
              <li>Graphic Designer</li>
              <li>UI/UX Designer</li>
              <li>Brand Designer</li>
              <li>Freelance Visual Designer</li>
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
                  "Learn directly from seasoned graphic designers with years of real-world experience. Our instructors provide hands-on guidance, insider tips, and mentorship to help you master design software, creative thinking, and professional workflows.",
              },
              {
                title: "Practical Projects",
                desc:
                  "Work on real-world design projects including branding, social media campaigns, and UI interfaces. Build a portfolio that showcases your creativity and technical skills for future opportunities.",
              },
              {
                title: "Career Support",
                desc:
                  "Receive guidance on freelance opportunities, portfolio reviews, and job placements. Our career support helps you present your skills effectively to clients or employers and launch a successful design career.",
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