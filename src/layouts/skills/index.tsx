import classNames from "classnames";
import { motion } from "framer-motion";
import skills from "public/data/skills.json";
import { FC, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import strawberry_bg from "public/images/strawberry_bg.png";

export const Skills: FC = () => {
  const [toggle, setToggle] = useState(false);

  const opacityFrontend = useSpring<object>({
    config: { duration: 300 },
    opacity: toggle ? 0 : 1,
  });

  const opacityBackend = useSpring<object>({
    config: { duration: 300 },
    opacity: toggle ? 1 : 0,
  });

  useEffect(() => {
    const inViewport = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        setToggle(entry.isIntersecting);
      });
    };

    const Obs = new IntersectionObserver(inViewport);
    const ELs_inViewport = document.querySelectorAll("#frontend");
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL);
    });
  });

  return (
    <div
      className=" bg-pink-300 bg-repeat border-black md:border-t-4 border-t-2 relative grid grid-cols-2"
      style={{ backgroundImage: `url(/images/strawberry_bg.png)`, zIndex: -2 }}
    >
      <div className="md:p-20 p-2 border-black border-r-4">
        <div
          style={{ fontFamily: "Constructio" }}
          className="md:text-3xl text-xs sticky top-[120px]"
        >
          I’m a full-stack developper, so that mean that I have skills in:
        </div>

        <div className="h-[100vh]">
          <animated.div
            style={opacityFrontend}
            className="sticky text-center font-CourierBold md:text-3xl text-xs top-[calc(40vh_+_102px)]"
          >
            Frontend
          </animated.div>
          {/* <div
            className=" bg-blue-100 w-10 h-10 absolute top-[20%]"
          /> */}
        </div>
        <div className="h-[100vh] relative">
          <animated.div
            style={opacityBackend}
            className="sticky font-CourierBold text-center md:text-3xl text-xs top-[calc(40vh_+_102px)]"
          >
            Backend - Database
          </animated.div>
          <div
            id="frontend"
            className=" opacity-0 w-10 h-10 absolute bottom-[50%]"
          />
        </div>
      </div>

      <div className="md:p-20">
        <animated.div
          style={opacityFrontend}
          className="h-[70vh] z-[100] font-Courier md:text-2xl text-xs"
        >
          {skills?.front?.map((skill, index) => (
            <motion.div
              key={skill.title}
              style={{ top: index * 5 + "vh" }}
              className={classNames(
                "md:border-4 border-2 md:p-4 m-2 md:h-20 h-10 bg-white transition-all duration-300 relative border-black rounded-lg"
              )}
            >
              <div
                style={{ zIndex: 100 }}
                className="absolute md:top-5 top-2 left-2"
              >
                {skill.title}
              </div>
              <motion.div
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                style={{ zIndex: 1 }}
                className="bg-amber-300 rounded rounded-r-none md:border-r-4 border-r-2 border-black  w-full h-full absolute top-0 left-0"
              />
              <div
                style={{ zIndex: -3 }}
                className="bg-black w-full h-full absolute top-2 hover:top-4 hover:left-4 rounded-lg left-2"
              />
            </motion.div>
          ))}
        </animated.div>

        <animated.div
          style={opacityBackend}
          className="h-[70vh] z-[100] font-Courier md:text-2xl text-xs"
        >
          {skills?.backend?.map((skill, index) => (
            <motion.div
              key={skill.title}
              style={{ top: index * 5 + "vh" }}
              className={classNames(
                "md:border-4 border-2 md:p-4 m-2 md:h-20 h-10 bg-white transition-all duration-300 relative border-black rounded-lg"
              )}
            >
              <div
                style={{ zIndex: 100 }}
                className="absolute md:top-5 top-2 left-2"
              >
                {skill.title}
              </div>
              <motion.div
                viewport={{ margin: "-200px -20px 0px 100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                style={{ zIndex: 1 }}
                className="bg-amber-300 rounded rounded-r-none md:border-r-4 border-r-2 border-black  w-full h-full absolute top-0 left-0"
              />
              <div
                style={{ zIndex: -3 }}
                className="bg-black w-full h-full absolute top-2 hover:top-4 hover:left-4 rounded-lg left-2"
              />
            </motion.div>
          ))}
        </animated.div>
      </div>
    </div>
  );
};
