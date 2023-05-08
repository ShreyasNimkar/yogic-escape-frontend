import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import MassagesHeroSection from "../therapies-and-massages-sections/MassagesHeroSection";
import MassagesList from "../therapies-and-massages-sections/MassagesList";
import MassagesMoreForYou from "../therapies-and-massages-sections/MassagesMoreForYou";
import CallUs from "../common/CallUs";
const Massages = () => {
  return (
    <>
      <Header />
      <MassagesHeroSection />
      <MassagesList />
      <MassagesMoreForYou />
      <CallUs />
      <Footer />
    </>
  );
};

export default Massages;
