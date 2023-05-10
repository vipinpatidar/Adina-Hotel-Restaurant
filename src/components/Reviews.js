import React, { useState } from "react";
//icons
import {
  MdOutlineStarPurple500,
  MdOutlineStarHalf,
  MdFormatQuote,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

//images
import img1 from "../assets/img/restoImg/avatar/5.png";
import img2 from "../assets/img/restoImg/avatar/4.jpg";
import img3 from "../assets/img/restoImg/avatar/1.png";
import img4 from "../assets/img/restoImg/avatar/2.jpg";

const data = [
  {
    id: 1,
    name: "Bandiya Luhaar",
    client: "Client",
    img: img1,
    stars: [
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
    ],
    review:
      "“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”",
  },
  {
    id: 2,
    name: "Killer Marya",
    client: "Client",
    img: img2,
    stars: [
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
    ],
    review:
      "“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”",
  },
  {
    id: 3,
    name: "Bullaa Madari",
    client: "Client",
    img: img3,
    stars: [
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
      <MdOutlineStarHalf />,
    ],
    review:
      "“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”",
  },
  {
    id: 4,
    name: "Rani Diwani",
    client: "Client",
    img: img4,
    stars: [
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
      <MdOutlineStarPurple500 />,
    ],
    review:
      "“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”",
  },
];

const Reviews = () => {
  const [isShifting, setIsShifting] = useState(0);
  const size = window.innerWidth <= 768;

  const lengthRight = (data.length - (size ? 1 : 3)) * 355 - isShifting;
  const lengthLeft = (data.length - (size ? 1 : 3)) * 355 + isShifting;

  const rightShift = () => {
    // if (!size) {
    if (lengthRight === 0) {
      setIsShifting(0);
      return;
    }
    setIsShifting((prev) => prev + 355);
    // } else {
    // setIsShifting((prev) => prev + 355);
    // }
  };
  const leftShift = () => {
    // if (!size) {
    if (lengthLeft === (data.length - (size ? 1 : 3)) * 355) {
      setIsShifting(355);
      return;
    }
    setIsShifting((prev) => prev - 355);
    // } else {
    // setIsShifting((prev) => prev - 355);
    // }
  };

  return (
    <>
      <div className="flex px-4 lg:px-4 gap-x-8 overflow-hidden items-center  justify-start">
        {data.map((client) => (
          <div
            className="border-2 border-accent p-7 w-[320px] lg:w-[330px] mx-auto relative transition-all duration-300
      "
            style={{
              flex: "1 0 auto",
              transform: `translateX(-${isShifting}px)`,
            }}
            key={client.id}
          >
            <span className="absolute top-0 right-0 text-accent/20 text-[100px]">
              <MdFormatQuote />
            </span>
            <div className="flex items-center gap-x-4 ">
              <img
                src={client.img}
                alt="client"
                className="w-[75px] h-[75px] rounded-full"
              />
              <div className="font-primary flex flex-col items-start ">
                <p className="font-primary font-[500] text-xl">{client.name}</p>
                <p className="font-secondary text-accent font-[500]">
                  {client.client}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-1 text-yellow-400 text-4xl my-4">
              {client.stars.map((star, idx) => (
                <span key={idx}>{star}</span>
              ))}
            </div>
            <div>
              <p className="font-secondary text-[#777] leading-7 font-[500]">
                {client.review}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-x-4 mt-6 justify-center">
        <span
          className="text-accent w-[45px] h-[45px] rounded-full border border-accent flex items-center justify-center text-2xl cursor-pointer hover:bg-accent hover:text-white transition"
          onClick={leftShift}
        >
          <MdOutlineKeyboardArrowLeft />
        </span>
        <span
          className="text-accent w-[45px] h-[45px] rounded-full border border-accent flex items-center justify-center text-2xl cursor-pointer hover:bg-accent hover:text-white transition"
          onClick={rightShift}
        >
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
    </>
  );
};

export default Reviews;
