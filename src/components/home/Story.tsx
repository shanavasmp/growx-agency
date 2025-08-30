"use client";

import Image from "next/image";

const Story = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            GrowX Story
          </h2>
          <p className="text-lg text-gray-700 mt-4 font-medium">
            Crafting Narratives, Igniting Impact: The Art of Amplifying Your Story with Purposeful Creativity
          </p>
          <p className="text-gray-600 mt-6 leading-relaxed">
            GrowX Company, a dynamic force in the marketing landscape, was born from the vision of industry pioneers dedicated to redefining brand narratives. 
            Established in 2010, GrowX swiftly evolved into a trailblazing marketing powerhouse, specializing in strategic amplification of brands across diverse platforms. 
            With a client-centric approach, the company has cultivated lasting partnerships by seamlessly blending creativity with data-driven insights.
          </p>
          <button className="mt-8 px-6 py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-800 transition">
            WATCH MORE
          </button>
        </div>

        {/* Right Image with Play Button */}
        <div className="relative">
          <Image
            src="/growxteam.png" // <-- place image inside public/images/story.jpg
            alt="GrowX Team"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
          {/* Play Button Overlay */}
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20  rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">

            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;