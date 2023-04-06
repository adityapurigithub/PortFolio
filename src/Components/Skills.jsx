import React from "react";
import { easeInOut, motion } from "framer-motion";
import { fadeIn, zoomIn } from "../utils/motion";
import { styles } from "../style";
import SectionWrapper from "../HOC/SectionWrapper";
import { technologies } from "../constants";

const TechBalls = ({ tech, index }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <motion.div variants={fadeIn("right", "spring", index * 0.2, 0.75)}>
        <img className="w-[110px] h-[110px] object-cover" src={tech.icon} />
      </motion.div>
      <motion.p
        variants={fadeIn("left", "spring", index * 0.2, 0.75)}
        className="text-[16px] italic font-semibold"
      >
        {tech.name}
      </motion.p>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={zoomIn(0.3, 0.4)}>
        <p className={styles.sectionSubText}>Worked On</p>
        <p className={styles.sectionHeadText}>Technologies</p>
      </motion.div>
      <div className="my-2 max-w-4xl mx-auto flex justify-center flex-wrap gap-4">
        {technologies.map((tech, index) => (
          <TechBalls tech={tech} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
