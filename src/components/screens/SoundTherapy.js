import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import HeroSection from "../about-us-sections/sound-therapy-sections/HeroSection";
import PostHeroSection from "../about-us-sections/sound-therapy-sections/PostHeroSection";
import Testimonials from "../about-us-sections/sound-therapy-sections/Testimonials";
import EnrollmentForm from "../about-us-sections/sound-therapy-sections/EnrollmentForm";
import Learning from "../about-us-sections/sound-therapy-sections/Learning";

const SoundTherapy = () => {
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

export default SoundTherapy;
