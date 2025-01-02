"use client";
import { useState, useEffect } from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import { RiHome5Fill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdPermContactCalendar } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

// Sidebar Componentqw
const Sidebar = ({ sections, activeSection, onClick, isSmallScreen }) => (
  <div className="border border-slate-300 flex flex-row  p-1 rounded-md  tablet:flex-col gap-1 bg-gray-200">
    {sections.map((section) => {
      if (!isSmallScreen && section.id === "home") return;
      return (
        <div
          key={section.id}
          onClick={() => onClick(section.id)}
          className={` cursor-pointer rounded-md gap-1 text-xs flex flex-col items-center justify-center w-full h-16 text-center   ${
            activeSection === section.id
              ? "bg-primary text-white font-semibold rounded-md"
              : "hover:bg-primary-grey hover:text-primary hover:bg-white"
          }`}
        >
          {section.icon} {section.label}
        </div>
      );
    })}
  </div>
);

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setIsSmallScreen(window.innerWidth < 1025);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen;
};

export default function Home() {
  const isSmallScreen = useScreenSize();

  const [activeSection, setActiveSection] = useState("about");

  const handleMenuClick = (id: string) => {
    setActiveSection(id);
    if (isSmallScreen) {
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const sections = [
    {
      id: "home",
      label: "Home",
      component: <Hero onClick={handleMenuClick} />,
      icon: <RiHome5Fill size={20} />,
    },
    {
      id: "about",
      label: "About",
      component: <About />,
      icon: <FaUserTie size={20} />,
    },
    {
      id: "experience",
      label: "Experience",
      component: <Experience />,
      icon: <FaFileAlt size={20} />,
    },
    {
      id: "skills",
      label: "Skills",
      component: <Skills />,
      icon: <FaCode size={20} />,
    },
    {
      id: "projects",
      label: "Projects",
      component: <Projects />,
      icon: <GrProjects size={20} />,
    },
    {
      id: "contact",
      label: "Contact",
      component: <Contact />,
      icon: <MdPermContactCalendar size={20} />,
    },
  ];

  return (
    <div className="bg-blue-200">
      {isSmallScreen && (
        <div className="w-screen h-screen bg-gray-100 flex flex-col md:flex-row">
          {/* Sidebar */}
          <Sidebar
            sections={sections}
            activeSection={activeSection}
            onClick={handleMenuClick}
            isSmallScreen={isSmallScreen}
          />
          {/* Main Content */}
          <div className="flex-1 overflow-hidden">
            <div className="flex flex-col overflow-y-scroll h-full space-y-4 p-3 scroll-smooth">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="w-full">
                  {section.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {!isSmallScreen && (
        <div className=" flex items-center justify-center w-screen h-screen bg-[url('../assets/images/bgIMG.png')] bg-cover ">
          <div className=" flex w-[90vw] h-[80vh] max-w-[1280px]">
            <div className=" w-[72px] mr-2 mt-4">
              <Sidebar
                sections={sections}
                activeSection={activeSection}
                onClick={handleMenuClick}
                isSmallScreen={isSmallScreen}
              />
            </div>
            {/* hero */}
            <div className="border border-slate-300 z-10 w-[450px] max-h-[674px] rounded-lg overflow-hidden shadow-md">
              <Hero onClick={handleMenuClick} />
            </div>
            {/* content */}
            <div className="border border-slate-300 box-content w-[700px] max-h-[642px] overflow-hidden bg-gray-50 -ml-1 mt-4 mb-4 rounded-md shadow-sm">
              <div
                className="flex h-full transition-transform duration-1000"
                style={{
                  transform: `translateX(-${
                    sections.findIndex((sec) => sec.id === activeSection) * 100
                  }%)`,
                }}
              >
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="w-full flex-shrink-0 h-full py-2 pl-4"
                  >
                    {section.component}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
