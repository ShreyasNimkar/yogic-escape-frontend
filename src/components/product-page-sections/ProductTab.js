import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const ProductTab = ({ props }) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push({
      pathname: "/payment",
      query: { massageId: props.id },
    });
  };
  console.log(props);
  if (!props || !props.attributes) {
    return null; // or render a loading spinner, placeholder, or any other content
  }
  const { name, description, time } = props.attributes;
  return (
    <>
      <div className="h-max py-10 w-full flex justify-around items-center bg-paleIvory">
        <div className="h-full w-[100%] flex sm:flex-row flex-col justify-center items-center">
          <div className="sm:w-1/2 w-[90%] h-full flex justify-center items-center">
            <Image
              //   src={`http://${domain}${el.attributes.Profile.data.attributes.url}`}
              src={"/peopleImageYoga.svg"}
              alt="Team"
              height={10000}
              width={10000}
              className="h-[30vh] sm:h-[50vh] sm:w-[100%] object-contain sm:object-cover"
            />
          </div>
          <div className="sm:w-1/2 w-[90%] h-full flex justify-center items-center">
            <div className="h-max flex justify-center items-center flex-col w-full sm:px-10">
              <div className="h-max w-full sm:w-full">
                <p className="text-sm pb-2">Whats here ???/</p>
                <p className="text-xl pb-3 font-semibold  tracking-widest">
                  {name}
                </p>
                <p className="text-xs pb-3 text-textGray">{description}</p>
                <p className="text-sm pb-3">
                  {time} <span>ads</span> 10 Reviews
                </p>
                <p className="text-xl text-mahogany font-semibold">80E</p>
                <p className="w-max h-max border-t-2 border-[#C4C4C4] pt-1 text-sm">
                  NEXT AVAILABILITY: whats thisssss left and right ?
                  <span className="text-mahogany">03 April 2023</span>
                </p>
              </div>
              <div className="h-[15%] py-2 w-full flex justify-start items-end">
                <button
                  onClick={() => {
                    onClickHandler();
                  }}
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
