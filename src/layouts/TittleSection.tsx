import React from "react";
import { LeafIcon } from "../assets/images/svg/Icon";

interface TittleSectionProps {
  title: string;
}

export const TittleSection = ({ title }: TittleSectionProps) => {
  return (
    <div className="flex justify-center items-center gap-2 w-full my-4 text-center">
      <LeafIcon />
      <h1>{title}</h1>
      <LeafIcon />
    </div>
  );
};
