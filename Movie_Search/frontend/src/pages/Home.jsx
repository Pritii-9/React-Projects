import "../css/Home.css"
import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home(){

    const [searchQuery,  setSearchQuery]= useState("");

    const movies = [
        {id:1, title:"John Wick", release_date:"2020"},
        {id:2, title:"Terminator", release_date:"1999"},
        {id:3, title:"The Matrix", release_date:"1998"},
    ];

    const handleSearch = (e) =>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("-----");
    }
    return (
    <div className="home">
        <form action="" onSubmit={handleSearch} className="search-from">
            <input type="text" placeholder="Search for movies..." 
            className="search-input" id="" 
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">
                Search
            </button>
        </form>
        <div className="movies-grid">
            {movies.map( (movie) => movie.title.toLowerCase().startsWith(searchQuery) &&
             <MovieCard movie={movie} key={movie.id} />
             )}
        </div>
    </div>
    )
}

export default Home