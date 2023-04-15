import React from "react";
import TherapiesHeroSection from "../therapies-and-massages-sections/TherapiesHeroSection";
import Header from "../common/Header";
import Footer from "../common/Footer";
import TherapiesList from "../therapies-and-massages-sections/TherapiesList";
import TherapiesMoreForYou from "../therapies-and-massages-sections/TherapiesMoreForYou";

const Therapies = () => {
  return (
    <>
      <Header />
      <TherapiesHeroSection />
      <TherapiesList />
      <TherapiesMoreForYou />
      <Footer />
    </>
  );
};

export default Therapies;
