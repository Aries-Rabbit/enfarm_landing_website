import React from "react";
import { TittleSection } from "../TittleSection";
import style from "../../assets/styles/section.module.css";
import ImgCoop from "../../assets/images/Home/img_coop.jpeg";

export const CoopSection = () => {
  return (
    <div className={style.section}>
      <TittleSection title="Đối tác của enfarm" />
      <div className="w-full flex sm:flex-col gap-8">
        <div className="w-1/2 sm:w-full">
          <div className="w-full rounded-[32px] overflow-hidden">
            <img
              src={ImgCoop}
              alt="prod 1"
              className="object-cover object-center "
            />
          </div>
        </div>
        <div className="w-1/2 sm:w-full flex flex-col justify-center gap-2">
          <h2>Viện Khoa Học Kỹ Thuật Nông Lâm Nghiệp Tây Nguyên</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non.
          </p>
        </div>
      </div>
    </div>
  );
};
