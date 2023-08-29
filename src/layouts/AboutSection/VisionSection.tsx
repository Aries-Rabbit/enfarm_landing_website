import React from "react";
import { TittleSection } from "../TittleSection";
import styleSection from "../../assets/styles/section.module.css";
import style from "../../assets/styles/about.module.css";
import bg_cafe from "../../assets/images/img/bg_cafe.png";

export const VisionSection = () => {
  return (
    <div className="py-6 mt-8">
      <TittleSection title="Tầm nhìn" />
      <div className="flex px-[120px] sm:px-0">
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
          <div className="w-full flex justify-around">
            <div className="flex flex-col gap-4 items-center">
              <div className={style.circle_custom}>15 -20%</div>
              <h3 className="text-white">Gia tăng năng suất</h3>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className={style.circle_custom}>15 -20%</div>
              <h3 className="text-white">Giảm chi phí phân bón</h3>
            </div>
          </div>
          <div className="w-4/5 mx-auto mt-4">
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
  );
};