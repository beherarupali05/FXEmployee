import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='Footer-container p-5' >
      <div className='container' >
        <div className='row' >
          <div className='col-lg-4' >
            <h3 id='footer-h3'  >FX Employee</h3>
          </div>

          <div className='col-lg-4' >
            <ul>
              <li>About</li>
              <li>Timeline</li>
              <li>Contact</li>
              <li>How it works</li>
            </ul>
          </div>

          <div className='col-lg-4' >
            <a href='#' > contact@fxemployees.com</a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer;