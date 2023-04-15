import React from "react";
import MassagesAndTherapiesHeroSection from "../therapies-and-massages-sections/MassagesAndTherapiesHeroSection";
import Header from "../common/Header";
import Footer from "../common/Footer";
import MassagesAndTherapiesTestimonials from "../therapies-and-massages-sections/MassagesAndTherapiesTestimonials";
import MassagesAndTherapiesPostHeroSection from "../therapies-and-massages-sections/MassagesAndTherapiesPostHeroSection";
import MassagesAndTherapiesMoreForYou from "../therapies-and-massages-sections/MassagesAndTherapiesMoreForYou";

const MassagesAndTherapies = () => {
  return (
    <>
      <Header />
      <MassagesAndTherapiesHeroSection />
      <MassagesAndTherapiesPostHeroSection />
      <MassagesAndTherapiesMoreForYou />
      <MassagesAndTherapiesTestimonials />
      <Footer />
    </>
  );
};

export default MassagesAndTherapies;
