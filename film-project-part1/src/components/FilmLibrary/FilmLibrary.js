import { useState } from "react";
import FilmDetail from "../FilmDetail/FilmDetail";
import "./FilmLibrary.css";
import FilmRow from "../FilmRow/FilmRow";
import TMBD from "../../TMDB";

function FilmLibrary() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [favouriteFilms, setFavouriteFilms] = useState([]);
  const [activeList, setActiveList] = useState("all");
  const { films } = TMBD;
  const list = activeList === "all" ? films : favouriteFilms;


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
        {list.map((film) => (
          <FilmRow
            key={film.id}
            film={film}
            onSelectFilm={setSelectedFilm}
            activeList={activeList}
            addFavouriteFilm={addFavouriteFilm}
            removeFavouriteFilm={removeFavouriteFilm}
          />
        ))}
      </div>
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <FilmDetail onSelectFilm={selectedFilm} />
      </div>
    </div>
  );
}

export default FilmLibrary;