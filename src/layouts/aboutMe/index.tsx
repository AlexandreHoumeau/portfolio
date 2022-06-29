import Image from "next/image";
import mockup_desktop_me from "public/images/mockup_desktop_me.png";
import { FC } from "react";

export const AboutMe: FC = () => {
  return (
    <div className="bg-fuchsia-300 lg:grid grid-cols-2 z-10 lg:p-0 p-2 flex flex-col justify-center items-center transition-all duration-300 h-[calc(100vh_-_72px)] sm:h-[calc(100vh_-_102px)]">
      <div className="justify-center flex items-center">
        <div className="space-y-8 w-4/5">
          <div
            style={{ fontFamily: "Constructio" }}
            className="md:text-5xl lg:text-left text-center text-3xl"
          >
            I’m Alex
          </div>
          <div className="font-Courier space-y-4 lg:text-left text-center text-xs md:text-xl">
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

      <div className="justify-center  px-10 lg:mt-0 mt-10 flex items-center">
        <Image src={mockup_desktop_me} />
      </div>
    </div>
  );
};
