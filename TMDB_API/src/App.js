import React, {useEffect, useState} from "react";

import Movie from './components/Movie';

export const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e1d5657438192648dca986a759fc9c6a&page=1";
export const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=e1d5657438192648dca986a759fc9c6a&quey=";


function LandingPage() {
    const [movies, setMovies] = useState([]);
    
    useState(() => {
        fetch(FEATURED_API).then(res => res.json())
        .then(data=> {
            console.log(data);
            setMovies(data.results);
        });
    }, []);

    return (
        <div className="movie-container">
          <header>
            <input className="search" type="text" placeholder="Search..."/>
          </header>
            {movies.length > 0 && movies.map((movie) => (
                <Movie key={movie.id} {...movie} />
            ))}
        </div>

    )
}


export default LandingPage