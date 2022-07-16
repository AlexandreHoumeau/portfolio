import { Arrow1Icon, StarIcon } from "@components/icons";
import Image from "next/image";
import Link from "next/link";
import clouds from "public/images/clouds.png";
import photo_of_me from "public/images/moi1.png";
import { FC } from "react";
import { Button } from "../../components";

export const Main: FC = () => {
  return (
    <div className="lg:grid grid-cols-2 flex flex-col lg:gap-10 bg-indigo-300 sm:h-[100vh]">
      <div className="flex justify-center md:text-right text-center items-center">
        <div className="lg:mt-20 mt-40">
          <div
            style={{ fontFamily: "Constructio" }}
            className="xl:text-7xl md:text-5xl text-3xl mb-10"
          >
            Hi! I’m Alex,
            <br /> a web developer
          </div>
          <div className="font-Courier xl:text-xl text-lg">
            I have 3 years of exp.. You realy
            <br /> should scroll to see more about me!!
          </div>
          <div className="flex md:justify-end justify-center items-end md:space-x-10 mt-10">
            <Link href="#contact">
              <a>
                <Button className="bg-amber-300">Contact me</Button>
              </a>
            </Link>
            <div className="-rotate-45">
              <Arrow1Icon className="xl:mb-10 md:block hidden" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 relative justify-center">
        <div className="absolute z-10 w-10 sm:top-72 top-0 left-5 sm:left-48">
          <StarIcon className="fill-white animate-pulse" />
        </div>
        <div className="absolute z-10 w-6 sm:top-80 top-12 left-2  sm:left-56 ">
          <StarIcon className="fill-white animate-pulse delay-75" />
        </div>
        <div className="absolute z-10 w-6 top-[50%] right-5 sm:right-10">
          <StarIcon className="fill-white" />
        </div>
        <div
          id="clouds"
          className="absolute z-10 rotate-12 w-1/6 sm:top-40 top-20 right-5 sm:right-20"
        >
          <Image src={clouds} />
        </div>
        <div
          id="clouds2"
          className="absolute w-1/6 bottom-56 md:bottom-40 left-10 md:-left-10"
        >
          <Image src={clouds} />
        </div>

        <div className=" flex z-0 lg:mx-0 md:mx-48 sm:mx-0 items-end">
          <Image
            quality={100}
            width={800}
            height={800}
            alt="photo of me"
            src={photo_of_me}
            className="z-0"
          />
        </div>
      </div>
    </div>
  );
};
