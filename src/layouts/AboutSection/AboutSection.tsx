import React from "react";
import { TittleSection } from "../TittleSection";
import about_img_intro from "../../assets/images/About/about_img_intro_small.png";
import logo_slogen from "../../assets/images/img/logo_slogen_small.png";
import style from "../../assets/styles/section.module.css";

export const AboutSection = () => {
  return (
    <div className={style.section}>
      <TittleSection title="Giới thiệu" />
      <div className="flex gap-4 sm:px-0 sm:flex-col">
        <div className="w-1/3 sm:hidden">
          <img
            src={about_img_intro}
            className="object-cover object-center h-full rounded-[32px]"
            alt=""
          />
        </div>
        <div className="w-1/3 flex flex-col gap-5 sm:w-full">
          <div className="w-full aspect-square bg-[#EEF3E5] rounded-[32px] p-8 sm:aspect-auto">
            <h3 className="mb-4">Title: Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              tincidunt eget nullam non.
            </p>
          </div>
          <div className="w-full aspect-square bg-[#EEF3E5] rounded-[32px] p-8 sm:aspect-auto">
            <h3 className="mb-4">Title: Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              tincidunt eget nullam non.
            </p>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-5 sm:w-full">
          <div className="w-full aspect-square bg-[#EEF3E5] rounded-[32px] p-8 sm:aspect-auto">
            <h3 className="mb-4">Title: Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              tincidunt eget nullam non.
            </p>
          </div>
          <div className="w-full aspect-square bg-[#FFFFFF] rounded-[32px] p-8 sm:p-20">
            <img
              src={logo_slogen}
              className="object-cover object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
