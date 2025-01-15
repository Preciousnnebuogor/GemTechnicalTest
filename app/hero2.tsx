"use client"
export default function Hero2 (){
return (
  <div
    className={`bg-white grid grid-cols-1 md:grid-cols-[50%_50%] gap-x-6  text-black px-10 `}
  >
    <div className={`mt-10`}>
      <img src="/dog.png" alt="" className={`w-[480px]`} />
    </div>
    <div>two</div>
  </div>
);

}