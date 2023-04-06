import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { computer } from "../assets";

const Hero = () => {
  const fullText = "I am a full stack developer";
  const fullText2 =
    "I love to develop User-interface, Web applications and more...";

  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index < fullText.length) {
        setText(text + fullText[index]);
        setIndex(index + 1);
      } else {
        if (index2 < fullText2.length) {
          setText2(text2 + fullText2[index2]);
          setIndex2(index2 + 1);
        }
      }
    }, 70);
  }, [index, index2]);

  return (
    <section
      className={`relative max-w-7xl mx-auto w-full h-screen sm:top-[100px] top-[120px] flex flex-col transition-all duration-1000  ${styles.paddingX} sm:mb-12 mb-24`}
    >
      <div className="flex justify-start items-start">
        <div className="flex flex-col items-center mr-6">
          <div className="rounded-full w-5 h-5 bg-[#915eff]" />
          <div className="w-1 sm:h-60 h-40 violet-gradient" />
        </div>
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className={styles.heroHeadText}>
            Hi, I'm <span className="text-blue-400"> Aditya Puri</span>
          </h2>
          <p className={styles.heroSubText}>{text}</p>
          <p className={styles.heroSubText}>{text2}</p>
        </motion.div>
      </div>
      <motion.div
        className="w-full flex justify-center"
        variants={fadeIn()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <img
          className="w-[400px] mt-4 object-cover"
          src={computer}
          alt="logo"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
