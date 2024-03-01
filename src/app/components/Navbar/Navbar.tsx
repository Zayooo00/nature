"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Discover", href: "/discover" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="align absolute top-0 z-50 flex h-24 w-full transform items-center justify-between px-4 duration-300 md:px-12 lg:px-24">
        <Link href="/">
          <h1 className="nd:text-4xl text-3xl font-bold text-white">Nature</h1>
        </Link>
        <nav className="hidden gap-8 text-xl font-semibold text-white md:flex">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="rounded-full px-4 py-2 transition duration-500 ease-in-out hover:bg-blue-800"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Open drawer"
            onClick={() => setToggleDrawer(true)}
            className="mt-1 rounded-full p-2 transition duration-500 ease-in-out hover:bg-slate-500"
          >
            <FiMenu className="text-white" size={24} />
          </button>
        </div>
      </header>
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full transform flex-col items-center justify-center overflow-auto bg-gradient-to-t from-[#4565ba] to-[#3a3192] p-4 transition-transform duration-500 ease-in-out ${
          toggleDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setToggleDrawer(false)}
          aria-label="Close drawer"
          className="absolute right-4 top-[30px] inline-flex items-center rounded-full p-2 text-white transition duration-500 ease-in-out hover:bg-slate-600 hover:text-gray-300"
        >
          <FiX size={24} />
        </button>
        <nav className="flex flex-col items-center space-y-8">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="rounded-full px-4 py-2 text-xl text-white transition duration-500 ease-in-out hover:bg-blue-800"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
