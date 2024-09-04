import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//component
import PageHeader from "../components/PageHeader";
//image
import img from "../assets/img/restoImg/44.jpg";
import { imgArr } from "../datas/RestoData";
import BookForm from "../components/BookForm";
import RestoCard from "../components/RestoCard";
//context
import { RestoContex } from "../context/RestoContext";
import RestoModal from "../components/RestoModal";
//scrolltop
import ScrollToTop from "../components/ScrollToTop";
//loading
import { SpinnerDotted } from "spinners-react";

const Restaurant = ({ length, isHome }) => {
  const ctx = useContext(RestoContex);

  const location = useLocation();

  useEffect(() => {
    ctx.dispatch({
      type: "RESET",
      value: { people: "No. Of People", meal: "Meals", cuisine: "Cuisine" },
    });
    /* eslint-disable */
  }, [location]);
  /* eslint-enable */
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const newResodata = ctx.state?.restoData.slice(0, length);

  useEffect(() => {
    setTimeout(() => {
      ctx.dispatch({ type: "LOAD" });
    }, 2500);

    /* eslint-disable */
  }, [ctx.state.isLoading]);
  /* eslint-enable */

  return (
    <>
      <ScrollToTop />
      {/* overlay and loader */}
      {ctx?.state?.isLoading && (
        <div className="h-screen fixed bottom-0 top-0 bg-black/80 w-full z-50 flex items-center justify-center">
          <SpinnerDotted color="white" size={70} />
        </div>
      )}
      {!isHome && (
        <PageHeader
          img={img}
          pera="Food That Tuch Your Sole"
          heading="Restaurant"
        />
      )}
      <RestoModal clickHandler={clickHandler} isOpen={isOpen} />
      <div className="container mx-auto px-0 lg:px-0">
        {/* heading */}
        {!isHome && (
          <div className={`text-center my-10 px-6`}>
            <div className="font-tertiary uppercase text-[16px] lg:text-[20px] tracking-[6px]">
              Reserve A Table or Order Online
            </div>
            <h2 className="font-primary text-[40px] lg:text-[55px] mb-1">
              Delicious Food & Bar
            </h2>
            <p className="lg:px-[200px]">
              In our bid to deliver authentic, undiluted experiences, we have
              introduced a unique regional home-style dining experience. Always
              prepared with a local touch, the home-style cooking ensures that
              you maintain good health throughout your stay. And at the same
              time it gives you the opportunity to sample local delicacies.
            </p>
          </div>
        )}
        {/* grid */}
        {!isHome && (
          <div className="grid grid-cols-3 px-6 lg:grid-cols-6 gap-1 items-center py-3 ">
            {imgArr.map((img, idx) => (
              <div className="overflow-hidden" key={idx}>
                <img
                  src={img}
                  className="hover:scale-110 transition-all duration-300"
                  alt="gallery images"
                />
              </div>
            ))}
          </div>
        )}
        {/* check avliblity */}
        <div className={`${isHome ? "mt-16" : "mt-24"} px-5`}>
          <div className={`bg-accent/20  p-4 lg:shadow-xl lg:relative`}>
            <BookForm isResto={true} dispatch={ctx.dispatch} />
          </div>
        </div>
        {/* Card ////////////////////////////////////////////////////////////////// */}
        {!isHome && (
          <div className="mt-16 text-center">
            <h2 className="font-primary text-[40px] lg:text-[55px] mb-1">
              Book Your Favorite Table Now!
            </h2>
          </div>
        )}
        <div className="grid grid-cols-1 px-4 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0 my-16">
          {newResodata.length > 0 ? (
            newResodata.map((resto) => (
              <RestoCard
                key={resto.id}
                resto={resto}
                clickHandler={clickHandler}
              />
            ))
          ) : (
            <div className="flex flex-col items-center">
              <h2 className="font-secondary text-[28px]  mb-1">
                No Tables Available
              </h2>
              <p className="text-[16px]">
                Try with different filters Or check No. of People
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
