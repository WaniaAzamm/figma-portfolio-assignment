import Image from "next/image";
import React from "react";

function about () {
  return (
    <>
      <div className="w-[1120px] h-[590px] mt-[160px] ml-[160px] flex justify-between">
        <div>
          <h1 className="w-[480px] h-[199px] left-[160px] font-sans font-medium text-6xl leading-[58.32px] tracking-[-0.03em]">
            Hi I am Wania Azam, Frontend Developer.
          </h1>
          <p className="text-gray-500 h-[229px] w-[500px] top-[591px] left-[160px] font-sans text-2xl leading-[37.44px] tracking-[-0.03em]">
            I am Wani Azam, a frontend developer from Pakistan skilled in Next.js,
            HTML, CSS, JavaScript, and TypeScript. I specialize in building
            interactive, responsive designs that deliver seamless user
            experiences.
          </p>
          <p className="text-gray-500 font-sans text-2xl leading-[37.44px] tracking-[-0.03em] pb-12">
            Now I am learning AI ⏤ I am seeking internship opportunities to expand
            my expertise in modern web development.
          </p>
        </div>
        
        <div className="relative w-[821px] h-[590px] ml-32">
          <Image
            src="/about.png" 
            alt="Wania Azam's profile picture"
            layout="fill"
            objectFit="cover"  
            className="rounded-lg"  
          />
        </div>
      </div>

      <div className="pt-32 mb-16 flex justify-center mr-72">
        <div className="flex w-full max-w-4xl items-start">
          <h2 className="font-semibold text-xl underline underline-offset-2 mr-16 min-w-[150px]">
            Main Skills
          </h2>

          <div className="text-gray-600 text-lg">
            HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS.
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <hr className="my-16 border-black w-[1120px] border-t-2" />
      </div>

      <div className="mt-12 w-[1120px] ml-[135px] flex justify-between items-center px-8 mb-44">
        <div className="font-sans text-gray-800 text-[32px] font-normal leading-[37.44px] tracking-[-0.03em]">
          I am thrilled to work on your next project↗
        </div>

        <div className="text-left ml-48">
          <h1 className="font-sans text-gray-800 text-[32px] font-normal leading-[37.44px] tracking-[-0.03em]">
            waniaazam605@gmail.com
          </h1>
          <p className="font-sans text-black text-[18px] font-normal leading-[37.44px] tracking-[-0.03em] underline cursor-pointer">
            View Resume
          </p>
        </div>
      </div>
    </>
  );
}


export default about;