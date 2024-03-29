import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub, FaPython} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiPowerbi, SiMysql } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaGithub />
            </span>
            {/* <span className="bannerIcon">
              <FaTwitter />
            </span> */}
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <SiFigma />
              </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
            <span className="bannerIcon">
              <SiPowerbi />
            </span>
              {/* <span className="bannerIcon">
              <SiTailwindcss />
            </span> */}
          </div>
        </div>
      </div>
  )
}

export default Media