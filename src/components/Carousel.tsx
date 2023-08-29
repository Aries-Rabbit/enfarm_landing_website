import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "../assets/styles/carousel.module.css";
import { ArrowLeft, ArrowRight } from "../assets/images/svg/Icon";

export const Carousel = ({
  children,
  autoplaySpeed,
  slidesToShow = 3,
  slidesToScroll = 3,
  showArrows = false,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: false,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
          speed: 700,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0,
          arrows: false,
          speed: 500,
        },
      },
      {
        breakpoint: 479,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0,
          arrows: false,
          speed: 500,
        },
      },
    ],
  };
  const refSlide = useRef(null);
  const next = () => {
    if (refSlide.current) {
      refSlide.current.slickNext();
    }
  };
  const previous = () => {
    if (refSlide.current) {
      refSlide.current.slickPrev();
    }
  };
  return (
    <div className="mt-2 pb-5 relative">
      <div className={showArrows ? "block" : "hidden"}>
        <button className={style.btn_slider_right} onClick={previous}>
          <ArrowRight />
        </button>
        <button className={style.btn_slider_left} onClick={next}>
          <ArrowLeft />
        </button>
      </div>
      <Slider ref={refSlide} {...settings}>
        {children}
      </Slider>
    </div>
  );
};
