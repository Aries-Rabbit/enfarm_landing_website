import React from "react";
import { Carousel } from "../../components/Carousel";
import style from "../../assets/styles/section.module.css";
import styleCarousel from "../../assets/styles/carousel.module.css";
import { TittleSection } from "../TittleSection";
import ImgKnowledge_1 from "../../assets/images/Home/knowledge_1.png";
import ImgKnowledge_2 from "../../assets/images/Home/knowledge_2.png";
import ImgKnowledge_3 from "../../assets/images/Home/knowledge_3.png";

interface MiniPostProps {
  image: string;
  date: string;
  title: string;
  content: string;
}

export const KnowledgeSection = () => {
  const MiniPost = ({ image, date, title, content }: MiniPostProps) => {
    return (
      <div className="p-4">
        <div className={styleCarousel.minipost_carousel}>
          <div className="w-full overflow-hidden h-52 rounded-[32px]">
            <img
              src={image}
              className="object-cover object-center h-full w-full"
              alt=""
            />
          </div>
          <p className={style.date}>{date}</p>
          <h3 className={style.title}>{title}</h3>
          <p className={style.content}>{content}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={`${style.section} bg-[#F1F1EA]`}>
      <TittleSection title="Tri thức" />
      <p className="w-1/2 sm:w-full mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="relative w-full">
        <Carousel autoplaySpeed={1000000000} showArrows={true}>
          <MiniPost
            image={ImgKnowledge_1}
            date="08/08/2023"
            title="Hợp tác nghiên cứu công nghệ bón phân thông minh"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <MiniPost
            image={ImgKnowledge_2}
            date="08/08/2023"
            title="Hợp tác nghiên cứu công nghệ phân bón “thông minh” vào phục vụ sản xuất nông nghiệp"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <MiniPost
            image={ImgKnowledge_3}
            date="08/08/2023"
            title="enfarm Agritech phát triển công nghệ bón phân thông minh"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <MiniPost
            image={ImgKnowledge_1}
            date="08/08/2023"
            title="Hợp tác nghiên cứu công nghệ bón phân thông minh"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <MiniPost
            image={ImgKnowledge_2}
            date="08/08/2023"
            title="Hợp tác nghiên cứu công nghệ phân bón “thông minh” vào phục vụ sản xuất nông nghiệp"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <MiniPost
            image={ImgKnowledge_3}
            date="08/08/2023"
            title="enfarm Agritech phát triển công nghệ bón phân thông minh"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Carousel>
      </div>
    </div>
  );
};
