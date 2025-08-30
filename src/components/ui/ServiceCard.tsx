"use client";

import Image from "next/image";


interface ServiceCardProps {
  title: string;
  desc: string;
  icon: string;
}

export default function ServiceCard({ title, desc, icon }: ServiceCardProps) {
  return (
    <div className="relative bg-orange-50 rounded-2xl p-6 shadow hover:shadow-lg transition group">
      {/* Icon */}
      <div className="mb-4">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>

      {/* Title & Desc */}
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>

      {/* Floating Arrow */}
      <div className="absolute bottom-[-16px] mx-auto left-0 right-0 flex justify-center ">
        <button className=" w-10 h-10 flex items-center justify-center rounded-full shadow  transition">
            <img 
    src="/arrow-right.png" 
    alt="arrow icon" 
    className=""
  />
        </button>
      </div>
    </div>
  );
}