import React, {useState} from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import Button from '@enact/ui/Button';
import "./Navigation.css";


function Navigation(){
    return (
    <div className="nav">
      <Link to='/'>Home</Link>
      <Link to='/Tv'>Tv</Link>
      <Link to="/UpNetflix">Netflix upcoming</Link>
      <Link to="/EndNetflix">Netflix leaving</Link>
    </div>
  )
}

export default Navigation;