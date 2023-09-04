import React from "react";
import style from "../../assets/styles/section.module.css";
import styleCarousel from "../../assets/styles/carousel.module.css";
import { TittleSection } from "../TittleSection";
import { Carousel } from "../../components/Carousel";
import img_story_1 from "../../assets/images/Home/img_story_1_small.png";

interface MiniPostProps {
  image: string;
  title: string;
  content: string;
}

export const StorySection = () => {
  const MiniPost = ({ image, title, content }: MiniPostProps) => {
    return (
      <div className="p-4">
        <div className={styleCarousel.story_carousel}>
          <div className="relative w-full h-52">
            <div className="w-52 h-52 lg:w-40 lg:h-40 overflow-hidden rounded-full absolute -bottom-8 left-1/2 -translate-x-1/2">
              <img src={image} className="object-cover object-center" alt="" />
            </div>
          </div>
          <div className="bg-[#EEF3E5] px-6 py-8 rounded-[32px]">
            <h3 className={styleCarousel.title}>{title}</h3>
            <p className={styleCarousel.content}>{content}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={style.section}>
      <TittleSection title="Câu chuyện thành công từ nhà nông" />
      <Carousel autoplaySpeed={1000000000}>
        <MiniPost
          image={img_story_1}
          title="Title: Lorem ipsum"
          content="Quotes: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <MiniPost
          image={img_story_1}
          title="Title: Lorem ipsum"
          content="Quotes: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <MiniPost
          image={img_story_1}
          title="Title: Lorem ipsum"
          content="Quotes: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <MiniPost
          image={img_story_1}
          title="Title: Lorem ipsum"
          content="Quotes: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <MiniPost
          image={img_story_1}
          title="Title: Lorem ipsum"
          content="Quotes: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <MiniPost
          image={img_story_1}
          title="Title: Lorem ipsum"
          content="Quotes: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Carousel>
    </div>
  );
};
