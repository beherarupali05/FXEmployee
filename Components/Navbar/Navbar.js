import React from 'react';
import './Navbar.css';



function Navbar() {
  return (
    <div  >
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="navbar-brand" href="#">FX Employee</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav flex-grow-1">
              <li class="nav-item">
                <a class="nav-link " href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Timeline</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">How it works</a>
              </li>
            </ul>
            
          <div className='Nav-btn mt-3' >
           <p  className='Navbar-p mt-3 me-3' >Join the Waitlist</p>
           </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;