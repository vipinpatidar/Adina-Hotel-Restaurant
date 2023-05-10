import React from "react";
//import swiper react
import { Swiper, SwiperSlide } from "swiper/react";
//Swiper style
import "swiper/css";
import "swiper/css/effect-fade";
//required modules
import { EffectFade, Autoplay } from "swiper";
//images
import img1 from "../assets/img/heroSlider/11.jpg";
import img2 from "../assets/img/heroSlider/22.jpg";
import img3 from "../assets/img/heroSlider/7.jpg";
import img4 from "../assets/img/heroSlider/44.jpg";
import img5 from "../assets/img/heroSlider/8.jpg";
//Link
import { Link } from "react-router-dom";

// slider object

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: img1,
    btnText: "See Our Rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: img2,
    btnText: "See Our Rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: img3,
    btnText: "See Our Rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: img4,
    btnText: "See Our Rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: img5,
    btnText: "See Our Rooms",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[600px] lg:h-[860px] "
    >
      {slides.map((slide, idx) => (
        <SwiperSlide
          className="h-full relative flex justify-center items-center"
          key={idx}
        >
          <div className="z-20 text-white text-center px-3">
            <div className="uppercase font-tertiary tracking-[6px] mb-5">
              Just Enjoy and Relax
            </div>
            <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[60px] leading-tight mb-6">
              {slide.title}
            </h1>
            <Link to="/contact">
              <button className="btn btn-lg btn-primary mx-auto">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="absolute top-0 w-full h-full">
            <img
              className="object-cover h-full w-full"
              src={slide.bg}
              alt="img slider"
            />
          </div>
          {/* overlay */}
          <div className="absolute top-0 w-full h-full bg-black/70"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
