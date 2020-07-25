import React from 'react';

const Example = () => {

    return(
      <nav
      className="navbar 
      sticky-top
      navbar-expand-lg
      navbar-dark
      "
      >
     <button 
     class="navbar-toggler"
     type="button" 
     data-toggle="collapse"
     data-target="#navbarNav" 
     aria-controls="navbarNav"
     aria-expanded="false"
     aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse 
      justify-content-center" 
      id="navbarNav">
     <ul class="navbar-nav p-2">
     <li class="nav-item"
     >
     <a class="nav-link disabled mr-5"
     href="/home">HOME </a>
     </li>

     <li class="nav-item">
     <a class="nav-link active mr-5" 
     href="/abot">ABOUT</a>
     </li>

     <li class="nav-item">
     <a class="nav-link active mr-5" 
     href="/t">ROOMS</a>
     </li>

     <li class="nav-item">
     <a class="nav-link active mr-5" 
     href="/s">
     SERVICES</a>
     </li>

     <li class="nav-item">
     <a class="nav-link active mr-5" 
     href="/g">
     GALLERY</a>
     </li>

     <li class="nav-item">
     <a class="nav-link active mr-5"
     href="/sd">
     SEE&DO</a>
     </li>

     <li class="nav-item">
     <a class="nav-link active mr-5" href="/cc">
     CONTACT</a>
     </li>
     </ul>
     <button class="btn btn-outline-light my-2 my-sm-0" id='button'
      type="submit">BOOK A ROOM</button> 
      </div> 
   </nav>
    )
}

export default Example;