"use client";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import { Button } from "../ui/button";

const regularData = [
  {
    name: "Monthly Package",
    price: "2000",
    features: [
      "Unlimited Gym Access",
      "Fitness Consultant",
      "Personal trainer as per requirement (Payable)",
      "Free Suplement Consultant",
      "7 Days per week",
      "Group Training under experienced Triner",
    ],
    bestOffer: false,
  },

  {
    name: "3 Months Package",
    price: "5000",
    features: [
      "Unlimited Gym Access",
      "1x freeze membership",
      "Fitness Consultant",
      "Personal trainer available (Payable)",
      "Free Suplement Consultant",
      "7 Days per week",
      "Group Training under experienced Triner",
    ],
    bestOffer: true,
  },
  {
    name: "Six Months Package",
    price: "8500",
    features: [
      "Unlimited Gym Access",
      "2x freeze membership",
      "Fitness Consultant",
      "Personal trainer available (Payable)",
      "Free Suplement Consultant",
      "7 Days per week",
      "Group Training under experienced Triner",
    ],
    bestOffer: false,
  },
  {
    name: "Yearly Package",
    price: "15000",
    features: [
      "Unlimited Gym Access",
      "4x freeze membership",
      "Fitness Consultant",
      "Personal trainer available (Payable)",
      "Free Suplement Consultant",
      "7 Days per week",
      "Group Training under experienced Triner",
    ],
    bestOffer: false,
  },
];
const midTimeData = [
  {
    name: "Monthly Package",
    price: "1500",
    features: [
      "Unlimited Gym Access",
      "Fitness Consultant",
      "Personal trainer as per requirement (Payable)",
      "Free Suplement Consultant",
      "7 Days per week",
      "Group Training under experienced Triner",
    ],
    bestOffer: false,
  },

  {
    name: "3 Months Package",
    price: "4000",
    features: [
      "Unlimited Gym Access",
      "Fitness Consultant",
      "Personal trainer available (Payable)",
      "Free Suplement Consultant",
      "7 Days per week",
      "Group Training under experienced Triner",
    ],
    bestOffer: true,
  },
  {
    name: "Six Months Package",
    price: "7000",
    features: [
      "Unlimited Gym Access",
      "Fitness Consultant",
      "Personal trainer available (Payable)",
      "Free Suplement Consultant",
      "7 Days per week",
      "Group Training under experienced Triner",
    ],
    bestOffer: false,
  },
  {
    name: "Yearly Package",
    price: "12000",
    features: [
      "Unlimited Gym Access",
      "Fitness Consultant",
      "Personal trainer available (Payable)",
      "Free Suplement Consultant",
      "7 Days per week",
      "Group Training under experienced Triner",
    ],
    bestOffer: false,
  },
];

const Package = () => {
  const [billingCycle, setBillingCycle] = useState("regular");
  const [packageData, setPackageData] = useState(
    billingCycle === "regular" ? regularData : midTimeData
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
        <div className="flex items-center space-x-3 mb-6 bg-white rounded-xl p-2 flex-col gap-2 sm:flex-row">
          <Button
            className={`text-sm sm:text-base p-7 hover:bg-yellow-200 hover:text-sky-950 font-bold w-full sm:w-auto ${
              billingCycle === "regular"
                ? "bg-yellow-400 text-sky-950"
                : "bg-transparent text-[#999]"
            }`}
            onClick={() => {
              setBillingCycle("regular");
              setPackageData([...regularData]);
            }}
          >
            Regular Time (5AM - 9PM)
          </Button>
          <Button
            className={`text-sm sm:text-base p-7 hover:bg-yellow-200 hover:text-sky-950 font-semibold w-full sm:w-auto ${
              billingCycle === "mid"
                ? "bg-yellow-400 text-sky-950"
                : "bg-transparent text-[#999]"
            }`}
            onClick={() => {
              setBillingCycle("mid");
              setPackageData([...midTimeData]);
            }}
          >
            Mid Time (10AM - 4PM)
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
