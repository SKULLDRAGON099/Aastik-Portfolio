import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-orange-400 tracking-[4px]">2017-2020</p>
          <h2 className="text-4xl font-bold text-fuchsia-200">School Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Academic Scholar"
            subTitle="Senior Secondary (10+2)"
            result="Success"
            des="Was a scholarship holder and academic scholar in Senior Secondary, in academic session 2019-2020."
          />
          <ResumeCard
            title="Academic Scholar"
            subTitle="Matriculation"
            result="Success"
            des="Was a academic scholar in Matriculation, academic session 2017-2018."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-orange-400 tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold text-fuchsia-200">University Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Scholarship"
            subTitle="Scholarship Holder at University"
            result="Success"
            des="As a Scholarship Holder at the University, I've had the privilege to excel academically while also contributing to various projects and initiatives."
          />
          <ResumeCard
            title="Volley Ball Tournament"
            subTitle="Thapar Sports Mania"
            result="Success"
            des="2nd runner-up in Volley ball tournament organised by Thapar Frosh society in 2021."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
