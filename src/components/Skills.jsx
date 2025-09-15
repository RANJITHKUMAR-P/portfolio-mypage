
import React from "react";
import Div from "./Div";
import SkillIcon from "./SkillIcon";

// Import all images
import tailwindIcon from "../img/icons8-tailwind-css-24.png";
import reactIcon from "../img/icons8-react-48.png";
import reduxIcon from "../img/icons8-redux-24.png";
import nodeIcon from "../img/icons8-node-js-32.png";
import expressIcon from "../img/icons8-express-js-50.png";
import sqlIcon from "../img/icons8-sql-50.png";
import mongoIcon from "../img/icons8-mongodb-24.png";
import htmlIcon from "../img/files.png";
import cssIcon from "../img/icons8-css-50.png";
import jsIcon from "../img/icons8-javascript-logo-50.png";
import typescriptIcon from "../img/icons8-typescript-50.png";
import firebaseIcon from "../img/icons8-firebase-24.png";
import gitIcon from "../img/icons8-git-50.png";
import javaIcon from "../img/icons8-java-50.png";

const Skills = () => {
  return (
    <div id="Skills" className="w-full bg-black relative overflow-hidden py-10">
      {/* SKILL ICONS START */}
      <Div className="mb-10 relative">
        <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald mb-10 text-[#f6f6f6]">
          <h3 className="text-center text-2xl pt-6 text-zinc-300 font-display sm:text-3xl md:text-3xl mt-2 font-bold tracking-tight md:text-center">
            MY ARSENALS
          </h3>
        </div>
        <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-zinc-200 text-start md:text-center mx-auto">
          <p>
My main area of expertise is the MERN stack, with a strong interest in Next.js and Tailwind CSS. I am also actively expanding my knowledge by exploring new technologies to stay up to date with modern development trends.
          </p>
        </div>
      </Div>
      
      <Div className="grid grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-8 relative pb-2">
        {/* Use imported images */}
        <SkillIcon path={tailwindIcon} name="Tailwind CSS" />
        <SkillIcon path={reactIcon} name="React" />
        <SkillIcon path={reduxIcon} name="Redux" />
        <SkillIcon path={nodeIcon} name="Node.js" />
        <SkillIcon path={expressIcon} name="Express" />
        <SkillIcon path={sqlIcon} name="SQL" />
        <SkillIcon path={mongoIcon} name="MongoDB" />
        <SkillIcon path={htmlIcon} name="HTML" />
        <SkillIcon path={cssIcon} name="CSS" />
        <SkillIcon path={jsIcon} name="JavaScript" />
        <SkillIcon path={typescriptIcon} name="TypeScript" />
        <SkillIcon path={firebaseIcon} name="Firebase" />
        <SkillIcon path={gitIcon} name="Git" />
        <SkillIcon path={javaIcon} name="Java" />
      </Div>
      {/* SKILL ICONS END */}
    </div>
  );
};

export default Skills;