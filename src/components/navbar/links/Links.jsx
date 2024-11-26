"use client";
import { IoMenu } from "react-icons/io5";
import React ,{useState} from 'react'
import NavLink from "../navLink/NavLink";
import ResponsiveNavbar from "../responsive/ResponsiveNavbar";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

const LinkData = [
  { path: "/", title: "Homepage" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/blog", title: "Blog" },
];
const Links =  ({session}) => {
  const [open, setOpen] = useState(false);
 

  
  const isAdmin = true;

  return (

  <div >
    <div className="hidden md:flex items-center justify-around gap-x-10">
      {LinkData.map((data) => (
        <div
          className="hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in"
          key={data.title}
        >
          <NavLink data={data} />
        </div>
      ))}
      {session? (
        <>
          {session.user?.isAdmin && <NavLink data={{ path: "/admin", title: "Admin" }} />}
          <form action={handleLogout}>
          <button className="bg-orange-300 text-white px-3 py-2 rounded-3xl hover:cursor-pointer hover:scale-105 duration-300 transition-all">
            Log-out
          </button>

          </form>

        </>
      ) : (
        <NavLink data={{ path: "/login", title: "Login" }} />
      )}

    
    </div>

    <div className="sm:hidden ">
        <IoMenu
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-4xl text-orange-300 "
        />

        {open ? <ResponsiveNavbar setOpen={setOpen} /> : ""}
      </div>








    </div>
   
  );
};

export default Links;
