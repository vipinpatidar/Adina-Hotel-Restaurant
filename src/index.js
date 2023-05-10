import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RoomProvider from "./context/RoomContext";
import ResotProvider from "./context/RestoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ResotProvider>
    <RoomProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RoomProvider>
  </ResotProvider>
);
