import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Testimonials from "../components/common/Testimonials";
import ProductTab from "../components/product-page-sections/ProductTab";
import Recommendation from "../components/product-page-sections/Recommendation";
import { useRouter } from "next/router";
import TherapyTab from "@/components/product-page-sections/TherapyTab";
const Therapy = () => {
  const router = useRouter();
  const props = router.query;
  const keys = parseInt(Object.keys(props));
  console.log(keys);
  return (
    <>
      <Header />
      <TherapyTab props={keys} />
      <Recommendation />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Therapy;
