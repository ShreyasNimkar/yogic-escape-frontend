import React from "react";
import Image from "next/image";
const MantrasCard = ({ el }) => {
  console.log(el);
  const videoUrl = el.attributes.url;
  const videoId = videoUrl.split("v=")[1];
  const onClickHandler = () => {
    window.location.href = el.attributes.url;
  };

  return (
    <>
      <div className="sm:w-[25%]  shadow-md  w-[80%] h-max py-0 sm:h-max">
        <div
          onClick={() => {
            onClickHandler();
          }}
          className="h-max sm:py-1 cursor-pointer px-1 w-full text-center"
        >
          {el.attributes.name}
        </div>
        <div className="h-[55%] sm:h-[45%]">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowdullscreen
            ></iframe>
          </div>
        </div>
        <div
          onClick={() => {
            onClickHandler();
          }}
          className="h-max text-sm cursor-pointer text-mahogany py-1 px-1 text-center font-semibold"
        >
          {el.attributes.chant}
        </div>
        <div
          onClick={() => {
            onClickHandler();
          }}
          className="h-max cursor-pointer text-xs px-1 text-textGray"
        >
          Meaning : {el.attributes.meaning}
        </div>
      </div>
    </>
  );
};

export default MantrasCard;
