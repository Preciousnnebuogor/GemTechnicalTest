"use client";

import Navbar from "./come";
import Hero from "./hero";




export default function HomePage() {
  return (
    <div className="w-full bg-white h-screen">
      <Navbar />
      <Hero/>
    </div>
  );
}
