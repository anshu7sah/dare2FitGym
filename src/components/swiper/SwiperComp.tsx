"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import CardioStrengthIcon from "../svg/CardioStrengthIcon";
import MuscleGain from "../svg/MuscleGain";
import FatLost from "../svg/FatLost";
import Nutritions from "../svg/Nutritions";
import Card from "./Card";

interface CardData {
  svg: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
  background: string;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    svg: (props) => <CardioStrengthIcon {...props} />,
    background: "#1b1b1b",
    title: "Cardio Strength",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: (props) => <FatLost {...props} />,
    background: "#1b1b1b",
    title: "Fat Lose",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: (props) => <FatLost {...props} />,
    background: "#1b1b1b",
    title: "Fat Lose",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: (props) => <FatLost {...props} />,
    background: "#1b1b1b",
    title: "Fat Lose",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: (props) => <FatLost {...props} />,
    background: "#1b1b1b",
    title: "Fat Lose",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: (props) => <FatLost {...props} />,
    background: "#1b1b1b",
    title: "Fat Lose",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: (props) => <FatLost {...props} />,
    background: "#1b1b1b",
    title: "Fat Lose",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: (props) => <MuscleGain {...props} />,
    background: "#1b1b1b",
    title: "Muscle Gain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: (props) => <Nutritions {...props} />,
    background: "#1b1b1b",
    title: "Nutrition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: (props) => <Nutritions {...props} />,
    background: "#1b1b1b",
    title: "Nutrition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: (props) => <Nutritions {...props} />,
    background: "#1b1b1b",
    title: "Nutrition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    svg: (props) => <Nutritions {...props} />,
    background: "#1b1b1b",
    title: "Nutrition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
];
// const cardDataTemp: CardData[] = [
//   {
//     svg: (props) => <PersonalTraining {...props} />,
//     background: "#282828",
//     title: "Personal Training",
//     description:
//       "Get one-on-one coaching tailored to your fitness goals, with expert guidance and personalized workout plans.",
//   },
//   {
//     svg: (props) => <GroupClasses {...props} />,
//     background: "#333333",
//     title: "Group Classes",
//     description:
//       "Join a variety of group classes, from zumba to high-intensity interval training, designed for all fitness levels.",
//   },
//   {
//     svg: (props) => <VirtualWorkouts {...props} />,
//     background: "#3d3d3d",
//     title: "Virtual Workouts",
//     description:
//       "Access live-streamed and on-demand workouts, bringing fitness to the comfort of your home.",
//   },
//   {
//     svg: (props) => <Recovery {...props} />,
//     background: "#464646",
//     title: "Wellness and Recovery",
//     description:
//       "Relax and rejuvenate with wellness services such as massage therapy, saunas, and cryotherapy.",
//   },
//   {
//     svg: (props) => <AquaticFitness {...props} />,
//     background: "#505050",
//     title: "Aquatic Fitness",
//     description:
//       "Engage in low-impact swimming and aquatic fitness classes, perfect for cardiovascular health and joint mobility.",
//   },
//   {
//     svg: (props) => <ChildCare {...props} />,
//     background: "#5a5a5a",
//     title: "Childcare Services",
//     description:
//       "Work out stress-free with supervised play areas designed to keep your children entertained and safe.",
//   },

//   {
//     svg: (props) => <MembershipPerks {...props} />,
//     background: "#6e6e6e",
//     title: "Membership Perks",
//     description:
//       "Enjoy exclusive perks like guest passes, discounts, and access to member-only events and challenges.",
//   },
// ];

const SwiperComp = () => {
  return (
    <div className="sm:pt-10 pb-10 bg-black relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 transform -translate-x-[100%] -translate-y-[10%] text-white opacity-10 font-bold tracking-wide z-0 pointer-events-none
        text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem]"
      >
        Program
      </div>

      <h2
        className="relative text-center font-bold text-white  mb-5
        text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
      >
        Explore Our Program
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        loop={true}
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
