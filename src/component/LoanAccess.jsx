import React from 'react'
import img55 from "../images/img55.png"
import "./loanAccess.css"

const LoanAccess = () => {
  return (
    <section className='Access-loan'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,192L120,208C240,224,480,256,720,234.7C960,213,1200,139,1320,101.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="loan-caption">
                            <h2>Access to loan for various <br/> purposes</h2>
                                <p><div className="question">Why choose us</div></p>
                                <p>Whether you're an entreprenuer with the next <br />
                                 billion dollar idea or an investor looking for <br />
                                 worthwhile project to invest in. We got you <br />
                                covered.</p><br/>
                            <input className="LoanButton" type="submit" value="GET STARTED"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="loan-img">
                        <img src={img55} alt=""/>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default LoanAccess