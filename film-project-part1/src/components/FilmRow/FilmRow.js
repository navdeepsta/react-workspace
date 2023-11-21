import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FilmRow.css";

export default function FilmRow(props) {
  const [fave, setFave] = useState(false);
  const { id, title, release_date, poster_path } = props.film;
  const posterURL = `https://image.tmdb.org/t/p/w780${poster_path}`;

  const changeFave = () => {
    if (fave) {
      props.removeFavouriteFilm(id);
    } else {
      props.addFavouriteFilm(id);
    }
    setFave(!fave);
  };

  return (
    <div className="FilmRow">
      <img src={posterURL} alt={title + " film poster"} />
      <div className="film-summary">
        <h3>{title}</h3>
        <p>{new Date(release_date).getFullYear()}</p>
        <div className="actions">
          <button className="action" onClick={changeFave}>
            <span className="material-icons">
              {fave ? "remove_from_queue" : "add_to_queue"}
            </span>
          </button>
          {/* <button className='action' onClick={()=>props.showDetails(id)}>
          <span className='material-icons' >read_more</span>
        </button> */}
          <Link to={`/films/${id}`} className="action">
            <span className="material-icons">read_more</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
