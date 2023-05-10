import React from "react";
//image
import LogoWhite from "../assets/img/logo-white.svg";
//link
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary py-8 lg:py-12">
      <div className="container mx-auto text-white flex flex-col items-center gap-4 justify-between lg:flex-row">
        {/* Logo */}
        <Link to="/">
          <img width="185px" src={LogoWhite} alt="logo white" />
        </Link>
        <h3>Copyright &copy; {year} All Right Reserved</h3>
      </div>
    </footer>
  );
};

export default Footer;
