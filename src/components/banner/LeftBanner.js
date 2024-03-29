import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["UI/UX Designer.", "Front-End Developer.", "Product Manager.", "Data Visualizer/Analyst."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Enter My Digital Showcase</h4>
        <h1 className="text-6xl font-bold text-fuchsia-200">
          Hi, I'm <span className="text-orange-400 capitalize">Aastik Yadav</span>
        </h1>
        <h2 className="text-4xl font-bold text-fuchsia-200">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            // cursorColor="#9999be"
            cursorColor="#ff8a79"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a passionate technologist with expertise in UI/UX Designing, Product Management,
        Data Visualisation & Analysis, and Software Development. 
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        In this portfolio, you'll find a curated collection of projects showcasing my expertise in 
        UI/UX design and development. , demonstrating my skills in 
        languages like Python and frameworks like React. Explore my work, and let's 
        connect to explore opportunities together!
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner