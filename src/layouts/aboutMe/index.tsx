import { CssIcon, HtmlIcon, MeIcon } from "@components/icons";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import clouds from "public/images/clouds.png";
import mockup_desktop_me from "public/images/mockup_desktop_me.png";
import { FC } from "react";

export const AboutMe: FC = () => {
  return (
    <div
      id="about"
      className=" lg:grid border-y-4 z-[1000] border-black bg-white grid-cols-2  flex flex-col justify-center items-center transition-all duration-300 xl:h-[100vh]"
    >
      <div className="justify-center transition-all duration-150 lg:p-0 p-2 md:border-r-4 border-black h-full relative flex items-center">
        <div
          id="clouds"
          className="absolute z-10 rotate-12 w-1/6 sm:top-40 top-0  right-5 sm:right-20"
        >
          <Image alt="clouds" src={clouds} />
        </div>
        <div
          id="clouds2"
          className="absolute z-10 w-1/12 sm:bottom-40 bottom-0  left-1 sm:left-5"
        >
          <Image alt="clouds2" src={clouds} />
        </div>
        <div className="space-y-8 w-4/5">
          <div
            style={{ fontFamily: "Constructio" }}
            className="md:text-5xl lg:text-left text-center text-3xl"
          >
            My story
          </div>
          <div className="font-Courier space-y-4 lg:text-left text-center text-base md:text-xl">
            <div>
              Hi there! I'm a 27-year-old full-stack web developer currently
              residing in Amsterdam, originally from Bordeaux, France – yes, the
              one renowned for its wine.
            </div>
            <div className="sm:block hidden">
              Before diving into web development, I was on track to become a
              Sound Engineer. Music composition and exploring software
              intricacies were my jam. This curiosity sparked my journey into
              coding.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-fuchsia-300 justify-center md:border-t-0 border-t-4 border-black relative p-5 px-10 lg:mt-0 mt-10 flex items-center transition-all duration-150 h-full ">
        <ParallaxLayer
          offset={0.3}
          speed={0.08}
          className="z-50 lg:block hidden absolute rotate-12"
        >
          <CssIcon className="md:scale-[1.2] absolute left-20 -top-20 -rotate-3" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.8}
          speed={0.2}
          className="z-50 absolute lg:block hidden rotate-12"
        >
          <HtmlIcon className="absolute md:scale-150 right-20 rotate-6 " />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.98}
          speed={0.2}
          className="z-50 absolute lg:block hidden -bottom-10"
        >
          <MeIcon className="md:scale-[2] absolute -left-20  rotate-[30deg]" />
        </ParallaxLayer>
        <div className="relative z-10">
          <Image alt="alexandre-houmeau-photo" className="z-50 relative" src={mockup_desktop_me} />
          <div className="absolute w-full h-full top-1 left-2 z-0 rounded-lg bg-black" />
        </div>
      </div>
    </div>
  );
};
