import React from "react";

interface TransitionButtonProps {
  name: string;
  color: string;
  textColor: string;
  transitionColor: string;
  hoverTextColor: string;
}

const TransitionButton: React.FC<TransitionButtonProps> = ({
  name,
  //   color,
  //   textColor,
  //   transitionColor,
  //   hoverTextColor,
}) => {
  return (
    <button
      className={`relative bg-blue-500 dark:bg-blue-400 text-white px-4 py-2 rounded-md group overflow-hidden`}
    >
      <span className="relative z-10 transition-colors duration-500 group-hover:text-black group-hover:dark:text-black">
        {name}
      </span>
      <div className="absolute inset-0 w-full h-full bg-[#FAEE21] transform -translate-x-1/2 -translate-y-1/2 rotate-[45deg] origin-top-left transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0"></div>
    </button>
  );
};

export default TransitionButton;
