import React, { useState } from "react";
import style from "../../assets/styles/header.module.css";
import ScrollEvent from "../../hooks/ScrollEvent";
import logo_enfarm from "../../assets/images/img/logo_enfarm.png";
import logo_enfarm_green from "../../assets/images/img/logo_enfarm_green.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../../redux/layoutSlice";
import {
  DownloadIcon,
  MenuMobileBlack,
  MenuMobileWhite,
} from "../../assets/images/svg/Icon";
import { HeaderMobile } from "./HeaderMobile";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";

interface NavigationProps {
  navItem: string;
  link: string;
  page: number;
}
export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activePage = useSelector((state: any) => state.layoutSlice.activePage);
  const { scrollDirection, isInverted } = ScrollEvent();
  const handleToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };
  const Navigation = ({ navItem, link, page }: NavigationProps) => {
    return (
      <div
        onClick={() => {
          navigate(link);
          dispatch(setActivePage(page));
          handleToTop();
        }}
        className={`${style.navItem} ${
          activePage === page ? style.active : ""
        }`}
      >
        {navItem}
      </div>
    );
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClickDownload = () => {
    navigate("/");
    dispatch(setActivePage(0));

    setTimeout(() => {
      const downloadElement = document.getElementById("download");
      if (downloadElement) {
        downloadElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <>
      <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`${style.header} ${
          scrollDirection === "down" ? style.down : style.up
        } ${isInverted ? style.inverted : ""}`}
      >
        <div className="w-full flex justify-between items-center">
          <img
            onClick={() => {
              navigate("/");
              handleToTop();
            }}
            src={isInverted ? logo_enfarm_green : logo_enfarm}
            className="h-16 cursor-pointer"
            alt="logo enfarm"
          />
          <div className="flex items-center gap-4 mx-8 lg:hidden sm:hidden">
            <Navigation navItem="Trang chủ" link="/" page={0} />
            <Navigation navItem="Về chúng tôi" link="/about" page={1} />
            <Navigation navItem="Sản phẩm" link="/product" page={2} />
            <Navigation navItem="Tri thức" link="/knowledge" page={3} />
          </div>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="hidden lg:block sm:block sm:z-10"
          >
            {isInverted ? <MenuMobileBlack /> : <MenuMobileWhite />}
          </div>
          <div className="flex items-center gap-3 sm:hidden lg:hidden">
            <div
              className={`${
                isInverted ? "text-black" : "text-white"
              } sm:hidden`}
            >
              <button className="font-bold">VI</button> | <button>EN</button>
            </div>
            <div>
              <Link
                to="download"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                <button
                  onClick={handleButtonClickDownload}
                  className={style.btn}
                >
                  Download
                  <DownloadIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
