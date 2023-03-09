import React from "react";
import Image from "next/image";
const ClassesCard = (props) => {
  return (
    <>
      <div
        className={`h-[70%] w-[20%] bg-transparent bg-class-${props.classType}-bg bg-no-repeat bg-top bg-40% px-10`}
      >
        <div className="w-full h-[45%] flex justify-left items-end text-2xl">
          In-Studio
        </div>
        <div className="w-full h-[25%] text-sm">
          Practice yoga from our studio
        </div>
        <div className="w-full h-[30%]">
          <button
            className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs px-[0.5rem] gap-[0.25] py-[0.3rem]  outline-none focus:outline-none  ease-linear transition-all duration-150"
            type="button"
          >
            <span className="text-sm">Enroll</span>
            <Image
              src={"chevron-right.svg"}
              alt="chevron-right"
              height={1000}
              width={10}
              className="h-[0.9rem] w-[0.9rem]"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ClassesCard;
