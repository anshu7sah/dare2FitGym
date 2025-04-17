"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignin = pathname === "/login";
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        {/* <nav className="flex justify-between items-center">
          <Image
            src={"/logo.svg"}
            height={56}
            width={152}
            alt="logo"
            // loading="lazy"
            priority
          />
          <Button asChild variant={"secondary"}>
            <Link href={isSignin ? "/sign-up" : "/login"}>
              {isSignin ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav> */}
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14 w-full h-full ">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
