import React from "react";

import { RoundedButton, IconButton } from "@components";
import { GithubIcon, LinkedinIcon } from "@components/icons";

export const Header: React.FC = () => {
  return (
    <nav className="border-t-4 flex justify-between border-b-4 py-5 px-10 bg-amber-300 border-black">
      <div className="flex space-x-4">
        <IconButton className="bg-red-500">
          <GithubIcon className="text-3xl" />
        </IconButton>
        <IconButton className="bg-green-500">
          <LinkedinIcon className="text-3xl"/>
        </IconButton>
      </div>
      <div className="flex justify-end space-x-4">
        <RoundedButton className="tracking-widest">about</RoundedButton>
        <RoundedButton className="tracking-widest">contact</RoundedButton>
      </div>
    </nav>
  );
};
