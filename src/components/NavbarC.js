import React from "react"
import "../styles.css"
const NavbarC=()=>{

    return (
        <div
         className="navbar 
         sticky-top
         navbar-expand-lg
         navbar-dark
         "
         >
        <button 
        className="navbar-toggler"
        type="button" 
        data-toggle="collapse"
        data-target="#navbarNav" 
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse 
         justify-content-center" 
         id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item"
        >
        <a className="nav-link disabled"
        href="/home">HOME </a>
        </li>

        <li className="nav-item">
        <a className="nav-link active" 
        href="/abot">ABOUT</a>
        </li>

        <li className="nav-item">
        <a className="nav-link active" 
        href="/t">ROOMS</a>
        </li>

        <li className="nav-item">
        <a className="nav-link active" 
        href="/s">
        SERVICES</a>
        </li>

        <li className="nav-item">
        <a className="nav-link active" 
        href="/g">
        GALLERY</a>
        </li>

        <li className="nav-item">
        <a className="nav-link active"
        href="/sd">
        SEE&DO</a>
        </li>

        <li className="nav-item">
        <a className="nav-link active" href="/cc">
        CONTACT</a>
        </li>
        </ul>
        <button className="btn btn-outline-light my-2 my-sm-0" id='button'
         type="submit">Search</button> 
         </div> 
      </div>
    )

}
export default NavbarC