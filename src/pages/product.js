import Product from "@/components/screens/Product";
import React from "react";
import { useRouter } from "next/router";
const ProductPage = () => {
  const router = useRouter();
  const props = router.query;

  return (
    <>
      <Product props={props} />
    </>
  );
};

export default ProductPage;
