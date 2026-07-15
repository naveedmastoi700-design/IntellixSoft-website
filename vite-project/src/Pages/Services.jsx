import React, { useState } from "react";

import Service from "../assets/images/Services.png";
import appImg from "../assets/images/App.png";
import python from "../assets/images/python.png";
import business from "../assets/images/business.png";
import graphic from "../assets/images/graphic.png";
import web from "../assets/images/web.png";
import digital from "../assets/images/digital.png";
import Backend from "../assets/images/Backend.png";
import Data from "../assets/images/Data.png";
import Footer from "../Components/Footer";

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Discovery & Ideation",
      description:
        "We begin by deeply understanding your business, users, and goals. This phase includes stakeholder interviews, feature prioritization, and technical feasibility.",
      points: [
        "Product Vision & Roadmap",
        "Competitive Analysis",
        "Tech Stack Recommendations",
      ],
    },
    {
      title: "UI/UX Design & Prototyping",
      description:
        "Our designers craft intuitive user flows, low/high-fidelity wireframes, and interactive prototypes all tailored to your brand and user behavior.",
      points: [
        "Wireframing & Prototyping",
        "Design Systems & Brand Alignment",
        "Design-to-Dev Handoff",
      ],
    },
    {
      title: "Architecture & Planning",
      description:
        "We define your app’s structure, integrations, and data flow. Our architects select the best frameworks to ensure scalability and security.",
      points: [
        "Database & API Architecture",
        "System Design Documentation",
        "Scalability Planning",
      ],
    },
    {
      title: "Agile Development (Sprints)",
      description:
        "Our cross-functional team begins iterative development in 1–2 week sprints, with regular demos and feedback loops.",
      points: [
        "Frontend & Backend Development",
        "DevOps Integration",
        "Weekly Sprint Reviews",
      ],
    },
    {
      title: "Quality Assurance & Testing",
      description:
        "We run continuous manual and automated testing to eliminate bugs and ensure peak performance across all devices and use cases.",
      points: [
        "Functional & Non-functional Testing",
        "Cross-browser & Device Testing",
        "Regression & Load Testing",
      ],
    },
    {
      title: "Launch & Deployment",
      description:
        "We prepare your solution for production deployment, whether it’s a mobile app store launch or server-side deployment for a web platform.",
      points: [
        "Play Store / App Store Submission",
        "Cloud Deployment & DNS",
        "Final UAT & Go-live Support",
      ],
    },
    {
      title: "Post-launch Support",
      description:
        "After launch, we continue to support your app with performance optimization, new feature rollout, and user-driven enhancements.",
      points: [
        "Maintenance & Updates",
        "Analytics & Feedback Loops",
        "Feature Expansion",
      ],
    },
  ];

  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-10 py-5">
      {/* CTA Box */}
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[rgba(228,228,228,0.6)] rounded-xl p-6 md:p-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-[Poppins] font-medium text-center md:text-left">
            Need a Custom Solution For Your Business?
          </h3>
          <a href="/contact">
            <button className="cursor-pointer py-3 px-6 rounded-md text-black bg-[#eed025] font-[Sora] font-semibold text-sm sm:text-base hover:text-white transition duration-300 hover:bg-[#56A49E]">
              Let's Talk Now
            </button>
          </a>
        </div>
      </div>

      {/* Process Steps */}
      <div className="flex flex-col md:flex-row gap-6 py-10">
        {/* Sidebar */}
        <div className="md:w-[440px] w-full bg-gradient-to-r from-[#114a45] to-[#56A49E] rounded-2xl p-5">
          <ul className="space-y-3">
            {steps.map((step, index) => (
              <li
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-4 py-3 rounded-lg font-medium cursor-pointer transition-all duration-500 hover:scale-105 text-white ${activeStep === index
                  ? "bg-gradient-to-r from-[#145B55] to-[#56A49E]"
                  : "hover:bg-gradient-to-r hover:from-[#145B55] hover:to-[#56A49E]"
                  }`}
              >
                {index + 1}. {step.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Box */}
        <div className="flex-1 flex items-center">
          <div className="bg-white rounded-xl border p-8 shadow-sm w-full min-h-[350px] flex flex-col justify-center">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent mb-4">
              {steps[activeStep].title}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              {steps[activeStep].description}
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-2">
              {steps[activeStep].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesHero = () => {
  return (
    <>
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[430px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={Service}
          alt="Services Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0000008a]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-[900px] mx-auto">
          <h1 className="text-white text-[42px] md:text-[52px] font-extrabold sm:mb-2">
            Services
          </h1>

          <h2 className="text-white text-[20px] md:text-[24px] font-bold sm:mb-3">
            We provide a wide range of Services
          </h2>

          <p className="text-white text-[15px] md:text-[17px]  max-w-[750px] mx-auto">
            IntelliixSoft provides professional digital services including web
            development, mobile app development, AI solutions, and digital
            marketing. We help businesses grow with fast, secure, and scalable
            technology solutions.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-[Poppins] font-medium text-3xl sm:text-4xl lg:text-6xl leading-snug">
            Our{" "}
            <span className="bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
              Software Development
            </span>{" "}
            Services
          </h2>

          <p className="mt-4 text-gray-600 font-light text-sm sm:text-base">
            We create scalable, secure, and high-performance digital solutions
            for startups, enterprises, and growing businesses — powered by
            innovation, creative design thinking, and cutting-edge technologies.
          </p>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-semibold font-[Poppins]">
              Web App Development
            </h3>

            <p className="text-gray-700 text-sm sm:text-base">
              Create powerful, scalable, and responsive web applications
              tailored to your business needs. Our team builds solutions that
              combine innovation, design, and performance to deliver seamless
              digital experiences.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Custom Web Solutions:
              </span>{" "}
              Develop feature-rich, user-friendly web platforms designed for
              speed, security, and flexibility across all industries.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                E-Commerce Platforms:
              </span>{" "}
              Build high-performance online stores with secure payment
              integration, product management, and intuitive user interfaces.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Enterprise Web Portals:
              </span>{" "}
              Design scalable portals that streamline workflows, boost
              collaboration, and simplify business operations.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Progressive Web Apps:
              </span>{" "}
              Build modern web apps that work smoothly across devices with fast
              loading and app-like performance.
            </p>

            <a
              href="/WebAppDevelopment"
              className="w-fit cursor-pointer py-3 px-6 rounded-md text-black bg-[#eed025] font-[Sora] font-semibold text-sm sm:text-base hover:text-white transition ease-in-out duration-300 hover:bg-[#56A49E]"
            >
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={web}
              className="w-full max-w-lg rounded-lg object-cover shadow-lg"
              alt="Web App Development"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-semibold font-[Poppins]">
              Mobile App Development
            </h3>

            <p className="text-gray-700 text-sm sm:text-base">
              Create powerful, user-focused mobile applications that drive
              engagement and business growth. Our team develops fast, secure,
              and scalable apps designed to perform flawlessly across Android
              and iOS platforms.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Custom App Solutions:
              </span>{" "}
              Build mobile apps tailored to your brand goals — from eCommerce to
              enterprise-level systems — ensuring smooth performance and modern
              design.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Cross-Platform Development:
              </span>{" "}
              We use advanced frameworks like Flutter and React Native to
              deliver consistent experiences across all devices with faster
              development cycles.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Maintenance & Support:
              </span>{" "}
              We provide continuous updates, performance monitoring, and
              technical support to keep your app secure, efficient, and
              future-ready.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                UI/UX Excellence:
              </span>{" "}
              Our design team focuses on creating intuitive, attractive, and
              easy-to-navigate interfaces.
            </p>

            <a
              href="/MobileAppDevelopment"
              className="w-fit cursor-pointer py-3 px-6 rounded-md text-black bg-[#eed025] font-[Sora] font-semibold text-sm sm:text-base hover:text-white transition ease-in-out duration-300 hover:bg-[#56A49E]"
            >
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={appImg}
              className="w-full max-w-lg rounded-lg object-cover shadow-lg"
              alt="Mobile App Development"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-semibold font-[Poppins]">
              Python & Machine Learning
            </h3>

            <p className="text-gray-700 text-sm sm:text-base">
              Leverage the power of Python and AI-driven models to build smart,
              data-powered solutions that automate workflows and deliver deeper
              insights for your business.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Predictive Model Development:
              </span>{" "}
              Create intelligent machine learning models that forecast trends,
              analyze behavior, and support data-driven decision-making.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                AI Automation Solutions:
              </span>{" "}
              Build systems that automate complex business processes, enhance
              productivity, and reduce operational costs.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Data Analysis & Visualization:
              </span>{" "}
              Transform raw data into meaningful, actionable insights through
              advanced data pipelines.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                AI Integration Services:
              </span>{" "}
              We integrate AI models into web, mobile, and SaaS applications for
              smarter user experiences.
            </p>

            <a
              href="/PythonMachineLearning"
              className="w-fit cursor-pointer py-3 px-6 rounded-md text-black bg-[#eed025] font-[Sora] font-semibold text-sm sm:text-base hover:text-white transition ease-in-out duration-300 hover:bg-[#56A49E]"
            >
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={python}
              className="w-full max-w-lg rounded-lg object-cover shadow-lg"
              alt="Python Machine Learning"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-semibold font-[Poppins]">
              Graphic Designer
            </h3>

            <p className="text-gray-700 text-sm sm:text-base">
              Create visually stunning designs that capture attention,
              communicate ideas, and strengthen your brand identity with modern
              and creative visuals.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Brand Identity Design:
              </span>{" "}
              Craft unique logos, color palettes, and visual styles that define
              your brand.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Marketing & Social Media Graphics:
              </span>{" "}
              Design engaging visuals, banners, and social posts that connect
              with your audience.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Print & Digital Design:
              </span>{" "}
              From brochures to digital ads, we deliver high-quality designs
              optimized for every platform.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Creative Asset Management:
              </span>{" "}
              We maintain brand consistency across all materials and platforms.
            </p>

            <a
              href="/GraphicDesigner"
              className="w-fit cursor-pointer py-3 px-6 rounded-md text-black bg-[#eed025] font-[Sora] font-semibold text-sm sm:text-base hover:text-white transition ease-in-out duration-300 hover:bg-[#56A49E]"
            >
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={graphic}
              className="w-full max-w-lg rounded-lg object-cover shadow-lg"
              alt="Graphic Design"
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-semibold font-[Poppins]">
              Digital Marketing
            </h3>

            <p className="text-gray-700 text-sm sm:text-base">
              Drive visibility, engagement, and growth with data-driven digital
              marketing strategies tailored to your business goals.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Social Media Marketing:
              </span>{" "}
              Build a strong online presence with creative campaigns that
              increase brand awareness.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Search Engine Optimization:
              </span>{" "}
              Improve website ranking, boost organic traffic, and attract
              potential customers.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Pay-Per-Click Advertising:
              </span>{" "}
              Maximize ROI with targeted ad campaigns designed to reach the
              right audience.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Content & Email Marketing:
              </span>{" "}
              Deliver impactful content and personalized emails that strengthen
              customer relationships.
            </p>

            <a
              href="/DigitalMarketing"
              className="w-fit cursor-pointer py-3 px-6 rounded-md text-black bg-[#eed025] font-[Sora] font-semibold text-sm sm:text-base hover:text-white transition ease-in-out duration-300 hover:bg-[#56A49E]"
            >
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={digital}
              className="w-full max-w-lg rounded-lg object-cover shadow-lg"
              alt="Digital Marketing"
            />
          </div>
        </div>

        {/* Row 6 */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-semibold font-[Poppins]">
              Business Development
            </h3>

            <p className="text-gray-700 text-sm sm:text-base">
              Empower your brand with strategic business solutions designed to
              boost growth, efficiency, and client engagement. At Intellix Soft,
              we combine innovation, data, and market insights to help your
              business scale with confidence.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Market Strategy & Planning:
              </span>{" "}
              Develop clear, result-driven strategies that identify
              opportunities, optimize resources, and enhance your business
              performance.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Client Acquisition & Relationship Building:
              </span>{" "}
              Implement smart methods to attract potential clients, strengthen
              connections, and build long-term partnerships that drive success.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Sales Process Optimization:
              </span>{" "}
              Streamline your sales pipeline with data-backed systems and
              automation tools to improve conversion rates and productivity.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Digital Growth Integration:
              </span>{" "}
              Leverage digital platforms and technology to expand your reach,
              boost visibility, and achieve measurable business growth across
              multiple channels.
            </p>

            <a
              href="/BusinessDevelopment"
              className="w-fit cursor-pointer py-3 px-6 rounded-md text-black bg-[#eed025] font-[Sora] font-semibold text-sm sm:text-base hover:text-white transition ease-in-out duration-300 hover:bg-[#56A49E]"
            >
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={business}
              className="w-full max-w-lg rounded-lg object-cover shadow-lg"
              alt="Business Development"
            />
          </div>
        </div>
        {/* Row 7 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-semibold font-[Poppins]">
              Backend Web Development with Python
            </h3>

            <p className="text-gray-700 text-sm sm:text-base">
              Build powerful and scalable web applications with Python-based backend technologies. At Intellix Soft, we focus on creating secure, high-performance server-side solutions that ensure seamless functionality, efficient data management, and exceptional user experiences.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Server-Side Application Development:
              </span>{" "}
              Design and develop robust backend systems that handle business logic, user requests, and application workflows with speed and reliability.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Database Management & Integration:
              </span>{" "}
              Create structured databases, optimize queries, and manage data efficiently to ensure secure storage, fast retrieval, and smooth application performance.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
               API Development & System Connectivity:
              </span>{" "}
              Build and integrate RESTful APIs that enable seamless communication between applications, third-party services, and frontend platforms.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Authentication & Security Implementation:
              </span>{" "}
             Protect applications with secure authentication, authorization, encryption, and best security practices to safeguard user data and system integrity.
            </p>

            <a
              href="/BackendWebDevelopmentwithPython"
              className="w-fit cursor-pointer py-3 px-6 rounded-md text-black bg-[#eed025] font-[Sora] font-semibold text-sm sm:text-base hover:text-white transition ease-in-out duration-300 hover:bg-[#56A49E]"
            >
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={Backend}
              className="w-full max-w-lg rounded-lg object-cover shadow-lg"
              alt="Backend Web Development with Python"
            />
          </div>
        </div>

        {/* Row 8 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-semibold font-[Poppins]">
              Data Science & Automation with Python
            </h3>

            <p className="text-gray-700 text-sm sm:text-base">
              Transform raw data into valuable insights and automate repetitive processes with Python-powered solutions. At Intellix Soft, we leverage data science techniques and intelligent automation to improve decision-making, enhance productivity, and drive business efficiency.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Data Collection & Processing:
              </span>{" "}
              Gather, clean, and organize data from multiple sources to ensure accuracy, consistency, and readiness for analysis and reporting.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Data Analysis & Visualization:
              </span>{" "}
              Explore datasets, identify trends, and create interactive visualizations that help businesses make informed and data-driven decisions.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Predictive Analytics & Machine Learning:
              </span>{" "}
              Develop intelligent models that uncover patterns, forecast outcomes, and support strategic planning through advanced analytical techniques.
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-lg font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
                Workflow Automation & Task Optimization:
              </span>{" "}
              Automate repetitive tasks, data processing pipelines, and routine operations to save time, reduce errors, and increase operational efficiency.
            </p>

            <a
              href="/DataScienceAndAutomationWithPython"
              className="w-fit cursor-pointer py-3 px-6 rounded-md text-black bg-[#eed025] font-[Sora] font-semibold text-sm sm:text-base hover:text-white transition ease-in-out duration-300 hover:bg-[#56A49E]"
            >
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={Data}
              className="w-full max-w-lg rounded-lg object-cover shadow-lg"
              alt="Data Science & Automation with Python"
            />
          </div>
        </div>
      </section>
      <ProcessSection />

      <section className="mt-14 mb-18">
        <div className="px-6 md:px-12">
          {/* Heading */}
          <h2 className="font-[Poppins] font-bold text-[36px] md:text-[56.97px] text-center">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent">
              IntellixSoft?
            </span>
          </h2>

          {/* Subtitle */}
          <div className="w-full flex justify-center py-6 md:py-10 ">
            <p className="font-[Poppins] font-light text-[16px] md:text-[16.07px] text-center max-w-2xl">
              At Intellix Soft, we don’t just build software — we create solutions
              that solve real challenges, accelerate business growth, and deliver
              measurable impact. Our team blends innovation, strategy, and technology
              to engineer digital products that perform, scale, and inspire trust.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-6 md:gap-8 text-center px-6 md:px-12">
          {/* Card 1 */}
          <div className="group relative overflow-hidden flex flex-col gap-5 shadow-sm rounded-[10px] p-6 bg-[rgba(228,228,228,0.6)] border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[#56A49E]/30 hover:shadow-[12px_12px_0px_rgba(20,91,85,0.18)]">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#145B55] to-[#56A49E]"></div>
            <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-[#56A49E]/10 transition-all duration-300 group-hover:scale-125"></div>

            <h3 className="relative bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent font-semibold text-[22px] md:text-[25.53px] font-[Poppins]">
              Tailored Solutions, Built for Scale
            </h3>
            <p className="relative text-black font-light text-[16px] md:text-[19.85px] leading-normal">
              We create scalable web and mobile apps aligned with your business goals,
              ensuring performance, flexibility, and growth at every stage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden flex flex-col gap-5 shadow-sm rounded-[10px] p-6 bg-[rgba(228,228,228,0.6)] border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[#56A49E]/30 hover:shadow-[12px_12px_0px_rgba(20,91,85,0.18)]">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#145B55] to-[#56A49E]"></div>
            <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-[#56A49E]/10 transition-all duration-300 group-hover:scale-125"></div>

            <h3 className="relative bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent font-semibold text-[22px] md:text-[25.53px] font-[Poppins]">
              Expert Teams with Tech Knowledge
            </h3>
            <p className="relative text-black font-light text-[16px] md:text-[19.85px] leading-normal">
              Our skilled professionals combine deep technical expertise with creative
              problem-solving to deliver innovative, high-performing digital
              solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden flex flex-col gap-5 shadow-sm rounded-[10px] p-6 bg-[rgba(228,228,228,0.6)] border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[#56A49E]/30 hover:shadow-[12px_12px_0px_rgba(20,91,85,0.18)]">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#145B55] to-[#56A49E]"></div>
            <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-[#56A49E]/10 transition-all duration-300 group-hover:scale-125"></div>

            <h3 className="relative bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent font-semibold text-[22px] md:text-[25.53px] font-[Poppins]">
              Agile & Collaborative Process
            </h3>
            <p className="relative text-black font-light text-[16px] md:text-[19.85px] leading-normal">
              We follow an agile workflow that keeps you involved at every stage,
              ensuring fast delivery, transparency, and results that match your
              vision.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden flex flex-col gap-5 shadow-sm rounded-[10px] p-6 bg-[rgba(228,228,228,0.6)] border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[#56A49E]/30 hover:shadow-[12px_12px_0px_rgba(20,91,85,0.18)]">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#145B55] to-[#56A49E]"></div>
            <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-[#56A49E]/10 transition-all duration-300 group-hover:scale-125"></div>

            <h3 className="relative bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent font-semibold text-[22px] md:text-[25.53px] font-[Poppins]">
              Future-Ready Technologies
            </h3>
            <p className="relative text-black font-light text-[16px] md:text-[19.85px] leading-normal">
              We build with the latest tools and frameworks to ensure your digital
              products stay modern, adaptable, and ready for tomorrow’s innovations.
            </p>
          </div>

          {/* Card 5 */}
          <div className="group relative overflow-hidden flex flex-col gap-5 shadow-sm rounded-[10px] p-6 bg-[rgba(228,228,228,0.6)] border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[#56A49E]/30 hover:shadow-[12px_12px_0px_rgba(20,91,85,0.18)]">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#145B55] to-[#56A49E]"></div>
            <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-[#56A49E]/10 transition-all duration-300 group-hover:scale-125"></div>

            <h3 className="relative bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent font-semibold text-[22px] md:text-[25.53px] font-[Poppins]">
              Data-Driven & Secure by Design
            </h3>
            <p className="relative text-black font-light text-[16px] md:text-[19.85px] leading-normal">
              We build solutions backed by data insights and strong security, ensuring
              reliable performance and protection at every level.
            </p>
          </div>

          {/* Card 6 */}
          <div className="group relative overflow-hidden flex flex-col gap-5 shadow-sm rounded-[10px] p-6 bg-[rgba(228,228,228,0.6)] border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[#56A49E]/30 hover:shadow-[12px_12px_0px_rgba(20,91,85,0.18)]">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#145B55] to-[#56A49E]"></div>
            <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-[#56A49E]/10 transition-all duration-300 group-hover:scale-125"></div>

            <h3 className="relative bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent font-semibold text-[22px] md:text-[25.53px] font-[Poppins]">
              Global Reach, Local Commitment
            </h3>
            <p className="relative text-black font-light text-[16px] md:text-[19.85px] leading-normal">
              We serve clients worldwide while delivering personalized support and
              dedicated solutions tailored to each business need.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 py-20 px-6 md:px-16 ">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Let’s Build Something <br />
              <span className="text-teal-600">Great Together.</span>
            </h1>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Whether you’re launching a product, upgrading systems, or exploring new
              ideas, we help you turn your vision into reality.
            </p>

            <h3 className="mt-6 font-semibold text-gray-900">
              Contact us now and get:
            </h3>

            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>✔ A customized project roadmap</li>
              <li>✔ Expert guidance on tech stack & budget</li>
              <li>✔ Dedicated consultation with experts</li>
            </ul>
          </div>

          {/* RIGHT FORM (COMPACT PROFESSIONAL) */}
          <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-100 p-5 md:p-6 transition-all duration-300 hover:shadow-[14px_14px_0px_rgba(20,91,85,0.15)]">

            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#145B55] to-[#56A49E]"></div>

            {/* Decorative Background Circles */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#56A49E]/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-yellow-400/10 rounded-full"></div>

            {/* Form Header */}
            <div className="relative text-center mb-4 pt-2">
              <h2 className="text-xl font-bold text-gray-900">
                Get In Touch
              </h2>

              <p className="text-gray-500 text-xs mt-1">
                Tell us about your project. We reply within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form className="relative space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:bg-white focus:border-[#56A49E] focus:ring-2 focus:ring-[#56A49E]/20 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:bg-white focus:border-[#56A49E] focus:ring-2 focus:ring-[#56A49E]/20 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:bg-white focus:border-[#56A49E] focus:ring-2 focus:ring-[#56A49E]/20 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details
                </label>
                <textarea
                  rows="3"
                  placeholder="Briefly describe your project"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:bg-white focus:border-[#56A49E] focus:ring-2 focus:ring-[#56A49E]/20 transition resize-none"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[25%] bg-[#eed025] hover:bg-[#56A49E] hover:text-white text-black font-semibold py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Submit
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 ">
                Your information is safe with us.
              </p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicesHero;