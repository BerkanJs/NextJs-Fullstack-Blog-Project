import React from "react";
import NavLink from "../navLink/NavLink";
import { IoMdClose } from "react-icons/io";
const LinkData = [
  { path: "/", title: "Homepage" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/blog", title: "Blog" },
];
const ResponsiveNavbar = ({ setOpen }) => {
  const session = true;
  const isAdmin = true;
  return (
    <div className="absolute top-0 right-0 h-screen w-1/2 sm:flex bg-stone-50  flex flex-col items-center justify-center gap-y-12 border-l-4 border-l-orange-300 ">
      <IoMdClose
        onClick={() => setOpen((prev) => !prev)}
        className="text-4xl text-orange-300 cursor-pointer absolute top-5 right-5"
      />

      {LinkData.map((data) => (
        <div
          className="hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in"
          key={data.title}
          onClick={() => setOpen((prev) => !prev)}
        >
          <NavLink data={data} />
        </div>
      ))}
      {session ? (
        <>
          {isAdmin && (
            <NavLink
              onClick={() => setOpen((prev) => !prev)}
              data={{ path: "/admin", title: "Admin" }}
            />
          )}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="bg-orange-300 text-white px-3 py-2 rounded-3xl hover:cursor-pointer hover:scale-105 duration-300 transition-all"
          >
            Log-out
          </button>
        </>
      ) : (
        <NavLink
          onClick={() => setOpen((prev) => !prev)}
          data={{ path: "/login", title: "Login" }}
        />
      )}
    </div>
  );
};

export default ResponsiveNavbar;
