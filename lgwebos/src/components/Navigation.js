import React, {useState} from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import Button from '@enact/ui/Button';
import "./Navigation.css";


function Navigation(){
    return (
    <div className="nav">
      <Link to="./components/Category"><Button>Comedy</Button></Link>
      <Link to="./App/Category.js"><Button>Romance</Button></Link>
      <Link to="./App/Category.js"><Button>Drama</Button></Link>
      <Link to="./App/Category.js"><Button>Animation</Button></Link>
      <Link to="./App/Category.js"><Button>Comedy-Romance</Button></Link>
      <Link to="./App/Category.js"><Button>Sci-Fi</Button></Link>
      <Link to="./App/Category.js"><Button>Action</Button></Link>
      <Link to="./App/Category.js"><Button>Mystery</Button></Link>
      <Link to="./App/Category.js"><Button>Adventure</Button></Link>
      <Link to="./App/Category.js"><Button>Action-Comedy</Button></Link>
      <Link to="./App/Category.js"><Button>Horror</Button></Link>
      <Link to="./App/Category.js"><Button>Crime</Button></Link>
      <Link to="./App/Category.js"><Button>Fantasy</Button></Link>
      <Link to="./App/Category.js"><Button>Superhero</Button></Link>
      <Link to="UpNetflix">Netflix upcoming</Link>
      <Link to="EndNetflix">Netflix leaving</Link>
    </div>
  )
}

export default Navigation;