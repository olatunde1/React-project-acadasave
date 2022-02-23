import React from 'react'
import img from "../images/banner.png"
import "./saving.css"

const Saving = () => {
  return (
    <div className="container">
        <div className='savingFuture'>
            <div className="row">
                <div className="col-sm-6">
                    <h2>Saving to secure <br/> the Future</h2>
                    <p>Acada save helps you as a student or parent to save exclusively for educational purposes, with amazing benefits. Take ove the future by ssaving inthe present.</p>
                    <div className='startButton'>
                        <button className='btnStart' type='button'>GET STARTED</button>
                    </div>
                </div>
                <div className="col-sm-6">
                <img src={img} alt=""/>
                </div>
            </div>

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f3f4f5" fill-opacity="1" d="M0,0L80,32C160,64,320,128,480,138.7C640,149,800,107,960,85.3C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
    </div>
    
  )
}

export default Saving