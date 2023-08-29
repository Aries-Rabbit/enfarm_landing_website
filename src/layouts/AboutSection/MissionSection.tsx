import React from "react";
import { TittleSection } from "../TittleSection";
import about_1 from "../../assets/images/About/about-sumenh-image-1.png";
import about_2 from "../../assets/images/About/about-sumenh-image-2.png";
import about_3 from "../../assets/images/About/about-sumenh-image-3.png";

export const MissionSection = () => {
  return (
    <div>
      <TittleSection title="Sứ mệnh" />
      <div className="flex  sm:flex-col gap-8">
        <div className="w-1/3 flex flex-col items-center gap-4 sm:w-full sm:p-0">
          <img src={about_1} alt="" />
          <h2 className="text-center">Nâng cao thu nhập cho người nông dân</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-center gap-4 sm:w-full sm:p-0">
          <img src={about_2} alt="" />
          <h2 className="text-center">Nâng cao thu nhập cho người nông dân</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-center gap-4 sm:w-full sm:p-0">
          <img src={about_3} alt="" />
          <h2 className="text-center">Nâng cao thu nhập cho người nông dân</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
