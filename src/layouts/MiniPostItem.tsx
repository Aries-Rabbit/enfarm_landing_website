import React from "react";
import type { ReactElement } from "react";
import style from "../assets/styles/carousel.module.css";

interface MiniPostItemProps {
  image: ReactElement;
  title: string;
  content: string;
  date: string;
}

export const MiniPostItem = ({
  image,
  title,
  content,
  date,
}: MiniPostItemProps) => {
  return (
    <div className={style.feature_item}>
      <div>{image}</div>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};
