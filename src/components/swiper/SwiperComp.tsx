"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import CardioStrengthIcon from "../svg/CardioStrengthIcon";
import MuscleGain from "../svg/MuscleGain";
import FatLost from "../svg/FatLost";
import Nutritions from "../svg/Nutritions";
import Card from "./Card";

const cardData = [
  {
    svg: <CardioStrengthIcon />,
    background: "#007bff", // Blue background for the selected card
    title: "Cardio Strength",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: <FatLost />,
    background: "#1b1b1b", // Dark background for other cards
    title: "Fat Lose",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: <MuscleGain />,
    background: "#1b1b1b", // Dark background for other cards
    title: "Muscle Gain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: <Nutritions />,
    background: "#1b1b1b", // Dark background for other cards
    title: "Nutrition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: <Nutritions />,
    background: "#1b1b1b", // Dark background for other cards
    title: "Nutrition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: <Nutritions />,
    background: "#1b1b1b", // Dark background for other cards
    title: "Nutrition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: <Nutritions />,
    background: "#1b1b1b", // Dark background for other cards
    title: "Nutrition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
];

const SwiperComp = () => {
  return (
    <div className="py-10 bg-black relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10rem] text-white opacity-10 font-bold tracking-wide">
        Program
      </div>

      {/* Main heading */}
      <h2 className="relative text-center text-3xl font-bold text-white z-10 mb-10">
        Explore Our Program
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="pt-[20px]"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              svg={card.svg}
              background={card.background}
              title={card.title}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComp;
