import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import HeroSection from "../about-us-sections/yoga-challenge-sections/HeroSection";
import PostHeroSection from "../about-us-sections/yoga-challenge-sections/PostHeroSection";
import Learning from "../about-us-sections/yoga-challenge-sections/Learning";
import EnrollmentForm from "../about-us-sections/yoga-challenge-sections/EnrollmentForm";
import Testimonials from "../common/Testimonials";

const YogaChallenge = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PostHeroSection />
      <Learning />
      <Testimonials />
      <EnrollmentForm />
      <Footer />
    </>
  );
};

export default YogaChallenge;
