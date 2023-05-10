import React from "react";
//image
import img from "../assets/img/logo-dark.svg";

const Model = ({ name, email, timmer, message, setIsModal, thank }) => {
  const clickHandler = () => {
    setIsModal(false);
    clearTimeout(timmer);
  };

  return (
    <>
      <div className="h-screen fixed bottom-0 top-0 bg-black/80 w-full z-[60] flex items-center justify-center"></div>
      <div>
        <div className="w-[90%] lg:w-[33%] z-[70] top-[40%] left-[50%] fixed -translate-x-[50%] tarnslate-y-[50%] bg-white py-2 flex flex-col items-center justify-center">
          {!thank && (
            <h3
              className="text-xl font-bold absolute top-1 right-3 cursor-pointer hover:text-accent"
              onClick={clickHandler}
            >
              X
            </h3>
          )}
          <div className="py-4 border-b-2 border-accent text-center w-full flex justify-center">
            <img width={160} src={img} alt="logo" />
          </div>
          <h3 className="h3 mt-4 mb-0">Thank You {name}</h3>
          <p>{email}</p>
          {message && (
            <p className="my-4 pb-2 flex flex-row items-center ">
              {" "}
              <span className="text-[16px] font-semibold">
                We Got Your Message :{" "}
              </span>
              <span> {message.slice(0, 100)}...</span>
            </p>
          )}
          {thank && (
            <p className="text-[20px] text-accent font-semibold py-6">
              {thank}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Model;
