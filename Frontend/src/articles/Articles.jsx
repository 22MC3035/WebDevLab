import React from "react";
import Navbar from "../components/Navbar";
import Article from "../components/Article";
import Footer from "../components/Footer";
function Articles() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Article />
      </div>
      <Footer />
    </>
  );
}

export default Articles;
