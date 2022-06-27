import { Button } from "@components/button";
import { GithubCalendar } from "@components/github-calendar";
import React, { FC } from "react";

export const Github: FC = ({ contributions }) => {
  return (
    <div className="bg-orange-100 grid grid-cols-2 h-[calc(100vh_-_72px)] sm:h-[calc(100vh_-_102px)]">
      <div className="justify-center flex items-center">
        <div className="space-y-8">
          <div style={{ fontFamily: "Constructio" }} className="text-4xl">
            Check my contributions
            <br /> over the year
          </div>

          <div className="font-Courier text-2xl">
            Thanks to the Github api I can show
            <br /> you my commits over the past year.
          </div>
          <div className="rotate-2 flex">
            <Button className="bg-amber-300">My Github</Button>
          </div>
        </div>
      </div>

      <div className="justify-center flex items-center">
        <GithubCalendar contributions={contributions} />
      </div>
    </div>
  );
};

