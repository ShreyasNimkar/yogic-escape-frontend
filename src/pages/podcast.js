import CallUs from "@/components/common/CallUs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PodcastsList from "@/components/podcast-sections/PodcastsList";
import PodcastsTab from "@/components/podcast-sections/PodcastsTab";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Podcast = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  const [podcastData, setpodcastData] = useState([]);
  const podcastController = async () => {
    const headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
    };
    const URL = `https://${domain}/api/podcasts?populate=*`;

    const res = await axios.get(URL, { headers });

    const podcasts = res.data.data;
    setpodcastData(podcasts);
  };
  useEffect(() => {
    podcastController();
  }, []);
  return (
    <>
      <Header />
      <PodcastsTab />
      <PodcastsList props={podcastData} />
      <CallUs />
      <Footer />
    </>
  );
};

export default Podcast;
