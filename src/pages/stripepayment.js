import StripePaymentPage from "@/components/payment-sections/StripePaymentPage";
import React from "react";
import { useRouter } from "next/router";
const StripePayment = () => {
  const router = useRouter();
  const props = router.query;
  const clientSecret = props.clientSecret;
  console.log(props);
  return (
    <>
      <StripePaymentPage clientSecret={clientSecret} />
    </>
  );
};

export default StripePayment;
