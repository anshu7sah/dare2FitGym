"use client";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import { Button } from "../ui/button";

const monthlyData = [
  {
    name: "Basic Package",
    price: "1000",
    features: [
      "Unlimited Gym Access",
      "2x Fitness Consultant",
      "Nutrition Tracking",
      "1x Free Suplement",
      "3 Days per week",
      "Personal Trainer",
    ],
    bestOffer: false,
  },

  {
    name: "Pro Package",
    price: "3000",
    features: [
      "Unlimited Gym Access",
      "7x Fitness Consultant",
      "Nutrition Tracking",
      "5x Free Suplement",
      "Gym Card",
      "Personal Trainer",
    ],
    bestOffer: false,
  },
  {
    name: "Mid Package",
    price: "2000",
    features: [
      "Unlimited Gym Access",
      "4x Fitness Consultant",
      "Nutrition Tracking",
      "3x Free Suplement",
      "5 Days per week",
      "Personal Trainer",
    ],
    bestOffer: true,
  },
  {
    name: "Athlete Package",
    price: "5000",
    features: [
      "Unlimited Gym Access",
      "Free Clothes",
      "All Training Program",
      "Free Fitness Consultant",
      "Free Suplement",
      "Gym Card",
    ],
    bestOffer: false,
  },
];
const yearlyData = [
  {
    name: "Basic Package",
    price: "11000",
    features: [
      "Unlimited Gym Access",
      "2x Fitness Consultant",
      "Nutrition Tracking",
      "1x Free Suplement",
      "3 Days per week",
      "Personal Trainer",
    ],
    bestOffer: false,
  },
  {
    name: "Mid Package",
    price: "20000",
    features: [
      "Unlimited Gym Access",
      "4x Fitness Consultant",
      "Nutrition Tracking",
      "3x Free Suplement",
      "5 Days per week",
      "Personal Trainer",
    ],
    bestOffer: true,
  },
  {
    name: "Pro Package",
    price: "28000",
    features: [
      "Unlimited Gym Access",
      "7x Fitness Consultant",
      "Nutrition Tracking",
      "5x Free Suplement",
      "Gym Card",
      "Personal Trainer",
    ],
    bestOffer: false,
  },
  {
    name: "Athlete Package",
    price: "45000",
    features: [
      "Unlimited Gym Access",
      "Free Clothes",
      "All Training Program",
      "Free Fitness Consultant",
      "Free Suplement",
      "Gym Card",
    ],
    bestOffer: false,
  },
];

const Package = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [packageData, setPackageData] = useState(
    billingCycle === "monthly" ? monthlyData : yearlyData
  );

  const bestOfferIndex = packageData.findIndex((item) => item.bestOffer);
  const reorderedData = [...packageData];
  if (bestOfferIndex !== 1) {
    if (bestOfferIndex > -1) {
      const [bestOfferPackage] = reorderedData.splice(bestOfferIndex, 1);
      reorderedData.splice(1, 0, bestOfferPackage);
      setPackageData(() => [...reorderedData]);
    }
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-2 py-12 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
        {/* Title Section */}
        <h3 className="text-blue-700 font-semibold text-lg mb-2">Pricing</h3>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Our List Packages
        </h2>

        {/* Toggle Switch */}
        <div className="flex items-center space-x-3 mb-6 bg-white rounded-xl p-2">
          <Button
            className={`text-sm sm:text-base p-7  font-semibold ${
              billingCycle === "monthly"
                ? "bg-black text-[#ddd]"
                : "bg-transparent text-[#999]"
            }`}
            onClick={() => {
              setBillingCycle("monthly");
              setPackageData([...monthlyData]);
            }}
          >
            Billed Monthly
          </Button>
          <Button
            className={`text-sm sm:text-base p-7   font-semibold ${
              billingCycle === "yearly"
                ? "bg-black text-[#ddd]"
                : "bg-transparent text-[#999]"
            }`}
            onClick={() => {
              setBillingCycle("yearly");
              setPackageData([...yearlyData]);
            }}
          >
            Billed Yearly
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packageData.map((p, i) => (
            <PricingCard data={p} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;
