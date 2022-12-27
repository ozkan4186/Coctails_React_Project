import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/" element={<CocktailList/>} />
      </Routes>
    </div>
  );
};

export default AppRouter;
