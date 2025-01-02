import React from "react";
import Image from "next/image";
import TextHeader from "./ui/TextHeader";
import { BsChatRightQuoteFill } from "react-icons/bs";
import ryan from "@/assets/ryan.png";
export default function About() {
  return (
    <div className="flex flex-col gap-4 overflow-auto h-full p-2">
      <TextHeader first="A" full="bout Me" />
      <div className="px-6 ">
        <div className="w-full flex  items-start justify-between flex-col tablet:flex-row ">
          {/* left */}
          <div className=" flex-1 ">
            <div className="flex flex-col gap-0.5">
              <h1 className="text-lg font-bold">
                Hello! I’m Vinayasena Reddy Katta.
              </h1>
              <p className="text-slate-700 text-left">
                Highly experienced Front End Developer with over 12 years in
                delivering impactful web-based solutions.
              </p>
              <p className="text-slate-700 text-left">
                Expertise in JavaScript and ReactJS with a proven track record
                of building reusable components, seamless API integrations, and
                optimizing application performance to enhance user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TextHeader first="Q" full="uote" />
      <div className="px-6">
        <div className="flex  flex-col items-center gap-4">
          <div className="">
            <BsChatRightQuoteFill className="text-slate-500" />
            <p className="flex text-md text-center text-slate-500 italic">
              You can never understand everything, But, you should push yourself
              to understand the system.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={ryan}
              alt="Creator Node js Ryan Dhal"
              className="w-16 h-16 rounded-full"
            />
            <h1 className="font-bold">Ryan Dahl</h1>
            <h1 className="text-sm">Nodejs creator</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
