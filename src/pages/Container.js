import React, { useContext } from "react";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import Build from "./Build";
import Domes from "./Domes";
import Event from "./Event";
import Homepage from "./HomePage";
import More from "./More";
import Shop from "./Shop";
import { Routes, Route, BrowserRouter, useRoutes } from "react-router-dom";

export default function Container() {
  // let element = useRoutes([
  //     {path: '/', element: <Homepage />},
  //     {path: '/about', element: <AboutUs />},
  // ]);
  // return element;
  return (
    <div className="contain">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/event" element={<Event />} />
          <Route path="/domes" element={<Domes />} />
          <Route path="/build" element={<Build />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
