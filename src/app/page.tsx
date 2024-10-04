import Image from "next/image";
import logo from "/public/logos/logo.png";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col w-full h-screen justify-center items-center ">
        <Image
          src={logo}
          alt="Gym Logo"
          width={5000}
          height={5000}
          className="object-contain"
        />

        <h1
          title="Wait For Best Packages..."
          className="text-6xl font-bold mt-8 text-white"
        >
          Coming Soon !!!
        </h1>
      </div>
    </div>
  );
}
