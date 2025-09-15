import React from "react";
import Div from "./Div";

const Connect = () => {
    return (
        <Div className="mt-16">
            <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald mb-10 text-[#f6f6f6]">
                <h2 className="text-center text-2xl pt-8 text-zinc-200 font-display sm:text-4xl md:text-3xl mt-2 font-bold tracking-tight md:text-center">
                    LET'S CONNECT
                </h2>
            </div>
            <div className="text-[19px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-start md:text-center mx-auto text-zinc-200">
                <p className="mb-6">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="mailto:ranjithkumar1772002@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                        Email Me
                    </a>
                    <a href="https://www.linkedin.com/in/ranjith-kumar-p-197637221/" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </Div>
    );
};

export default Connect;