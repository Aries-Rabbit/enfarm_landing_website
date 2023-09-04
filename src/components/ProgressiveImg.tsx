import React, { useEffect, useState } from "react";
import style from "../assets/styles/progressiveImg.module.css";
import { Blurhash } from "react-blurhash";

export const ProgressiveImg = ({ src, hash, className = "" }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imgLoaded && (
        <div className={style.blur_load}>
          <Blurhash hash={hash} width="100%" height="100%" punch={1} />
        </div>
      )}
      {imgLoaded && (
        <img src={src} loading="lazy" className={className} alt="" />
      )}
    </>
  );
};
