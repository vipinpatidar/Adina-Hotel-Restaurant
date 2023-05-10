import React, { useRef, useState } from "react";
//image
import img from "../assets/img/restoImg/11.jpg";
//icons
import { MdOutlineRestaurantMenu } from "react-icons/md";
//component
import NumOfPeo from "./NumOfPeo";
import Model from "./Model";

const time = [
  { name: "Breakfast" },
  { name: "Dinner" },
  { name: "Lunch" },
  { name: "Hi-Tea" },
];

const RestoModal = ({ clickHandler, isOpen }) => {
  const [isModal, setIsModal] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    setIsModal(true);

    clickHandler();

    setTimeout(() => {
      setIsModal(false);
    }, 4000);
  };

  return (
    <>
      {isModal && (
        <Model
          name={nameRef.current.value}
          email={emailRef.current.value}
          thank="Enjoy Your Delicious Food With ADINA Hotel"
        />
      )}
      {isOpen && (
        <div
          className="h-screen fixed bottom-0 top-0 bg-black/80 w-full z-[60] flex items-center justify-center"
          onClick={clickHandler}
        ></div>
      )}
      {isOpen && (
        <div className="h-screen overflow-y-auto">
          <div className="w-[90%] lg:w-[76%] h-[730px] lg:h-[550px] z-[70] top-[3%] lg:top-[10%] left-[50%] fixed -translate-x-[50%] gap-6 lg:gap-0 bg-[#1b1b1b] flex flex-col lg:flex-row items-center justify-center">
            <h3
              className="text-xl font-bold absolute top-5 right-5 cursor-pointer  z-20 bg-black px-2 lg:px-0 lg:bg-transparent text-accent"
              onClick={clickHandler}
            >
              X
            </h3>
            <div className="text-center flex justify-center lg:w-[40%] overflow-hidden relative">
              <img
                src={img}
                alt="logo"
                className="w-full h-350px lg:h-[550px] "
              />
              <div className="absolute top-0 w-full h-full bg-accent/30"></div>
            </div>
            <div className="lg:w-[60%] px-4 lg:px-12 pb-4">
              <h3 className="lg:h3 text-white flex  items-center gap-x-3 uppercase">
                <span>
                  <MdOutlineRestaurantMenu className="text-accent" />
                </span>{" "}
                Unique Dining
              </h3>
              <h2 className="lg:h2 h3 lg:mt-7 text-white">
                Book A Table Now !
              </h2>
              <form
                className="flex flex-col gap-3 lg:gap-4"
                onSubmit={submitHandler}
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="px-3 py-4 bg-[#2d2d2d] outline-none border-none placeholder:text-[#777] mt-1 lg:mb-3"
                  ref={nameRef}
                  required
                  placeholder="Enter Your Name"
                />
                <div className="flex gap-x-4 items-center">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="px-3 py-4 bg-[#2d2d2d] outline-none border-none placeholder:text-[#777] w-[50%] mt-1 lg:mb-3"
                    ref={emailRef}
                    required
                    placeholder="Enter Your Email Address"
                  />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="px-3 py-4 bg-[#2d2d2d] outline-none border-none placeholder:text-[#777] w-[50%] mt-1 lg:mb-3"
                    required
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div className="flex gap-x-4 items-center">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="px-3 py-4 bg-[#2d2d2d] outline-none border-none text-[#777] font-[500] placeholder:text-[#777] w-[50%] mt-1 mb-3"
                    required
                    placeholder="Enter Full Address"
                  />
                  <NumOfPeo lists={time} text="Time" isModal={true} />
                </div>
                <button type="submit" className="btn btn-primary py-4">
                  Book Table Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestoModal;
