import React from "react";

// Custom Arrow Icon
const ArrowIcon = () => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 16 16" 
    height="1.5em" 
    width="1.5em" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
  </svg>
);

const CallToAction = ({ action, icon }) => {
  return (
    <div 
      className="call-to-action bg-gradient-to-tr from-[#7cc9fc] to-[#99a8ff] cursor-pointer inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all hover:shadow-lg hover:scale-105"
      onClick={action}
    >
      <span className="text-action mr-2">Download CV</span>
      {icon ? (
        <div className="icon">{icon}</div>
      ) : (
        <ArrowIcon />
      )}
    </div>
  );
};

export default CallToAction;