import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Testimonials from "../payment-sections/Testimonials";
import ProductTab from "../product-page-sections/ProductTab";
import Recommendation from "../product-page-sections/Recommendation";

const Product = () => {
  return (
    <>
      <Header />
      <ProductTab />
      <Recommendation />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Product;
