import "../CSS/MovieCard.css";

function MovieCard({movie}) {

    function OnFavoriteClick() {
        alert("clicked")
        
    }
    
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={OnFavoriteClick}>
                        💝
                    </button>
                </div>  
            </div>
             <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_Date}</p>
                </div>
        </div>
    );
}

export default MovieCard;