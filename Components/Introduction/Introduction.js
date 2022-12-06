import React from 'react';
import './Introduction.css';
import Dashboard from '../Image/Dashboard.png';
import Line4 from './../Image/Line 4.png';

function Introduction() {
  return (
    <div className='Intro-container' >
      <div className='container' >
        <div className='row' >
          <div className='Intro-img mt-5 pt-5' >
            <img id='dashboard-img' class='img-fluid' src={Dashboard} alt='' />
          </div>

          <div className='p-5' >
           
              <h3>Introducing  <span><b className='ms-1' >FX Employees</b></span></h3>
             
              <h4 id='Intro-h4' >Once the product is ready, you will be able to</h4>
              <p className=' Intro-heading ' >&nbsp;</p>
           
          </div>




          <div className='row  pt-5 pb-5 ' >
            <div className='col-lg-8 ' >
              <div id='card-1' class="card p-3 mb-5 ms-3" >
                <div class="row g-0">
                  <div class="col-lg-6 col-md-6">
                    <div className='card-1 ps-3' >
                      <button class="Intro-btn-1 mb-3 ">For Employers</button>
                      <p class="card-text">Till now, employers have been struggling<br></br> to verify the backgrounds of potential<br></br>employees and make sure they don't hold<br></br> multiple jobs.<br></br><br></br>
                        We are develping a web portal that<br></br> manages, tracks and verifies your current<br></br>and future employees.</p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 ">
                    <div class="card-body">
                      <ol>
                        <li>Get notified of employees’<br></br> Past & current job activities</li>
                        <li>Verify backgrounds faster</li>
                        <li>Manage & track employees</li>
                        <li>Find & Hire candidates</li>
                        <li>Save resources & time by<br></br> Eliminating Moonlighting</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            <div className='col-lg-4 ' >
              <div id='card-2' class="card ms-3 " >
                <div class="card-body">
                  <button class="Intro-btn-2 mb-3">For Employees</button>
                  <p class="card-text">A one-time process to verify your<br></br> employee background and make the<br></br> hiring process faster.</p>
                  <ol >
                    <li>Get Hired faster</li>
                    <li>Keep your background clean</li>
                    <li>Find job opportunities</li>
                  </ol>
                </div>
              </div>
            </div>


          </div>


        </div>
      </div>
    </div>

  )
}

export default Introduction;