import React from "react";
import AboutImage from "../assets/images/About.png";
import group from "../assets/images/group.png";
import project from "../assets/images/project.png"
import Issue from "../assets/images/Issue.png"

// icons
import { FaEye, FaBullseye, FaHistory } from "react-icons/fa";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[220px] sm:h-[280px] md:h-[360px] flex items-center justify-center">
        <img
          src={AboutImage}
          alt="About"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#000000a4]"></div>

        <div className="relative z-10 text-center max-w-[900px] px-4">
          <h1 className="text-white text-[42px] md:text-[52px] font-bold">
            About Us
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section id="technology" className="py-16 bg-white">
        <div className="container mx-auto flex flex-col xl:flex-row items-center gap-12 px-6 lg:px-12">

          <div className="xl:w-1/2 text-center lg:text-left order-2 xl:order-1">
            <p className="text-lg sm:text-xl font-[Sora] font-medium bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent mb-3">
              About Us
            </p>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[Sora] font-semibold leading-tight mb-6">
              Driving Innovation in Digital Technology!
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              At Intellixsoft, we believe technology is more than code —
              it’s the bridge to innovation, growth, and transformation.
              Our mission is to empower businesses with smart digital
              solutions that redefine possibilities.
            </p>
          </div>

         <div className="relative w-full max-w-full xl:max-w-1/2 h-[300px] sm:h-[400px] xl:h-[450px] border-4 border-[#56A49E] rounded-xl overflow-hidden order-1 xl:order-2">
            <img
              src={group}
              alt="group"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Vision Cards */}
      <section id="vision" className="py-24 px-6 lg:px-16 bg-gray-50 mt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-stretch">

          {/* Card 1 */}
          <div className="group relative h-full bg-gradient-to-br from-[#114a45] to-[#56A49E] p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition duration-300">

            <div className="absolute top-4 right-4 text-white/20 text-6xl font-bold">
              01
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 text-white text-xl">
                ✓
              </div>

              <h3 className="text-white text-xl font-bold">
                Expertise & <br /> Experience
              </h3>
            </div>

            <p className="text-white/80 mt-4 text-sm">
              Delivering industry-level experience with modern solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative h-full bg-gradient-to-br from-[#114a45] to-[#56A49E] p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition duration-300">

            <div className="absolute top-4 right-4 text-white/20 text-6xl font-bold">
              02
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 text-white text-xl">
                ★
              </div>

              <h3 className="text-white text-xl font-bold">
                Committed to <br /> Quality
              </h3>
            </div>

            <p className="text-white/80 mt-4 text-sm">
              We ensure high-quality standards in every project.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative h-full bg-gradient-to-br from-[#114a45] to-[#56A49E] p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition duration-300">

            <div className="absolute top-4 right-4 text-white/20 text-6xl font-bold">
              03
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 text-white text-xl">
                ⚡
              </div>

              <h3 className="text-white text-xl font-bold">
                Comprehensive <br /> Services
              </h3>
            </div>

            <p className="text-white/80 mt-4 text-sm">
              Full-stack digital services for business growth.
            </p>
          </div>

        </div>
      </section>

      {/* Vision / Mission / History */}
      <section className="px-6 lg:px-12 py-16">
        <div className="flex flex-wrap justify-center items-center gap-20 text-center">

          <div className="flex flex-col items-center">
            <FaEye className="text-[#56A49E] text-7xl mb-4" />
            <h3 className="text-lg font-bold uppercase">Our Vision</h3>
            <p className="text-gray-600 mt-2 text-sm max-w-[250px]">
              Empowering businesses with tailored IT solutions for growth and success.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaBullseye className="text-[#56A49E] text-7xl mb-4" />
            <h3 className="text-lg font-bold uppercase">Our Mission</h3>
            <p className="text-gray-600 mt-2 text-sm max-w-[250px]">
              To lead in digital innovation, seamlessly blending technology and strategy.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaHistory className="text-[#56A49E] text-7xl mb-4" />
            <h3 className="text-lg font-bold uppercase">Our History</h3>
            <p className="text-gray-600 mt-2 text-sm max-w-[250px]">
              A trusted partner in tech, Softechgenics has evolved through dedication.
            </p>
          </div>

        </div>
      </section>

    <section id="request" className="relative flex justify-center px-4 sm:px-6 lg:px-12 py-20">
  
  <div
    className="relative w-full max-w-[1430px] rounded-lg h-[220px] sm:h-[300px] md:h-[400px] bg-cover bg-center"
    style={{ backgroundImage: `url(${project })` }}
  >
    
    <div className="bg-gradient-to-r from-[#145B55] to-[#56A49E]/50 w-full h-full flex flex-col items-center justify-center p-6 sm:p-10 rounded-lg text-center">

      <div className="w-full max-w-[850px] flex flex-col items-center justify-center sm:gap-12 gap-6">

        <h1 className="text-white text-[28px] sm:text-4xl lg:text-[54px] font-[Sora] font-semibold ">
          Have A Project To Discuss?
        </h1>

        <div className="relative inline-flex justify-start sm:px-8 sm:py-4 px-6 py-2 font-medium rounded-full overflow-hidden bg-[#eed025] text-black transition-all duration-500 before:content-[''] before:absolute before:inset-0 before:bg-[#56A49E] before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-in-out before:rounded-full hover:text-white items-center">

          <a href="./contact">
            <span className="relative z-10 flex items-center sm:text-2xl text-sm">
              Contact Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 14 10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4-4 4" />
              </svg>
            </span>
          </a>

        </div>

      </div>
    </div>
  </div>

</section>
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">

          <p className="text-2xl sm:text-3xl font-normal font-sora">
            <span className="bg-gradient-to-r from-[#145B55] to-[#56A49E] bg-clip-text text-transparent font-semibold">
              Inspiring Creative Issues
            </span>
          </p>

          <p className="text-3xl sm:text-5xl font-semibold leading-snug sm:leading-[3.375rem] font-sora">
            Empowering Innovation for Meaningful Change!
          </p>

          <p className="text-base sm:text-lg font-normal font-sora">
            At IntellixSoft, creativity fuels our solutions. We believe the
            best ideas arise from a blend of insight, collaboration, and
            exploration, tailored to transform concepts into high-impact
            solutions.
          </p>

          <p className="text-xl sm:text-2xl font-semibold font-sora">
            Our Approach
          </p>

          <p className="text-base sm:text-lg font-normal font-sora">
            With clarity, definition, and resolution as our guiding pillars,
            we encourage a dynamic brainstorming process that taps into
            diverse perspectives and industry trends.
          </p>

        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Issue}
            alt="Issue"
           className="w-full sm:w-auto sm:max-w-lg lg:max-w-xl h-[200px] sm:h-[300px] lg:h-auto sm:aspect-square object-cover rounded-lg border-4 border-[#145B55]"
          />
        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;