import { TiTick } from "react-icons/ti";
import { Button } from "../ui/button";

const PricingCard = ({ data: { name, price, features, bestOffer } }) => {
  return (
    <div
      className={`max-w-[19rem] mx-auto ${
        bestOffer ? "bg-blue-500" : " bg-[#1b1b1b]"
      }  text-white rounded-2xl overflow-hidden shadow-lg relative p-8`}
    >
      {bestOffer && (
        <div className="absolute top-0 right-0 h-8 w-[180px] text-center bg-white text-black text-xs font-bold px-2 py-1 transform rotate-45 translate-x-12 translate-y-5 shadow-md shadow-gray-500">
          <span className="flex items-center justify-center h-full ">
            Best Offer
          </span>
        </div>
      )}

      {/* Package Title */}
      <h3
        className={`text-lg font-semibold mb-4 ${
          !bestOffer && "text-blue-500"
        }`}
      >
        {name}
      </h3>

      {/* Price */}
      <div className="text-4xl font-bold mb-4">Rs. {price}</div>
      <p className={`text-sm ${!bestOffer && "text-[#666]"}`}>
        per month, billed annually
      </p>

      <ul className="mt-4 space-y-5 mb-10">
        {features.map((feature, index) => (
          <li className="flex items-center gap-4 font-semibold" key={feature}>
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white flex items-center justify-center rounded-full">
              <TiTick size={20} fill={bestOffer ? "#2196F3" : "#1b1b1b"} />
            </div>
            {feature}
          </li>
        ))}
      </ul>
      <div className="w-full flex items-center justify-center">
        <Button
          className={`py-7 px-16 ${
            bestOffer ? "bg-black" : "bg-[#2196F3] hover:bg-blue-700"
          } font-semibold`}
        >
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
