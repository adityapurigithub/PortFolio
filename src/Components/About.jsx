import React from "react";
import SectionWrapper from "../HOC/SectionWrapper";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, slideIn, textVariant, zoomIn } from "../utils/motion";
import { services } from "../constants";
import { styles } from "../style";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      option={{ max: 45, scale: 1, speed: 450 }}
      className="w-2/3 sm:w-[240px] "
    >
      <motion.div
        variants={fadeIn("left", "spring", index * 0.3, 0.4)}
        className="w-full green-pink-gradient p-1 rounded-xl"
      >
        <div className="min-h-[250px] bg-[#151030] rounded-xl flex flex-col items-center justify-center">
          <img className="w-16 h-16 object-cover" src={icon} alt="cardIcon" />
          <p className="my-2 text-[18px] font-semibold text-blue-200 tracking-[2px]">
            {title}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView</h2>
      </motion.div>
      <motion.p
        variants={zoomIn(0.2, 0.6)}
        className="sm:text-[18px] text-[16px] italic leading-[30px] text-[#aaa6c3]"
      >
        I am a Aspiring developer with expreince in Javascript and expertise in
        framework like React.js, Node.js, etc... I am a quick learner and
        looking to collaborate as a Frontend or Fullstack developer. Lets work
        together to bring your ideas to life!
      </motion.p>

      {/* Cards ............*/}
      <div className="flex justify-center flex-wrap gap-6 my-5 mb-20 ">
        {services.map((service, index) => (
          <ServiceCard key={service} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
