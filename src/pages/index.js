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
import Footer from "@/components/common/Footer";
import NewsLetter from "@/components/landing-page-sections/NewsLetter";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="">
        <PopUpNotification />
        <Header />
        <HeroSection />
        <SectionDivider />
        <ActivitiesSection />

        <UpcomingEvents />
        <ClassesSection />
        <MindBodySoul />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}
