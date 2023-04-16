import React from "react";
import SectionWrapper from "../HOC/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { styles } from "../style";

const Input = ({ type, placeholder }) => {
  return (
    <input
      className="border-0 outline-0 p-3 bg-[#151030] rounded-lg bg-slate-800"
      type={type}
      placeholder={placeholder}
    />
  );
};

const Contact = () => {
  return (
    <>
      <motion.div className="my-4" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Get in Touch</h2>
      </motion.div>
      <div className="flex md:flex-row flex-col-reverse sm:justify-evenly justify-center sm:items-center  gap-6 overflow-hidden">
        <motion.form
          variants={slideIn("left", "spring", 0.4, 0.8)}
          className="bg-slate-900 flex flex-[0.60] flex-col px-6 py-5 gap-6 rounded-3xl"
        >
          <h2
            className={`${styles.sectionHeadText} sm:text-[40px] md:text-[45px]`}
          >
            Contact
          </h2>
          <Input type="name" placeholder="Whats your Name" />
          <Input type="email" placeholder="Whats your Email" />
          <Input type="number" placeholder="Whats your Phone Number" />

          <textarea
            className=" bg-slate-800 rounded-lg border-0 outline-0 p-4"
            rows={8}
            placeholder="What do you want to say?"
          />
          <button className="bg-blue-600 rounded-xl w-fit py-3 px-16 outline-0 shadow-md shadow-primary">
            Send
          </button>
        </motion.form>
        <motion.div
          variants={slideIn("right", "spring", 0.4, 0.4)}
          className="flex justify-center"
        >
          <img
            className="sm:w-[340px]"
            src="https://www.freeiconspng.com/thumbs/contact-icon-png/contact-icon-png-0.png"
          />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
