import React from 'react'; //eslint-disable-line no-unused-vars
import {Link} from 'react-router-dom';
import "./Navigation.css";
import Scroller from "@enact/sandstone/Scroller";


function Navigation(){
    return (
    <div className="nav">
      <Link to="/">Comedy</Link>
      <Link to="/">Romance</Link>
      <Link to="/">Drama</Link>
      <Link to="/">Animation</Link>
      <Link to="/">Comedy-Romance</Link>
      <Link to="/">Sci-Fi</Link>
      <Link to="/">Action</Link>
      <Link to="/">Mystery</Link>
      <Link to="/">Adventure</Link>
      <Link to="/">Action-Comedy</Link>
      <Link to="/">Horror</Link>
      <Link to="/">Thriller</Link>
      <Link to="/">Crime</Link>
      <Link to="/">Fantasy</Link>
      <Link to="/">Superhero</Link>
      <Link to="UpNetflix">Netflix upcoming</Link>
      <Link to="EndNetflix">Netflix leaving</Link>
    </div>
  )
}

export default Navigation;