import React from "react";
import { TittleSection } from "../TittleSection";
import avt_co_founder from "../../assets/images/img/avt_co-founder.png";
import avt_ceo from "../../assets/images/img/avt_ceo.png";

interface CardInforProps {
  image: string;
  description: string;
  name: string;
  role: string;
}

export const PersonSection = () => {
  const CardInfor = ({ image, description, name, role }: CardInforProps) => {
    return (
      <div className="bg-white w-80 rounded-[32px] px-6 py-10 flex flex-col items-center gap-4">
        <img
          src={image}
          className="w-48 h-48 sm:w-32 sm:h-32 rounded-full"
          alt=""
        />
        <p>{description}</p>
        <div className="w-full">
          <p className="text-right text-[#306B1B]">{name}</p>
          <p className="text-right text-[#306B1B]">{role}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <TittleSection title="Gặp gỡ founder" />
      <div className="w-2/3 mx-auto flex sm:w-full justify-around sm:gap-2">
        <CardInfor
          image={avt_co_founder}
          description="Short description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="Nguyễn Đỗ Dũng"
          role="Co-Founder"
        />
        <CardInfor
          image={avt_ceo}
          description="Short description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="Hồ Long Phi"
          role="CEO"
        />
      </div>
    </div>
  );
};
