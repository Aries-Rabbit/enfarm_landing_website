import React from "react";
import { TittleSection } from "../TittleSection";
import style from "../../assets/styles/section.module.css";
import device_box from "../../assets/images/Home/device_box_small.png";
import device from "../../assets/images/Product/device_small.png";
import { StatusSuccess } from "../../assets/images/svg/Icon";
import { Fade } from "react-reveal";

interface uspProps {
  content: string;
}
export const ProductionSection = () => {
  const USP = ({ content }: uspProps) => {
    return (
      <div className="flex gap-2">
        <div className="flex-shrink-0">
          <StatusSuccess />
        </div>
        <h4 className={style.product_usp}>{content}</h4>
      </div>
    );
  };

  return (
    <div className={style.section}>
      <TittleSection title="Sản phẩm từ enfarm" />
      <div className="w-full flex sm:flex-col gap-8">
        <div className="w-1/2 sm:w-full">
          <div className="w-full rounded-[32px] overflow-hidden">
            <Fade bottom>
              <img
                src={device_box}
                alt="prod 1"
                className="object-cover object-center "
              />
            </Fade>
          </div>
        </div>
        <div className="w-1/2 sm:w-full flex flex-col justify-center gap-2">
          <h2>Bộ thiết bị bón phân thông minh SF23-01</h2>
          <p>
            SF23-01 - thiết bị cho phép xác định hàm lượng N-P-K dễ tiêu trong
            đất theo thời gian thực, kết hợp với một ứng dụng trong điện thoại
            thông minh để giúp nông dân biết khi nào cần bón phân, loại phân gì
            và bón bao nhiêu là vừa đủ nhằm tối đa năng suất, giảm chi phí phân
            bón đồng thời hạn chế lượng phân dư thừa thất thoát ra môi trường.
          </p>
        </div>
      </div>
      <div className="w-full flex sm:flex-col-reverse gap-8 sm:gap-0 mt-8">
        <div className="w-1/2 sm:w-full flex flex-col justify-center gap-9">
          <USP content="Thiết bị đo đa nhiệm: NPK, pH, độ ẩm" />
          <USP content="Sensor ‘túc trực’ trong đất" />
          <USP content="Kết hợp với ứng dụng enfarm nhằm đo và theo dõi thông số tiện lợi" />
        </div>
        <div className="w-1/2 sm:w-full">
          <div className="w-full rounded-[32px] overflow-hidden">
            <Fade bottom>
              <img
                src={device}
                alt="prod 1"
                className="object-cover object-center w-full"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
