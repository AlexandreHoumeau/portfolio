import { Button } from "@components/button";
import React, { useState } from "react";
import Lottie from "react-lottie";
import loader from "public/json/loader.json";
import { AnimatePresence, motion } from "framer-motion";
import { sendMail } from "src/services";
import classNames from "classnames";

export const ContactMobile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);
      const informations = {
        name,
        email,
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
        window?.gtag("event", "click_button_send_email", {
          params: {
            origin: "send_email",
          },
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setComment("");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      id="contact"
      style={{ backgroundImage: `url(/images/letter_bg.png)`, zIndex: -2 }}
      className="z-[-3] lg:p-0 space-y-16 h-[110vh] p-4 bg-repeat bg-red-300 flex flex-col relative justify-center items-center transition-all duration-300"
    >
      <div className="flex justify-center">
        <div className="">
          <div
            style={{ fontFamily: "Constructio" }}
            className="text-3xl text-center"
          >
            We should stay in touch...
          </div>

          <form
            onSubmit={handleSubmit}
            className="font-Courier space-y-8 text-xl mt-10"
          >
            <div>
              <div>Your name</div>
              <div className="relative mt-2">
                <input
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                  placeholder="Type here"
                  className={classNames(
                    "w-full  p-2 rounded-lg border-black border-2 focus:outline-none",
                    errors.name && "border-red-500"
                  )}
                />
                <div className="absolute w-full h-full rounded-lg bg-black top-1 z-[-1] left-1" />
              </div>
            </div>

            <div>
              <div>Your email</div>
              <div className="relative mt-2">
                <input
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  placeholder="Type here"
                  className={classNames(
                    "w-full  p-2 rounded-lg border-black border-2 focus:outline-none",
                    errors.email && "border-red-500"
                  )}
                />
                <div className="absolute w-full h-full rounded-lg bg-black top-1 z-[-1] left-1 " />
              </div>
            </div>

            <div>
              <div>Your comment</div>
              <div className="relative mt-2">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Type here"
                  className="w-full p-2 rounded-lg border-black border-2 focus:outline-none"
                />
                <div className="absolute w-full h-full rounded-lg bg-black top-1 z-[-1] left-1" />
              </div>
            </div>
            <div className="flex justify-center rotate-[2deg] ">
              <Button
                onClick={handleSubmit}
                type="submit"
                className="bg-amber-300"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
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
