import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { SiGraphql } from "react-icons/si";

const data = {
  userInfo: [
    { name: "Name", value: "Vinay sena reddy k" },
    { name: "Designation", value: "Front-end UI Developer" },
    { name: "Email", value: "vsrkatta@gmail.com" },
    { name: "Phone", value: "+91 7981 20 5050" },
    { name: "Location", value: "Hyderabad, India" },
  ],
  aboutme: [
    "A motivated Front-End Web Developer to combine the art of design with the art of programming. Working along side with the UI/UX designers to bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.",
    "Please find the additional details about my skills and work experiences.",
    "Check out my projects/portfolio below built with HTML5, CSS3, flexbox, css grid, Reactjs, NEXTJS & Javascript",
  ],

  skills: {
    primary: [
      {
        id: 1,
        name: "Html",
        logo: <FaHtml5 size={50} color="#e34c26" />,
      },
      {
        id: 2,
        name: "CSS",
        logo: <IoLogoCss3 size={50} color="#264de4" />,
      },
      {
        id: 3,
        name: "Javascript",
        logo: <RiJavascriptFill size={50} color="#D8C547" />,
      },
      {
        id: 4,
        name: "Typescript",
        logo: <BiLogoTypescript size={50} color="#3178c6" />,
      },
      {
        id: 5,
        name: "ReactJS",
        logo: <GrReactjs size={50} color="#61DBFB" />,
      },
      {
        id: 6,
        name: "Redux",
        logo: <SiRedux size={50} color="#764abc" />,
      },
      {
        id: 7,
        name: "Sass",
        logo: <FaSass size={50} color="#cd6799" />,
      },
      {
        id: 8,
        name: "Material UI",
        logo: <SiMui size={50} color="#0288d1" />,
      },
      {
        id: 9,
        name: "ShadcnUi",
        logo: <SiShadcnui size={50} color="#0288d1" />,
      },
      {
        id: 10,
        name: "NextJS",
        logo: <RiNextjsFill size={50} />,
      },
      {
        id: 11,
        name: "ReactQuery",
        logo: <SiReactquery size={50} />,
      },
      {
        id: 12,
        name: "GraphQL",
        logo: <SiGraphql size={50} color="#e535ab" />,
      },
    ],
    secondary: [
      {
        id: 1,
        name: "Html",
        logo: <FaHtml5 size={50} color="#e34c26" />,
      },
      {
        id: 2,
        name: "CSS",
        logo: <IoLogoCss3 size={50} color="#264de4" />,
      },
      {
        id: 3,
        name: "Javascript",
        logo: <RiJavascriptFill size={50} color="#D8C547" />,
      },
      {
        id: 4,
        name: "Typescript",
        logo: <BiLogoTypescript size={50} color="#3178c6" />,
      },
      {
        id: 5,
        name: "ReactJS",
        logo: <GrReactjs size={50} color="#61DBFB" />,
      },
      {
        id: 6,
        name: "Redux",
        logo: <SiRedux size={50} color="#764abc" />,
      },
    ],
  },

  social: [{}],
  // Designed and developed reusable UI components with React Storybook and Hooks, integrating TypeScript and Redux for state management. Collaborated with backend and design teams to implement APIs and transform design specs into functional code. Conducted code reviews and managed build and deployment processes using Jenkins for development and QA environments.
  experience: [
    {
      id: 1,
      designation: "Technical Lead - Front End Developer",
      company: "Accion Labs (Accion Technologies India Pvt Ltd)",
      location: "Bangalore, India",
      date: "June 2022 - Present",
      description:
        "Designed and developed reusable UI components with React Storybook and Hooks, integrating TypeScript and Redux for state management. Collaborated with backend and design teams to integrate APIs and transform design specs into functional code.",
    },
    {
      id: 2,
      designation: "Product Development Engineer II",
      company: "Phenom People India Pvt ltd",
      location: "Hyderabad, India",
      date: "January 2022 - May 2022",
      description:
        "Participated in requirement-gathering meetings and research on web components, converting Figma designs into UI components and integrating backend APIs into the video assessment module. Built a POC using Angular Elements to decouple the settings module into a web component and actively contributed to daily code reviews and scrum meetings.",
    },
    {
      id: 3,
      designation: "Principal Software Engineer - React",
      company: "Accion Labs India Pvt ltd",
      location: "Hyderabad, India",
      date: "May 2021 - January 2022",
      description:
        "Actively participated in requirements-gathering sessions and daily scrum meetings, collaborating closely with the UI/UX design team to translate designs into reusable components. Developed proof-of-concepts (POCs) to integrate React into an existing AngularJS application using React2Angular and Angular2React, and to migrate jQuery data tables to React utilizing the PrimeReact library.",
    },
    {
      id: 4,
      designation: "Senior UI Developer",
      company: "Shaster Technologies Pvt Limited, Hyderabad India",
      location: "Hyderabad, India",
      date: "April 2019 - April 2021",
      description:
        "Developed various user-facing features, reusable components,  optimized the speed and scalability. Worked with ReactJS, Redux, React Router, NextJS. Responsible for collaborating with design teams, stakeholders and code reviewing.",
    },
    {
      id: 5,
      designation: "Senior Software Consultant,",
      company: "Argha Technology Pvt Limited, Hyderabad India",
      location: "Hyderabad, India",
      date: "August 2018 - April 2019",
      description:
        "Worked closely with SME's to gather specs and create work flows. Consumed the date received across various API's for creating dynamic user interfaces. Built reusable components with React, and used React-Redux to manage the application state.",
    },
    {
      id: 6,
      designation: "Technical Lead/Software Developer",
      company: "Square Information's System India Pvt Limited, Hyderabad India",
      location: "Hyderabad, India",
      date: "March 2009 - October 2017",
      description:
        "Worked closely with overseas departmental peers to develop and integrate REST based API's. Rewritten some of the features of the product from PHP to React components, consumed the JSON data from RESTFull API's to build reusable components. Constantly involved in developing the newer version of the product.",
    },
  ],
  education: [
    {
      course: "Bachelors's Degree In Computer Science Engineering",
      college: "AIIT Hyderabad",
    },
  ],
  projects: [
    {
      name: "NextJS  Ecommerce",
      category: "NEXT JS, ReactJS & Bootstrap",
      description:
        "A Ecommerce application built with NextJS for server side rendering of the products pages and product page, used the State Management with useREdeucer and Context API.",
      image: "/projectImages/onlineshopee.png",
      link: "https://onlineshopee.vercel.app/",
    },
    {
      name: "Search github users",
      category: "ReactJS, Fusion Charts",
      description:
        "A React js app to search Github users information. This app demonstrates the usage of react-fusion charts to create charts, react's Context Api to pass data down to the component tree and OAuth to handle login.   ",
      image: "/projectImages/github.png",
      link: "https://github-user-dashboard.netlify.app/",
    },
    {
      name: "Css Color Code Generator",
      category: "ReactJS",
      description:
        "A React js app that generates different shades of color based on color code or string. Used values.js module to generate the shades",
      image: "/projectImages/css.png",
      link: "https://visual-color-generator.netlify.app/",
    },
    {
      name: "Search Unsplash stock Images",
      category: "ReactJS, CSS Grids",
      description:
        "A React app to search the stock images from unsplash API. Loads more images on page scroll. The Layout is built with CSS Grid and FlexBox. ",
      image: "/projectImages/unsplash.png",
      link: "https://searchunsplash.netlify.app/",
    },
    {
      name: "Ipsum Paragraph Generator",
      category: "ReactJS",
      description:
        "A React js app to generator number of paragraphs like loreum ipusm text",
      image: "/projectImages/para.png",
      link: "https://paragenerator.netlify.app/",
    },
    {
      name: "Markdown Previewer",
      category: "ReactJS",
      description: "A React app to preview markdown text.",
      image: "/projectImages/markdown.png",
      link: "https://mdviewer.netlify.app/",
    },
    {
      name: "Heroku Like Clone",
      category: "HTML5 SCSS GRID FLEXBOX",
      description: "Inspired from heroku design.",
      image: "/projectImages/heroku.png",
      link: "https://herokulike.netlify.app/",
    },
  ],
};
export default data;
