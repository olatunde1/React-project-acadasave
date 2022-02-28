import React from 'react'
import "./testimony.css"
import quote1 from "../images/quote.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.jpg"
import img13 from "../images/img13.jpg"

const Testimony = () => {
  return (
    <section>
        <div className='testimony'>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="cusFeed">
                        <img src={quote1} alt="" />
                            <h4>What Our <br /> Customers are <br />Saying</h4>
                            <i className="fa fa-arrow-left arrowLeft" ></i>
                            <i className="fa fa-arrow-right arrowRight" ></i>
                    </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                   
                    <div className="row ">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div className='testify'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ipsa voluptatum ullam iure. Eligendi expedita dignissimos quibusdam, suscipit aliquam ea vero earum ducimus consequatur quisquam inventore, corrupti fugiat quia ipsa.</p>
                                <hr />
                                <p>Samuel Tola</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div className='testify'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ipsa voluptatum ullam iure. Eligendi expedita dignissimos quibusdam, suscipit aliquam ea vero earum ducimus consequatur quisquam inventore, corrupti fugiat quia ipsa.</p>
                                <hr />
                                <p>Kemi Williams</p>
                            </div>
                        </div>
                    </div>
                </div>                       
            </div>
        </div>
    </section>
  )
}

export default Testimony