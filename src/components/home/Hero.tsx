"use client";

import Image from "next/image";
 // icon for "scroll down"

export default function Hero() {
  return (
    <section className="relative max-w-[1440px] mx-auto mt-12 px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-10">
      {/* Left Content */}
      <div className="space-y-6">
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
          Unlock Your <br />
          <span className="text-orange-500">Online Marketing</span>
        </h1>
        <p className="text-gray-700 text-lg max-w-lg">
          Empowering Success: Unleashing Strategic Excellence with Our 
          Results-Driven Digital Marketing Agency
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition">
          GET IN TOUCH
        </button>
      </div>

      {/* Right Content - Image + overlays */}
      <div className="relative flex justify-center">
        {/* Person Image */}
        <Image
          src="/hero-second.png"
          alt="GrowX Hero"
          width={400}
          height={500}
          className="relative z-10"
          priority
        />


      </div>
    </section>
  );
}