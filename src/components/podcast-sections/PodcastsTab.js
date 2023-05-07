import React from "react";
import Image from "next/image";
const PodcastsTab = () => {
  return (
    <>
      <div className="h-[30vh] sm:h-[60vh] px-4 sm:px-36 gap-x-3 flex justify-around items-center">
        <div className="sm:w-[30%] sm:block hidden h-[80%]">
          <Image
            src={"/podcast.png"}
            alt="Team"
            height={10000}
            width={10000}
            className="object-contain  h-[90%] w-[100%]"
          />
        </div>
        <div className="w-[90%] sm:w-[70%] h-[90%] sm:h-[80%] flex justify-center items-center flex-col">
          <div className="text-lg w-full text-textGray tracking-widest font-semibold">
            THE YOGICESCAPE PODCAST
          </div>
          <div className="w-full sm:w-[100%] h-[10%] flex justify-start gap-2 items-center">
            <div className="h-full w-[10%] flex justify-start  items-center ">
              <Image
                src={"/podcast.png"}
                alt="Team"
                height={10000}
                width={10000}
                className="object-cover h-full w-[100%] "
              />
            </div>
            <div className="text-center text-xs flex justify-around items-center">
              By YogicEscape Studio, Berlin
            </div>
          </div>
          <div className="text-xs h-max py-3">
            I worship that fragrant Shiva of three eyes, the one who nourishes
            all living entities. May he help us severe our bondage with samsara
            by making us realise that we are never separated from our immortal
            nature.
          </div>
          <div className="w-full flex justify-around items-center sm:justify-start">
            <button
              className="flex justify-between items-center bg-mahogany border-mahogany text-white border-2  hover:bg-white hover:text-mahogany active:bg-mahogany font-bold uppercase text-xs  sm:px-2 px-10 gap-1 py-1  outline-none focus:outline-none  ease-linear transition-all duration-150"
              type="button"
            >
              <svg
                className="stroke-current"
                width="24"
                height="24"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.017 13.3312C17.3115 11.1311 11.1165 10.8995 7.58469 11.9996C7.00571 12.1733 6.42673 11.8259 6.25304 11.3048C6.07935 10.7258 6.42673 10.1468 6.94781 9.97314C11.0586 8.75729 17.8326 8.98888 22.1171 11.5364C22.6382 11.8259 22.8119 12.5207 22.5224 13.0417C22.2329 13.447 21.5381 13.6207 21.017 13.3312ZM20.9012 16.5735C20.6117 16.9788 20.0906 17.1525 19.6854 16.863C16.5589 14.9524 11.8112 14.3734 8.16367 15.5313C7.70049 15.6471 7.17941 15.4156 7.06361 14.9524C6.94781 14.4892 7.17941 13.9681 7.64259 13.8523C11.8691 12.5786 17.08 13.2154 20.6696 15.4156C21.017 15.5892 21.1907 16.1682 20.9012 16.5735ZM19.5117 19.7579C19.2801 20.1053 18.8748 20.2211 18.5274 19.9895C15.8062 18.3104 12.3902 17.9631 8.33737 18.8894C7.93208 19.0052 7.58469 18.7157 7.4689 18.3683C7.3531 17.9631 7.64259 17.6157 7.98998 17.4999C12.3902 16.5156 16.2115 16.9209 19.2222 18.7736C19.6275 18.9473 19.6854 19.4105 19.5117 19.7579ZM14.1851 3.02539C12.6644 3.02539 11.1586 3.32491 9.75374 3.90683C8.34884 4.48876 7.07232 5.34171 5.99705 6.41697C3.82546 8.58857 2.60547 11.5339 2.60547 14.605C2.60547 17.6761 3.82546 20.6214 5.99705 22.793C7.07232 23.8683 8.34884 24.7212 9.75374 25.3031C11.1586 25.8851 12.6644 26.1846 14.1851 26.1846C17.2562 26.1846 20.2015 24.9646 22.3731 22.793C24.5447 20.6214 25.7646 17.6761 25.7646 14.605C25.7646 13.0843 25.4651 11.5786 24.8832 10.1737C24.3013 8.76876 23.4483 7.49224 22.3731 6.41697C21.2978 5.34171 20.0213 4.48876 18.6164 3.90683C17.2115 3.32491 15.7057 3.02539 14.1851 3.02539Z"
                  fill="white"
                />
              </svg>

              <span className="text-lg pt-[0.25rem]">LISTEN NOW</span>
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
    </>
  );
};

export default PodcastsTab;
