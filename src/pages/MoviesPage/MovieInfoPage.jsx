import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../components/Movie/Movie.css";
import Poster1 from "../../assets/postertest.jpg";
import Poster2 from "../../assets/postertest2.jpg";
import Poster3 from "../../assets/postertest3.jpg";
import Poster4 from "../../assets/postertest4.jpg";
import Poster5 from "../../assets/postertest5.jpg";
import Poster6 from "../../assets/postertest6.jpg";

const MovieInfopage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchMovie(movieId) {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=28c39af6&i=${movieId}&plot=full`
      );
      setMovie(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchMovie(id);
  }, [id]);

  return (
    <div className="movieinfopage">
      <Sidebar />
      <div className="container movieinfo__container">
        <div className="row movieinfo__row">
          {!loading ? (
            <div className="movieinfo">
              <figure className="movieinfo__img">
                <img src={movie.Poster} alt={movie.Title} />
              </figure>
              <div className="movieinfo__text">
                <h1>{movie.Title}</h1>
                <div className="movieinfo__info">
                  <p>{movie.Released}</p>
                  <p>
                    <b>.</b>
                  </p>
                  <p>{movie.Runtime}</p>
                  <p>
                    <b>.</b>
                  </p>
                  <p>{movie.imdbRating}/10</p>
                </div>
                <h3>Overview:</h3>
                <p>{movie.Plot}</p>
                <button className="movieinfo__button no-cursor">
                  <i className="fas fa-play"></i> Watch
                </button>
              </div>
            </div>
          ) : (
            <div className="movieinfo">
              <div className="skeleton skeleton__img"></div>
              <div className="movieinfo__text">
                <div className="skeleton skeleton__title"></div>
                <div className="movieinfo__info">
                  <div className="skeleton skeleton__text"></div>
                  <p>
                    <b>.</b>
                  </p>
                  <div className="skeleton skeleton__text"></div>
                  <p>
                    <b>.</b>
                  </p>
                  <div className="skeleton skeleton__text"></div>
                </div>
                <h3>Overview:</h3>
                <div className="skeleton skeleton__para"></div>
                <div className="skeleton skeleton__para"></div>
                <div className="skeleton skeleton__para"></div>
                <div className="skeleton skeleton__para"></div>
                <div className="skeleton skeleton__para skeleton__para--half"></div>
                <div className="skeleton skeleton__button"></div>
              </div>
            </div>
          )}

          <div className="movieinfo__recommended">
            <h1>Recommended Movies</h1>
            <div className="movieinfo__recommended--list">
              <div className="movie">
                <figure className="movie__img--wrapper">
                  <img
                    src={Poster1}
                    alt="Guardians of the Galaxy Vol 2"
                    className="movie__img"
                  />
                  <div className="movie__overlay">
                    <h3 className="movie__info--title">
                      Guardians of the Galaxy Vol 2
                    </h3>
                    <a href="/movies/tt3896198">
                      <button className="movie__button">Find Out More</button>
                    </a>
                  </div>
                </figure>
              </div>
              <div className="movie">
                <figure className="movie__img--wrapper">
                  <img src={Poster2} alt="Avengers" className="movie__img" />
                  <div className="movie__overlay">
                    <h3 className="movie__info--title">Avengers</h3>
                    <a href="/movies/tt0848228">
                      <button className="movie__button">Find Out More</button>
                    </a>
                  </div>
                </figure>
              </div>
              <div className="movie">
                <figure className="movie__img--wrapper">
                  <img
                    src={Poster3}
                    alt="Spider-Man: Homecoming"
                    className="movie__img"
                  />
                  <div className="movie__overlay">
                    <h3 className="movie__info--title">
                      Spider-Man: Homecoming
                    </h3>
                    <a href="/movies/tt2250912">
                      <button className="movie__button">Find Out More</button>
                    </a>
                  </div>
                </figure>
              </div>
              <div className="movie">
                <figure className="movie__img--wrapper">
                  <img
                    src={Poster4}
                    alt="Minions: Rise of Gru"
                    className="movie__img"
                  />
                  <div className="movie__overlay">
                    <h3 className="movie__info--title">Minions: Rise of Gru</h3>
                    <a href="/movies/tt5113044">
                      <button className="movie__button">Find Out More</button>
                    </a>
                  </div>
                </figure>
              </div>
              <div className="movie">
                <figure className="movie__img--wrapper">
                  <img
                    src={Poster5}
                    alt="Spider-Man: Into the Spider-Verse"
                    className="movie__img"
                  />
                  <div className="movie__overlay">
                    <h3 className="movie__info--title">
                      Spider-Man: Into the Spider-Verse
                    </h3>
                    <a href="/movies/tt4633694">
                      <button className="movie__button">Find Out More</button>
                    </a>
                  </div>
                </figure>
              </div>
              <div className="movie">
                <figure className="movie__img--wrapper">
                  <img src={Poster6} alt="Nope" className="movie__img" />
                  <div className="movie__overlay">
                    <h3 className="movie__info--title">Nope</h3>
                    <a href="/movies/tt10954984">
                      <button className="movie__button">Find Out More</button>
                    </a>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfopage;
