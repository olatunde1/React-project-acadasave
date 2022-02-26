import React from 'react'
import "./testimony.css"
import quote1 from "../images/quote.png"

const Testimony = () => {
  return (
      <section className='testimony-section'>
          <div className='container'>

                <div className="row">
                    <div className='svgDiv'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#f3f4f5" fill-opacity="1" d="M0,0L80,32C160,64,320,128,480,138.7C640,149,800,107,960,85.3C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                        </svg>
                    </div>

                  <div className="col-sm-4">
                    <img src={quote1} alt="" />
                    <h4>What Our <br /> Customers are <br />Saying</h4>
                  </div>
                  <div className="col-sm-8">
                      
                  </div>
                 
              </div>
            
          </div>
         
      </section>
    
  )
}

export default Testimony