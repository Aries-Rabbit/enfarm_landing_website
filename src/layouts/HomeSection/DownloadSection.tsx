import React from "react";
import enfarm_logo from "../../assets/images/img/enFarm_logo_web.png";
import enfarm_mockup from "../../assets/images/Home/bgNphone_mockup.png";
import app_store from "../../assets/images/img/app_store.png";
import gg_play from "../../assets/images/img/gg_play.png";
import style from "../../assets/styles/section.module.css";

export const DownloadSection = () => {
  return (
    <div className={style.section} id="download">
      <div className="relative w-full">
        <img src={enfarm_mockup} alt="" className="sm:hidden w-full" />
        <div className="absolute top-1/2 left-24 -translate-y-1/2 w-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:top-0 sm:hidden">
          <div className="w-16 h-16 rounded-2xl flex justify-center items-center">
            <img loading="lazy" src={enfarm_logo} alt="enfarm logo" />
          </div>
          <div>
            <h1 className="my-4 text-left">Tải ứng dụng ngay</h1>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </article>
            <div className="w-full flex mt-9 gap-4">
              <img loading="lazy" src={gg_play} alt="" className="w-1/2" />
              <img loading="lazy" src={app_store} alt="" className="w-1/2" />
            </div>
          </div>
        </div>
        <div className="hidden sm:block bg-[#E6F6D9] p-4 rounded-[32px]">
          <div className="w-16 h-16 rounded-2xl flex justify-center items-center">
            <img loading="lazy" src={enfarm_logo} alt="enfarm logo" />
          </div>
          <div>
            <h1 className="my-4 text-left">Tải ứng dụng ngay</h1>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </article>
            <div className="w-full flex sm:flex-col sm:items-center mt-9 gap-4">
              <img loading="lazy" src={gg_play} alt="" className="w-1/2" />
              <img loading="lazy" src={app_store} alt="" className="w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
