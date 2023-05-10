import React from "react";
//component
import Rooms from "../components/Rooms";
import BookForm from "../components/BookForm";
import HeroSlider from "../components/HeroSlider";
import ScrollToTop from "../components/ScrollToTop";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";
import NewLetter from "../components/NewLetter";
import Reviews from "../components/Reviews";
//icons
import { MdOutlineFoodBank } from "react-icons/md";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <HeroSlider />
      {/* form */}
      <div className="container mx-auto relative px-6">
        <div className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12">
          <BookForm isHome={true} />
        </div>
      </div>
      {/* Rooms */}
      <Rooms length={6} />
      {/* Restaurants */}
      <div className="mt-8 mb-28">
        <div className={`text-center px-2`}>
          <div className="font-tertiary uppercase text-[16px] lg:text-[20px] tracking-[3px] lg:tracking-[6px]">
            Reserve A Table or Order Online
          </div>
          <h2 className="font-primary text-[40px] lg:text-[55px] mb-1">
            Delicious Food & Bar
          </h2>
          <Link to="/restaurant">
            <button className="btn btn-primary mx-auto mb-10 py-3">
              SEE ALL Tables
            </button>
          </Link>
        </div>
        <Restaurant length={6} isHome={true} />
      </div>
      {/* testmonials */}
      <div className="container mx-auto px-6 overflow-hidden text-center mb-24">
        <h3 className="text-xl font-primary font-semibold tracking-[1px] mb-0 flex gap-x-2 items-center justify-center">
          <span>
            <MdOutlineFoodBank className="text-accent" />
          </span>{" "}
          <span className="text-accent/90 uppercase">Reviws</span>
        </h3>
        <h2 className="font-primary text-3xl lg:text-[50px] my-1 lg:my-7">
          What Our Clients Says
        </h2>
        <p className="font-secondary mb-8 lg:mb-14 lg:px-32">
          Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin
          dolor eget neque viverra, sed interdum metus interdum. Cras lobortis
          pulvinar dolor, sit amet ullamcorper dolor iaculis vel
        </p>
        <Reviews />
      </div>
      <NewLetter />
    </>
  );
};

export default Home;
