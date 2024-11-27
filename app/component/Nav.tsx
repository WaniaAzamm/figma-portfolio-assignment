"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [Menu, SetMenu] = useState(false);
  const toggleMenu = () => {
    SetMenu(!Menu);
  };

  return (
    <div className="flex justify-between w-full lg:px-[220px]  px-4 mt-10 lg:mt-[102px]">
      <div className="text-5xl font-semibold">
        <h1>wa.</h1>
      </div>

      <div className="flex items-center">
        <ul className="hidden md:flex gap-8">
          <li className="text-lg font-medium">
            <Link href="/">Work</Link>
          </li>
          <li className="text-lg font-medium">
            <Link href="/about">About</Link>
          </li>
          <li className="text-lg font-medium">
            <Link href="#">Playground</Link>
          </li>
          <li className="text-lg font-medium">
            <Link href="#">Contact</Link>
          </li>
        </ul>

        <div className="md:hidden text-black" onClick={toggleMenu}>
          {Menu ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {Menu && (
        <div className="bg-black text-center text-white space-y-4 absolute  right-24 w-full h-full p-5">
          <ul>
            <li className="text-2xl py-2">
              <Link href="/about">About</Link>
            </li>
            <li className="text-2xl py-2">
              <Link href="/">Work</Link>
            </li>
            <li className="text-2xl py-2">
              <Link href="/">Playground</Link>
            </li>
            <li className="text-2xl py-2">
              <Link href="/about">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
