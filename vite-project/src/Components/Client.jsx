import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const ClientSection = () => {
    const testimonials = [
        {
            text: "We worked with Intellix Soft for graphic design, and the results were outstanding. Our visuals became sharper, more creative, and perfectly matched our brand style.",
            name: "Sophia M.",
        },
        {
            text: "We worked with Intellix Soft for business development, and the results were outstanding. Our strategy became clearer, more effective, and perfectly aligned with our vision.",
            name: "Sarah K.",
        },
        {
            text: "We worked with Intellix Soft for web development, and the results were impressive. Our website became faster, more engaging, and perfectly aligned with our goals.",
            name: "David Lee",
        },
        {
            text: "We worked with Intellix Soft for Python development, and the experience was excellent. Our application became faster, more stable, and perfectly optimized for performance.",
            name: "John Carter",
        },
        {
            text: "We hired Intellix Soft for web development and within a few months, our website transformed completely. The design was modern, responsive, and focused on real performance.",
            name: "Emily Rodriguezee",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const totalCards = testimonials.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === totalCards - 1 ? 0 : prevIndex + 1
            );
        }, 2500);

        return () => clearInterval(interval);
    }, [totalCards]);

    const visibleTestimonials = [
        testimonials[activeIndex],
        testimonials[(activeIndex + 1) % totalCards],
        testimonials[(activeIndex + 2) % totalCards],
    ];

    return (
        <section className="px-4 mt-3">
            <div className="client-main px-6 py-12">
                {/* Animation CSS */}
                <style>
                    {`
            @keyframes textMoveRightToLeft {
              0% {
                opacity: 0;
                transform: translateX(40px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }

            .text-slide-animation {
              animation: textMoveRightToLeft 0.7s ease-in-out;
            }
          `}
                </style>

                {/* Heading */}
                <div className="card-heading my-5 text-center">
                    <h2 className="font-[Poppins] font-bold text-3xl md:text-5xl leading-tight md:leading-[70px] pt-6">
                        What Our{" "}
                        <span className="text-[#56A49E]">
                            Clients
                        </span>{" "}
                        Say
                    </h2>

                    {/* Heading Stars */}
                    <div className="icons my-4 flex justify-center gap-2">
                        <FaStar className="text-[#febf06] text-sm md:text-lg" />
                        <FaStar className="text-[#febf06] text-sm md:text-lg" />
                        <FaStar className="text-[#febf06] text-sm md:text-lg" />
                        <FaStar className="text-[#febf06] text-sm md:text-lg" />
                        <FaStar className="text-[#febf06] text-sm md:text-lg" />
                    </div>

                    <p className="font-bold text-[#56A49E] text-xl md:text-2xl">
                        (5.0/5.0)
                    </p>
                </div>

                {/* Cards Wrapper */}
                <div className="w-full flex justify-center overflow-hidden ">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 max-w-[1300px] 
                    sm: w-full   items-stretch">
                        {visibleTestimonials.map((item, index) => (
                            <div
                                key={`${activeIndex}-${index}`}
                                className="bg-[#3e8079] rounded-[10px] p-8 relative overflow-hidden transition-all duration-500 min-h-[230px] h-full flex flex-col justify-between"
                            >
                                {/* Only Text Content Moves */}
                                <div className="text-slide-animation relative z-10 h-full flex flex-col justify-between">
                                    <p className="text-white font-bold">
                                        {item.text}
                                    </p>

                                    <div className="flex items-center justify-center text-center">
                                        <h3 className="text-white text-[20px] font-bold">
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-4 justify-center pt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${activeIndex === index
                                ? "bg-[#56A49E] scale-125"
                                : "bg-gray-500"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientSection;