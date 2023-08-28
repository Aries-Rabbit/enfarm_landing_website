import React from "react";
import ImgPost1 from "../assets/images/img/news_1.png";
import ImgPost2 from "../assets/images/img/news_2.png";
import ImgPost3 from "../assets/images/img/news_3.png";
import ImgPost4 from "../assets/images/img/knowledge_1.png";
import ImgPost5 from "../assets/images/img/knowledge_2.png";
import ImgPost6 from "../assets/images/img/knowledge_3.png";

import style from "../assets/styles/knowledge.module.css";

interface MiniPostProps {
  image: string;
  date: string;
  title: string;
  content: string;
}
export const Knowledge = () => {
  const MiniPost = ({ image, date, title, content }: MiniPostProps) => {
    return (
      <div className="p-4">
        <div className={style.post}>
          <div className="w-full overflow-hidden h-52 rounded-[32px] mb-3">
            <img
              src={image}
              className="object-cover object-center h-full"
              alt=""
            />
          </div>
          <p className={style.date}>{date}</p>
          <h3 className={style.title}>{title}</h3>
          <p className={style.content}>{content}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className="w-full h-full flex justify-center items-center">
          <div className={style.knowledge_banner_content}>
            <h1 className="text-center">Tri thức</h1>
            <p className="text-center">Cập nhật tin tức mới nhất từ enfarm</p>
          </div>
        </div>
      </div>
      <main className="mt-28">
        <div className={style.section}>
          <div className="mx-4 flex gap-8 sm:flex-col">
            <div className="w-2/5 sm:w-full">
              <img
                src={ImgPost1}
                className="object-cover object-center rounded-[32px]"
                alt=""
              />
            </div>
            <div className="w-3/5 sm:w-full">
              <div className={style.post}>
                <p className={style.date}>08/08/2023</p>
                <h3 className={style.title}>Blog title: Lorem ipsum</h3>
                <p className={style.content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nisl tincidunt eget nullam non. Quis hendrerit dolor magna
                  eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris
                  sit amet massa...
                </p>
              </div>
              <button className={style.btn}>Đọc tiếp</button>
            </div>
          </div>
        </div>
        <div className={style.section}>
          <h3 className="mx-4">Tất cả bài viết</h3>
          <div className="grid grid-cols-3 sm:grid-cols-1">
            <div className="col-span-1">
              <MiniPost
                image={ImgPost1}
                date="08/08/2023"
                title="Hợp tác nghiên cứu công nghệ bón phân thông minh"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="col-span-1">
              <MiniPost
                image={ImgPost2}
                date="08/08/2023"
                title="Hợp tác nghiên cứu công nghệ phân bón “thông minh” vào phục vụ sản xuất nông nghiệp"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="col-span-1">
              <MiniPost
                image={ImgPost3}
                date="08/08/2023"
                title="enfarm Agritech phát triển công nghệ bón phân thông minh"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="col-span-1">
              <MiniPost
                image={ImgPost4}
                date="08/08/2023"
                title="Hợp tác nghiên cứu công nghệ bón phân thông minh"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="col-span-1">
              <MiniPost
                image={ImgPost5}
                date="08/08/2023"
                title="Hợp tác nghiên cứu công nghệ phân bón “thông minh” vào phục vụ sản xuất nông nghiệp"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="col-span-1">
              <MiniPost
                image={ImgPost6}
                date="08/08/2023"
                title="enfarm Agritech phát triển công nghệ bón phân thông minh"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
