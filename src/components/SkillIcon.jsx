import React from "react";

const SkillIcon = ({ path, name }) => {
    return (
        <div className="flex flex-col items-center justify-center p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors">
            <img 
                src={path} 
                alt={name} 
                className="w-12 h-12 object-contain mb-2"
            />
            <span className="text-xs text-zinc-300 text-center">{name}</span>
        </div>
    );
};

export default SkillIcon;