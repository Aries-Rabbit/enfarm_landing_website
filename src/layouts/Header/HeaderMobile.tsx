import React, { useEffect, useRef } from "react";
import { Transition, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "../../assets/styles/header.module.css";
import { setActivePage } from "../../redux/layoutSlice";
import { log } from "console";

interface NavigationProps {
  navItem: string;
  link: string;
  page: number;
}
export const HeaderMobile = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activePage = useSelector((state: any) => state.layoutSlice.activePage);

  const ref = useRef(null);

  const Navigation = ({ navItem, link, page }: NavigationProps) => {
    return (
      <div
        onClick={() => {
          navigate(link);
          dispatch(setActivePage(page));
          setIsOpen(false);
        }}
        className={`${style.navItem} ${
          activePage === page ? style.active : ""
        }`}
      >
        {navItem}
      </div>
    );
  };

  const springTransition: Transition = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <div>
      {isOpen ? (
        <motion.div
          ref={ref}
          initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "25%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={springTransition}
          className="w-full z-40 flex flex-col items-center justify-between fixed top-0 left-1/2 
          bg-black/25 rounded-lg backdrop-blur-md py-8"
        >
          <div className="flex flex-col gap-5 justify-center items-center h-full z-50">
            <Navigation navItem="Trang chủ" link="/" page={0} />
            <Navigation navItem="Về chúng tôi" link="/about" page={1} />
            <Navigation navItem="Sản phẩm" link="/product" page={2} />
            <Navigation navItem="Tri thức" link="/knowledge" page={3} />
          </div>
        </motion.div>
      ) : null}
    </div>
  );
};
