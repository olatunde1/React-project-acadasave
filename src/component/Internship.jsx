import React from 'react'
import "./internship.css"
import img6 from "../images/img6.png"

const Internship = () => {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="loan-access-img">
                       <img src={img6} alt=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="loanAccess-caption">
                        <h2>Access to internship</h2> <br />
                        <p>Whether you're an entreprenuer with the next <br />
                        billion dollar idea or an investor looking for <br />
                        worthwhile project to invest in. We got you <br />
                        covered.</p><br/>
                        <input className="LoanButton" type="submit" value="GET STARTED"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  ) 
}

export default Internship