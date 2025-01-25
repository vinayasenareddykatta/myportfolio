import Image from "next/image";
import React from "react";
import heroImage from "../assets/hero-3.png";

import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa6";

const Hero = ({ onClick }: { onClick: (id: string) => void }) => {
  return (
    <div
      className="border flex flex-col items-center justify-center h-full md:min-h-full bg-primary-grey overflow-y-auto"
      //   style={{ minHeight: "calc(100vh - 100px)" }}
    >
      <div className="w-[330px] h-auto">
        <Image src={heroImage} alt="" className="object-contain" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-black font-bold">Hi I am, Vinay Katta</h1>
        <span className="italic text-sm text-[#36be8b]">
          Senior Frontend Javascript/React Developer
        </span>
        <div className="flex gap-4 mt-5 cursor-auto">
          <div className="">
            <FaGithub size={20} />
          </div>
          <div className="">
            <CiLinkedin size={20} />
          </div>
        </div>
      </div>

      <div className="items-center justify-center  gap-4 flex w-full my-10">
        <div className="btn">
          <IoMdDownload size={20} />
          <h3>Download CV</h3>
        </div>
        <div className="btn" onClick={() => onClick("contact")}>
          <FaPaperPlane size={20} />
          <h3> Contact Me</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
