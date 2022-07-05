import { ExperienceMap } from "@components/expericen-map";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import ElasticLogoCoin from "public/images/elastic_logo_coin.png";
import PuppeteerLogo from "public/images/puppeteer_logo.png";
import UptooLogoCoin from "public/images/uptoo_logo_coin.png";
import { FC } from "react";

export const Experience: FC = () => {
  return (
    <div className="2xl:grid relative grid-cols-2 z-10 lg:p-0 p-2 flex flex-col-reverse	 justify-center items-center transition-all bg-green-400 duration-300 h-full ">
      <div className="md:p-10 relative z-50 md:px-20">
        <div className="font-CourierBold mb-5 hidden md:block text-2xl">
          I had the opportunity to work on:
        </div>
        <ExperienceMap />
      </div>

      <div className="md:space-y-12 relative">
        <div className="2xl:block hidden">
          <ParallaxLayer
            offset={0.3}
            speed={0.2}
            className="z-50 lg:block hidden absolute rotate-12"
          >
            <div className="absolute -left-[25%] -rotate-3">
              <Image width={150} height={150} src={PuppeteerLogo} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.5}
            speed={0.5}
            className="z-50 lg:block hidden absolute rotate-12"
          >
            <div className="absolute bottom-10 right-[10%] rotate-12">
              <Image width={200} height={200} src={UptooLogoCoin} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.6}
            speed={0.1}
            className=" lg:block hidden absolute rotate-12"
          >
            <div className="absolute left-10 ">
              <Image
                className=""
                width={100}
                height={100}
                src={ElasticLogoCoin}
              />
            </div>
          </ParallaxLayer>
        </div>
        <div
          style={{ fontFamily: "Constructio" }}
          className="md:text-4xl 2xl:text-left 2xl:w-5/6 text-center text-xl"
        >
          I’m a web developer with a Master degree in web development.
        </div>

        <div className="font-Courier 2xl:w-2/3 space-y-4 md:text-xl text-sm md:mt-0 mt-4  2xl:text-left text-center">
          <div>
            I have 3 years of experience as a full stack developer essentially
            working with Javascript and its environment.
          </div>
          <div>
            Since 2019 I’m working as a full stack developer in the leading
            French recruiting firm, Uptoo.
          </div>
        </div>
      </div>
    </div>
  );
};
