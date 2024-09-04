import React from "react";
//icons
import {
  MdOutlineRestaurantMenu,
  MdOutlineFoodBank,
  MdOutlineAvTimer,
  MdPeopleAlt,
} from "react-icons/md";

const RestoCard = ({ resto, clickHandler }) => {
  return (
    <div className="bg-white shadow-2xl min-h-[500px] pb-6 group">
      {/* image */}
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-300 w-full h-[250px]"
          src={resto.image}
          alt="restaurant img "
        />
      </div>
      {/* details */}
      <div className="bg-white shadow-lg max-w-[310px] mx-auto min-h-[60px] -translate-y-1/2 flex flex-col items-center justify-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
        <div className="flex  pl-4 w-full  py-2">
          {/* people size */}
          <div className="flex items-center gap-x-2 ">
            <div className="text-accent">
              <MdOutlineRestaurantMenu className="text-[16px]" />
            </div>
            <div className="flex gap-x-1">
              <div className="">{resto.cuisine}</div>
              {/* <div>{size}m2</div> */}
            </div>
          </div>
        </div>
        <div className="flex pl-4 w-full py-2 bg-accent/20">
          {/* people size */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <MdOutlineAvTimer className="text-[17px]" />
            </div>
            <div className="flex gap-x-1">
              <div className="">{resto.timings}</div>
              {/* <div>{size}m2</div> */}
            </div>
          </div>
        </div>
        <div className="flex pl-4 w-full  py-2">
          {/* people size */}
          <div className="flex items-center gap-x-2 ">
            <div className="text-accent">
              <MdPeopleAlt className="text-[17px]" />
            </div>
            <div className="flex gap-x-1">
              <div>Max People {resto.maxPerson}</div>
              {/* <div>{size}m2</div> */}
            </div>
          </div>
        </div>
      </div>
      {/* desciption, cuisine, time */}
      <div className="text-center -mt-8">
        <h3 className="h3 flex items-center justify-center gap-x-2">
          <MdOutlineFoodBank className="text-accent" /> {resto.name}
        </h3>
        <p className="mx-auto mb-3 lg:mb-8 max-w-[300px]">
          {
            "This is a desicription about a hotal restaurant and bar which is very cool and relxing we should go to this kind of bar and restaurent every dar so we can enjoy"
          }
        </p>
      </div>
      {/* button */}
      <button
        className="btn btn-secondary btn-sm max-w-[260px] mx-auto"
        onClick={clickHandler}
      >
        {/* Book now form ${price} */}
        Book A Table From ${resto.price}
      </button>
    </div>
  );
};

export default RestoCard;
