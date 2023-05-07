import CallUs from "@/components/common/CallUs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PostHeroSection from "@/components/landing-page-sections/PostHeroSection";
import RetreatsEnrollment from "@/components/retreats-sections/RetreatsEnrollment";
import RetreatsHeroSection from "@/components/retreats-sections/RetreatsHeroSection";
import React from "react";

const retreat = () => {
  return (
    <>
      <Header />
      <RetreatsHeroSection />
      <PostHeroSection />
      <RetreatsEnrollment />
      <CallUs />
      <Footer />
    </>
  );
};

export default retreat;
