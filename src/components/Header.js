import React, { useState, useEffect } from "react";
//logo
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";
//Link
import { NavLink } from "react-router-dom";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [isDown, setIsDown] = useState("bg-transparent py-8 translate-y-0");
  const [lastPosition, setLastPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        if (window.scrollY < lastPosition) {
          setIsDown("bg-white py-6 shadow-lg translate-y-0");
        } else if (window.scrollY > lastPosition) {
          setIsDown(
            "bg-white py-6 shadow-lg -translate-y-16 lg:-translate-y-24"
          );
        }
        setHeader(true);
      } else {
        setIsDown("bg-transparent py-8 translate-y-0");
        setHeader(false);
      }
      setLastPosition(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [header, lastPosition]);

  return (
    <header
      className={`${isDown} fixed z-50 w-full translate-y-0 transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* logo */}
        <NavLink to="/">
          {header ? (
            <img className="w-[160px]" src={LogoDark} alt="logo dark" />
          ) : (
            <img className="w-[160px]" src={LogoWhite} alt="logo white" />
          )}
        </NavLink>
        {/* nav */}
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 font-tertiary tracking-[3px] text-[15px] item-center uppercase lg:gap-x-8  font-[500] `}
        >
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "text-accent" : "hover:text-accent transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/rooms"
            className={(navData) =>
              navData.isActive ? "text-accent" : "hover:text-accent transition"
            }
          >
            Rooms
          </NavLink>
          <NavLink
            to="/restaurant"
            className={(navData) =>
              navData.isActive ? "text-accent" : "hover:text-accent transition"
            }
          >
            Restaurant
          </NavLink>
          <NavLink
            to="/contact"
            className={(navData) =>
              navData.isActive ? "text-accent" : "hover:text-accent transition"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
