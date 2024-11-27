import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

export default function Page() {
  return (
    <div className="relative w-full max-w-[1120px] mx-auto px-4 lg:px-0 h-auto mt-24 lg:mt-56">
      <h1 className="w-full lg:w-[360px] h-auto text-4xl lg:text-[60px] font-medium leading-tight lg:leading-[60.32px] tracking-[-0.03em] text-left text-gray-800">
        Hello, I’m Wania Azam.
      </h1>
      <div className="mt-8 lg:absolute lg:top-[160px]">
        <FaArrowDown className="w-14 h-10 lg:w-24 lgLh-14"/>
      </div>
      <div className="mt-8 lg:absolute  lg:top-[64px] lg:ml-[566px] w-full lg:w-[580px]">
        <p className="text-base lg:text-3xl leading-normal lg:leading-[38.44px] tracking-[-0.03em] text-left text-gray-600">
          A Developer student who is trying to specialize in AI, Web 3.0, and Metaverse.
        </p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap w-full h-auto mt-16 lg:mt-72">
        <div className="w-full lg:w-[380px] mb-8 lg:mb-0 lg:mr-[80px]">
          <h1 className="text-lg font-medium leading-[21.87px] tracking-[-0.03em] text-gray-800">
            01 / GOVERNOR WEBSITE
          </h1>
          <p className="text-base lg:text-lg font-medium leading-normal lg:leading-[21.87px] tracking-[-0.03em] text-gray-700 mt-4">
            A course enrollment website to manage course enrollment. Includes functionality of Apply, Check Result, and Course Selection.
          </p>
          <p className="text-sm lg:text-base text-gray-700 mt-2">
            Built with Next.js and Tailwind CSS.
          </p>
          <Link
            className="text-gray-900 underline mt-6 block"
            href="https://github.com/WaniaAzamm/course-enrollment-website"
          >
            View from GitHub ↗
          </Link>
        </div>

        <div className="w-full lg:w-[620px] h-[240px] lg:h-[364.68px] bg-blue-500 relative">
          <Image
            src="/web2.png"
            alt="Project Image 1"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
      <hr className="my-16 border-black border-t-2" />

      <div className="flex flex-wrap lg:flex-nowrap w-full h-auto mt-8 lg:mt-32">
        <div className="w-full lg:w-[380px] mb-8 lg:mb-0 lg:mr-[80px]">
          <h1 className="text-lg font-medium leading-[21.87px] tracking-[-0.03em] text-gray-800">
            02 / PORTFOLIO WEBSITE
          </h1>
          <p className="text-base lg:text-lg font-medium leading-normal lg:leading-[21.87px] tracking-[-0.03em] text-gray-700 mt-4">
            A Ecommerce Furniture website with Amazing and Affordable items.
          </p>
          <p className="text-sm lg:text-base text-gray-700 mt-2">
            Built with Next.js and Tailwind CSS.
          </p>
          <Link
            className="text-gray-900 underline mt-6 block"
            href="https://github.com/WaniaAzamm/Furniture-Ecommerce-figma-design"
          >
            View from GitHub ↗
          </Link>
        </div>

        <div className="w-full lg:w-[620px] h-[240px] lg:h-[364.68px] bg-blue-500 relative">
          <Image
            src="/web1.png"
            alt="Project Image 2"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
      <hr className="my-16 border-black border-t-2" />

      <div className="flex flex-wrap lg:flex-nowrap w-full h-auto mt-8 lg:mt-32">
        <div className="w-full lg:w-[380px] mb-8 lg:mb-0 lg:mr-[80px]">
          <h1 className="text-lg font-medium leading-[21.87px] tracking-[-0.03em] text-gray-800">
            03 / RESUME BUILDER
          </h1>
          <p className="text-base lg:text-lg font-medium leading-normal lg:leading-[21.87px] tracking-[-0.03em] text-gray-700 mt-4">
            A resume builder with functionalities like Generate Resume, Download Resume, Edit, Shareable Link, and Copy Resume Link.
          </p>
          <p className="text-sm lg:text-base text-gray-700 mt-2">
            Built with HTML, CSS, and TypeScript.
          </p>
          <Link
            className="text-gray-900 underline mt-6 block"
            href="https://github.com/WaniaAzamm/Reusme-builder"
          >
            View from GitHub ↗
          </Link>
        </div>

        <div className="w-full lg:w-[620px] h-[240px] lg:h-[364.68px] bg-blue-500 relative">
          <Image
            src="/web3.png"
            alt="Project Image 3"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
      <hr className="my-16 border-black border-t-2" />
    </div>
  );
}
