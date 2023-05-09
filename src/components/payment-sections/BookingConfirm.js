import React from "react";
import Image from "next/image";
const BookingConfirm = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex justify-center items-center flex-col  h-[49%] gap-2">
          <svg
            width="35"
            height="35"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24.2554" r="24" fill="#9F2420" />
            <path
              d="M35.6667 16.2554L19.3958 32.5262L12 25.1304"
              stroke="white"
              strokeWidth="2.95833"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-Quasonnnn tracking-widest text-lg">
            THANK YOU FOR BOOKING WITH US !
          </p>
          <p className="text-mahogany text-sm">WE WILL CONTACT YOU SOON</p>
        </div>
        <div className="h-[2%]"></div>
        <div className="flex justify-around items-center h-[49%] w-full">
          <div className="flex justify-around items-center sm:w-[30%] h-[50%]">
            <Image
              src={"/ourStory.png"}
              alt="Team"
              height={10000}
              width={10000}
              className="object-cover rounded-lg h-[90%] w-[30%]"
            />
            <div className="w-[50%] h-full flex text-textGray justify-around items-center flex-col">
              <p className="text-mahogany text-lg w-full">SOUND THERAPY</p>
              <p className="flex justify-between w-full items-center">
                <span className="text-sm">1 April 2023</span>
                <span className="text-sm">13:30-13:40</span>
              </p>
              <p className="text-sm w-full flex justify-start items-center">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_548_4958)">
                    <path
                      d="M21.0859 10.2549C21.0859 17.2549 12.0859 23.2549 12.0859 23.2549C12.0859 23.2549 3.08594 17.2549 3.08594 10.2549C3.08594 7.86793 4.03415 5.57875 5.72198 3.89092C7.4098 2.20309 9.69899 1.25488 12.0859 1.25488C14.4729 1.25488 16.7621 2.20309 18.4499 3.89092C20.1377 5.57875 21.0859 7.86793 21.0859 10.2549Z"
                      stroke="#9F2420"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.0859 13.2549C13.7428 13.2549 15.0859 11.9117 15.0859 10.2549C15.0859 8.59803 13.7428 7.25488 12.0859 7.25488C10.4291 7.25488 9.08594 8.59803 9.08594 10.2549C9.08594 11.9117 10.4291 13.2549 12.0859 13.2549Z"
                      stroke="#9F2420"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_4958">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.0859375 0.254883)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                &nbsp; Berlin,Germany
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingConfirm;
