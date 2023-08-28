import React from "react";
import style from "../../assets/styles/section.module.css";
import { TittleSection } from "../TittleSection";
import { FeatureItem } from "../FeatureItem";
import {
  ChartIcon,
  PhoneBuzzIcon,
  PlantIcon,
  WormIcon,
} from "../../assets/images/svg/Icon";
import screen_phone from "../../assets/images/img/enfarm-app-home-mockup.png";
import { Fade } from "react-reveal";

export const FeatureSection = () => {
  return (
    <div className={style.section}>
      <TittleSection title="Tính năng nổi bật của ứng dụng enfarm" />
      <div className={style.content_parent}>
        <div className={style.content_child}>
          <Fade bottom>
            <FeatureItem
              iconSvg={<PhoneBuzzIcon />}
              title="Đo thông số NPK, pH, độ ẩm"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
            />
          </Fade>
          <Fade bottom>
            <FeatureItem
              iconSvg={<WormIcon />}
              title="Nhận diện sâu bệnh"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
            />
          </Fade>
        </div>
        <div className={style.content_child}>
          <img src={screen_phone} alt="screen_phone" />
        </div>
        <div className={style.content_child}>
          <Fade bottom>
            <FeatureItem
              iconSvg={<ChartIcon />}
              title="Dự báo giá cả thị trường"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
            />
          </Fade>
          <Fade bottom>
            <FeatureItem
              iconSvg={<PlantIcon />}
              title="Quản lý trang trại, cây trồng"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};
