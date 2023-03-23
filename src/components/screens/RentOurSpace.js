import React from "react";
import HeroSection from "../about-us-sections/rent-our-space-page-sections/HeroSection";
import RentalSpaces from "../about-us-sections/rent-our-space-page-sections/RentalSpaces";
import WellnessStudio from "../about-us-sections/rent-our-space-page-sections/WellnessStudio";
import YogaShalla from "../about-us-sections/rent-our-space-page-sections/YogaShalla";
import Footer from "../common/Footer";
import Header from "../common/Header";

const RentOurSpace = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <RentalSpaces />
      <YogaShalla />
      <WellnessStudio />
      <Footer />
    </>
  );
};

export default RentOurSpace;
