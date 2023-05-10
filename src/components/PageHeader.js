import React from "react";

const PageHeader = ({ img, pera, heading }) => {
  return (
    <div className="heroSlider h-[600px] lg:h-[580px] ">
      <div className="h-full relative flex justify-center items-center">
        <div className="z-20 text-white text-center">
          <div className="uppercase font-tertiary tracking-[6px] mb-5">
            {pera}
          </div>
          <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[60px] leading-tight mb-6">
            {heading}
          </h1>
        </div>
        <div className="absolute top-0 w-full h-full">
          <img
            className="object-cover h-full w-full"
            src={img}
            alt="img slider"
          />
        </div>
        {/* overlay */}
        <div className="absolute top-0 w-full h-full bg-black/60"></div>
      </div>
    </div>
  );
};

export default PageHeader;
