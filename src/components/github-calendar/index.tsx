import { Arrow1Icon } from "@components/icons";
import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';

interface ContributionsType {
  contributionCalendar: {
    weeks: [
      {
        firstDay: String;
        contributionDays: [{
          contributionLevel: String,
          date: number
        }];
      }
    ];
    totalContributions: string;
  };
}

interface PropType {
  contributions: ContributionsType;
  changeSize: Function;
  totalContributions: string;
}

export const GithubCalendar: FC<PropType> = ({
  contributions,
  totalContributions,
  changeSize,
}) => {
  const [weeks, setWeeks] = useState(
    contributions?.contributionCalendar?.weeks?.slice(
      contributions?.contributionCalendar?.weeks.length / 1.5
    ) || []
  );
  const [total] = useState(parseInt(totalContributions) || 0);
  const [enlarge, setEnlarge] = useState(false);

  const renderColor = (level: String) => {
    switch (level) {
      case "NONE":
        return "bg-slate-100";
      case "FIRST_QUARTILE":
        return "bg-rose-300";
      case "SECOND_QUARTILE":
        return "bg-rose-400";
      case "THIRD_QUARTILE":
        return "bg-rose-500";
      case "FOURTH_QUARTILE":
        return "bg-rose-600";
    }
  };

  useEffect(() => {
    if (isMobile) return
    if (enlarge) {
      setWeeks(
        contributions?.contributionCalendar?.weeks?.slice(
          contributions?.contributionCalendar?.weeks.length / 3
        )
      );
    } else {
      setWeeks(
        contributions?.contributionCalendar?.weeks?.slice(
          contributions?.contributionCalendar?.weeks.length / 1.5
        )
      );
    }
    changeSize(enlarge);
  }, [enlarge]);

  return (
    <>
      <div
        className={classNames(
          "flex items-start transition-all lg:mt-0 mt-10 ease-in-out",
          enlarge ? "xl:translate-x-[-27%]" : ""
        )}
      >
        <div className="w-[2px] h-4 bg-black" />
        <div className="w-full relative h-full">
          <div className="absolute left-0 right-0 bottom-3">
            <div className="text-center font-Courier md:text-xl">
              {enlarge ? total : Math.round(total / 2)} contributions in the
              last {enlarge ? "year" : "3 months"}
            </div>
          </div>
          <div className="bg-black w-full h-[2px]" />
        </div>
        <div className="w-[2px] h-4 bg-black" />
      </div>
      <div
        onMouseEnter={() => setEnlarge(true)}
        onMouseLeave={() => setEnlarge(false)}
        className={classNames(
          "relative w-full z-10 transition-all ease-in-out",
          enlarge ? "xl:translate-x-[-27%]" : ""
        )}
      >
        <div className="flex w-full transition-all ease-in-out z-50 lg:space-x-2 space-x-1 p-3 bg-white border-2 border-black rounded-lg">
          {weeks.map((week, index) => (
            <div
              key={index}
              className="lg:space-y-2 space-y-1 transition-all ease-in-out"
            >
              {week?.contributionDays?.map((day) => (
                <div
                  key={day.date}
                  className={classNames(
                    "rounded 2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 md:h-4 md:w-4 h-3 w-3 duration-300 transition-all",
                    renderColor(day.contributionLevel)
                    // enlarge ? "w-4 h-4" : "w-10 h-10"
                  )}
                />
              ))}
            </div>
          ))}
          <div className="absolute top-3 left-1 -z-10 w-full h-full bg-black rounded-lg" />
        </div>
      </div>
      <div
        className={classNames(
          "-translate-x-36 items-end hidden  transition-all duration-75 md:flex",
          enlarge ? "opacity-0" : ""
        )}
      >
        <Arrow1Icon className="fill-purple-300 rotate-[155deg]" />
        <div className="font-Courier text-purple-300 rotate-6 translate-y-4 -translate-x-4 text-xl">
          Hover me
        </div>
      </div>
    </>
  );
};
