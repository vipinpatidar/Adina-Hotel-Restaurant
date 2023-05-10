import React from "react";
//headless ui menu
import { Menu } from "@headlessui/react";
//icons
import { BsChevronDown } from "react-icons/bs";
//context

const NumOfPeo = ({ lists, text, dispatch, type, isModal }) => {
  return (
    <Menu
      as="div"
      className={`${
        isModal
          ? "w-[50%] bg-[#2d2d2d] py-4 -mt-2 text-[#777] font-[500]"
          : "w-full h-full bg-white"
      }  relative`}
    >
      {/* btn */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {text}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      {/* list items */}
      <Menu.Items
        as="ul"
        className={` ${
          isModal ? "bg-[#2d2d2d] text-white" : "bg-white"
        } absolute w-full flex flex-col z-40 h-[150px] overflow-auto`}
      >
        {lists.map((item, index) => (
          <Menu.Item
            onClick={() => dispatch({ type, value: item.name })}
            as="li"
            key={index}
            className="border-b py-3 last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
          >
            {item.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default NumOfPeo;
