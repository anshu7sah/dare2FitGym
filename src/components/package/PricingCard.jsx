import { TiTick } from "react-icons/ti";
import { Button } from "../ui/button";

const features = [
  "Unlimited Gym Access",
  "4x Fitness Consultant",
  "Nutrition Tracking",
  "3x Free Suplement",
  "5 Days per week",
  "Personal Trainer",
];

const PricingCard = () => {
  return (
    <div className="max-w-[19rem] mx-auto bg-blue-500 text-white rounded-2xl overflow-hidden shadow-lg relative p-8 ">
      <div className="absolute top-0 right-0 h-8 w-[180px] text-center bg-white text-black text-xs font-bold px-2 py-1 transform rotate-45 translate-x-12 translate-y-5 shadow-md shadow-gray-500">
        <span className="flex items-center justify-center h-full ">
          Best Offer
        </span>
      </div>

      {/* Package Title */}
      <h3 className="text-lg font-semibold mb-4">Mid Package</h3>

      {/* Price */}
      <div className="text-5xl font-bold mb-4">$55</div>
      <p className="text-sm">per month, billed annually</p>

      <ul className="mt-4 space-y-5 mb-10">
        {features.map((feature, index) => (
          <li className="flex items-center gap-4 font-semibold" key={feature}>
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white flex items-center justify-center rounded-full">
              <TiTick size={20} fill="#2196F3" />
            </div>
            {feature}
          </li>
        ))}
      </ul>
      <div className="w-full flex items-center justify-center">
        <Button className="py-7 px-16 bg-black font-semibold">
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
