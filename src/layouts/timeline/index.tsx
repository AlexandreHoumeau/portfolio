import React from "react";
const timelineData = [
  {position: "Front-end developer", year: 2019, company: "Clinsearch", location: "Paris" },
  {position: "Fullstack developer", year: 2020, company: "Uptoo", location: "Paris" },
  {position: "Software Engineer", year: 2022, company: "Shell Recharge Solution", location: "Amsterdam" },
  {position: "Software Engineer", year: "Now", company: "Shell Recharge Solution", location: "Amsterdam" },
];

export const Timeline: React.FC = () => {
  return (
    <div
      id="timeline"
      className=" p-4 border-y-4 z-[1000] border-black bg-blue-300 flex items-center transition-all duration-300 xl:h-[100vh]"
    >
      <div>
        <div
          style={{ fontFamily: "Constructio" }}
          className="md:text-5xl lg:text-left text-center text-3xl mb-10"
        >
          Timeline:
        </div>

        <ol className="items-center sm:flex">
          {timelineData.map((event) => (
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {event.company} - {event.location}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {event.year}
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {event.position}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
