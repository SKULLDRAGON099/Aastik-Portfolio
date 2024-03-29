import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-orange-400 tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-200">Graduation</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E in Electrical and Computer Engineering"
            subTitle="Thapar Institute of Engineering and Technology, Patiala"
            result="8.71 / 10"
            des="In my B.E. program, I've delved into a comprehensive array of subjects spanning both 
            electrical engineering and computer science domains. Courses such as Object-Oriented Programming 
            (OOPs), Operating Systems, Computer Networks, Database Management Systems and Cybersecurity
             have equipped me with a strong foundation in software development principles and practices. 
            On the electrical engineering front, I've explored subjects including Electric Vehicles, Electric Machines, and Power Systems, which have provided me with a deep understanding of energy systems."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-orange-400 tracking-[4px]">2017 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-200">School</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior Secondary, (10+2 PCM)"
            subTitle="DAV Public School, Grugaon (2019-20)"
            result="94.8% - CBSE"
            des="Did my schooling from DAV Public School, Sec-14, Gurgaon, took PCM in 10+2, and got 94.8% in board examination."
          />
          <ResumeCard
            title="Matriculation, (10th Grade)"
            subTitle="DAV Public School, Grugaon (2017-18)"
            result="92% - CBSE"
            des="Did my schooling from DAV Public School, Sec-14, Gurgaon and got 92% in board examination."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education