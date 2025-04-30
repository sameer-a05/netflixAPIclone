import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import Poster1 from "../assets/postertest.jpg";
import Poster2 from "../assets/postertest2.jpg";
import Poster3 from "../assets/postertest3.jpg";
import Poster4 from "../assets/postertest4.jpg";
import Poster5 from "../assets/postertest5.jpg";
import Poster6 from "../assets/postertest6.jpg";
import "../components/Movie/Movie.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Nav />
      <section id="movies">
        <div className="container movie__container">
          <div className="row movie__row">
            <div className="movie__list">
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
                    <Link to="/movies/tt3896198">
                      <button className="movie__button">Find Out More</button>
                    </Link>
                  </div>
                </figure>
              </div>

              <div className="movie">
                <figure className="movie__img--wrapper">
                  <img src={Poster2} alt="Avengers" className="movie__img" />
                  <div className="movie__overlay">
                    <h3 className="movie__info--title">Avengers</h3>
                    <Link to="/movies/tt0848228">
                      <button className="movie__button">Find Out More</button>
                    </Link>
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
                    <Link to="/movies/tt2250912">
                      <button className="movie__button">Find Out More</button>
                    </Link>
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
                    <Link to="/movies/tt5113044">
                      <button className="movie__button">Find Out More</button>
                    </Link>
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
                    <Link to="/movies/tt4633694">
                      <button className="movie__button">Find Out More</button>
                    </Link>
                  </div>
                </figure>
              </div>

              <div className="movie">
                <figure className="movie__img--wrapper">
                  <img src={Poster6} alt="Nope" className="movie__img" />
                  <div className="movie__overlay">
                    <h3 className="movie__info--title">Nope</h3>
                    <Link to="/movies/tt10954984">
                      <button className="movie__button">Find Out More</button>
                    </Link>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
