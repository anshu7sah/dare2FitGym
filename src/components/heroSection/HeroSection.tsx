import Image from "next/image";
import Link from "next/link";
import personImage from "/public/hero/hero2.png"; // Replace this with the actual path of your image
import { AuthenticatedUser } from "@/features/auth/queries";

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-black text-white min-h-screen"
      //   style={{ height: "calc(100vh - 2.5rem)" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-10 md:py-20">
        {/* Left Content */}
        <div className="md:w-1/2 ">
          <div className="space-y-6 w-full">
            <h1 className="text-3xl sm:text-5xl lg:text-[4.5rem] font-bold tracking-wider leading-tight sm:leading-[50px] lg:leading-[70px] text-white">
              Helps for your <br /> ideal body fitness
            </h1>
            <p className="text-gray-400 text-lg">
              Motivate users with benefits and positive reinforcement, and offer
              modifications and progress tracking.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="w-full mt-5 sm:mt-[80px]">
            <div className="flex space-x-4">
              <Link
                href="/start-training"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Start Training
              </Link>
              <Link
                href="/watch-demo"
                className="flex items-center space-x-2 text-white border border-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Watch Demo</span>
              </Link>
            </div>

            {/* Customer satisfaction */}
            <div className="flex items-center space-x-3 mt-6">
              {/* Replace these with your avatar images */}
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`relative ${
                      i !== 0 ? "-ml-4" : ""
                    } w-10 h-10 rounded-full bg-black`}
                    style={{ zIndex: i }}
                  >
                    <Image
                      src={personImage}
                      alt={`Satisfied customer ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                ))}
              </div>

              <span>10K+ Satisfied Customer</span>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="md:w-[75%] w-full mt-10 md:mt-0 flex justify-center max-w-full overflow-hidden">
          <Image
            src={personImage}
            alt="Fitness Models"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
