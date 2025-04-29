import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import "./Nav.css";
import MovieBG from "../../assets/moviebackground.jpg";

const Nav = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const [{}, dispatch] = useStateValue();
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (search.trim() === "") return; // don't search empty
  
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        searchTerm: search,
      });
  
      navigate("/movies");
    };
  
    return (
      <>
      <section id="landing">
        <div className="movie__background">
          <figure className="movie__background--wrapper">
            <img src={MovieBG} alt="" className='movie__background--image' />
            <div className="movie__background--text">
              <h1 className="movie__background--title">
                Ticket <span className="primary">+</span>
              </h1>
              <h3 className="movie__background--para">
                With over 3000 movies on Ticket <span className="primary">+</span>, the possibilities are endless!
              </h3>
              <div className="movie__background--search">
                <form onSubmit={handleSearch} className="movie__input--wrapper form__submit">
                  <input 
                    type="text" 
                    className="movie__input" 
                    placeholder="Find a movie" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button className="movie__background--button" type="submit"></button>
                </form>
              </div>
            </div>
          </figure>
        </div>
      </section>
      </>
    )
  }
  
  export default Nav;
  