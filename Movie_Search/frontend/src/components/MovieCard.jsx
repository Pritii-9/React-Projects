
/* eslint-disable react/prop-types */
import "../css/MovieCard.css"
const MovieCard = ({ movie }) => {
    const onFavoriteClick = () => {
      alert("clicked");
      // console.log(`${movie.title} was added to favorites`);
    };
  
    return (
     <div className="movie-card">
         <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            {" "}
            💟
          </button>
        </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
     </div>
      
    );
  };
  
  export default MovieCard;
  