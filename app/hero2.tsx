"use client"
export default function Hero2 (){
return (
  <div
    className={`bg-white grid grid-cols-1 md:grid-cols-[50%_50%] gap-x-6  text-black px-10 `}
  >
    <div className={`mt-10`}>
      <img src="/dog.png" alt="" className={`w-[480px]`} />
    </div>
    <div className={`mt-20`}>
      <h1 className={`text-3xl font-bold md:w-[70%]`}>
        Improve overall gastrointestinal health for better nutrient absorption
      </h1>
      <h6 className={`mt-3 px-4`}>
        {`Through rigorous scientific studies and consultations with
        veterinarians, we have created a breakthrough formula exclusively
        tailored to combat the health challenges prevalent in dogs. A staggering
        91% of our customers have reported significant improvements in their
        dogs' health after incorporating our product into their diet.`}
      </h6>
    </div>
  </div>
);

}