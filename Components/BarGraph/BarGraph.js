import React from 'react';
import './BarGraph.css';
import Img from './../Image/Img.png';
import Chart from './../Image/Chart.png';
import Infosys from './../Image/Infosys.png';


function BarGraph() {
  return (
    <div className='BarGraph-container  pb-5' >
      <div className='container' >
        <div className=' BarGraph-heading  d-flex justify-content-center pt-5' >
          <div className='BarGraph-circle d-flex' >
            <h1 id='BarGraph-h1' >Companies like</h1>
            <h1 className='BarGraph-h1 ms-3 ' >Wipro & HappiestMinds</h1>
          </div>
        </div>
        <h1 className='BarGraph-h1'>are dealing with Moonlighting.</h1>
        <h3 id='BarGraph-h3' className='m-3 pb-5' >How do you make sure yours is safe?</h3>




        <div className='row' >
          <div className='col-lg-4 mb-5' >
            <div class="BarGraph-card p-3">
              <img src={Img} class="img-fluid" alt="..." />
              <div class="card-body">
                <h4 className='card-h4 mt-3 mb-3' >What Is Moonlighting? <br></br>Here’s Why Wipro Fired 300<br></br> Employees For Doing It</h4>
                <p class="card-text-Graph">Read more at Outlookindia </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mb-5' >
            <div class="BarGraph-card p-3 ">
              <img src={Infosys} class="img-fluid" alt="..." />
              <div class="card-body">
                <h4 className='card-h4 mt-3 mb-3'>Moonlighting unacceptable,<br></br> action taken against few:<br></br> Happiest Minds</h4>
                <p class="card-text-Graph ">Read more at Outlookindia </p>
              </div>
            </div>
          </div>


          <div className='col ' >
            <div className='BarGraph-col-2' >
              <div class="BarGraph-card  p-3">

                <h4 className='card-h4 mt-3 mb-3' >After Wipro, Now Infosys <br></br>Confirms Sacking Employees <br></br>For Moonlighting</h4>
                <p class="card-text-Graph ">Read more at Outlookindia</p>

              </div>

              <div class="BarGraph-card p-3">
                <h4 className='card-h4 mt-3 mb-3' >Moonlighting and its <br></br>negative impact on the<br></br> employee and the employer</h4>
                <p class="card-text-Graph ">Read more at Outlookindia </p>
              </div>
            </div>
          </div>
        </div>


        <div className='graph-container  mt-3' >
          <div className='row' >
            <div className='col-lg-6' >
              <div className='graph-div p-5 mt-5' >
                <h2 className='mb-3' id='BarGraph-h2' >Moonlighting Reports<br></br> over the years</h2>
                <p id='BarGraph-p' >The following graph shows how the number of people <br></br>doing second jobs has increased over the years, as well<br></br> as our estimate that this trend will continue with<br></br> recently enacted work-from-home policies.</p>
              </div>
            </div>
            <div className='col-lg-6' >
              <img className='img-fluid p-5' src={Chart} alt='' />
            </div>
          </div>
        </div>


        <h3 id='BarGraph-waitlist' className='mt-5' >Take precautions, Join the waitlist</h3>
        <div  className='BarGraph-btn-div p-3 ' >
                <p className='BarGraph-btn-p m-0' >Join the Waitlist</p>
               </div>
      </div>
    </div>
  )
}

export default BarGraph;