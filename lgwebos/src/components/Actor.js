import React from "react";
import {Link} from 'react-router-dom';

export const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Actor = ({ character, profile_path, name }) =>
<div className="actor">
    <img src={(profile_path ? (IMG_API + profile_path) :
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80')}
        alt={character}/>
    <div>
        <h6>{character}</h6>
        <h6>{name}</h6>
    </div>
</div>;

export default Actor;