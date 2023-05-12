import Product from "@/components/screens/Product";
import React from "react";
import Header from "@/components/common/Header";
import ProductTab from "@/components/product-page-sections/ProductTab";
import Recommendation from "@/components/product-page-sections/Recommendation";
import Testimonials from "@/components/common/Testimonials";
import Footer from "@/components/common/Footer";
import { useRouter } from "next/router";
const ProductPage = () => {
  const router = useRouter();
  const props = router.query;

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

export default ProductPage;
