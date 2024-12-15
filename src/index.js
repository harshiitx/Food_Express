import React, { useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import ContactUS from "./Components/ContactUs";
import Dish from "./Components/Dish";
import PathError from "./Components/PathError";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router";




const App = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  { path:"/",
    element:<App/>,
    children:[
    {path:"/",element:<Body/>},
    {path:"/about",element:<About/>},
    {path:"/contact",element:<ContactUS/>},
    {path:"/feedback",element:<Feedback/>},
    {path:"/dishes/:itemId",element:<Dish/>}
  ],
  errorElement:<PathError/>
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);
