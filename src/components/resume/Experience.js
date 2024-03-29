import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2021</p>
          <h2 className="text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="UI/UX Designer Intern"
            subTitle="Chatbot.team - (Jan 2024 - Present)"
            result="Remote"
            des="To create intuitive and visually appealing user interfaces, proficiency in utilizing Figma, a collaborative design tool,
is employed. Committed to improving existing designs for enhanced user experience and accessibility, aiming to boost customer
engagement and understanding of interpretative information."
          />
          <ResumeCard
            title="Software Engineer & Business Development Intern"
            subTitle="TalentServe - (Jun 2023 - July 2023)"
            result="Remote"
            des="Created an Expense Tracking Website to help users track their income and expenses, categorize transactions,
and provide financial insights and reports. It was built using the MERN stack
Conducted market research for 50+ local training centers in my city, specializing in ML, Web Development, Data
Analysis, and Python courses, as part of my role at EdTech start-up."
          />
          <ResumeCard
            title="Data Quality Intern"
            subTitle="Anar App Pvt. Ltd - (Feb 2022)"
            result="Remote"
            des="Checked all the products posted by the users on the Anar app as a part of Data Segregation and Item Tagging
and marked them correctly, accessing this through a dashboard. Daily item tagging target was 700+."
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
