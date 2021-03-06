import classNames from "classnames";
import { FC, useState } from "react";
import { animated, useSpring } from "react-spring";

const EXP = [
  {
    descritpion:
      "A tool to scrap as many job offers as possible on the internet every day. I used puppeteer, a node.js library.",
  },
  {
    descritpion: "Admin interfaces using Next.js, ReactJs or Vue.js",
  },
  {
    description: "Many api controllers using node.js and express.js",
  },
  {
    description: "Some elasticsearch projects",
  },
];
export const ExperienceMap: FC = () => {
  const [length, setLength] = useState<null | number>(null);
  const [toggle, setToggle] = useState(false);
  const [choosenExp, setChoosenExp] = useState<null | number>(null);

  const inViewport = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      setToggle(entry.isIntersecting);
    });
  };

  const Obs = new IntersectionObserver(inViewport);

  const ELs_inViewport = document.querySelectorAll("#animated_svg");
  ELs_inViewport.forEach((EL) => {
    Obs.observe(EL);
  });

  const animatedStyle = useSpring<object>({
    delay: 1000,
    config: { duration: 2000 },
    strokeDasharray: length,
    strokeDashoffset: toggle ? 0 : length,
  });

  return (
    <div className="md:bg-amber-50 rounded-lg md:border-4 md:w-[500px] md:h-[500px] w-[305px] border-black flex justify-center md:py-20 relative">
      <div
        style={{ fontFamily: "Constructio" }}
        className="absolute md:top-8 top-10 left-4  md:left-2 font-Constructio md:text-2xl text-sm text-blue-500"
      >
        2019
      </div>
      <div className="flex justify-center">
        <svg
          id="animated_svg"
          strokeWidth={4}
          width="400"
          height="350"
          viewBox="0 0 514 455"
          className="md:w-full w-3/4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <animated.path
            d="M1 1C50.2027 56.6635 181.632 153.66 313.729 96.3365C478.85 24.6823 572.418 284.58 470.844 326.48C369.269 368.379 126.592 212.926 79.5575 326.48C41.9299 417.323 81.5589 449.344 106.077 454"
            stroke="#5585DA"
            style={animatedStyle}
            strokeDasharray="8 8"
            ref={(ref) => {
              if (ref) {
                setLength(ref.getTotalLength());
              }
            }}
          />
        </svg>
        <div>
          <div
            id="pulse_animation"
            onMouseEnter={() => setChoosenExp(0)}
            onMouseLeave={() => setChoosenExp(null)}
            className="md:w-8 md:h-8 w-5 h-5 rounded-full md:top-[20%] top-[28%] md:left-[15%] left-[25%] absolute md:border-4 border-2 border-black bg-blue-500"
          />
          <div className="absolute md:top-[12%] top-[17%] md:left-[17.8%] left-[28%] flex items-start ">
            <hr
              className={classNames(
                "w-3 bg-black transition-all duration-300",
                choosenExp === 0 ? "h-10" : "h-0"
              )}
            />
            <div className="flex items-start">
              <hr
                className={classNames(
                  "w-40 h-1 transition-all duration-300 delay-300 bg-black mr-2",
                  choosenExp === 0 ? "w-40" : "w-0"
                )}
              />
              <div
                className={classNames(
                  "font-Courier -mt-10 transition-all md:text-base text-xs duration-300 delay-500",
                  choosenExp === 0 ? "opacity-100" : "opacity-0"
                )}
              >
                {EXP[0].descritpion}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            id="pulse_animation"
            onMouseEnter={() => setChoosenExp(1)}
            onMouseLeave={() => setChoosenExp(null)}
            className="md:w-8 md:h-8 w-5 h-5 rounded-full top-[40%] z-10 md:right-[11%] right-[13.5%] absolute border-2 md:border-4 border-black hover:animate-none bg-blue-500"
          />
          <div className="absolute top-[39%] right-[4.5%] flex items-center ">
            <div
              className={classNames(
                "font-Courier md:text-base text-xs text-right w-2/3 mr-2 transition-all delay-300 duration-300",
                choosenExp === 1 ? "opacity-100" : "opacity-0"
              )}
            >
              {EXP[1].descritpion}
            </div>
            <hr
              className={classNames(
                "h-1 bg-black transition-all duration-300",
                choosenExp === 1 ? "md:w-[100px] w-[50px]" : "w-0"
              )}
            />
          </div>
        </div>

        <div>
          <div
            id="pulse_animation"
            onMouseEnter={() => setChoosenExp(2)}
            onMouseLeave={() => setChoosenExp(null)}
            className="md:w-8 md:h-8 w-5 h-5 rounded-full z-50 md:bottom-[30%] bottom-[34.5%] right-[30%] absolute border-2 md:border-4 border-black hover:animate-none bg-blue-500"
          />
          <div className="absolute flex flex-col md:bottom-[6.5%] md:-right-[0%] left-[33.5%] bottom-[2.5%] justify-center items-center">
            <hr
              className={classNames(
                "bg-black w-1 transition-all duration-300",
                choosenExp === 2 ? " h-[50px]" : "h-0"
              )}
            />
            <div
              className={classNames(
                "text-center md:text-base text-xs font-Courier w-2/3 transition-all duration-300 delay-300",
                choosenExp === 2 ? "opacity-100" : "opacity-0"
              )}
            >
              {EXP[2].description}
            </div>
          </div>
        </div>
        <div>
          <div
            id="pulse_animation"
            onMouseEnter={() => setChoosenExp(3)}
            onMouseLeave={() => setChoosenExp(null)}
            className="md:w-8 md:h-8 w-5 h-5 z-10 rounded-full md:bottom-[27%] bottom-[35%] md:left-[18.5%] left-[21%] absolute border-2 md:border-4 border-black hover:animate-none bg-blue-500"
          />
          <div className="absolute flex flex-col md:bottom-[33%] bottom-[38%] md:-left-[4.5%] -left-[12.8%] justify-center items-center">
            <div
              className={classNames(
                "text-center font-Courier md:text-base text-sm w-2/3 transition-all duration-300 delay-300",
                choosenExp === 3 ? "opacity-100" : "opacity-0"
              )}
            >
              {EXP[3].description}
            </div>
            <hr
              className={classNames(
                "bg-black w-1 transition-all duration-300",
                choosenExp === 3 ? "h-[50px]" : "h-0"
              )}
            />
          </div>
        </div>
      </div>
      <div className="bg-black md:block hidden -z-10 w-full h-full absolute top-2 left-2 rounded-lg" />
      <div
        style={{ fontFamily: "Constructio" }}
        className="absolute md:bottom-7 bottom-24 md:left-32 left-20 font-Constructio  md:text-2xl text-sm text-blue-500"
      >
        Today
      </div>
    </div>
  );
};
