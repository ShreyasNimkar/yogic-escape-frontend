import React from "react";

const BlogHeroSection = () => {
  return (
    <>
      <div>
        <div className="max-h-min bg-slate-400">
          <div className="h-max w-full flex items-center justify-around ">
            <div className="flex flex-col items-center justify-around ">
              <div className="bg-rentOurSpace-hero-section-bg w-screen h-[70vh] bg-no-repeat bg-cover bg-center bg-fixed">
                <div className="w-full h-full bg-[#250706] bg-opacity-50">
                  <div className="h-[60%] w-full flex justify-around items-end text-center">
                    <p className="w-full   text-center text-white text-5xl sm:text-6xl h-[55%] overflow-y-hidden ">
                      <span className="font-Quasonnnn">Blogs to</span>
                      <br />
                      <span className="italic font-light ">EDUCATE</span>
                    </p>
                  </div>
                  <div className="h-[40%] w-full flex justify-center items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeroSection;
