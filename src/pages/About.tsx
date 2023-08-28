import React from "react";
import style from "../assets/styles/about.module.css";
import styleSection from "../assets/styles/section.module.css";
import { Carousel } from "../components/Carousel";
import fruit_1 from "../assets/images/img/fruit_1.png";
import fruit_2 from "../assets/images/img/fruit_2.png";
import fruit_3 from "../assets/images/img/fruit_3.png";
import fruit_4 from "../assets/images/img/fruit_4.png";
import fruit_5 from "../assets/images/img/fruit_5.png";
import fruit_6 from "../assets/images/img/fruit_6.png";
import fruit_7 from "../assets/images/img/fruit_7.png";
import fruit_8 from "../assets/images/img/fruit_8.png";
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
      <div className="w-full">
        <Carousel autoplaySpeed={2000} slidesToShow={7} slidesToScroll={3}>
          <div className="px-2">
            <div className="h-32 rounded-2xl overflow-hidden">
              <img
                src={fruit_1}
                className="object-cover object-center"
                alt=""
              />
            </div>
          </div>
          <div className="px-2">
            <div className="h-32 rounded-2xl overflow-hidden">
              <img
                src={fruit_2}
                className="object-cover object-center"
                alt=""
              />
            </div>
          </div>
          <div className="px-2">
            <div className="h-32 rounded-2xl overflow-hidden">
              <img
                src={fruit_3}
                className="object-cover object-center"
                alt=""
              />
            </div>
          </div>
          <div className="px-2">
            <div className="h-32 rounded-2xl overflow-hidden">
              <img
                src={fruit_4}
                className="object-cover object-center"
                alt=""
              />
            </div>
          </div>
          <div className="px-2">
            <div className="h-32 rounded-2xl overflow-hidden">
              <img
                src={fruit_5}
                className="object-cover object-center"
                alt=""
              />
            </div>
          </div>
          <div className="px-2">
            <div className="h-32 rounded-2xl overflow-hidden">
              <img
                src={fruit_6}
                className="object-cover object-center"
                alt=""
              />
            </div>
          </div>
          <div className="px-2">
            <div className="h-32 rounded-2xl overflow-hidden">
              <img
                src={fruit_7}
                className="object-cover object-center"
                alt=""
              />
            </div>
          </div>
          <div className="px-2">
            <div className="h-32 rounded-2xl overflow-hidden">
              <img
                src={fruit_8}
                className="object-cover object-center"
                alt=""
              />
            </div>
          </div>
        </Carousel>
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
