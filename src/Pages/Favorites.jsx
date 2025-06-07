import "../CSS/Favorites.css";
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../Components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length>0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites">
      <div className="favorites-empty">
        <h2>NO Favorite movie yet</h2>
        <p>start adding movies to Favorite</p>
      </div>
    </div>
  );
}

export default Favorites;

