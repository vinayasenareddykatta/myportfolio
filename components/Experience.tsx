import React from "react";
import TextHeader from "./ui/TextHeader";
import data from "@/data/data";
import { FaBuilding } from "react-icons/fa6";
import { GiOfficeChair } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Experience = () => {
  const { experience } = data;
  console.log(experience);
  return (
    <div className="flex flex-col gap-4 overflow-auto h-full p-2 ">
      <TextHeader first="E" full="xperience" />

      <div className="flex flex-col relative pr-4">
        {/* <!-- Timeline Line --> */}
        <div className="absolute left-3.5 top-0 h-full w-1 bg-primary"></div>

        {experience?.map((ex) => {
          return (
            <div
              key={ex?.id}
              className="relative flex items-start space-x-4 mb-8"
            >
              {/* <!-- Circle --> */}
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                <MdOutlineWork className="text-white text-md" />
              </div>
              {/* <!-- Content --> */}
              <div className="border w-full px-2 mt-2  rounded-r-xl rounded-bl-xl bg-primary-grey">
                <h3 className="text-lg font-semibold  pb-0.5 text-primary-text">
                  {ex?.date}
                </h3>

                <div className="flex flex-col gap-0.5">
                  <div className=" flex items-center gap-2">
                    <div className="bg-primary p-1 rounded-full">
                      <GiOfficeChair className="text-xs text-white" />
                    </div>
                    <h3 className="text-md flex items-center gap-2">
                      {ex?.designation}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-primary p-1 rounded-full">
                      <FaBuilding className="text-xs text-white" />
                    </div>

                    <h6 className="text-sm">{ex?.company}</h6>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-primary p-1 rounded-full">
                      <FaLocationDot className="text-xs text-white" />
                    </div>

                    <h6 className="text-sm">{ex?.location}</h6>
                  </div>
                </div>
                <p className="text-gray-600 py-2 text-sm">{ex?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
