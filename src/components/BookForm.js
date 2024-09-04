import React, { useContext } from "react";
//components
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
//context
import { RoomContext } from "../context/RoomContext";
import { RestoContex } from "../context/RestoContext";

import NumOfPeo from "./NumOfPeo";

const nums = [
  { name: "1 Person" },
  { name: "2 People" },
  { name: "3 People" },
  { name: "4 People" },
  { name: "5 People" },
  { name: "6 People" },
  { name: "7 People" },
  { name: "8 People" },
  { name: "9 People" },
];

const meals = [
  { name: "Breakfast" },
  { name: "Lunch" },
  { name: "Dinner" },
  { name: "Hi-Tea" },
  { name: "Drinks" },
];

const cuisine = [
  { name: "All" },
  { name: "Indian" },
  { name: "International" },
  { name: "Grill" },
  { name: "Barbeque" },
  { name: "Bar" },
  { name: "Asian Grill" },
  { name: "Local classics" },
  { name: "Cocktails" },
  { name: "Bakery & Patisserie" },
  { name: "Oriental" },
  { name: "Chinese" },
  { name: "Thai" },
  { name: "Sushi" },
  { name: "South Indian" },
  { name: "Japanese" },
];

const lists = [
  { name: "1 Adult" },
  { name: "2 Adults" },
  { name: "3 Adults" },
  { name: "4 Adults" },
];

const rooms = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }];

const BookForm = ({ isHome, isResto, dispatch }) => {
  const { handleClick, adults, setAdults, noOfRoom, setNoOfRoom } =
    useContext(RoomContext);
  const ctx = useContext(RestoContex);

  return (
    <form className="h-[300px] w-full lg:h-[70px] lg:-top-12">
      {isHome && (
        <div className="flex flex-col w-full h-full lg:flex-row">
          <div className="flex-1 border-r">
            <CheckIn text="Check In" />
          </div>
          <div className="flex-1 border-r">
            <CheckOut />
          </div>
          <div className="flex-1 border-r">
            <AdultsDropdown value={adults} setValue={setAdults} lists={lists} />
          </div>
          <div className="flex-1 border-r">
            <KidsDropdown />
          </div>
          <div className="flex-1 border-r">
            <AdultsDropdown
              value={noOfRoom}
              setValue={setNoOfRoom}
              lists={rooms}
            />
          </div>
          {/* Button */}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Check Now
          </button>
        </div>
      )}
      {isResto && (
        <div className="flex flex-col w-full h-full lg:flex-row">
          <div className="flex-1 border-r">
            <CheckIn text="Date" />
          </div>
          <div className="flex-1 border-r">
            <NumOfPeo
              lists={nums}
              type="NUMOFPEO"
              dispatch={ctx.dispatch}
              text={ctx.state?.numberOfPeople}
            />
          </div>
          <div className="flex-1 border-r">
            <NumOfPeo
              lists={meals}
              type="MEALS"
              dispatch={ctx.dispatch}
              text={ctx.state?.meals}
            />
          </div>
          <div className="flex-1 border-r">
            <NumOfPeo
              lists={cuisine}
              type="CUISINE"
              dispatch={ctx.dispatch}
              text={ctx.state?.cuisine}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => dispatch({ type: "FILTER", value: e })}
          >
            Check Availability
          </button>
          <button
            type="button"
            style={{ backgroundColor: "#000" }}
            className="btn-reset btn-secondary"
            onClick={(e) =>
              dispatch({
                type: "RESET",
                value: {
                  people: "Number Of People",
                  meal: "Meals",
                  cuisine: "Cuisine",
                },
              })
            }
          >
            Reset
          </button>
        </div>
      )}
    </form>
  );
};

export default BookForm;
