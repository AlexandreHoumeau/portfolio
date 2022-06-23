import React from "react";

import { RoundedButton, IconButton } from "@components";
import { GithubIcon, LinkedinIcon } from "@components/icons";

export const Header: React.FC = () => {
  return (
    <nav className="border-t-4 sticky items-center top-0 w-full flex justify-between border-b-4 py-5 md:px-10 px-4 bg-amber-300 border-black">
      <div className="flex md:space-x-4 space-x-2">
        <IconButton className="bg-red-500">
          <GithubIcon className="text-3xl" />
        </IconButton>
        <IconButton className="bg-green-500">
          <LinkedinIcon className="text-3xl"/>
        </IconButton>
      </div>
      <div className="flex justify-end md:space-x-4 space-x-2">
        <RoundedButton className="md:tracking-widest">about</RoundedButton>
        <RoundedButton className="md:tracking-widest">contact</RoundedButton>
      </div>
    </nav>
  );
};
