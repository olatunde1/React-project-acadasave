import React from 'react'
import "./how.css"
import img1 from "../images/img1.png"
import img22 from "../images/img22.png"
import img33 from "../images/img33.png"
import img44 from "../images/img44.png"

const How = () => {
  return (
    <section className='how-it-works'>
        <div className='container'>
            <div class="row ">
                <h4>How it Works</h4>
                <div class="col-sm-3">
                    <div class="card border-0">
                        <img src={img1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Register</h5><br/>
                            <p class="card-text">Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Quaerat saepe voluptatem provident 
                            voluptatibus exercitationem facere natus tempore
                            dignissimos suscipit harum placeat repellendus totam sequi.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card border-0">
                        <img src={img22} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Save</h5> <br />
                            <p class="card-text">Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Quaerat saepe voluptatem provident 
                            voluptatibus exercitationem facere natus tempore
                            dignissimos suscipit harum placeat repellendus totam sequi.</p>                
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card border-0">
                        <img src={img33} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Get Interest</h5><br />
                            <p class="card-text">Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Quaerat saepe voluptatem provident 
                            voluptatibus exercitationem facere natus tempore
                            dignissimos suscipit harum placeat repellendus totam sequi.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card border-0">
                        <img src={img44} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Withdraw</h5>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Quaerat saepe voluptatem provident 
                            voluptatibus exercitationem facere natus tempore
                            dignissimos suscipit harum placeat repellendus totam sequi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default How