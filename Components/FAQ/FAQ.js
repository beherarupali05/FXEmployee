import React from 'react';
import './FAQ.css';
import Line2 from './../Image/Line 2.png';
import StatusBarImg from './../Image/StatusBar_Img.png';

function FAQ() {
    return (
        <div className='FAQ-container' >
        <div className='container' >

      <div className='pt-5 ' >
      <h5 className='ProductStatus ' >Product Status</h5>
      </div>

    <div className='ProductStatusBar p-3'>
   <div class="progress">
  <div  style={{width:"90%"}} class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
</div>
   
 <div className='StatusBar d-flex' >
 <div> 
   <img  className='m-3' src={StatusBarImg}alt=''/>
  <h5>Ideation</h5>
 </div>
<div>
  <img  className='m-3' src={StatusBarImg}alt=''/>
  <h5>Design</h5>
</div>
<div>
<img  className='m-3' src={StatusBarImg}alt=''/>
 <h5>Development</h5>
</div>
<div>
<img  className='m-3' src={StatusBarImg}alt=''/>
 <h5>User Testing</h5>
</div>
<div>
<img  className='m-3' src={StatusBarImg}alt=''/>
 <h5>Launch</h5>
</div>
 </div>
</div>
  




                <h3 id='FAQ-h3' className='p-5' >Frequently Asked Questions</h3>

             <div  className='FAQ-Accordion' >
                <div className='row' >
                    <div className='col-sm-6' >
                     <div className='FAQ-col-1 pb-5' >
                    <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item mb-3">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      What are the product goals?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      Our primary goal is to build a platform that will help employers verify the employment status of their employees. This way, if an employee is currently moonlighting for another company, his or her employer can be made aware and take appropriate action.
      </div>
    </div>
  </div>
  <div class="accordion-item mb-3">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      How will the product prevent moonlighting
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      We generate a unique ID for each member, and verify documents beforehand so the user cannot create multiple accounts. We will notify employers if their employees change jobs or if they are found to have multiple jobs.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      What about privacy and security?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      we value your safety, security and privacy above all else. you will have full control over who sees what information about you
      </div>
    </div>
  </div>
</div>
</div>
</div>



                    <div className='col pb-5' >
                    <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item mb-3">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
      How can employers benefit from the product?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFour">
      <div class="accordion-body">
      Identifying and eliminating moonlighting among employees will save employers valuable time and resources. In addition, they'll be able to keep track of all their employees—and receive notifications if anything suspicious happens with any employee.
      </div>
    </div>
  </div>

  <div class="accordion-item mb-3">
    <h2 class="accordion-header" id="panelsStayOpen-headingfifth">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefifth" aria-expanded="false" aria-controls="panelsStayOpen-collapsefifth">
      How does the product work?
      </button>
    </h2>
    <div id="panelsStayOpen-collapsefifth" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfifth">
      <div class="accordion-body">
      Our platform will link employees to their employers and notify directly to the employers upon finding multiple jobs or any sort of changes made to employees job status. employees’ existing jobs can be accesed by employers whereas all new job changes will be reported to them.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingSixth">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSixth" aria-expanded="false" aria-controls="panelsStayOpen-collapseSixth">
      When will the product launch?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSixth" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSixth">
      <div class="accordion-body">
      At present, the product is still in development. We will keep you informed of any progress we make.
      </div>
    </div>
  </div>
</div>
                    </div>
                </div>
                </div>




                <div className='mt-5 mb-5' >
                     <h1  style={{color:"#65788D"}} >Moonlighting is on the Rise, &</h1>
                     <h1  id='FAQ-h1' > We’re doing something about it</h1>
                </div>
               
               <div  className='FAQ-btn-div p-3 ' >
                <p className='FAQ-btn-p m-0' >Join the Waitlist</p>
               </div>
            </div>
        </div>
    )
}

export default FAQ;