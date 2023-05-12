import PaymentScreen from "@/components/screens/Payment";
import React from "react";
import { useRouter } from "next/router";

const Payment = () => {
  const router = useRouter();
  const props = router.query;

  if (!props) {
    // Render a loading state or return null if props are not yet available
    return null;
  } else {
    return <PaymentScreen props={props} />;
  }
};

export default Payment;
