import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Testimonials from "../common/Testimonials";
import ProductTab from "../product-page-sections/ProductTab";
import Recommendation from "../product-page-sections/Recommendation";

const Product = ({ props }) => {
  return (
    <>
      <Header />
      <ProductTab props={props} />
      <Recommendation />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Product;
