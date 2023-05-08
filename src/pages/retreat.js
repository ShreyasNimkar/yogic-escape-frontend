import CallUs from "@/components/common/CallUs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PostHeroSection from "@/components/landing-page-sections/PostHeroSection";
import MeetTheHost from "@/components/retreats-sections/MeetTheHost";
import RetreatsAccomodation from "@/components/retreats-sections/RetreatsAccomodation";
import RetreatsEnrollment from "@/components/retreats-sections/RetreatsEnrollment";
import RetreatsHeroSection from "@/components/retreats-sections/RetreatsHeroSection";
import RetreatsItinery from "@/components/retreats-sections/RetreatsItinery";
import RetreatsPackages from "@/components/retreats-sections/RetreatsPackages";
import SelfDiscovery from "@/components/retreats-sections/SelfDiscovery";
import React from "react";

const retreat = () => {
  return (
    <>
      <Header />
      <RetreatsHeroSection />
      <PostHeroSection />
      <SelfDiscovery />
      <MeetTheHost />
      <RetreatsItinery />
      <RetreatsAccomodation />
      <RetreatsPackages />
      <RetreatsEnrollment />
      <CallUs />
      <Footer />
    </>
  );
};

export default retreat;
