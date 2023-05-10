import React, { useState, useRef } from "react";
//image
import img from "../assets/img/logo-dark.svg";
import formImg from "../assets/img/form-img.png";
import Model from "./Model";

const FormModal = ({
  checkInDate,
  checkOutDate,
  closeHandler,
  total,
  isOpen,
  price,
  noOfRoom,
}) => {
  const [isModal, setIsModal] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    setIsModal(true);

    closeHandler();

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
          thank="Enjoy Your Vactions With ADINA Hotel"
        />
      )}
      {isOpen && (
        <div
          className="h-screen fixed bottom-0 top-0 bg-black/80 w-full z-[60] flex items-center justify-center"
          onClick={() => closeHandler()}
        ></div>
      )}
      {isOpen && (
        <div className=" w-full overflow-y-auto">
          <div className="w-[90%] lg:w-[35%] z-[70] top-[2%] lg:top-[5%] left-[50%] fixed -translate-x-[50%]  bg-white pt-2 flex flex-col items-center justify-center">
            <h3
              className="text-xl font-bold absolute top-3 right-5 cursor-pointer hover:text-accent"
              onClick={() => closeHandler()}
            >
              X
            </h3>
            <div className="py-4 border-b-2 border-accent text-center w-full flex justify-center">
              <img width={160} src={img} alt="logo" />
            </div>
            <div className="py-2 px-6 lg:px-10  border-b-2 border-accent text-center w-full flex flex-col lg:flex-row gap-4 lg:gap-16 items-center ">
              <img className="w-[60px] lg:w-[100px]" src={formImg} alt="logo" />
              <div className="-ml-8 lg:ml-0">
                <p className=" pb-1 flex flex-row items-center gap-1">
                  {" "}
                  <span className="text-[16px] font-semibold">Check In: </span>
                  <span> {checkInDate}</span>
                </p>
                <p className=" pb-1 flex flex-row items-center gap-1">
                  {" "}
                  <span className="text-[16px] font-semibold">Check Out: </span>
                  <span> {checkOutDate}</span>
                </p>
                <p className="pb-1 flex flex-row items-center gap-1">
                  {" "}
                  <span className="text-[16px] font-semibold">
                    Number Of Members:{" "}
                  </span>
                  <span>{total}</span>
                </p>
                <p className="pb-1 flex flex-row items-center gap-1">
                  {" "}
                  <span className="text-[16px] font-semibold">
                    Number Of Rooms:{" "}
                  </span>
                  <span> {noOfRoom !== "Rooms" ? +noOfRoom : 1}</span>
                </p>
                <p className="flex flex-row items-center bg-accent text-white gap-1 py-1 px-1 justify-center ">
                  {" "}
                  <span className="text-[20px] font-[500]">Price: </span>
                  <span className="text-[18px] font-[500]">
                    ${noOfRoom !== "Rooms" ? +price * +noOfRoom : price}
                  </span>
                </p>
              </div>
            </div>
            <form
              className="flex flex-col w-full px-3 lg:px-6 py-4 bg-accent/20"
              onSubmit={submitHandler}
            >
              <h3 className="h3 text-center">Registration Form</h3>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="px-2 py-2 outline-none border-none placeholder:text-gray-400 mt-1 mb-3"
                ref={nameRef}
                required
                placeholder="Enter Your Name"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="px-2 py-2 outline-none border-none placeholder:text-gray-400 mt-1 mb-3"
                ref={emailRef}
                required
                placeholder="Enter Your Email Address"
              />
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="px-2 py-2 outline-none border-none placeholder:text-gray-400 mt-1 mb-3"
                required
                placeholder="Enter Phone Number"
              />
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                className="px-2 py-2 outline-none border-none placeholder:text-gray-400 mt-1 mb-3"
                required
                placeholder="Enter Full Address"
              />
              <button className="btn btn-secondary btn-sm max-w-[240px] py-2 mx-auto mt-2 font-semibold">
                Sumbit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
