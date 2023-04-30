import React from "react";
import Image from "next/image";
const ProductTab = () => {
  return (
    <>
      <div className="h-[80vh] w-full flex justify-around items-center bg-paleIvory">
        <div className="h-full w-[80%] flex justify-around items-center">
          <div className="w-1/2 h-full flex justify-around items-center">
            {" "}
            <Image
              //   src={`http://${domain}${el.attributes.Profile.data.attributes.url}`}
              src={"/peopleImageYoga.svg"}
              alt="Team"
              height={10000}
              width={10000}
              className="h-[60%] w-[90%] object-cover"
            />
          </div>
          <div className="w-1/2 h-full flex justify-around items-center">
            <div className="h-[60%] w-full px-10">
              <div className="h-[85%]">
                <p className="text-sm pb-2">MASSAGES / PREGNANCY THERAPY</p>
                <p className="text-xl pb-3 font-semibold  tracking-widest">
                  SOUND HEALING TRAINING
                </p>
                <p className="text-xs pb-3 text-textGray">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maxime facilis, dolores possimus quibusdam incidunt ipsam id
                  maiores totam error eum expedita sapiente illum ducimus
                  dignissimos debitis quod esse laboriosam accusamus.
                </p>
                <p className="text-sm pb-3">
                  1 hour <span>ads</span> 10 Reviews
                </p>
                <p className="text-xl text-mahogany font-semibold">80E</p>
                <p>----------------</p>
                <p className="text-sm">
                  NEXT AVAILABILITY:{" "}
                  <span className="text-mahogany">03 April 2023</span>
                </p>{" "}
              </div>
              <div className="h-[15%] flex justify-start items-end">
                <button
                  className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs  px-2 gap-1 py-1  outline-none focus:outline-none  ease-linear transition-all duration-150"
                  type="button"
                >
                  <span className="text-lg pt-[0.25rem]">BOOK REQUEST</span>
                  <svg
                    className="stroke-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.24988 16.5L13.7499 11L8.24988 5.5"
                      // stroke="#9F2420"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTab;
