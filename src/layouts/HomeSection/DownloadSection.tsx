import React from "react";
import enfarm_logo from "../../assets/images/img/enFarm_logo_web.png";
import enfarm_mockup from "../../assets/images/Home/enfarm_mockup.png";
import app_store from "../../assets/images/img/app_store.png";
import gg_play from "../../assets/images/img/gg_play.png";
import style from "../../assets/styles/section.module.css";

export const DownloadSection = () => {
  return (
    <div className={style.section} id="download">
      <div className="w-full flex flex-row sm:flex-col gap-[130px] items-center sm:gap-4 p-8 bg-[#E6F6D9] relative rounded-[48px]">
        <div className="w-2/3 sm:w-full">
          <div className="w-16 h-16 rounded-2xl flex justify-center items-center bg-white">
            <img loading="lazy" src={enfarm_logo} alt="enfarm logo" />
          </div>
          <div>
            <h1 className="my-4 text-left">Tải ứng dụng ngay</h1>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </article>
            <div className="w-full flex sm:w-1/3 mt-9 gap-4">
              <img loading="lazy" src={gg_play} alt="" />
              <img loading="lazy" src={app_store} alt="" />
            </div>
          </div>
        </div>
        <div className="w-1/3 sm:w-full z-[2] sm:hidden">
          <img loading="lazy" src={enfarm_mockup} alt="" />
        </div>
      </div>
    </div>
  );
};
