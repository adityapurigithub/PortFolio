import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";

import { staggerContainer } from "../utils/motion";
//this staggerContainer is for animating the sections as we wrap them in the sectionWrapper

const SectionWrapper = (Component, id) => {
  return function HOC() {
    return (
      <motion.section
        className={`${styles.padding} text-center mx-auto max-w-7xl relative z-0 my-5`}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        // viewport={{ once: true, amount: 0.25 }}
      >
        {/* created a span with local class hash-span  with some margin and padding and giving id to scroll to that section */}
        <span className="hash-span" id={id}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
