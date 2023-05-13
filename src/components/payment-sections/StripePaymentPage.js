import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useRouter } from "next/router";

import "../../../public/styles/stripeStyles.module.css";

const StripePaymentPage = ({ clientSecret }) => {
  const stripeApiKey = process.env.NEXT_PUBLIC_STRIPE_API_KEY;
  const [stripe, setStripe] = useState(null);
  console.log(stripeApiKey);
  useEffect(() => {
    const loadStripeInstance = async () => {
      const stripeInstance = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_API_KEY
      );
      setStripe(stripeInstance);
    };

    loadStripeInstance();
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <div className="h-full w-full">
        {stripe && (
          <Elements options={options} stripe={stripe}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </>
  );
};

export default StripePaymentPage;
