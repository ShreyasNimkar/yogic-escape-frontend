import CallUs from "@/components/common/CallUs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import GiftCard from "@/components/giftcard-sections/GiftCard";
import React from "react";

const giftcard = () => {
  return (
    <>
      <Header />
      <GiftCard />
      <CallUs />
      <Footer />
    </>
  );
};

export default giftcard;
