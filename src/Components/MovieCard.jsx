import "../CSS/MovieCard.css";
import { useMovieContext } from "../Contexts/MovieContext";
import { useNavigate } from "react-router-dom";

function MovieCard({movie}) {

    const { isFavorites, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite=isFavorites(movie.id)
     const navigate = useNavigate();

    function OnFavoriteClick(e) {
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
            else {
                addToFavorites(movie);
                navigate("/favorites");
            }
        
    }
    
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite?"active":""}`} onClick={OnFavoriteClick}>
                        😻
                    </button>
                </div>  
            </div>
             <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date?.split("-")[0]}</p>
                </div>
        </div>
    );
};

export default MovieCard;