import React from "react";
import MoreForYouCard from "../uncommon/MassageAndTherapiesCards/MoreForYouCard";
import CallUs from "../common/CallUs";
import Title from "../common/Title";
const TherapiesMoreForYou = () => {
  return (
    <>
      <Title color={"paleIvory"} value={"MORE FOR YOU"} />
      <div className="h-[40vh] bg-paleIvory">
        <div className="h-[100%] w-full flex justify-center gap-3 items-center bg-paleIvory">
          <MoreForYouCard />
          <MoreForYouCard />
        </div>
      </div>
      <CallUs />
    </>
  );
};

export default TherapiesMoreForYou;
