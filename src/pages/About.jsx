import React from "react";
import Div from "../components/Div";
import CallToAction from "../components/CallToAction";
import Skills from "../components/Skills";
import Connect from "../components/Connect";

// Import the resume image
import resume from "../img/ranjith-resume.jpg";

// Download Icon for the CV download button
const DownloadIcon = () => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 1024 1024" 
    height="1.5em" 
    width="1.5em" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
  </svg>
);

const About = () => {
    // Function to handle download
    const handleDownload = () => {
        try {
            const link = document.createElement('a');
            
            // Use the imported image
            link.href = resume;
            
            // Set a clean download filename
            link.download = 'ranjith-resume.jpg';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Download failed:', error);
            // Fallback: Open in new tab if download fails
            window.open(resume, '_blank');
        }
    };

    return (
        <div
            id="About"
            className="w-full md:py-[20px] bg-black min-h-screen"
        >
            <section className="px-8 md:px-16 py-20">
                <Div className="mt-8">
                    <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald mb-10 text-[#f6f6f6]">
                        <h2 className="text-center text-2xl pt-8 text-zinc-200 font-display sm:text-6xl md:text-5xl mt-2 font-bold tracking-tight md:text-center">
                            THE VOYAGE OF RANJITH KUMAR P
                        </h2>
                    </div>
                    <div className="text-[19px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-start md:text-center mx-auto text-zinc-200">
                        <p className="mb-2">
                           Hello there! I’m an enthusiastic Full-Stack MERN Developer from Dindigul, India. I specialize in building robust web and Android applications, as well as developing smart contracts. My technical expertise spans multiple programming languages, including JavaScript, TypeScript, and Java.
                        </p>
                    </div>
                    <div className="pt-6 flex justify-center">
                        <CallToAction
                            icon={<DownloadIcon />}
                            action={handleDownload}
                        />
                    </div>
                </Div>

                <Skills />
                <Connect />
            </section>
        </div>
    );
};

export default About;