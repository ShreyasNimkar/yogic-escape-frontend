import Product from "@/components/screens/Product";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ProductPage = () => {
  const router = useRouter();
  const props = router.query;

  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const [massagesData, setMassagesData] = useState([]);

  const massagesController = async () => {
    const headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
    };
    const URL = `https://${domain}/api/massage-types/${props.slug}?populate=*`;
    const res = await axios.get(URL, { headers });
    const massages = res.data.data;

    setMassagesData(massages);
  };

  useEffect(() => {
    if (props.slug) {
      massagesController();
    }
  }, [props.slug]);

  return <>{massagesData != null && <Product props={massagesData} />}</>;
};

export default ProductPage;
