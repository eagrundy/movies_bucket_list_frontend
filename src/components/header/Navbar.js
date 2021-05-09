import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="navbar">
    <ul className="nav-ul">
        <li className="nav-li"><Link to="/" className="a-class">Home</Link></li>
        <li className="nav-li"><Link to="/about" className="a-class">About</Link></li>
        <li className="nav-li"><Link to="/movies" className="a-class">Movies</Link></li>
        <li className="nav-li"><Link to="/movies/new" className="a-class">Add New Movie</Link></li>
    </ul>
  </div>  
  
  
)
export default Navbar;