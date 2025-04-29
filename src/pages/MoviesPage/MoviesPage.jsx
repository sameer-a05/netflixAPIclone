import React, { useEffect, useState } from "react";
import "../../components/Movie/Movie.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchImg from "../../assets/search.svg";
import axios from "axios";
import Movie from "../../components/Movie/Movie";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Moviespage = () => {
  const [{ searchTerm }, dispatch] = useStateValue();
  const [search, setSearch] = useState("");
  const [searchMade, setSearchMade] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      searchMovies();
    }
  }, [searchTerm]);

  async function searchMovies() {
    try {
      setLoading(true);
      setSearchMade(true);
      const response = await axios.get(
        `https://omdbapi.com/?type=movie&apikey=28c39af6&s=${searchTerm}`
      );
      const movies = response.data.Search?.slice(0, 6) || [];
      setMovies(movies);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setLoading(false);
    }
  }

  async function movieSearch(e) {
    e.preventDefault();
    setLoading(true);
    setSearchMade(true);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      searchTerm: search,
    });
  }

  return (
    <div className="moviepage">
      <Sidebar />
      <div className="moviepage__movies">
        <form className="moviepage__search" onSubmit={movieSearch}>
          <div className="moviepage__search--input">
            <input
              type="text"
              value={search}
              placeholder="Search for a movie"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className="moviepage__search--button">
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>

        {loading === false && searchMade === false && (
          <figure className="moviepage__img--wrapper">
            <img src={SearchImg} alt="Search Placeholder" />
            <h1>Waiting for your Search...</h1>
          </figure>
        )}

        {loading === true && (
          <div className="moviepage__loading">
            <i className="fas fa-spinner fa-spin"></i>
          </div>
        )}

        {loading === false && searchMade === true && (
          <section id="movies">
            <div className="container movie__container">
              <div className="row movie__row">
                <div className="movies__content">
                  <div className="movie__list moviepage__movies--list">
                    {movies.map((movie) => (
                      <Movie
                        image={movie.Poster}
                        text={movie.Title}
                        key={movie.imdbID}
                        id={movie.imdbID}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Moviespage;
