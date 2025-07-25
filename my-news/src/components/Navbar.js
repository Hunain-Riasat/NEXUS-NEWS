import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">

          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NeXus News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                {/* <li className="nav-item"> <a className="nav-link" href="/">About</a>   </li> */}
                <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link>  </li>
                <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
                {/* <li className="nav-item"> <Link className="nav-link" to="/">General</Link> </li> */}
                <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link> </li>

                {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
              </ul>


              <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> <Link className="nav-link" to="/about">About Us</Link> </li>
        </ul>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}


