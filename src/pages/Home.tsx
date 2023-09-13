import React from "react";
import style from "../assets/styles/home.module.css";
import styleCarousel from "../assets/styles/carousel.module.css";
import bg_cafe from "../assets/images/Home/bg_cafe_small.png";
import gg_play from "../assets/images/img/gg_play.png";
import app_store from "../assets/images/img/app_store.png";
import hand from "../assets/images/Home/hand_hold_phone_small.png";
import enfarm_logo from "../assets/images/img/enFarm_logo_web.png";
import shapewave from "../assets/images/Home/shapewave.png";
import coffee_illustration from "../assets/images/Home/coffee-illustration.png";
import { Carousel } from "../components/Carousel";
import { FeatureSection } from "../layouts/HomeSection/FeatureSection";
import { ProductionSection } from "../layouts/HomeSection/ProductionSection";
import { dummyDataCarousel } from "../data/dummy";
import { NewsSection } from "../layouts/HomeSection/NewsSection";
import { KnowledgeSection } from "../layouts/HomeSection/KnowledgeSection";
import { CoopSection } from "../layouts/HomeSection/CoopSection";
import { StorySection } from "../layouts/HomeSection/StorySection";
import { DownloadSection } from "../layouts/HomeSection/DownloadSection";
import { ProgressiveImg } from "../components/ProgressiveImg";

export const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper_bg}>
        <nav className={style.wrapper}>
          <div className="w-full flex flex-row gap-[52px] sm:flex-col mb-10">
            <div className="w-2/3 sm:w-full">
              <h1 className={style.big_title}>
                enfarm <br /> Công nghệ vì nhà nông
              </h1>
              <article>
                enfarm Agritech giúp nông dân làm giàu và ngành nông nghiệp phát
                triển bền vững bằng cách ứng dụng IoT và AI để cung cấp cho nông
                dân các phân tích từ nhu cầu dinh dưỡng của cây trồng tới xu
                hướng thời tiết và thị trường.
              </article>
              {/* <div className="w-full flex sm:w-1/3 mt-9 gap-4">
                <img src={gg_play} alt="" />
                <img src={app_store} alt="" />
              </div> */}
              <div className="w-full flex gap-4 mt-4">
                <img loading="lazy" src={gg_play} alt="" className="w-1/3" />
                <img loading="lazy" src={app_store} alt="" className="w-1/3" />
              </div>
            </div>
            <div className="w-1/3 sm:hidden relative flex justify-center items-center">
              <div
                className={`${style.elipse_medium} absolute top-0 right-0`}
              ></div>
              <div
                className={`${style.elipse_big} absolute bottom-0 left-0`}
              ></div>
              <div
                className={`${style.elipse_small} absolute bottom-[90px] left-[22px]`}
              ></div>
              <div className={style.img_decor}>
                <ProgressiveImg
                  hash="LDF5+}.4Fd4:lR~WD*I:_L9GRnD%"
                  src={bg_cafe}
                  className="object-cover object-center aspect-square"
                />
              </div>
            </div>
          </div>
          <Carousel autoplaySpeed={1000000000}>
            {dummyDataCarousel.map((item, index) => (
              <div className="p-4" key={index}>
                <div className={styleCarousel.pr_carousel}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </Carousel>

          <div className="w-full flex flex-row sm:flex-col gap-[130px] sm:gap-4 py-16">
            <div className="w-1/3 sm:w-full">
              <img
                src={hand}
                alt=""
                className="w-full h-[562px] rounded-se-[320px]"
              />
            </div>
            <div className="w-2/3 sm:w-full">
              <div className="w-16 h-16 bg-white rounded-2xl flex justify-center items-center">
                <img src={enfarm_logo} alt="enfarm logo" />
              </div>
              <div>
                <h1 className="my-4">Về ứng dụng enfarm</h1>
                <article>
                  Ứng dụng nông nghiệp thông minh enfarm tích hợp các chức năng
                  dự báo thời tiết, dự báo giá cả và lợi nhuận, chẩn đoán sâu
                  bệnh, sổ tay nông nghiệp điện tử cũng như giải đáp thắc mắc
                  của nông dân bằng AI (trí tuệ nhân tạo).
                </article>
                <div className="flex justify-end w-full">
                  <img src={coffee_illustration} alt="" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="w-full">
        <img src={shapewave} alt="" className="w-full" />
      </div>

      <main>
        <FeatureSection />
        <ProductionSection />
        <KnowledgeSection />
        <NewsSection />
        <CoopSection />
        <StorySection />
        <DownloadSection />
      </main>
    </div>
  );
};
