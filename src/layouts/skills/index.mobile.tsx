import { motion } from "framer-motion";
import React from "react";
import skills from "public/data/skills.json";
import classNames from "classnames";

export const SkillsMobile = () => {
  return (
    <div
      className=" bg-pink-300 bg-repeat p-5 border-black md:border-t-4 border-t-2 relative"
      style={{ backgroundImage: `url(/images/strawberry_bg.png)`, zIndex: -2 }}
    >
      <div
        style={{ fontFamily: "Constructio" }}
        className="md:text-3xl text-xl text-center"
      >
        I’m a full-stack developper, with skills in:
      </div>
      <div className="font-CourierBold text-xl mt-20">Frontend:</div>
      {skills.front.map((skill) => (
        <div key={skill.title}>
          <div className="font-Courier">{skill.title}</div>
          <div className="md:border-4 border-2 md:p-4 m-2 md:h-20 h-10 bg-white transition-all duration-300 relative border-black rounded-lg">
            <motion.div
              viewport={{ margin: "-200px -20px 0px 100px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percent}%` }}
              className={classNames(
                "bg-amber-300 rounded-md border-black h-full absolute top-0 left-0",
                parseInt(skill.percent) >= 98
                  ? " border-r-0"
                  : " border-r-2 rounded-r-none"
              )}
            />
          </div>
        </div>
      ))}

      <div className="font-CourierBold text-xl mt-20">Backend - database:</div>
      {skills.backend.map((skill) => (
        <div key={skill.title}>
          <div className="font-Courier">{skill.title}</div>
          <div className="md:border-4 border-2 md:p-4 m-2 md:h-20 h-10 bg-white transition-all duration-300 relative border-black rounded-lg">
            <motion.div
              viewport={{ margin: "-200px -20px 0px 100px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percent}%` }}
              className={classNames(
                "bg-amber-300 rounded-md border-black h-full absolute top-0 left-0",
                parseInt(skill.percent) >= 98
                  ? " border-r-0"
                  : " border-r-2 rounded-r-none"
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
