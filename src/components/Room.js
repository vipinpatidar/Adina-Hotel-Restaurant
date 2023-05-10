import React, { useContext } from "react";
//Link
import { Link } from "react-router-dom";
//icons
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
//context
import { RoomContext } from "../context/RoomContext";

const Room = ({ room }) => {
  //destructuring room
  const { id, name, image, size, maxPerson, description, price } = room;

  const { noOfRoom } = useContext(RoomContext);

  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      {/* image */}
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-300 w-full h-[250px]"
          src={image}
          alt="room img "
        />
      </div>
      {/* details */}
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
        <div className="flex justify-between w-[80%]">
          {/* people size */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>
            <div className="flex gap-x-1">
              <div>Size</div>
              <div>{size}m2</div>
            </div>
          </div>
          {/* room cpacity */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsPeople className="text-[18px]" />
            </div>
            <div className="flex gap-x-1">
              <div>Max People</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
      {/* name, desciption */}
      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="mx-auto mb-3 lg:mb-6 max-w-[300px]">
          {description.slice(0, 56)}...
        </p>
      </div>
      {/* button */}
      <Link
        to={`/room/${id}`}
        className="btn btn-secondary btn-sm max-w-[240px] mx-auto"
      >
        Book now form ${noOfRoom !== "Rooms" ? +price * +noOfRoom : price}
      </Link>
    </div>
  );
};

export default Room;
