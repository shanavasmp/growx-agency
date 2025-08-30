"use client";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      price: 29,
      icon: "/pricing-1.png",
      description: "Lorem Ipsum is simply dummy.",
      features: [
        "Mistakes To Avoid",
        "Your Startup",
        "Knew About Fonts",
        "Winning Metric Startup",
      ],
      highlighted: false,
    },
    {
      name: "Platinum Plan",
      price: 39,
      icon: "/pricing-2.png",
      description: "Lorem Ipsum is simply dummy.",
      features: [
        "Mistakes To Avoid",
        "Your Startup",
        "Knew About Fonts",
        "Winning Metric Startup",
      ],
      highlighted: true,
    },
    {
      name: "Gold Plan",
      price: 59,
      icon: "/pricing-3.png",
      description: "Lorem Ipsum is simply dummy.",
      features: [
        "Mistakes To Avoid",
        "Your Startup",
        "Knew About Fonts",
        "Winning Metric Startup",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 ">
        {/* Section Title */}
        <p className="text-orange-500 font-medium mb-2">Our Pricing</p>
        <h2 className="text-4xl font-bold mb-12">
          Harness The Power Of Digital Marketing
        </h2>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 shadow-lg border ${
                plan.highlighted
                  ? "bg-[#fdebe7] border-[#fdebe7]"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Plan Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="h-16 w-16 flex items-center justify-center rounded-full border border-gray-300">
                  <img src={plan.icon} alt={plan.name} className="h-8 w-8" />
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-lg text-gray-600"> / month</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

              {/* Features */}
              <ul className="text-left space-y-2 mb-8 text-sm text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span> {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full rounded-full px-6 py-3 font-medium text-sm transition ${
                  plan.highlighted
                    ? "border  hover:bg-neutral-900"
                    : "border border-gray-400 hover:bg-gray-50"
                }`}
              >
                Take My Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}