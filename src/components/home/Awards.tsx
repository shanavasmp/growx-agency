export default function Awards() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-300 p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              An award-winning media <br /> intelligence solution
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Confirmed as a high-performing product by customers and tech experts in various industries.
            </p>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-x-14 gap-y-10 flex-1">
            <div>
              <p className="text-4xl font-bold text-orange-500">#1</p>
              <p className="mt-2 text-gray-700 text-sm">
                top leader in worldwide SaaS industry
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">12</p>
              <p className="mt-2 text-gray-700 text-sm">
                years of experience in the business
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">14</p>
              <p className="mt-2 text-gray-700 text-sm">
                top leader in worldwide SaaS industry
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">4.9/5</p>
              <p className="mt-2 text-gray-700 text-sm">
                average rating review score
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}