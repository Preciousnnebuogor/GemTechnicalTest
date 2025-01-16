"use client";

export default function Navbar() {
  return (
    <div className="bg-white text-black px-4 md:px-10">
      <div className="flex items-center justify-center text-center">
        <h1 className="text-2xl font-bold mt-10">What makes us different</h1>
      </div>
      <div className="flex items-center justify-center text-center">
        <h1 className="text-2xl font-bold px-2">Makes them stronger</h1>
      </div>

      <div className="md:flex md:items-center md:justify-between mt-4">
        <div className="flex flex-col items-center md:items-start space-y-8">
          <div className="flex space-x-2 items-center">
            <img src="/1.png" alt="Real Food" className="w-[60px]" />
            <div className="text-center md:text-left">
              <h3 className="font-bold">Real Food</h3>
              <p className="text-xs">
                Wholesome recipes for dogs with real <br />
                meat and veggies.
              </p>
            </div>
          </div>

          <div className="flex space-x-2 items-center">
            <img src="/2.png" alt="Premium Ingredient" className="w-[60px]" />
            <div className="text-center md:text-left">
              <h3 className="font-bold">Premium Ingredient</h3>
              <p className="text-xs">
                Elevating pet care with unmatched <br />
                safety and quality.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 md:mt-0">
          <img
            src="/b.png"
            alt="Dog's Meal"
            className="w-[250px] md:w-[350px]"
          />
        </div>

        <div className="flex flex-col items-center md:items-start space-y-8">
          {/* Made Fresh Section */}
          <div className="flex space-x-2 items-center">
            <img src="/3.png" alt="Made Fresh" className="w-[60px]" />
            <div className="text-center md:text-left">
              <h3 className="font-bold">Made Fresh</h3>
              <p className="text-xs">
                We prioritize maintaining the integrity <br />
                of whole foods and nutrition.
              </p>
            </div>
          </div>

          <div className="flex space-x-2 items-center">
            <img src="/4.png" alt="Vet Developed" className="w-[60px]" />
            <div className="text-center md:text-left">
              <h3 className="font-bold">Vet Developed</h3>
              <p className="text-xs">
                We raise the bar for dog nutrition, <br />
                surpassing industry expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <button className="px-6 md:px-24 py-3 rounded-sm text-white bg-[#EE6F4B]">
          {`Get your dog's healthy meal today!`}
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center items-center space-y-2 md:space-y-0 md:space-x-2 mt-3">
        <img src="/5a.png" alt="Guarantee Icon" className="w-[20px]" />
        <h3 className="text-xs text-center md:text-left">
          30-day money back guarantee
        </h3>
        <img src="/5.png" alt="Guarantee Badge" className="w-[250px]" />
      </div>
    </div>
  );
}
