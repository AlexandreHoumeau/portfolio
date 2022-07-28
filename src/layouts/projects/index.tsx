import React from "react";
import project_data from "public/data/projects.json";
import color_data from "public/data/colors.json";
import classNames from "classnames";
import { GithubIcon, LinkIcon } from "@components/icons";

export const Projects = () => {

  const renderLink = (project: any) => {
    const linkAvailable = !!project?.link
    const linkIsGithub = project?.link?.includes('github')

    if (!linkAvailable) {
      return <div className="font-Courier">Link not available</div>
    }

    return (
      <a href={project.link} target="_blank">
        {linkIsGithub ? <GithubIcon /> : <LinkIcon />}   
      </a>
    )
  }
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
    <div className="flex justify-center md:py-20 md:p-8 p-4 border-t-4 border-black bg-amber-100">
      <div className="space-y-8">
        <div style={{ fontFamily: "Constructio" }} className="md:text-5xl text-xl text-center">
          My Projects:
        </div>
        <div className="md:grid lg:grid-cols-3 grid-cols-2 md:space-y-0 space-y-8 md:gap-8 xl:gap-32">
          {project_data.map((project, index) => (
            <div
              className="bg-white p-4 flex flex-col justify-between xl:w-[340px] md:w-[300px] border-4 rounded-2xl border-black xl:h-[300px] "
              key={index}
            >
              <div className="space-y-3">
                {renderLink(project)}
                <div style={{ fontFamily: "Constructio" }} className="md:text-2xl text-xl">
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
