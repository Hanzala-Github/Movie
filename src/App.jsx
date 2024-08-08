import React, { useEffect } from "react";
import {
  Footer,
  // Header,
  MovieContainer,
  SingleMovie,
  SearchContainer,
} from "./components";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { Header2 } from "./components/index";

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <div className="App">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Header2 />
        <Routes>
          <Route exact path="/" element={<MovieContainer />} />
          <Route exact path="/:id" element={<SingleMovie />} />
          <Route exact path="/search" element={<SearchContainer />} />
        </Routes>
        <Footer />
      </SkeletonTheme>
    </div>
  );
}
