import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About_card from "../components/About_card";
import About_D from "../components/About_D";

function About() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center mt-20 mb-10 ">
        <About_card />
        <About_D />
      </main>
      <Footer />
    </>
  );
}

export default About;