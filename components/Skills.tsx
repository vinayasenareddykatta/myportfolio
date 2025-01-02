import React from "react";
import Image from "next/image";
import { AiFillCode } from "react-icons/ai";

import TextHeader from "./ui/TextHeader";
import data from "@/data/data";

const Skills = () => {
  const { skills } = data;
  console.log(skills);
  return (
    <div className="flex flex-col gap-4 overflow-auto h-full p-2 ">
      <TextHeader first="S" full="kills" />
      <div className="flex flex-col h-full gap-8">
        {/* primary */}
        <div className="flex-1">
          <div className="flex items-center gap-2 p-1 mb-4">
            <AiFillCode size={25} className="text-primary" />
            <h1 className="text-lg font-bold">Primary</h1>
          </div>

          <div className=" flex flex-wrap gap-6">
            {skills?.primary.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <div className="bg-slate-200 p-2 w-18 h-18 items-center justify-center flex rounded-full">
                    {skill.logo}
                  </div>
                  <h1 className="font-bold text-sm">{skill?.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
        {/* secondary */}
        <div className="flex-1">
          <div className="flex items-center gap-2 p-1 mb-4">
            <AiFillCode size={25} className="text-primary" />
            <h1 className="text-lg font-bold">Secondary</h1>
          </div>
          {/* primary */}
          <div className=" flex flex-wrap gap-6">
            {skills?.primary.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <div className="bg-slate-200 p-2 w-18 h-18 items-center justify-center flex rounded-full">
                    {skill.logo}
                  </div>
                  <h1 className="font-bold text-sm">{skill?.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
