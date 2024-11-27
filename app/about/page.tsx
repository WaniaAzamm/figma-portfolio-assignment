import Image from "next/image";
import React from "react";

function about() {
  return (
    <>
      <div className="w-full h-auto mt-[160px] flex flex-col lg:flex-row justify-between px-4 lg:px-[220px]">
        <div className="mb-8 lg:mb-0 lg:w-[480px]">
          <h1 className="font-sans font-medium text-4xl sm:text-5xl lg:text-6xl leading-tight lg:leading-[58.32px] tracking-[-0.03em]">
            Hi I am Wania Azam, Frontend Developer.
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl pt-4 lg:pt-7 lg:text-2xl leading-[37.44px] tracking-[-0.03em]">
            I am Wania Azam, a frontend developer from Pakistan skilled in Next.js,
            HTML, CSS, JavaScript, and TypeScript. I specialize in building
            interactive, responsive designs that deliver seamless user
            experiences.
          </p>
          <p className="text-gray-500 text-lg sm:text-xl pt-2 lg:pt-6 lg:text-2xl leading-[37.44px] tracking-[-0.03em] pb-12">
            Now I am learning AI ⏤ I am seeking internship opportunities to expand
            my expertise in modern web development.
          </p>
        </div>
        
        <div className="relative w-full lg:w-[421px] h-[350px] sm:h-[500px] lg:h-[590px]">
          <Image
            src="/girl.jpg" 
            alt="Wania Azam's profile picture"
            layout="fill"
            objectFit="cover"  
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="pt-32 mb-16 flex flex-col lg:flex-row lg:pl-56 justify-start px-4 lg:px-0">
        <div className="flex w-full max-w-4xl items-start">
          <h2 className="font-semibold text-xl underline underline-offset-2 mr-16 min-w-[150px]">
            Main Skills
          </h2>
          <div className="text-gray-600 text-lg lg:text-xl">
            HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS , ShadcnUI, Sanity, AcertinityUI, Figma
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <hr className="my-16 border-black w-full lg:w-[1120px] border-t-2" />
      </div>

      <div className="mt-12 w-full lg:pl-52 lg:w-[1260px] flex flex-col lg:flex-row justify-start items-center px-8 mb-44">
        <div className="font-sans text-gray-800 text-2xl sm:text-[28px] lg:text-[32px] font-normal leading-[37.44px] tracking-[-0.03em] text-center lg:text-left">
          I am thrilled to work on your next project↗
        </div>

        <div className=" lg:pl-72 mt-8 lg:mt-0 text-center lg:text-left">
          <h1 className="font-sans text-gray-800 text-2xl sm:text-[28px] lg:text-[32px] font-normal leading-[37.44px] tracking-[-0.03em]">
            waniaazam605@gmail.com
          </h1>
          <p className="font-sans text-black text-[18px] sm:text-[20px] lg:text-[18px] font-normal leading-[37.44px] tracking-[-0.03em] underline cursor-pointer">
            View Resume
          </p>
        </div>
      </div>
    </>
  );
}

export default about;
