import React from 'react'
import "./footer.css"
import white from "../images/white.png"


const Footer = () => {
  return (
    <footer className="footerEnd">
      <div className="container">
            <div className="card-footer">
                <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ">
                          <img src={white} alt="" />
                          <p className='lorem'>Lorem ipsum dolor sit, amet consectetur <br />
                          adipisicing elit.Magni sequi, minima ut possimus <br />
                          repellendus, odio ratione quo sit autem, exercitationem <br />
                          in distinctio. <br />
                          </p>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                          <h5>Quick Links</h5>
                          <p className='aboutUs'>About us</p>
                      </div>
                </div>
                    <div className="getStart">
                      <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <h3>Ready to get Started</h3> 
                                <p>Create new account and start saving.</p>
                          </div>

                          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center ">
                                <button type='btn'>GET STARTED</button>
                          </div>
                                            
                      </div>
                </div>
            </div> 
          </div>
    </footer>
            
    
  )
}

export default Footer