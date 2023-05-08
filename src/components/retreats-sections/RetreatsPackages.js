import React from "react";
import Image from "next/image";
import Title from "../common/Title";
import RetreatsChallengeCard from "../uncommon/RetreatsCards/RetreatsChallengeCard";
const RetreatsPackages = () => {
  return (
    <>
      {" "}
      <Title color={"paleIvory"} value={"RETREAT PACKAGES"} />
      <div className="sm:h-[90vh] h-max w-[100%] bg-paleIvory flex flex-col sm:flex-row flex-wrap justify-center gap-x-7 items-center">
        <RetreatsChallengeCard />
        <RetreatsChallengeCard />
      </div>
    </>
  );
};

export default RetreatsPackages;
