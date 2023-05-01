import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import PaymentTab from "../payment-sections/PaymentTab";

const Payment = ({ props }) => {
  return (
    <>
      <Header />
      <PaymentTab props={props} />
      <Footer />
    </>
  );
};

export default Payment;
