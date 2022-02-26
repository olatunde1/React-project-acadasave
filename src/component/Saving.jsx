import React from 'react'
import img from "../images/banner.png"
import "./saving.css"

const Saving = () => {
  return (
    <section className='SavingALL'>
        <div className="container">
            <div className='savingFuture'>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h2>Saving to secure <br/> the Future</h2>
                        <p>Acada save helps you as a student or parent to save exclusively for educational <br />
                         purposes, with amazing benefits. Take ove the future by ssaving inthe present.</p>
                        <div className='startButton'>
                            <button className='btnStart' type='button'>GET STARTED</button>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <img src={img} alt=""/>
                    </div> 
                </div>
            </div>
        </div>   
        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,128L120,138.7C240,149,480,171,720,160C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> 
    </section>
    
  )
}

export default Saving