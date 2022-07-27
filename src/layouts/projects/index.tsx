import React from "react";
import project_data from "public/data/projects.json";
import color_data from "public/data/colors.json";
import classNames from "classnames";

export const Projects = () => {

  const renderLabel = (techno:string, index: number) => {
    const color = color_data.find((c) => c.title === techno)?.color
    return (
      <div key={String(index) + techno} className={classNames("font-Courier mr-1 mb-2 px-2 border-2 rounded-full", `bg-${color}-50`, `border-${color}-400`, `text-${color}-400`)}>{techno}</div>
    )
  }
  return (
    <div className="flex justify-center p-8">
      <div className="space-y-8">
        <div style={{ fontFamily: "Constructio" }} className="text-5xl">
          Mes Projets
        </div>
        <div className="grid grid-cols-3 gap-32">
          {project_data.map((project, index) => (
            <div
              className="bg-white p-4 flex-col space-y-8 w-[340px] border-4 rounded-2xl border-black min-h-[300px] "
              key={index}
            >
              <div style={{ fontFamily: "Constructio" }} className="text-2xl">{project.title}</div>
              <div className="font-Courier">{project.content}</div>

              <div className="flex flex-wrap">
                {project.techologies.map((techno, index) => (
                  renderLabel(techno, index)
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
