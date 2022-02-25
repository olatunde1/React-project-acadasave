import React from 'react'
import "./rate.css"
import img7 from "../images/img7.png"

const Rate = () => {
  return (
    <section className='int-rate-savings'>
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                    <div className="interest-rate">
                        <h2>Dedicated interest rate <br /> on savings</h2> <br />
                        <p>Whether you're an entreprenuer with the next <br />
                        billion dollar idea or an investor looking for <br />
                        worthwhile project to invest in. We got you <br />
                        covered.</p><br/>
                        <input className="intButton" type="submit" value="GET STARTED"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="int-rate">
                       <img src={img7} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Rate