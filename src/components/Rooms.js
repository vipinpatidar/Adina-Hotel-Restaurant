import React, { useContext } from "react";
//context
import { RoomContext } from "../context/RoomContext";
//component
import Room from "../components/Room";
//Loader
import { SpinnerDotted } from "spinners-react";
//Link
import { Link } from "react-router-dom";

const Rooms = ({ isAllRooms, length }) => {
  const { rooms, isLoading } = useContext(RoomContext);

  const newRoomArr = rooms.slice(0, length);

  return (
    <section className="py-24 ">
      {/* overlay and loader */}
      {isLoading && (
        <div className="h-screen fixed bottom-0 top-0 bg-black/80 w-full z-50 flex items-center justify-center">
          <SpinnerDotted color="white" size={70} />
        </div>
      )}
      <div className="container mx-auto px-6 lg:px-0">
        {/* heading */}
        <div className={`text-center ${isAllRooms}`}>
          <div className="font-tertiary uppercase text-[16px] lg:text-[20px] tracking-[6px]">
            Hotel & Spa Adina
          </div>
          <h2 className="font-primary text-[45px] lg:text-[55px] mb-1">
            Room & Suites
          </h2>
          <Link to="/rooms">
            <button className="btn btn-primary mx-auto mb-10 py-3">
              SEE ALL ROOMS
            </button>
          </Link>
        </div>
        {/* gird */}

        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {newRoomArr.map((room) => (
            <Room room={room} key={room.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
