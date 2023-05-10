import React, { lazy, Suspense } from "react";
//Component
import Header from "./components/Header";
import Footer from "./components/Footer";

//spinier
import { SpinnerDotted } from "spinners-react";

//Pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
// import AllRooms from "./pages/AllRooms";

//React router
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
// import Contact from "./pages/Contact";
import Restaurant from "./pages/Restaurant";
//context
import { RestoData } from "./datas/RestoData";
import ScrollTop from "./components/ScrollTop";

const length = RestoData.length;

//lazy components
const AllRooms = lazy(() => import("./pages/AllRooms"));
const Contact = lazy(() => import("./pages/Contact"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/rooms"
        element={
          <Suspense
            fallback={
              <div className="h-screen fixed bottom-0 top-0 bg-black/80 w-full z-50 flex items-center justify-center">
                <SpinnerDotted color="white" size={70} />
              </div>
            }
          >
            <AllRooms />
          </Suspense>
        }
      />
      <Route path="/room/:id" element={<RoomDetails />} />
      <Route
        path="/restaurant"
        element={<Restaurant isHome={false} length={length} />}
      />
      <Route
        path="/contact"
        element={
          <Suspense
            fallback={
              <div className="h-screen fixed bottom-0 top-0 bg-black/80 w-full z-50 flex items-center justify-center">
                <SpinnerDotted color="white" size={70} />
              </div>
            }
          >
            <Contact />
          </Suspense>
        }
      />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
