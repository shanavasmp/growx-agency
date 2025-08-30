import React from "react";
import { features } from "@/data/features"; // ✅ Import from data folder

const FeatureSection = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Section Header */}
        <p className="text-[#FF5722] font-semibold text-lg">Our Feature</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Optimizing Brands For Online Success
        </h2>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFEFEA] rounded-2xl p-6 text-left flex flex-col justify-between shadow-sm"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {feature.description}
                </p>
              </div>
              <button className="mt-6 bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;