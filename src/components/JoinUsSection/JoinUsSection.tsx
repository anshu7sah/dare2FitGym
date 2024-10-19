"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const JoinUsSection = () => {
  return (
    <section className="w-full max-w-[1480px] mx-auto px-4 mb-5">
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#1b1b1b] text-white px-4 py-6 rounded-lg sm:px-10 md:px-14 lg:px-20 space-y-4 md:space-y-0 md:space-x-4">
        <p className="text-center md:text-left text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
          Enhance user experience with healthy nutrition tips,
          <br className="hidden md:block" /> support resources, and social
          elements.
        </p>

        <Link href="/join" passHref>
          <Button className="bg-blue-500 hover:bg-blue-700 px-6 sm:px-9 py-2 text-sm sm:text-base">
            Join us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default JoinUsSection;
