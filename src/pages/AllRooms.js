import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
//images
import img from "../assets/img/heroSlider/5.jpg";
//components
import Rooms from "../components/Rooms";
import BookForm from "../components/BookForm";
//context
import { roomData } from "../datas/data";
import PageHeader from "../components/PageHeader";
import ScrollToTop from "../components/ScrollToTop";
//context
import { RoomContext } from "../context/RoomContext";
const AllRooms = () => {
  const { setAdults, setRooms, setKids } = useContext(RoomContext);

  const location = useLocation();

  useEffect(() => {
    setAdults("Adults");
    setKids("Kids");
    setRooms(roomData);
  }, [location, setAdults, setKids, setRooms]);

  return (
    <div>
      <ScrollToTop />
      <PageHeader
        img={img}
        pera="Just Enjoy and Relax"
        heading="Room & Suites"
      />
      <div className="container mx-auto relative">
        <div className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12">
          <BookForm isHome={true} />
        </div>
      </div>
      <Rooms isAllRooms="hidden" length={roomData.length} />
    </div>
  );
};

export default AllRooms;
