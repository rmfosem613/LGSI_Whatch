import React, { useEffect, useState } from "react";
import Actor from "./Actor";

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

export const CAST_API = "https://api.themoviedb.org/3/"
export const CA_API = "/credits?api_key=e1d5657438192648dca986a759fc9c6a&language=en-US"


const fetch = require("node-fetch");

export function Cast({id, params}){
    var ca_api = CAST_API + params.toString()+"/"+id.toString()+ CA_API;

        const [movies, setMovies] = useState([]);
    
        useEffect(() => {
            getMovies(ca_api);
        }, []);
    
        const getMovies = (API) => {
            fetch(API)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.cast);
                });
        }

    return(
        <div>
            <br></br>
            <h2>Cast</h2>
            <br></br>
            <div className="movie-container">
            { movies.length>0 && movies.map((movie, index) => {
                return index < 8 ? <Actor key={movie.id} {...movie} /> : null;
            })}
        </div>
    </div>
    )
}

export default Cast;