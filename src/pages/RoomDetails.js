import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
//context
import { RoomContext } from "../context/RoomContext";
//component
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
//scroll top component
import ScrollToTop from "../components/ScrollToTop";
//icons
import { FaCheck } from "react-icons/fa";
import FormModal from "../components/FormModal";

// data
const lists = [
  { name: "1 Adult" },
  { name: "2 Adults" },
  { name: "3 Adults" },
  { name: "4 Adults" },
];

const noRooms = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }];

const RoomDetails = () => {
  const { rooms, total, adults, setAdults, noOfRoom, setNoOfRoom } =
    useContext(RoomContext);
  //getting current id
  const { id } = useParams();
  //get room
  const room = rooms.find((room) => room.id === +id);
  //destructure
  const { name, description, facilities, imageLg, price, maxPerson } = room;

  //restting check in check out and room when redirect to other pages

  // getting input of check in check out

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const checkInHandler = (checkIn) => {
    setCheckIn(checkIn);
  };
  const checkOutHandler = (checkOut) => {
    setCheckOut(checkOut);
  };

  const checkInDate = checkIn?.toString().split(" ").slice(0, 4).join(" ");
  const checkOutDate = checkOut?.toString().split(" ").slice(0, 4).join(" ");

  const openModalHandler = () => {
    if (checkIn & checkOut && total <= maxPerson) {
      setIsOpen((prev) => !prev);
    } else {
      alert(
        `Max Peroson: ${maxPerson} allow in this room or May Check your Check-In , Check-Out`
      );
    }
  };

  return (
    <section>
      <ScrollToTop />

      <FormModal
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        closeHandler={openModalHandler}
        total={total}
        isOpen={isOpen}
        price={price}
        noOfRoom={noOfRoom}
      />

      {/* banner */}
      <div className="bg-room bg-cover h-[560px] bg-center relative flex justify-center items-center">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* title */}
        <h1 className="text-5xl lg:text-6xl text-white z-20 font-primary text-center">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left */}
          <div className="w-full h-full px-6 lg:w-[60%]">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-12" src={imageLg} alt="details images" />
            {/* facilities */}
            <div>
              <h3 className="h3 mb-4">Room Facilties</h3>
              {/* gird */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {facilities.map((item, idx) => (
                  <div className="flex items-center gap-x-3 flex-1" key={idx}>
                    <div className="text-3xl text-accent">{item.icon}</div>
                    <div className="text-base">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-full lg:w-[40%] mt-5 lg:mt-12">
            {/* reservation */}
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3 className="h3">Your Reservation</h3>
                <div className="h-[60px]">
                  <CheckIn
                    checkInHandler={checkInHandler}
                    text="Check In"
                    isDetails={true}
                  />
                </div>
                <div className="h-[60px]">
                  <CheckOut
                    checkOutHandler={checkOutHandler}
                    isDetails={true}
                  />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown
                    value={adults}
                    setValue={setAdults}
                    lists={lists}
                  />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown
                    value={noOfRoom}
                    setValue={setNoOfRoom}
                    lists={noRooms}
                  />
                </div>
              </div>
              <button
                className="btn btn-lg btn-primary w-full"
                onClick={openModalHandler}
              >
                Book now form $
                {noOfRoom !== "Rooms" ? +price * +noOfRoom : price}
              </button>
            </div>
            {/* rules */}
            <div className="px-3">
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, recusandae? Porro aperiam nostrum amet alias.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-in 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-out 10:30 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
