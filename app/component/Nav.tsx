import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="flex justify-between w-[1120px] h-[35px] mt-[72px] pl-[160px]">
      <div className="w-[67.46px] h-[23px] pt-[2px] text-5xl font-semibold">
        <h1>wa.</h1>
      </div>

      <div className="flex">
        <ul className="flex gap-8 w-[384.91px] h-[20px] pt-[13px] ml-[735.09px]">
          <li className="w-[50px] h-[25px] font-dm-sans text-[21px] font-medium leading-[25.2px] tracking-[-0.03em] text-left">
            <Link href="/">Work</Link>
          </li>
          <li className="w-[59px] h-[25px] font-dm-sans text-[21px] font-medium leading-[25.2px] tracking-[-0.03em] text-left">
            <Link href="/about">About</Link>
          </li>
          <li className="w-[105px] h-[25px] font-dm-sans text-[21px] font-medium leading-[25.2px] tracking-[-0.03em] text-left">
            <Link href="#">Playground</Link>
          </li>
          <li className="w-[78px] h-[25px] font-dm-sans text-[21px] font-medium leading-[25.2px] tracking-[-0.03em] text-left">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
