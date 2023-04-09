import {
  react,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  java,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  hptu,
  cbse,
  cn,
  p1,
  p2,
  p3,
} from "../assets";

export const links = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const educations = [
  {
    title: "Matriculation",
    board_name: "CBSE",
    icon: cbse,
    iconBg: "#383E56",
    date: "April, 2015",
    points: [
      "Govt. Sr. Sec. Model School, SNR, (H.P)",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Percentage- 78%",
    ],
  },
  {
    title: "Intermediate",
    board_name: "CBSE",
    icon: cbse,
    iconBg: "#E6DEDD",
    date: "April, 2017",
    points: [
      "Govt. Sr. Sec. Model School, SNR, (H.P)",
      "----Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Percentage- 76%",
    ],
  },
  {
    title: "Graduaation",
    board_name: "HPTU",
    icon: hptu,
    iconBg: "#383E56",
    date: "December, 2021",
    points: [
      "Bachelors of Technology in Computer Science Engineering",
      "T.R. Abhilashi Memorial Inst. of Engg. & Tech., Nerchowk, (H.P)",
      "CGPA- 7.69/10",
      "---Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full Stack Web Developement",
    board_name: "Coding Ninjas",
    icon: cn,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "YT Clone - React",
    description:
      "Created A Responsive & similar looking App like Youtube. Implemented major features like search,feed , sidebar, channel-video detail pages.API Used-Rapid API",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-player",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://github.com/adityapurigithub/-YtAdyCln",
  },
  {
    name: "Ai Image generator - MERN",
    description:
      "A midjourney like ai image generation web app. One can generate any image by typing a prompt. Major Features-Storing on cloudinary and one can download and see and share all the generated images in the community section.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
    ],
    image: p2,
    source_code_link: "https://github.com/adityapurigithub/AImagination",
  },
  {
    name: "ToDo App- MERN",
    description:
      "A full stack todo application with CRUD functionality, and also with user authentication done using Passport JWT.",
    tags: [
      {
        name: "MERN - stack",
        color: "blue-text-gradient",
      },
      {
        name: "passport jwt",
        color: "green-text-gradient",
      },
    ],
    image: p3,
    source_code_link: "https://github.com/adityapurigithub/mern_todo",
  },
];

export { services, technologies, educations, testimonials, projects };
