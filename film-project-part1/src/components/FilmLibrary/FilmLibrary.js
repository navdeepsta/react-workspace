import { useState, useEffect } from "react";
//import FilmDetail from "../FilmDetail/FilmDetail";
import "./FilmLibrary.css";
import FilmRow from "../FilmRow/FilmRow";
import { Outlet } from "react-router-dom"

function FilmLibrary() {
  const [films, setFilms] = useState([]);
 // const [selectedFilm, setSelectedFilm] = useState(null);
  const [page, setPage] = useState(1);
  const [releaseYear, setReleaseYear] = useState("2022");
  const [favouriteFilms, setFavouriteFilms] = useState([]);
  const [activeList, setActiveList] = useState("all");
  const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const list = activeList === "all" ? films : favouriteFilms;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&primary_release_year=${releaseYear}&page=${page}`
    )
      .then((response) => response.json())
      .then((response) => setFilms((prev) => [...prev, ...response.results]))
      .catch((err) => console.error(err));
  }, [page, releaseYear]);

  // const showDetails = (filmId) => {
  //   const url = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${TMDB_API_KEY}`;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setSelectedFilm(response);
  //     })
  //     .catch((err) => console.error(err));
  // };
 
  const addFavouriteFilm = (filmId) => {
    const film = films.filter((film) => film.id === filmId);
    setFavouriteFilms((prev) => [...prev, film[0]]);
  };

  const removeFavouriteFilm = (filmId) => {
    const updatesFavouriteFilms = favouriteFilms.filter(
      (film) => film.id !== filmId
    );
    setFavouriteFilms(updatesFavouriteFilms);
  };

  return (
    <div className="FilmLibrary">
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <button
            className={
              "film-list-filter " + (activeList === "all" && "is-active")
            }
            onClick={() => setActiveList("all")}
          >
            ALL
            <span className="section-count">{films.length}</span>
          </button>
          <button
            className={
              "film-list-filter " + (activeList === "faves" && "is-active")
            }
            onClick={() => setActiveList("faves")}
          >
            FAVES
            <span className="section-count">{favouriteFilms.length}</span>
          </button>
        </div>

        <div className="release-year">
          <label htmlFor="release-year">Release Year </label>
          <select
            id="release-year"
            name=""
            value={releaseYear}
            onChange={(e) => {
              setFilms([]);
              setReleaseYear(e.target.value);
            }}
          >
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        {list.map((film) => (
          <FilmRow
            key={film.id}
            film={film}
           // showDetails={showDetails}
            activeList={activeList}
            addFavouriteFilm={addFavouriteFilm}
            removeFavouriteFilm={removeFavouriteFilm}
          />
        ))}
        {activeList === "all" && (
          <button
            className="load-more"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Load More
          </button> 
        )}
      </div>
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <Outlet />
        {/* <FilmDetail onSelectFilm={selectedFilm} /> */}
      </div>
    </div>
  );
}

export default FilmLibrary;
