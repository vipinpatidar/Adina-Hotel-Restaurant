import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollTop = () => {
  const [scrollPosition, setPosition] = useState(0);

  /*Depends on what will you do with the scroll position, but generally, if you want to perform some DOM measurements (like getting scroll coordinates) it might be better to useLayoutEffect since it runs after DOM mutations have been performed but BEFORE the node gets painted on the screen. Hence if you will further mutate the DOM using that data, you will avoid stuff like screen flickering */

  useEffect(() => {
    function updatePosition() {
      setPosition(window?.scrollY);
    }

    window.addEventListener("scroll", updatePosition, { passive: true });
    //  updatePosition();
    return () =>
      window.removeEventListener("scroll", updatePosition, { passive: true });
  }, []);

  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      title="Go to Top"
      className={`lg:w-12 lg:h-12 w-8 h-8 rounded-full bg-accent hover:bg-accent-hover fixed right-2 bottom-16 lg:right-10  flex items-center justify-center cursor-pointer ${
        scrollPosition <= 450 ? "hidden" : ""
      }`}
      onClick={scrollHandler}
    >
      <span className="text-xl lg:text-2xl text-white ">
        <MdKeyboardArrowUp />
      </span>
    </div>
  );
};

export default ScrollTop;
