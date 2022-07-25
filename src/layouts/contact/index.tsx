import { Button } from "@components/button";
import { Input } from "@components/input";
import { Select } from "@components/select";
import loader from "public/json/loader.json";
import { useState } from "react";
import Lottie from "react-lottie";
import { sendMail } from "src/services";
import { AnimatePresence, motion } from "framer-motion";

const QUALITY = ["bad", "okay", "good", "great"];
const ROLE = ["full stack", "frontend", "backend", "conversation with you"];
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [role, setRole] = useState("");
  const [quality, setQuality] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const informations = {
        name,
        email,
        role,
        quality,
        comment,
      };

      setErrors({
        name: !name,
        email:
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
          !email,
      });

      if (
        email &&
        name &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ) {
        await sendMail(informations);
        setLoading(false);
        setShowModal(true);
        clearInputs();
      }
      window?.gtag("event", "click_button_send_email", {
        params: {
          origin: 'send_email',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setRole("");
    setQuality("");
    setComment("");
  };

  return (
    <div
      id="contact"
      style={{ backgroundImage: `url(/images/letter_bg.png)`, zIndex: -2 }}
      className="z-[-3] lg:p-0 space-y-16 p-2 bg-repeat bg-red-300 flex flex-col relative justify-center items-center transition-all duration-300 md:h-[100vh]"
    >
      <div className="w-full">
        <div
          style={{ fontFamily: "Constructio" }}
          className="text-5xl text-center"
        >
          Contact me for more information :
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg border-4 border-black relative">
        <div className="font-Courier text-xl space-y-8">
          <div>Hi Alex,</div>
          <div className="flex items-center space-x-4">
            <div>My name is</div>
            <Input
              value={name}
              error={errors.name}
              onChange={(e: any) => setName(e.target.value)}
              placeholder="Your Name"
            />
            <div>and I’ve just seen your</div>
          </div>
          <div className="flex items-center space-x-4">
            <Select
              value={quality}
              onChange={(e: string) => setQuality(e)}
              options={QUALITY}
              placeholder="Select quality"
            />
            <div>website.</div>
            <div>I'm looking for a</div>
            <Select
              onChange={(e: string) => setRole(e)}
              options={ROLE}
              value={role}
              placeholder="Choose role"
            />
            <div>.</div>
          </div>

          <div className="border-b">
            <textarea
              value={comment}
              onChange={(e: any) => setComment(e.target.value)}
              className="w-full focus:ring-brand-yellow font-CourierBold focus:border-brand-yellow focus:shadow-outline border-none focus:outline-none"
              placeholder="You have something in mind ?"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div>Get in touch with me at</div>
            <Input
              value={email}
              error={errors.email}
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-[400px]"
            />
            <div>!</div>
          </div>

          <div>Best regards,</div>
          <div className="font-CourierBold">{name}</div>
          <div className="flex justify-center rotate-[2deg]">
            <Button
              type="submit"
              onClick={handleSubmit}
              className="bg-amber-300"
            >
              Send
            </Button>
          </div>
        </div>

        <div className="bg-black w-full h-full absolute top-2 left-2 rounded-lg z-[-1]" />
      </div>
      {loading && (
        <div className="absolute z-50 top-0 left-0 w-full h-full">
          <div className="backdrop-filter backdrop-blur-sm w-full h-full flex justify-center" />
          <div className="left-0 right-0 top-0 absolute flex justify-center items-center h-full">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      )}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              key="modal"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute text-center max-w-xl z-50 font-Courier space-y-8 bg-white p-4 border-4 border-black rounded-lg shadow-lg "
            >
              <div style={{ fontFamily: "Constructio" }} className="text-5xl">
                Thank you very much!
              </div>
              <div>
                <div className="text-xl">
                  An automatic email has been sent to you. I will contact you as
                  soon as possible
                </div>
              </div>
              <div className="flex justify-center rotate-[2deg]">
                <Button
                  type="submit"
                  onClick={() => setShowModal(false)}
                  className="bg-amber-300"
                >
                  OK
                </Button>
              </div>
            </motion.div>
            <div className="backdrop-filter absolute z-0 bg-black opacity-70 backdrop-blur-sm w-full h-full flex justify-center" />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
