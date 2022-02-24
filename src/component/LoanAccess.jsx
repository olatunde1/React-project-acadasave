import React from 'react'
import img55 from "../images/img55.png"
import "./loanAccess.css"

const LoanAccess = () => {
  return (
    <section className='Access-loan'>
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