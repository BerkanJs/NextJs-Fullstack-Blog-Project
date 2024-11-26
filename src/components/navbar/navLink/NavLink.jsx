"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ data }) => {
    const pathName=usePathname()
  return <Link className={`${pathName===data.path ? "bg-orange-300 text-stone-50  text-center" : " "} px-4 py-2 rounded-2xl `} href={data.path}>{data.title}</Link>;
};

export default NavLink;
