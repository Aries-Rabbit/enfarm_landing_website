import React from "react";
import ImgPost1 from "../assets/images/Knowledge/news_1_small.png";
import ImgPost2 from "../assets/images/Knowledge/news_2_small.png";
import ImgPost3 from "../assets/images/Knowledge/news_3_small.png";
import ImgPost4 from "../assets/images/Knowledge/knowledge_1_small.png";
import ImgPost5 from "../assets/images/Knowledge/knowledge_2_small.png";
import ImgPost6 from "../assets/images/Knowledge/knowledge_3_small.png";
import style from "../assets/styles/knowledge.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setTabsKnowledge } from "../redux/layoutSlice";
import { CaretRight } from "../assets/images/svg/Icon";

interface MiniPostProps {
  image?: string;
  date?: string;
  title?: string;
  content?: string;
}
export const Knowledge = () => {
  let dispatch = useDispatch();
  const tabsKnowledge = useSelector(
    (state: any) => state.layoutSlice.tabsKnowledge
  );
  const shorten = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };
  const MiniPostKnow = ({ image, date, title, content }: MiniPostProps) => {
    return (
      <div>
        <div className={style.post}>
          <div className="w-full overflow-hidden h-52">
            <img
              src={image}
              className="object-cover object-top h-full w-full"
              alt=""
            />
          </div>
          <div className="p-4">
            <p className={style.date}>{date}</p>
            <h3 className={style.title}>{shorten(title, 55)}</h3>
            <p className={style.content}>{shorten(content, 130)}</p>
            <button className={style.read_more}>
              Đọc tiếp
              <CaretRight />
            </button>
          </div>
        </div>
      </div>
    );
  };
  const MiniPostNews = ({ image, title }: MiniPostProps) => {
    return (
      <div className="flex gap-3 mt-3">
        <div className="w-2/5">
          <img
            src={image}
            className="object-cover object-center rounded-2xl"
            alt=""
          />
        </div>
        <div className="w-3/5">
          <h3 className={style.title_mini_news}>{title}</h3>
        </div>
      </div>
    );
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className="w-full h-full relative">
          <div className={style.knowledge_banner_content}>
            <h1>Tri thức</h1>
            <p>Cập nhật tin tức mới nhất từ enfarm</p>
          </div>
        </div>
      </div>
      <main>
        <div className={style.section}>
          <div className={style.navigation}>
            <button
              onClick={() => dispatch(setTabsKnowledge(0))}
              className={tabsKnowledge === 0 ? style.active : "px-4 py-2"}
            >
              Tất cả
            </button>
            <button
              onClick={() => dispatch(setTabsKnowledge(1))}
              className={tabsKnowledge === 1 ? style.active : "px-4 py-2"}
            >
              Tri thức
            </button>
            <button
              onClick={() => dispatch(setTabsKnowledge(2))}
              className={tabsKnowledge === 2 ? style.active : "px-4 py-2"}
            >
              Tin tức
            </button>
          </div>
          {tabsKnowledge === 0 && (
            <div className="flex w-full gap-[32px] sm:w-full sm:flex-col lg:w-full lg:flex-col mt-10 mb-20 sm:mt-3 sm:gap-20">
              <div className="w-2/3 sm:w-full lg:w-full">
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-8 py-6 relative">
                  <div className="absolute top-0 -translate-y-1/2 z-[2] bg-white px-2">
                    <h1>Tri thức</h1>
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost1}
                      date="08/08/2023"
                      title="Hợp tác nghiên cứu công nghệ bón phân thông minh"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost2}
                      date="08/08/2023"
                      title="Hợp tác nghiên cứu công nghệ phân bón “thông minh” vào phục vụ sản xuất nông nghiệp"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost3}
                      date="08/08/2023"
                      title="enfarm Agritech phát triển công nghệ bón phân thông minh"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost4}
                      date="08/08/2023"
                      title="Hợp tác nghiên cứu công nghệ bón phân thông minh"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost5}
                      date="08/08/2023"
                      title="Hợp tác nghiên cứu công nghệ phân bón “thông minh” vào phục vụ sản xuất nông nghiệp"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost6}
                      date="08/08/2023"
                      title="enfarm Agritech phát triển công nghệ bón phân thông minh"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                </div>
                <button className={style.btn}>Đọc tiếp</button>
              </div>
              <div className="w-1/3 sm:w-full lg:w-full">
                <div className={style.wrapper_mini}>
                  <div className="absolute top-0 -translate-y-1/2 z-[2] bg-white px-2">
                    <h1>Tin tức</h1>
                  </div>
                  <MiniPostNews
                    title="Blog title: Lorem ipsum lorem ipsum"
                    image={ImgPost1}
                  />
                  <MiniPostNews
                    title="Blog title: Lorem ipsum lorem ipsum"
                    image={ImgPost2}
                  />
                  <MiniPostNews
                    title="Blog title: Lorem ipsum lorem ipsum"
                    image={ImgPost3}
                  />
                  <MiniPostNews
                    title="Blog title: Lorem ipsum lorem ipsum"
                    image={ImgPost4}
                  />
                  <MiniPostNews
                    title="Blog title: Lorem ipsum lorem ipsum"
                    image={ImgPost5}
                  />
                  <MiniPostNews
                    title="Blog title: Lorem ipsum lorem ipsum"
                    image={ImgPost6}
                  />

                  <button className={style.btn}>Đọc tiếp</button>
                </div>
              </div>
            </div>
          )}
          {tabsKnowledge === 1 && (
            <div className="flex w-full gap-[32px] sm:w-full sm:flex-col lg:w-full lg:flex-col mt-10 mb-20 sm:mt-3">
              <div className="w-full">
                <h1>Tri thức</h1>
                <div className="grid grid-cols-3 sm:grid-cols-1 gap-8 mt-4">
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost1}
                      date="08/08/2023"
                      title="Hợp tác nghiên cứu công nghệ bón phân thông minh"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost2}
                      date="08/08/2023"
                      title="Hợp tác nghiên cứu công nghệ phân bón “thông minh” vào phục vụ sản xuất nông nghiệp"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost3}
                      date="08/08/2023"
                      title="enfarm Agritech phát triển công nghệ bón phân thông minh"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost4}
                      date="08/08/2023"
                      title="Hợp tác nghiên cứu công nghệ bón phân thông minh"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost5}
                      date="08/08/2023"
                      title="Hợp tác nghiên cứu công nghệ phân bón “thông minh” vào phục vụ sản xuất nông nghiệp"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost6}
                      date="08/08/2023"
                      title="enfarm Agritech phát triển công nghệ bón phân thông minh"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {tabsKnowledge === 2 && (
            <div className="flex w-full gap-[32px] sm:w-full sm:flex-col lg:w-full lg:flex-col mt-10 mb-20 sm:mt-3">
              <div className="w-full">
                <h1>Tin tức</h1>
                <div className="grid grid-cols-3 sm:grid-cols-1 gap-8 mt-4">
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost1}
                      date="08/08/2023"
                      title="Hợp tác nghiên cứu công nghệ bón phân thông minh"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost2}
                      date="08/08/2023"
                      title="Hợp tác nghiên cứu công nghệ phân bón “thông minh” vào phục vụ sản xuất nông nghiệp"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost3}
                      date="08/08/2023"
                      title="enfarm Agritech phát triển công nghệ bón phân thông minh"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost4}
                      date="08/08/2023"
                      title="Hợp tác nghiên cứu công nghệ bón phân thông minh"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost5}
                      date="08/08/2023"
                      title="Hợp tác nghiên cứu công nghệ phân bón “thông minh” vào phục vụ sản xuất nông nghiệp"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div className="col-span-1 rounded-[32px] overflow-hidden bg-[#F1F1EA]">
                    <MiniPostKnow
                      image={ImgPost6}
                      date="08/08/2023"
                      title="enfarm Agritech phát triển công nghệ bón phân thông minh"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
