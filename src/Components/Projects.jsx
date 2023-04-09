import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../HOC/SectionWrapper";
import { fadeIn, slideIn, zoomIn } from "../utils/motion";
import { styles } from "../style";
import { github } from "../assets";

import { projects } from "../constants/index";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("rigth", "spring", 0.3 * index, 0.6)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#151030] p-5 rounded-2xl sm:w-[350px] w-full min-h-[530px] my-4"
      >
        <div className="relative w-full h-[230px]">
          {/* for project img */}
          <img
            src={image}
            alt={image}
            className="w-full h-full object-contain rounded-2xl"
          />

          {/* inset-0 means top,left,right,bottom=0 and thus used flex...here */}
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              className="w-8 h-8 rounded-full black-gradient flex items-center justify-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
              // using windows open function for opening a blank tab with link
            >
              <img
                className="w-1/2 h-1/2 object-contain hover:scale-110"
                src={github}
                alt="gitHub"
              />
            </div>
          </div>
        </div>

        {/* project details. */}
        <div className="mt-5 flex flex-col gap-8">
          <h3 className="text-[22px] font-semibold ">{name}</h3>
          <p className="text-gray-400 text-[16px] text-justify">
            {description.length > 180
              ? description.substring(0, 158) + "..."
              : description}
          </p>
        </div>

        {/* about tech used in each project*/}
        <div className="flex gap-3 text-[14px] mt-3">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={zoomIn(0.2, 1)}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("left", "spring", 0.5, 1)}
        className={`text-gray-400 sm:text-[18px] text-[15px] font-semibold italic my-4 max-w-5xl mx-auto`}
      >
        Following Projects showcase some of my skills and experience through
        real world example of my work. Each project is briefly described with
        links to code repository and live demos in it. It reflect my abilities
        to solve the complex problems, work with diffrent technologies, manage
        projects effectively.
      </motion.p>
      <div className="Projects flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
