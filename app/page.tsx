import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative w-[1120px] h-auto mt-[240px] ml-[160px]">
      <h1 className="w-[360px] h-[129px] font-sans text-[60px] font-medium leading-[60.32px] tracking-[-0.03em] text-left text-gray-800">
        Hello, I’m Wania Azam.
      </h1>
      <div className="absolute top-[160px] mt-24">
        <Image height={40} width={40} src="/pic.png" alt="Arrow Icon" />
      </div>
      <div className="absolute top-[64px] ml-[566px] w-[580px] h-[111px]">
        <p className="font-sans text-3xl leading-[38.44px] tracking-[-0.03em] text-left text-gray-600">
          A  Developer student who is trying to specialize in Ai, Web 3.0 and Metaverse.
        </p>
      </div>

      <div className="flex w-full h-auto mt-72">
        <div className="w-[380px] mr-[80px]">
          <h1 className="text-lg font-medium leading-[21.87px] tracking-[-0.03em] text-gray-800">
            01 / GOVERNOR WEBSITE
          </h1>
          <p className="text-lg font-medium leading-[21.87px] tracking-[-0.03em] text-gray-700 mt-10">
            A course enrollment Website to manage course enrollment. have
            functonality of Apply , Check result and Course Selection
          </p>
          <p className="text-base text-gray-700 mt-5">
            Built with Next.js and Tailwand Css
          </p>
          <Link
            className="text-gray-900 underline mt-[150px] block"
            href="https://github.com/WaniaAzamm/course-enrollment-website"
          >
            View from Github ↗{" "}
          </Link>
        </div>

        <div className="w-[620px] h-[364.68px] bg-blue-500 ml-auto pb-6 relative ">
          <Image
            src="/web1.png"
            alt="Project Image 1"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 object-cover"
          />
        </div>
      </div>
      <hr className="my-16 border-black border-t-2 ml-20" />

      <div className="flex w-full h-auto mt-32">
        <div className="w-[380px] mr-[80px]">
          <h1 className="text-lg font-medium leading-[21.87px] tracking-[-0.03em] text-gray-800">
            02 / PORTFOLIO WEBSITE
          </h1>
          <p className="text-lg font-medium leading-[21.87px] tracking-[-0.03em] text-gray-700 mt-10">
            A Portfolio Webiste. have functionality of About me Page, Projects
            Page, Skills Page and Contact page.
          </p>
          <p className="text-base text-gray-700 mt-5">
            Built with Next.js and Tailwand Css
          </p>
          <Link
            className="text-gray-900 underline mt-[150px] block"
            href="https://github.com/WaniaAzamm/WaniaAzam-Portfolio"
          >
            View from Github ↗{" "}
          </Link>
        </div>

        <div className="w-[620px] h-[364.68px] bg-blue-500 ml-auto pb-6 relative">
          <Image
            src="/web2.png"
            alt="Project Image 2"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
      <hr className="my-16 border-black border-t-2 ml-20" />

      <div className="flex w-full h-auto mt-32">
        <div className="w-[380px] mr-[80px]">
          <h1 className="text-lg font-medium leading-[21.87px] tracking-[-0.03em] text-gray-800">
            03 / RESUME BUILDER
          </h1>
          <p className="text-lg font-medium leading-[21.87px] tracking-[-0.03em] text-gray-700 mt-10">
            A Resume Builder. have functionality of Generate Resume, Download Resume, Edit Button , Shareable link and Copy Resume Link.
          </p>
          <p className="text-base text-gray-700 mt-5">
           Built with Html, Css and Typescript
          </p>
          <Link className="text-gray-900 underline mt-[150px] block" href="https://github.com/WaniaAzamm/Hackathon-01/tree/main/milestone-05">
            View from Github ↗{" "}
          </Link>
        </div>

        <div className="w-[620px] h-[364.68px] bg-blue-500 ml-auto pb-6 relative">
          <Image
            src="/web3.png"
            alt="Project Image 3"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
      <hr className="my-16 border-black border-t-2 ml-20" />
      
    </div>
  );
}
