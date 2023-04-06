import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
import { styles } from "../style";
import SectionWrapper from "../HOC/SectionWrapper";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { educations } from "../constants";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid white" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="h-full flex items-center justify-center">
          <img
            src={education.icon}
            alt={education.board_name}
            className="rounded-full w-[95%] h-[95%] object-contain"
          />
        </div>
      }
    >
      <div className="text-center">
        <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
        <p className="text-secondary text-[18px] font-semibold">
          {education.board_name}
        </p>

        {/* some details */}
        <ul className="list-disc ml-4 text-justify">
          {education.points.map((point, index) => (
            <li
              className="my-4 text-[14px] leading-[25px]"
              key={`education-point-${index}`}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div className="my-5 mt-10" variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Education</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <div className="text-justify my-10">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard education={education} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
