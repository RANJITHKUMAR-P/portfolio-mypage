import React, { useState, useEffect } from "react";
import Div from "./Div";
import { dataClient } from "../utils/data";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Auto-rotate testimonials every 5 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === dataClient.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === dataClient.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? dataClient.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-full bg-black relative overflow-hidden py-10" id="clients">
            {/* SECTION HEADING START */}
            <Div className="mb-10 relative">
                <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald mb-10 text-[#f6f6f6]">
                    <h3 className="text-center text-2xl pt-6 text-zinc-300 font-display sm:text-3xl md:text-3xl mt-2 font-bold tracking-tight md:text-center">
                        CLIENT SAYS
                    </h3>
                </div>
                <div className="text-[19px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-zinc-200 text-start md:text-center">
                    Our clients from all around the world speak for us! Take a look at
                    what they have to say about our work and services.
                </div>
            </Div>
            {/* SECTION HEADING END */}

            {/* TESTIMONIAL CAROUSEL START */}
            <Div className="bg-zinc-900 w-full md:w-[834px] rounded-[20px] mx-auto relative mb-[50px] p-8">
                <div className="relative">
                    {/* Testimonial Content */}
                    <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
                        <div className="mb-[25px]">
                            <img
                                alt={dataClient[currentIndex].name}
                                src={dataClient[currentIndex].image}
                                className="w-[80px] h-[80px] max-w-[80px] rounded-full object-cover mx-auto"
                            />
                            <div className="font-bold text-white mt-2">{dataClient[currentIndex].name}</div>
                            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-zinc-200 text-center">
                                {dataClient[currentIndex].country}
                            </div>
                        </div>
                        <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-zinc-300 text-center">
                            "{dataClient[currentIndex].review}"
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevTestimonial}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-zinc-800 p-2 rounded-full text-white hover:bg-zinc-700 transition-colors"
                    >
                        ←
                    </button>
                    <button 
                        onClick={nextTestimonial}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zinc-800 p-2 rounded-full text-white hover:bg-zinc-700 transition-colors"
                    >
                        →
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {dataClient.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full ${
                                    index === currentIndex ? 'bg-blue-500' : 'bg-zinc-600'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </Div>
            {/* TESTIMONIAL CAROUSEL END */}
        </div>
    );
};

export default Testimonials;