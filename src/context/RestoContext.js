import { createContext, useReducer } from "react";

//Resot data
import { RestoData } from "../datas/RestoData";

export const RestoContex = createContext({
  state: {},
  dispatch: () => {},
  initalValue: {},
});

const initalValue = {
  numberOfPeople: "Number of People",
  meals: "Meals Type",
  cuisine: "Cuisine",
  restoData: RestoData,
  isLoading: false,
};

const reducer = (prevState, action) => {
  if (action.type === "NUMOFPEO") {
    return { ...prevState, numberOfPeople: action.value };
  } else if (action.type === "MEALS") {
    return { ...prevState, meals: action.value };
  } else if (action.type === "CUISINE") {
    return { ...prevState, cuisine: action.value };
  } else if (action.type === "FILTER") {
    action.value.preventDefault();
    prevState.isLoading = true;

    const filterArr = initalValue.restoData.filter((data) => {
      if (prevState.cuisine === "All") {
        return 9 >= +data.maxPerson;
      } else {
        return (
          +data.maxPerson >= +prevState.numberOfPeople.slice(0, 1) &&
          data.cuisine.toLowerCase().indexOf(prevState.cuisine.toLowerCase()) >=
            0
        );
      }
    });

    // +data.maxPerson <= +prevState.numberOfPeople.slice(0, 1)
    return { ...prevState, restoData: filterArr };
  } else if (action.type === "RESET") {
    return {
      ...prevState,
      numberOfPeople: action.value.people,
      meals: action.value.meal,
      cuisine: action.value.cuisine,
      restoData: RestoData,
    };
  } else if (action.type === "LOAD") {
    return { ...prevState, isLoading: false };
  } else {
    return prevState;
  }
};

const ResotProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalValue);

  const context = {
    state,
    dispatch,
  };

  return (
    <RestoContex.Provider value={context}>{children}</RestoContex.Provider>
  );
};

export default ResotProvider;
