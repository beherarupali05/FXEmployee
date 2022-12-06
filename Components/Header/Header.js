import React from 'react';
import './Header.css';
import notify from './../Image/notify.png';

function Header() {
  return (
    <div className='Header pt-5' >
      <div className='container' >
        <div className='row' >
          <div id='Header-h4' className=' Header-img  d-flex justify-content-center mb-3' >
            <h4>👋 Attention,</h4>
            <h4 id='Header-Employers'  > Employers</h4>
          </div>
          <div className='Header-circle' >
            <h1 id='Header-h1-1' >Moonlighting is on the Rise, & </h1>
            <h1 id='Header-h1-2' >We’re doing something about it</h1>
            <p id='Header-p' className=' pb-3'>Finexus is developing an end-to-end solution that employers like you can use to track your employees'<br></br> past and present jobs, so that you are informed if they hold multiple positions.</p>

          </div>


          <div id='Header-input' className=' mb-3 d-flex justify-content-center' >
            <label>
              <input className='Header-input' type='text' placeholder='Full Name' ></input>
            </label>
            <label>
              <input className='Header-input' type='text' placeholder='Email Address ...' ></input>
            </label>

            <button className='Header-btn pe-3 ' >  
            {/* <i class="fa-light fa-bell"></i> */}
             Notify Me 
             </button>
          </div>

          <div className=' Header-p-2 d-flex ' >
            <p   style={{color:"#131E2A", fontWeight:"700"}} className='mt-3' >1,034 </p>
            <p   style={{color:"#131E2A99" , fontWeight:"600"}} className='mt-3' > People have aready signed up. Let’s Fix Moonlighting Together!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;