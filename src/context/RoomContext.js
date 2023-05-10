import React, { createContext, useState, useEffect } from "react";
// Data
import { roomData } from "../datas/data";
//create context

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("Adult");
  const [kids, setKids] = useState("Kids");
  const [noOfRoom, setNoOfRoom] = useState("Rooms");
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Removing NaN
  const adultsNum = !isNaN(adults[0]) ? +adults[0] : 0;
  const kidsNum = !isNaN(kids[0]) ? +kids[0] : 0;

  useEffect(() => {
    setTotal(adultsNum + kidsNum);
  }, [adultsNum, kidsNum]);

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    //filter room base on total person
    const newRoom = roomData.filter((room) => room.maxPerson >= total);
    setTimeout(() => {
      setRooms(newRoom);
      setIsLoading(false);
    }, 2500);
  };

  const resetAll = () => {
    setAdults("Adult");
    setRooms(roomData);
    setKids("Kids");
    setNoOfRoom("Rooms");
    setTotal(0);
    setIsLoading(false);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        adults,
        setAdults,
        setRooms,
        kids,
        setKids,
        total,
        setTotal,
        handleClick,
        isLoading,
        noOfRoom,
        setNoOfRoom,
        resetAll,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
