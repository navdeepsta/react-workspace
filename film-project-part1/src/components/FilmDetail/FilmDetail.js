import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FilmDetailEmpty from "./FilmDetailEmpty";
import "./FilmDetail.css";

function FilmDetail() {
  const [filmDetail, setFilmDetail] = useState(null);
  const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const { filmId } = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${TMDB_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setFilmDetail(response);
      })
      .catch((err) => console.error(err));
  }, [filmDetail]);

  if(filmDetail) {
    const { title, poster_path, backdrop_path, overview, tagline } = filmDetail;
    const backdropURL = `https://image.tmdb.org/t/p/w1280${backdrop_path}`;
    const posterURL = `https://image.tmdb.org/t/p/w780${poster_path}`;
    return (
      <div className="FilmDetail is-hydrated">
        <figure className="film-backdrop">
          <img src={backdropURL} alt={title + " backdrop"} />
          <h1 className="film-title">{title}</h1>
        </figure>
  
        <div className="film-meta">
          {tagline}
          <p className="film-detail-overview">
            <img
              src={posterURL}
              className="film-detail-poster"
              alt={title + " poster"}
            />
            {overview}
          </p>
        </div>
      </div>
    );
  }else{
    return <FilmDetailEmpty />
  }
}

export default FilmDetail;
