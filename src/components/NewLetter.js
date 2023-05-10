import React from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
//image
import img from "../assets/img/an-img-07.png";

const NewLetter = () => {
  return (
    <div className="mx-auto bg-accent/10 py-16 lg:py-32 mb-10 relative">
      <img
        src={img}
        alt="coffe"
        className="absolute lg:top-[40%] lg:left-0 animate-bounce"
      />
      <div className="container mx-auto px-4  lg:px-24 text-center ">
        <h3 className="text-xl font-primary font-semibold tracking-[1px] mb-0 flex gap-x-3 items-center justify-center">
          <span>
            <MdOutlineRestaurantMenu className="text-[#222]" />
          </span>{" "}
          <span className="text-accent/90 uppercase">NewsLetter</span>
        </h3>
        <h2 className="font-primary text-3xl lg:text-[50px] my-1 lg:my-7">
          Get Best Offers On Vacation
        </h2>
        <p className="font-secondary mb-8 lg:mb-14">
          With the subscription, enjoy your favourite coffees without having to
          think about it
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 px-2 lg:px-[12%]">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="px-3 py-4 bg-[#fff] outline-none border-none placeholder:text-[#777]  w-full lg:w-[75%]"
          />
          <button className="btn bg-accent/90 hover:bg-accent-hover mt-8 lg:mt-0 py-3 lg:py-0 h-[57px] lg:w-[25%]">
            Subcribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
