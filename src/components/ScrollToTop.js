import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
//context
import { RoomContext } from "../context/RoomContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const { resetAll } = useContext(RoomContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    resetAll();
    //eslint-disable-next-line
  }, [pathname]);
};

export default ScrollToTop;
