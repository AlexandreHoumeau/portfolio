import { PaintBrushIcon } from "@components/icons";
import Image from "next/image";
import mockup_desktop_me from "public/images/mockup_desktop_me.png";
import { FC } from "react";
import clouds from "public/images/clouds.png";

export const AboutMe: FC = () => {
  return (
    <div className=" lg:grid border-y-4 border-black grid-cols-2 z-10 flex flex-col justify-center items-center transition-all duration-300 h-[calc(100vh_-_72px)] sm:h-[calc(100vh_-_102px)]">
      <div className="justify-center transition-all duration-150 lg:p-0 p-2 md:border-r-4 border-black h-full relative flex items-center">
        <div
          id="clouds"
          className="absolute z-10 rotate-12 w-1/6 sm:top-40 top-0  right-5 sm:right-20"
        >
          <Image src={clouds} />
        </div>
        <div
          id="clouds2"
          className="absolute z-10 w-1/12 sm:bottom-40 bottom-0  left-1 sm:left-5"
        >
          <Image src={clouds} />
        </div>
        <div className="space-y-8 w-4/5">
          <div
            style={{ fontFamily: "Constructio" }}
            className="md:text-5xl lg:text-left text-center text-3xl"
          >
            I’m Alex
          </div>
          <div className="font-Courier space-y-4 lg:text-left text-center text-base md:text-xl">
            <div>
              and I’m a 25 years old web developer living in Paris. I’m actually
              from Bordeaux, a small city in the south west of France, well
              known for its wine but I’m sure you know all about that.
            </div>
            <div>
              Before falling in love with web development I was in a sound
              engineer school ! I used to play instruments and compose music
              with dedicated softwares. I then tried to understand how those
              softwares were made and that’s when I started to code on my own.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-fuchsia-300 justify-center px-10 lg:mt-0 mt-10 flex items-center transition-all duration-150 h-full ">
        <Image src={mockup_desktop_me} />
      </div>
    </div>
  );
};
