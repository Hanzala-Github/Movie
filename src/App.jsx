import React from "react";
import {
  Footer,
  Header,
  MovieContainer,
  SingleMovie,
  SearchContainer,
} from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function () {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<MovieContainer />} />
          <Route exact path="/:id" element={<SingleMovie />} />
          <Route exact path="/search" element={<SearchContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
