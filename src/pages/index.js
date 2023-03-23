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
import MeetTheTeam from "@/components/landing-page-sections/MeetTheTeam";
import PostHeroSection from "@/components/landing-page-sections/PostHeroSection";
import BeInTouch from "@/components/landing-page-sections/BeInTouch";
import Landing from "@/components/screens/Landing";
import Carousel from "@/components/uncommon/HomePageTabs/Carousel";
import Carousel2 from "@/components/uncommon/HomePageTabs/Carousel2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];
  return (
    <>
      <Landing />
    </>
  );
}
