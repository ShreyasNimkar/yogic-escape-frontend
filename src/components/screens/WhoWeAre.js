import HeroSection from "@/components/about-us-sections/who-are-we-sections/HeroSection";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PostHeroSection from "@/components/about-us-sections/who-are-we-sections/PostHeroSection";
import React from "react";
import BeInTouch from "@/components/landing-page-sections/BeInTouch";
import NewsLetter from "@/components/landing-page-sections/NewsLetter";
import SectionDivider from "@/components/common/SectionDivider";

const WhoWeAre = () => {
  return (
    <>
      {" "}
      <Header />
      <HeroSection />
      <PostHeroSection />
      <SectionDivider />
      <BeInTouch />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default WhoWeAre;
