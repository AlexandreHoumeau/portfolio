import { Button } from "..";
import cookie_img from "public/images/cookie.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type props = {
  closeModal?: Function;
};
export const CookieModal = ({ closeModal = () => {} }: props) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="absolute top-0 bottom-0 justify-center items-center flex left-0 right-0"
    >
      <div className="backdrop-filter absolute z-0  backdrop-blur-sm w-full h-full flex justify-center" />
      <div className="bg-white z-40 md:w-[500px] w-[300px]  p-8 space-y-8 rounded-lg border-black border-4">
        <div className="flex justify-center md:px-20">
          <Image className="w-20 object-contain" src={cookie_img} />
        </div>
        <div
          style={{ fontFamily: "Constructio" }}
          className="text-3xl text-center"
        >
          Cookies!!
        </div>
        <div className="font-Courier text-center">
          Hi! I'm using cookie on this website!
        </div>
        <div className="flex justify-center rotate-[2deg]">
          <Button onClick={() => closeModal()} className="bg-amber-300">
            Okay
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
