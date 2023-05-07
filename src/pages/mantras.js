import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MantrasHeroSection from "@/components/mantras-sections/MantrasHeroSection";
import Recommendations from "@/components/mantras-sections/Recommendations";
import React from "react";

const Mantras = () => {
  return (
    <>
      <Header />
      <MantrasHeroSection />
      <Recommendations />
      <Footer />
    </>
  );
};

export default Mantras;
