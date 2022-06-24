import Image from "next/image";
import React, { FC } from "react";
import photo_of_me from "public/images/moi1.png";
import clouds from "public/images/clouds.png";
import { Button } from "..";
import { Arrow1Icon } from "@components/icons";

export const Main: FC = () => {
  return (
    <div className="lg:grid grid-cols-2 flex flex-col lg:gap-10 bg-indigo-300 h-[calc(100vh_-_72px)] sm:h-[calc(100vh_-_102px)]">
      <div className="flex justify-center md:text-right text-center items-center">
        <div className="mt-20">
          <div className="xl:text-7xl md:text-5xl text-3xl font-Constructio mb-10">
            Hi! I’m Alex,
            <br /> a web developer
          </div>
          <div className="font-Courier xl:text-xl text-lg">
            I have 3 years of exp.. You realy
            <br /> should scroll to see more about me!!
          </div>
          <div className="flex md:justify-end justify-center items-end md:space-x-10 mt-10">
            <Button className="bg-amber-300">Contact me</Button>
            <div className="-rotate-45">
              <Arrow1Icon className="xl:mb-10 md:block hidden" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1  justify-center">
        <div className=" flex relative items-end">
          <div className="absolute z-10 rotate-2 w-1/6 top-40 right-20">
            <Image className="" src={clouds} />
          </div>
          <div className="absolute w-1/6 bottom-56 md:bottom-40 left-10 md:-left-10">
            <Image className="" src={clouds} />
          </div>
          <Image
            className=""
            quality={100}
            width={800}
            height={800}
            alt="photo of me"
            src={photo_of_me}
          />
        </div>
      </div>
    </div>
  );
};
