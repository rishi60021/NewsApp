import React from 'react'
import "../App.css";
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({onSearch}) => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
    const[serachitem,setsearchitem]=useState("");

    const handlechange=(e)=>{
      
setsearchitem(e.target.value);
    }
    const handlesearch=(e)=>{
      e.preventDefault();
      onSearch(serachitem);
    }
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
}, []);
const navstyle=({isActive})=>{
return {
fontWeight:isActive?'bold':'normal',
color:isActive?'red':'blue',
textDecoration:isActive?"underline":"none",
}
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
   <img src="./Images/news.jpeg" className="navbar-logo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <NavLink to="/login" style={navstyle}>Login</NavLink>
        </li>
        <span className="navbar-text" style={{color:"orange"}}>
              {currentTime}
         </span>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={serachitem} onChange={handlechange}/>
        <button className="btn btn-outline-success" type="submit" onClick={handlesearch}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
