"use client"
export default function Hero (){
    return (
      <div
        className={`bg-[#F8F8F8] grid grid-cols-1 md:grid-cols-[50%_50%] gap-x-6 mt-6 text-black px-10 `}
      >
        <div className={`w-[90%] mb-10 `}>
          <h1 className={`text-4xl font-bold mt-10`}>
             Nutrition is the foundation for <br /> longer, healthier lives in
            dogs.
          </h1>
          <h3 className={`mt-3`}>
            {`Invest in your dog's future with our scientifically formulated
            superfood-powered supplements. Give them the nutrition they deserve
            and watch them thrive with vitality, energy, and the joy of a
            longer, healthier life.`}
          </h3>
          <h3 className={`font-bold mt-4`}>{`Key Points:`}</h3>

          <div className={`flex space-x-6 mt-4 border-b-2 border-gray-200`}>
            <h1 className={`text-3xl font-bold text-[#EE6F4B]`}>67%</h1>
            <h3 className={`text-base`}>
              {`Dogs choose our dog food over leading brands because of its real
              functional ingredients and delicious flavor.`}
            </h3>
          </div>

          <div className={`flex space-x-6 mt-4 border-b-2 border-gray-200`}>
            <h1 className={`text-3xl font-bold text-[#EE6F4B]`}>84%</h1>
            <h3 className={`w-[90%]`}>
              {`Our dog food provides superior nutrition and a patented probiotic
              for optimal nutrient absorption.`}
            </h3>
          </div>

          <div className={`flex space-x-6 mt-4`}>
            <h1 className={`text-3xl font-bold text-[#EE6F4B]`}>92%</h1>
            <h3 className={` `}>
              {`Our dog food's high protein and fat digestibility <br />{" "}
              contribute to ideal stool quality.`}
            </h3>
          </div>
          <div>
            <button
              className={`px-4 py-3 w-full rounded-sm mt-4 text-white bg-[#EE6F4B]`}
            >
              {` Give your furry friend the gift of wholesome nutrition`}
            </button>
          </div>
        </div>

        <div className={`mt-10`}>
          <img src="/c.png" alt="" className={`w-[480px]`} />
        </div>
      </div>
    );
}