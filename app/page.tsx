"use client";

import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "./hero";
import Hero2 from "./hero2";





export default function HomePage() {
  return (
    <div className="w-full bg-white ">
      <Navbar />
      <Hero/>
      <Hero2/>
      <Footer/>
    </div>
  );
}
