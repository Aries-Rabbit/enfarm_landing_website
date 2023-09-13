import React from "react";
import { TittleSection } from "../TittleSection";
import style from "../../assets/styles/about.module.css";
import styleSection from "../../assets/styles/section.module.css";
import bg_cafe from "../../assets/images/Home/bg_cafe_small.png";

export const VisionSection = () => {
  return (
    <div className={styleSection.section}>
      <div className="p sm:mt-0 sm:py-2">
        <TittleSection title="Tầm nhìn" />
        <div className="flex sm:px-0">
          <div className="w-1/2 sm:hidden relative flex  items-center">
            <div className={style.img_decor}>
              <img
                src={bg_cafe}
                className="object-cover object-center aspect-square h-full"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 sm:w-full">
            <div className="w-4/5 mx-auto mt-4 sm:w-full">
              <div className={style.content_vision}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                tincidunt eget nullam non. Quis hendrerit dolor magna eget est
                lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet
                massa.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
