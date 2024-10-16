"use client";
import React, { ReactNode, useState } from "react";

interface CardProps {
  svg: (props: any) => ReactNode;
  background: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  svg: SvgIcon,
  background,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const svgFill = isHovered ? "#ffffff" : "#007bff";
  const hoverBackgroundColor = isHovered ? "#007bff" : background;
  return (
    <div
      className="flex justify-center items-center rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-[17rem] px-7 py-10 rounded-xl text-white transition-all duration-300 ease-in-out transform hover:scale-105"
        style={{
          backgroundColor: hoverBackgroundColor,
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
      >
        <div className="mb-4">
          <SvgIcon fill={svgFill} />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-left">{title}</h3>
        <p className="text-sm text-gray-300 text-left">{description}</p>
      </div>
    </div>
  );
};

export default Card;
