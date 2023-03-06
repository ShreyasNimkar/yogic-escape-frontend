import Image from "next/image";
import React from "react";

const Footer = () => {
  const socialMediaNavigations = [
    { name: "twitter" },
    { name: "instagram" },
    { name: "youtube" },
    { name: "spotify" },
  ];
  return (
    <div className="h-[40vh] bg-paleIvory">
      <div className="h-[90%] w-full flex justify-around items-center">
        <div className="h-full w-1/3 p-[2rem]">
          <div className="text-mahogany mb-3">GET IN TOUCH</div>
          <div className="text-xs text-charcoal mb-1">Neha</div>
          <div className="text-xs text-charcoal mb-1">Sanjeev</div>
          <div className="text-xs text-charcoal mb-1">hello@yogicescape.de</div>
        </div>
        <div className="h-full w-1/3 p-[2rem] ">
          <div className="text-mahogany mb-3">QUICK LINKS</div>
          <div className="text-xs text-charcoal mb-1">Contact Us</div>
          <div className="text-xs text-charcoal mb-1">Prices</div>{" "}
          <div className="text-xs text-charcoal mb-1">Classes</div>
          <div className="text-xs text-charcoal mb-1">Business Yoga</div>
          <div className="text-xs text-charcoal mb-1">Space Rentals</div>
        </div>
        <div className="h-full w-1/3 p-[2rem] text-mahogany">
          STAY UPDATED
          <div className="flex-col flex sm:flex-row  justify-start items-center gap-3 mt-3">
            {socialMediaNavigations.map((value, index) => {
              return (
                <Image
                  src={`${value.name}.svg`}
                  key={index}
                  alt="nav-icon"
                  height={100}
                  width={100}
                  className="h-[1.3rem] w-[1.3rem]"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-charcoal">
        © 2022 by YOGICESCAPE
      </div>
    </div>
  );
};

export default Footer;
