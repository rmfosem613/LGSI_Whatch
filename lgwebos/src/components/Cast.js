import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { Grid, List, Image } from 'semantic-ui-react'
import LazyLoad from 'react-lazyload';
import genericPhoto from '../App/logo.png'
import CastSection from './cast2/Section/index';
import CastItem from './cast2/Item/'

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

export const CAST_API = "https://api.themoviedb.org/3/movie/"
export const CA_API = "/credits?api_key=e1d5657438192648dca986a759fc9c6a&language=en-US"

const fetch = require("node-fetch");

export function Cast(props){
    var ca_api = CAST_API + props.id.toString()+ CA_API;

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies(ca_api);
    }, []);

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.cast);
                console.log("cast: ",data.cast);
                console.log("profile: ", data.cast[0].profile_path);
            });
    }

    return(
        <div className="movie-container">
        {console.log(movies)}
                        {movies.length > 0 && movies.map((movie) => <CastSection
                            {movie} {...movie} />)}
    </div>
    )
}

export default Cast;