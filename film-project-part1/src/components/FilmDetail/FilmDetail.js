import './FilmDetail.css'

function FilmDetail(props) {
  const film = props.onSelectFilm;

  if(!film) return FilmDetailEmpty(); 
  const {title, poster_path, backdrop_path, overview, tagline} = film;
  const backdropURL = `https://image.tmdb.org/t/p/w1280${backdrop_path}`;
  const posterURL = `https://image.tmdb.org/t/p/w780${poster_path}`;
  return (
    <div className='FilmDetail is-hydrated'>
      <figure className='film-backdrop'>
        <img src={backdropURL} alt=  {title+' backdrop'} />
        <h1 className='film-title'>{title}</h1>
      </figure>

      <div className='film-meta'>
        {tagline}
        <p className='film-detail-overview'>
          <img src={posterURL} className='film-detail-poster' alt={title+' poster'} />
          {overview}
        </p>
      </div>
    </div>
  )
}

function FilmDetailEmpty() {
  return (
    <div className='FilmDetail'>
    <p>
      <i className='material-icons'>subscriptions</i>
      <span>No film selected</span>
    </p>

  </div>
  )
}

export default FilmDetail