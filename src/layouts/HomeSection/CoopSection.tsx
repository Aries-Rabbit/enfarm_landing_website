import React from "react";
import { TittleSection } from "../TittleSection";
import style from "../../assets/styles/section.module.css";
import logo_ensight from "../../assets/images/Home/logo_ensight_small.png";
import logo_vien_khoa_hoc from "../../assets/images/Home/logo_vien.png";

interface CardInforProps {
  image: string;
  name: string;
  description: string;
}
export const CoopSection = () => {
  const CardInfor = ({ image, name, description }: CardInforProps) => {
    return (
      <div className="sm:mb-4">
        <div className="w-full flex justify-center items-center h-28">
          <img src={image} className=" " alt="" />
        </div>
        <p className="text-center font-bold my-4">{name}</p>
        <p>{description}</p>
      </div>
    );
  };
  return (
    <div className={`${style.section} bg-[#F1F1EA]`}>
      <TittleSection title="Đối tác của enfarm" />
      {/* <div className="w-full flex sm:flex-col gap-8">
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
      </div> */}
      <div className="w-2/3 mx-auto flex gap-4 sm:w-full justify-between lg:w-full sm:gap-2 sm:flex-col">
        <CardInfor
          image={logo_vien_khoa_hoc}
          name="Viện Khoa Học Kỹ Thuật Nông Lâm Nghiệp Tây Nguyên"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <CardInfor
          image={logo_ensight}
          name="ensightful"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};
