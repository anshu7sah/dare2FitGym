"use client";
import React, { ReactNode } from "react";

interface CardProps {
  svg: ReactNode;
  background: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ svg, background, title, description }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-[17rem] p-6 rounded-xl text-white transition-all duration-300 ease-in-out transform hover:scale-105"
        style={{
          backgroundColor: background || "#1b1b1b", // Slightly lighter than black background
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.25)", // Soft shadow for better depth
          cursor: "pointer",
        }}
      >
        {/* SVG Section */}
        <div className="mb-4">{svg}</div>
        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 text-left">{title}</h3>
        {/* Description */}
        <p className="text-sm text-gray-300 text-left">{description}</p>
      </div>
    </div>
  );
};

export default Card;
