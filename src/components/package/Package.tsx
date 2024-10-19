"use client";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import { Button } from "../ui/button";

const Package = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-2 py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
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
            onClick={() => setBillingCycle("monthly")}
          >
            Billed Monthly
          </Button>
          <Button
            className={`text-sm sm:text-base p-7   font-semibold ${
              billingCycle === "yearly"
                ? "bg-black text-[#ddd]"
                : "bg-transparent text-[#999]"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Billed Yearly
          </Button>
        </div>

        {/* Add content below based on billingCycle */}
        <div>
          {billingCycle === "monthly" ? (
            <p className="text-center">Show monthly billing packages</p>
          ) : (
            <p className="text-center">Show yearly billing packages</p>
          )}
        </div>
      </div>
      <PricingCard />
    </section>
  );
};

export default Package;
