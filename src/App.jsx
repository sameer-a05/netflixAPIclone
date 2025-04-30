import React from "react";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import { Route, Routes } from "react-router-dom";
import MovieInfopage from "./pages/MoviesPage/MovieInfoPage";
import "./components/Movie/Movie.css";

const App = () => {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieInfopage />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
