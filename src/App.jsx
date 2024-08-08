import React from "react";
import {
  Footer,
  // Header,
  MovieContainer,
  SingleMovie,
  SearchContainer,
  Cursor,
} from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { Header2 } from "./components/index";

export default function App() {
  return (
    <div className="App">
      <Cursor />
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <BrowserRouter>
          <Header2 />
          <Routes>
            <Route exact path="/" element={<MovieContainer />} />
            <Route exact path="/:id" element={<SingleMovie />} />
            <Route exact path="/search" element={<SearchContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}
