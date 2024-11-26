import React from "react";
import Links from "./links/Links";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session =await auth();
  return (
    <div className="w-full h-full flex items-end justify-between px-8 py-4 bg-stone-50 border-b-8 border-b-orange-300">
      {/* LOGO */}
      <div className="text-4xl flex flex-col items-start justify-center font-bold">
        MIS
        <span className="text-orange-300 font-medium font-sans">Community</span>
      </div>

      {/*Links*/}
      <div className="text-lg md:text-xl px-5">
        <Links session={session}/>
      </div>
    </div>
  );
};

export default Navbar;
