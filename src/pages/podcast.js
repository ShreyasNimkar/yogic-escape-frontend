import CallUs from "@/components/common/CallUs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PodcastsList from "@/components/podcast-sections/PodcastsList";
import PodcastsTab from "@/components/podcast-sections/PodcastsTab";
import React from "react";

const podcast = () => {
  return (
    <>
      <Header />
      <PodcastsTab />
      <PodcastsList />
      <CallUs />
      <Footer />
    </>
  );
};

export default podcast;
