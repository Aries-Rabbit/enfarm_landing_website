import React from "react";
import double_screen_mock from "../assets/images/Product/double_screen_mock.png";
import gg_play from "../assets/images/img/gg_play.png";
import app_store from "../assets/images/img/app_store.png";
import style from "../assets/styles/product.module.css";
import { StatusSuccess } from "../assets/images/svg/Icon";
import device from "../assets/images/Product/device_small.png";

interface uspProps {
  content: string;
}
export const Product = () => {
  const USP = ({ content }: uspProps) => {
    return (
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0">
          <StatusSuccess />
        </div>
        <h4 className={style.product_usp}>{content}</h4>
      </div>
    );
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className="w-full h-full flex justify-center items-center">
          <div className={style.prouduct_banner_content}>
            <h1 className="text-center text-[#306B1B]">Sản phẩm</h1>
            <p className="text-center">
              Tất cả sản phẩm được phát triển bởi enfarm nhằm nhằm tìm giải pháp
              nâng cao thu nhập cho người nông dân đồng thời đảm bảo an toàn
              thực phẩm và giảm tác động môi trường.
            </p>
          </div>
        </div>
      </div>
      <div className={style.section}>
        <div className="mt-24 sm:mt-10 w-full flex sm:flex-col items-center rounded-[48px] bg-[#EEF3E5] gap-4 relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-8 sm:hidden lg:hidden">
            <img src={double_screen_mock} alt="" />
          </div>
          <div className="w-1/2 flex justify-center sm:w-full">
            <img src={double_screen_mock} alt="" className="hidden lg:block" />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center gap-5 sm:w-full p-8 h-[480px] sm:h-full">
            <h1>App enfarm - Ứng dụng AI trong nông nghiệp</h1>
            <p>
              Ứng dụng nông nghiệp thông minh enfarm tích hợp các chức năng dự
              báo thời tiết,{" "}
              <span className="font-bold">
                dự báo giá cả và lợi nhuận, chẩn đoán sâu bệnh, sổ tay nông
                nghiệp điện tử
              </span>{" "}
              cũng như <span className="font-bold">giải đáp thắc mắc</span> của
              nông dân bằng AI (trí tuệ nhân tạo).
            </p>
            <div className="w-full flex sm:justify-end lg:w-1/3 sm:w-1/3 gap-4">
              <img src={gg_play} alt="" />
              <img src={app_store} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.section}>
        <div className="mt-14 w-full flex sm:flex-col items-center rounded-[48px] bg-[#EEF3E5] p-8 gap-4 h-[480px] sm:h-full">
          <div className="w-1/2 sm:w-full">
            <img src={device} alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-5 sm:w-full">
            <h1>Bộ thiết bị bón phân thông minh SF23-01</h1>
            <p>
              <span className="font-bold">SF23-01</span> - thiết bị cho phép xác
              định hàm lượng N-P-K dễ tiêu trong đất theo thời gian thực, kết
              hợp với một ứng dụng trong điện thoại thông minh để giúp nông dân
              biết khi nào cần bón phân, loại phân gì và bón bao nhiêu là vừa đủ
              nhằm tối đa năng suất, giảm chi phí phân bón đồng thời hạn chế
              lượng phân dư thừa thất thoát ra môi trường.
            </p>
            <div className="flex flex-col justify-center gap-2">
              <USP content="Thiết bị đo đa nhiệm: NPK, pH, độ ẩm" />
              <USP content="Sensor ‘túc trực’ trong đất" />
              <USP content="Kết hợp với ứng dụng enfarm nhằm đo và theo dõi thông số tiện lợi" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
