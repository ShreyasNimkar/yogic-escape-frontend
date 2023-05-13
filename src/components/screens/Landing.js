import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/common/Header";
import PopUpNotification from "@/components/common/PopUpNotification";
import HeroSection from "@/components/landing-page-sections/HeroSection";
import ActivitiesSection from "@/components/landing-page-sections/ActivitiesSection";
import UpcomingEvents from "@/components/landing-page-sections/UpcomingEvents";
import SectionDivider from "@/components/common/SectionDivider";
import ClassesSection from "@/components/landing-page-sections/ClassesSection";
import MindBodySoul from "@/components/landing-page-sections/MindBodySoul";

import NewsLetter from "@/components/landing-page-sections/NewsLetter";
import MeetTheTeam from "@/components/landing-page-sections/MeetTheTeam";
import PostHeroSection from "@/components/landing-page-sections/PostHeroSection";
import BeInTouch from "@/components/landing-page-sections/BeInTouch";
import Footer from "../common/Footer";
const Landing = () => {
  return (
    <>
      {/* <PopUpNotification /> */}
      <Header />
      <HeroSection />
      <PostHeroSection />
      <SectionDivider />
      <ActivitiesSection />
      <UpcomingEvents />
      <ClassesSection />
      <MeetTheTeam />
      <SectionDivider />
      <MindBodySoul />

      <NewsLetter />
      <Footer />
    </>
  );
};

export default Landing;
