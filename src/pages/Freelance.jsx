import React from 'react';
import { Link } from "react-router-dom";
import Div from '../components/Div';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';


import screenshotImg from '../img/Screenshot 2025-09-03 194703.png';

const Freelance = () => {
    return (
        <>
            <div
                id="hireme"
                className="w-full md:py-[20px] bg-black min-h-screen"
            >
                <section className="px-8 md:px-16 py-20">
                    <Div className="my-8 relative">
                        <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald mb-10 text-[#f6f6f6]">
                            <h2 className="text-center text-2xl pt-8 text-zinc-200 font-display sm:text-6xl md:text-5xl mt-2 font-bold tracking-tight md:text-center">
                                HIRE ME
                            </h2>
                        </div>
                        <div className="text-[16px] pb-8 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] md:text-center text-start mx-auto text-zinc-200">
                            <p>
                                In 2023, I ventured into freelancing, exploring new
                                opportunities and broadening my horizons. If you're interested in
                                hiring me, please visit my{" "}
                                <Link to="https://www.fiverr.com/ranjithp_" target="_blank">
                                    <span className="font-semibold text-green-300 cursor-pointer">
                                        Fiverr.com
                                    </span>
                                </Link>{" "}
                                profile, where you'll find a diverse range of high-quality
                                services tailored to your needs. Whether it's software
                                development or graphic design, I provide comprehensive solutions
                                for your satisfaction. Feel free to discuss custom orders or
                                unique projects with me. Let's collaborate and bring your
                                ideas to life, creating something truly remarkable together.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <a target="_blank" href="https://www.h3lios.in" rel="noreferrer">
                                <img
                                    alt="H3lios Design Services"
                                    className="hover:scale-105 duration-200 max-w-full h-auto rounded-lg"
                                    src={screenshotImg}
                                />
                            </a>
                        </div>
                        <Achievements />
                        <Testimonials />
                    </Div>
                </section>
            </div>
            <Contact />
        </>
    );
};

export default Freelance;