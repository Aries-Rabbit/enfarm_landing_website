import React from "react";
import style from "../assets/styles/about.module.css";
import styleSection from "../assets/styles/section.module.css";
import { AboutSection } from "../layouts/AboutSection/AboutSection";
import { VisionSection } from "../layouts/AboutSection/VisionSection";
import { MissionSection } from "../layouts/AboutSection/MissionSection";
import { PersonSection } from "../layouts/AboutSection/PersonSection";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.content_about_us}>
          <h1>Về chúng tôi</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
            ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
          </p>
        </div>
      </div>
      <main>
        <div className={styleSection.section}>
          <AboutSection />
        </div>
        <div className={styleSection.vision}>
          <VisionSection />
        </div>
        <div className={styleSection.section}>
          <MissionSection />
        </div>
        <div className={`${styleSection.section} bg-[#F1F1EA]`}>
          <PersonSection />
        </div>
      </main>
    </div>
  );
};

export default About;
