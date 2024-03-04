import { GithubIcon, LinkIcon } from "@components/icons";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import color_data from "public/data/colors.json";
import project_data from "public/data/projects.json";
import { useState } from "react";

export const Projects = () => {
  const [hover, setHover] = useState<number | null>(null);

  const renderLink = (project: any) => {
    const linkAvailable = !!project?.link;
    const linkIsGithub = project?.link?.includes("github");

    if (!linkAvailable) {
      return <div className="font-Courier">Private repo</div>;
    }

    return (
      <Link legacyBehavior href={project.link} target="_blank">
        {linkIsGithub ? <GithubIcon className="text-3xl" /> : <LinkIcon />}
      </Link>
    );
  };
  const renderLabel = (techno: string, index: number) => {
    const color = color_data.find((c) => c.title === techno)?.color;
    return (
      <div
        key={String(index) + techno}
        className={classNames(
          "font-Courier mr-1 mb-2 text-xs px-2 border-2 rounded-full",
          `bg-${color}-50`,
          `border-${color}-400`,
          `text-${color}-400`
        )}
      >
        {techno}
      </div>
    );
  };
  return (
    <div className="flex justify-center z-[-2] md:py-20 md:p-8 p-4 border-t-4 border-black bg-amber-100">
      <div className="space-y-8">
        <div
          style={{ fontFamily: "Constructio" }}
          className="md:text-5xl text-xl text-center"
        >
          My Projects:
        </div>
        <div className="md:grid lg:grid-cols-3 grid-cols-2 md:space-y-0 space-y-8 md:gap-8 xl:gap-32">
          {project_data.map((project, index) => (
            <div
              // onMouseEnter={() => setHover(index)}
              // onMouseLeave={() => setHover(null)}
              className="bg-white p-4 z-0 flex flex-col relative justify-between xl:w-[340px] md:w-[300px] border-4 rounded-2xl border-black xl:h-[300px] "
              key={index}
            >
              {hover === index && (
                <motion.div
                  initial={{ top: 0, left: 0 }}
                  animate={{ top: 4, left: 4 }}
                  exit={{ top: 0, left: 0 }}
                  className="bg-black  -z-1 absolute rounded-2xl w-full h-full"
                />
              )}
              <div className="space-y-3">
                {renderLink(project)}
                <div
                  style={{ fontFamily: "Constructio" }}
                  className="md:text-2xl text-xl"
                >
                  {project.title}
                </div>
                <div className="font-Courier text-sm">{project.content}</div>
              </div>

              <div className="flex flex-wrap">
                {project.techologies.map((techno, index) =>
                  renderLabel(techno, index)
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
