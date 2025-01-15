"use client"
export default function Navbar () {
    return (
      <div className={`bg-white text-black px-10 `}>
        <div className={`flex items-center justify-center `}>
          <h1 className={`text-2xl font-bold mt-10`}>
            What makes us different <br /> makes them stronger
          </h1>
        </div>

        <div className={`flex items-center justify-between mt-4`}>
          <div>
            <div className={`flex space-x-2`}>
              <img src="/1.png" alt="" className={`w-[60px]`} />
              <div>
                <h3 className={`font-bold`}>Real Food</h3>
                <h6 className={` text-xs`}>
                  Wholesome recipes for dogs with real <br />
                  meat and veggies.
                </h6>
              </div>
            </div>

            <div className={`flex space-x-2 mt-8`}>
              <img src="/2.png" alt="" className={`w-[60px]`} />
              <div>
                <h3 className={`font-bold`}>Premium Ingrident</h3>
                <h6 className={` text-xs`}>
                  Elevating pet care with unmatched <br /> safety and quality
                </h6>
              </div>
            </div>
          </div>
          <div>
            <img src="/b.png" alt="" className={`w-[350px]`} />
          </div>

          <div>
            <div className={`flex space-x-2`}>
              <img src="/3.png" alt="" className={`w-[60px]`} />
              <div>
                <h3 className={`font-bold`}>Made Fresh</h3>
                <h6 className={` text-xs`}>
                  We prioritize maintaining the integrity <br /> of whole foods
                  and nutrition.
                </h6>
              </div>
            </div>

            <div className={`flex space-x-2 mt-8`}>
              <img src="/4.png" alt="" className={`w-[60px]`} />
              <div>
                <h3 className={`font-bold`}>Vet Developed</h3>
                <h6 className={` text-xs`}>
                  We raise the bar for dog nutrition, <br /> surpassing industry
                  expectations.
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className={` flex items-center justify-center mt-4`}>
          <button className={`px-24 py-3 rounded-sm text-white bg-[#EE6F4B]`}>
            Get your dog's healthy meal today!
          </button>
        </div>
        <div className={`flex justify-center space-x-2 items-center mt-3`}>
          <img src="/5a.png" alt="" className={`w-[20px]`} />
          <h3 className={`text-xs`}>30-day money back guarantee</h3>
          <img src="/5.png" alt="" className={`w-[250px]`} />
        </div>
      </div>
    );
}