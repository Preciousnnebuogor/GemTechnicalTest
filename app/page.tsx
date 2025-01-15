"use client";

import Navbar from "./come";
import Footer from "./footer";
import Hero from "./hero";
import Hero2 from "./hero2";




export default function HomePage() {
  return (
    <div className="w-full bg-white h-screen">
      <Navbar />
      <Hero/>
      <Hero2/>
      <Footer/>
    </div>
  );
}
