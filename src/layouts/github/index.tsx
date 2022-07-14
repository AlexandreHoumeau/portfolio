import { Button } from "@components/button";
import { GithubCalendar } from "@components/github-calendar";
import classNames from "classnames";
import React, { FC, useState } from "react";

interface PropType {
  contributions: {
    contributionCalendar: {
      totalContributions: string,
      weeks: [
        {
          firstDay: String;
          contributionDays: [{
            contributionLevel: String,
            date: number
          }];
        }
      ];
    }
  };
}


export const Github: FC<PropType> = ({ contributions }) => {
  const [update, setUpdate] = useState(false);

  const changeSize = (size: boolean) => {
    setUpdate(size);
  };

  return (
    <div
      className={classNames(
        "xl:grid grid-cols-2 z-10 lg:p-0 p-2 flex flex-col justify-center items-center transition-all duration-300 md:h-[100vh]",
        update ? "bg-purple-300" : "bg-orange-100"
      )}
    >
      <div className="justify-center flex items-center">
        <div
          className={classNames(
            "space-y-8",
            update ? "opacity-20" : "opacity-100"
          )}
        >
          <div
            style={{ fontFamily: "Constructio" }}
            className="md:text-5xl xl:text-left text-center text-3xl"
          >
            Check my contributions
            <br /> over the year
          </div>

          <div className="font-Courier xl:text-left text-center text-base md:text-2xl">
            Thanks to the Github GraphQL api I can show
            <br /> you my commits over the past year.
          </div>
          <div className="rotate-2 flex xl:justify-start justify-center">
            <Button className="bg-amber-300">My Github</Button>
          </div>
        </div>
      </div>

      <div className="justify-center xl:my-0 my-20  flex items-center">
        <div className="space-y-2">
          <GithubCalendar
            contributions={contributions}
            totalContributions={
              contributions?.contributionCalendar?.totalContributions
            }
            changeSize={changeSize}
          />
        </div>
      </div>
    </div>
  );
};
