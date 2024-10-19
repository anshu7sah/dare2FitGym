import Image from "next/image";
import transform1 from "/public/transform/4.png";
import transform2 from "/public/transform/5.png";
import transform3 from "/public/transform/6.png";
import "./physicalTransform.css";
import { TiTick } from "react-icons/ti";
import { Button } from "@/components/ui/button";

const text = [
  "Increase Muscle and Strength",
  "Be Healthier than before",
  "Increase Stamina",
];

export default function PhysicsTransform() {
  return (
    <div className="flex items-center justify-around flex-col gap-10 md:gap-0 md:flex-row md:min-h-screen h-auto mb-5">
      <div className="w-full sm:w-[50%] h-full p-4">
        <div className="sm:pl-10 grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
          <div className="relative col-span-2">
            <div className="relative w-full h-60 sm:h-80 rounded-lg overflow-hidden">
              <Image
                src={transform1}
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="absolute top-1/2 sm:static sm:col-span-1 transform -translate-y-1/4 sm:translate-y-0">
            <div className="relative w-full h-60 sm:h-80 rounded-lg overflow-hidden">
              <Image
                src={transform2}
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="relative col-span-1 sm:col-span-3">
            <div className="relative w-full h-60 sm:h-80 rounded-lg overflow-hidden">
              <Image
                src={transform3}
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:h-screen px-10 w-full sm:w-[50%] flex items-center justify-center  ">
        <div className="h-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[4.5rem] font-bold tracking-wider leading-tight sm:leading-[50px] lg:leading-[70px] text-white">
            Transform your <br className="hidden lg:block" />
            physique with our <br className="hidden lg:block" />
            fitness plan.
          </h2>

          <ul className="mt-5 flex flex-col gap-4">
            {text.map((t, index) => (
              <li
                className="flex items-center gap-4 sm:gap-5 text-gray-400 font-bold"
                key={index}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 flex items-center justify-center rounded-full">
                  <TiTick fill="#000" />
                </div>
                <span className="text-sm sm:text-base">{t}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-row sm:flex-row items-center gap-3 mt-5">
            <Button className="bg-blue-500 hover:bg-blue-700 px-6 sm:px-9 py-2 text-sm sm:text-base">
              Join now
            </Button>
            <Button
              variant={"ghost"}
              className="text-white text-sm sm:text-base py-2"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
