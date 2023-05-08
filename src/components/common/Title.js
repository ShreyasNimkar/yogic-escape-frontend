import React from "react";

const Title = ({ color, value }) => {
  return (
    <>
      <div className={`bg-${color} h-[20vh]`}>
        <div className="h-[100%] w-full text-center flex justify-center items-center flex-col text-2xl">
          <p className="border-b-2 border-mahogany w-[80%] sm:w-max px-4 py-1">
            {value}
          </p>
        </div>
      </div>
    </>
  );
};

export default Title;
