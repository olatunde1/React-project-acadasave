import React from 'react'
import "./packages.css"

const Packages = () => {
  return (
    <section className='packages'>
      <div className='container'>
        <h2>Packages</h2>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div class="card">
            <div class="card-header-color"><div class="card-header ">Student</div></div>
            <div class="card-body text-success">
            <div class="package-list">
              <p class="card-text">Save atleast <span>N100</span> per week.</p><br/>
              <p><span>8%</span> interest rate</p> <br/>
              <p>Access to loan of up to <span>200%</span> <br /> of your entire savings</p><br/>
              <p>Access to internship <br /> for loan repayment</p>
              <p>Withdrawal of money is at a <br /> minimum period of 3 month</p>
            </div>
            <hr/>
            <input type="choose" class="btn btn-primary mt-2 " value="Choose Plan"/>
            </div>
          </div>
        </div>
        
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div class="card">
          <div class="card-header-color"><div class="card-header card-header2">Parent</div></div>
          <div class="card-body text-success">
          <div class="package-list">
          <p class="card-text">Save atleast <span>N500</span> per week.</p><br/>
          <p><span>8%</span> interest rate</p> <br/>
          <p>Access to loan of up to <span>500%</span> <br /> of your entire savings</p><br/>
          <p>Withdrawal of money is at a <br /> minimum period of 3 month</p><br/><br/>
          </div>
          <hr/>
          <input type="choose" class="btn btn-primary mt-2" value="Choose Plan"/>
          </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div class="card">
          <div class="card-header-color"><div class="card-header card-header3">Gold Mine</div></div>
          <div class="card-body text-success">
          <div class="package-list">
          <p class="card-text">Save for a specific purpose</p><br/>
          <p>Save any amount</p>
          <p><span>10%</span> interest rate</p><br/>
          <p>Minimum withdrawal <br /> period is 12 months</p><br/><br/><br/><br/>
          </div>
          <hr/>
          <input type="choose" class="btn btn-primary mt-2" value="Choose Plan"/>
          </div>
          </div>
        </div>
        
      </div>
    </div>
    <div className='svgDiv'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f3f4f5" fill-opacity="1" d="M0,0L80,32C160,64,320,128,480,138.7C640,149,800,107,960,85.3C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
    </section>
    
              
        
  )
}

export default Packages