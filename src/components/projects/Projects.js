import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Credit Card Fraud Detection and Analysis"
          des="Implemented credit card fraud detection with Random Forest in Jupyter, achieving high accuracy. 
          Analyzed 300K US transactions in Power BI, revealing fraud trends and spending patterns."
          src={projectOne}
        />
        <ProjectsCard
          title="Revamping Ather Scooter Landing page"
          des="In redesigning Ather E-Scooter's landing page, 
          I selected a fitting background image and enhanced user experience with an intuitive navigation bar."
          src={projectTwo}
        />
        <ProjectsCard
          title="Nashville Housing Data Cleaning"
          des="Successfully cleansed and restructured Nashville housing data, featuring 19 columns 
          and 1000 rows, utilizing SQL commands and Implemented effective data deduplication techniques"
          src={projectThree}
        />
        <ProjectsCard
          title="Stock Price Prediction"
          des="Utilized historical stock data obtained from Yahoo Finance to train an LSTM network with Keras 
          for predicting Netflix stock prices. This approach enabled the model to capture more reliable forecasts in dynamic market conditions."
          src={projectFour}
        />
        <ProjectsCard
        title="Crypto Price Tracking Webpage"
          des="Developed a webpage using React, Coingecko as an API, and Recharts for
plotting graphs. The webpage allows users to stay updated on the latest crypto prices and visualize historical data through
interactive charts."
          src={projectFive}          
        />
        <ProjectsCard
          title="Portfolio Website Design"
          des="Designed a professional portfolio website using Figma, which showcases my skills, experiences,
and projects in a visually appealing manner."
          src={projectSix}
        />
        <ProjectsCard
          title="Flight Booking App Design"
          des="Designed the homepage and booking page for an airplane booking application using Figma. 
          Implemented intuitive user interfaces and smooth user flows to enhance the booking experience."
          src={projectSeven}
        />
        <ProjectsCard
          title="Disney+ Hotstar Clone"
          des="Replicated a Starting page clone of Disnep+ Hotstar using HTML, C++, JavaScript."
          src={projectEight}
        />
      </div>
    </section>
  );
}

export default Projects