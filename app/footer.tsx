"use client";
export default function Footer() {
  return (
    <div
      className={`bg-white grid grid-cols-1 md:grid-cols-[50%_50%] gap-x-6  text-black px-10 `}
    >
      <div className={`mt-20`}>
        <h1 className={`text-3xl font-bold md:w-[70%]`}>
          {`Prebiotics nourish the beneficial gut bacteria, supporting digestive
          health`}
        </h1>
        <h6 className={`mt-3 `}>
          {` Our dog food formula contains carefully selected prebiotics that work
          in harmony with the gut microbiota, providing the necessary nutrients
          for the growth and maintenance of beneficial bacteria, ultimately
          supporting digestive health.`}
        </h6>
      </div>

      <div className={`mt-10`}>
        <img src="/image.png" alt="" className={`w-[480px]`} />
      </div>
    </div>
  );
}
