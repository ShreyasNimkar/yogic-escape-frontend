import PaymentScreen from "@/components/screens/Payment";
import React from "react";
import { useRouter } from "next/router";
const Payment = () => {
  const router = useRouter();
  const props = router.query;

  return (
    <>
      <PaymentScreen props={props} />
    </>
  );
};

export default Payment;
