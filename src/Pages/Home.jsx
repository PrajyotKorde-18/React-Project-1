 import { useState } from "react";
import MovieCard from "../Components/MovieCard";

 function Home(){

    const [searchQuery,setSearchQuery]=useState("")

    const movies=[
        {id:1,title:"John Wick",release_Date:"2020"},
        {id:2,title:"Matrix",release_Date:"2004"},
        {id:3,title:"Terminator",release_Date:"2003"},
        {id:4,title:"Avatar",release_Date:"2024"},
    ];

    const handleSearch=(e)=>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("------")
    };
        
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search0form" >
                <input type="text" 
                placeholder="search for movies ... "
                className="search-input"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                />
            <button type="submit">Submit</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie)=>(
                    <MovieCard movie={movie} key={movie.id}/>                 
                ))}

            </div>
        </div>
    );
 }

 export default Home