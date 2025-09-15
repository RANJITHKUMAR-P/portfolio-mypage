import React, { useState, useEffect, useRef } from "react";
import Div from "./Div";
import { achievements } from "../utils/data";

const AchievementItem = ({ year, description }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Store the current ref value in a variable to use in cleanup
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTime;
          const duration = 2000; // 2 seconds
          const startValue = 0;
          const endValue = year;
          
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + easeOutQuart * (endValue - startValue));
            
            setCount(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 } 
    );
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [year, hasAnimated]);

  return (
    <div ref={ref} className="text-center p-6 bg-zinc-900 rounded-lg">
      <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
        {count}+
      </div>
      <div 
        className="text-zinc-300 text-sm md:text-base"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

const Achievements = () => {
    return (
        <div className="w-full bg-black relative overflow-hidden py-10">
            <Div className="mb-10 relative">
                <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald mb-10 text-[#f6f6f6]">
                    <h3 className="text-center text-2xl pt-6 text-zinc-300 font-display sm:text-3xl md:text-3xl mt-2 font-bold tracking-tight md:text-center">
                        ACHIEVEMENTS
                    </h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {achievements.map((item) => (
                        <AchievementItem 
                            key={item.id} 
                            year={item.year} 
                            description={item.description} 
                        />
                    ))}
                </div>
            </Div>
        </div>
    );
};

export default Achievements;