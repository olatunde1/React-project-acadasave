import React from 'react'
import Logo from "../images/logo.png"
import "./navigation.css"

const Navigation = () => {
  return (
    <div className='container'>
    
      <nav className="navbar navbar-expand-lg navbar-light mt-1">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">How it works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Packages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Benefits</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="login" type="Log-in">Log in</button>
              <button className="signUp" type="Sign-up">Sign up</button>
              
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation