import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useRouter } from "next/router";

import "../../../public/styles/stripeStyles.module.css";

const StripePaymentPage = ({ clientSecret }) => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  console.log(clientSecret);
  return (
    <>
      <div className="h-full w-full">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </>
  );
};

export default StripePaymentPage;
