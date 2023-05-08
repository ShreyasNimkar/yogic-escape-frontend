import React from "react";
import MantrasCard from "../uncommon/MantrasCard/MantrasCard";
import Title from "../common/Title";

const Recommendations = () => {
  return (
    <>
      <Title color={"whtie"} value={"OUR RECOMMENDATIONS"} />
      <div className="h-full">
        <div className="h-[100%] flex justify-center gap-3 sm:gap-0 items-center flex-wrap sm:gap-x-10 ">
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
        </div>
      </div>
    </>
  );
};

export default Recommendations;
