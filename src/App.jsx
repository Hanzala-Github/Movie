import React from "react";
import {
  DownloadPop,
  Footer,
  Header,
  MovieContainer,
  SingleMovie,
} from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { SingleMovie } from "./components/SingleMovie/SingleMovie";

export default function () {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<MovieContainer />} />
          <Route exact path="/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
