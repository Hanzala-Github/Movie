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
          <Route path="/" element={<MovieContainer />} />
          <Route path="/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
