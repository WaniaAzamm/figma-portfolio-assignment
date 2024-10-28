import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className=" py-8 mb-7" > 
      <div className="flex justify-between items-center"> 
        <h1 className="text-blue-700 font-sans font-medium text-[21px] leading-[25.2px] tracking-[0.03em] pl-44">
          Wania Azam-2024
        </h1>
        <ul className="flex space-x-4 mr-20 font-sans font-medium text-[21px] leading-[25.2px] tracking-[0.03em] pl-44">
          <li>
            <Link href="https://github.com/WaniaAzamm">Github</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/waniaa-azam/">Linkedin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
