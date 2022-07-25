import React from "react";

import { RoundedButton, IconButton } from "@components";
import { GithubIcon, LinkedinIcon } from "@components/icons";
import Link from "next/link";

export const Header: React.FC = () => {
  const handleOnClick = (link?: string, origin?: string) => {
    window.open(link, "_blank");
    window?.gtag("event", `click_button_${origin}`, {
      params: {
        origin,
      },
    });
  };

  return (
    <nav className="border-t-4 sticky items-center top-0 w-full flex justify-between border-b-4 py-2 md:px-10 px-4 bg-amber-300 border-black">
      <div className="flex md:space-x-4 space-x-2">
        <IconButton
          onClick={() =>
            handleOnClick("https://github.com/AlexandreHoumeau", "github")
          }
          className="bg-red-500"
        >
          <GithubIcon className="text-3xl" />
        </IconButton>
        <IconButton
          onClick={() =>
            handleOnClick(
              "https://www.linkedin.com/in/alexandrehoumeau/",
              "linkedin"
            )
          }
          className="bg-green-500"
        >
          <LinkedinIcon className="text-3xl" />
        </IconButton>
      </div>
      <div className="flex justify-end md:space-x-4 space-x-2">
        <Link href="#about">
          <a>
            <RoundedButton className="md:tracking-widest">about</RoundedButton>
          </a>
        </Link>

        <Link href="#contact">
          <a>
            <RoundedButton className="md:tracking-widest">
              contact
            </RoundedButton>
          </a>
        </Link>
      </div>
    </nav>
  );
};
