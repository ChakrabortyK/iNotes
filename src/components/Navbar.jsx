// import PropTypes from 'prop-types'
import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">iNoteBook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" aria-current="page" to="/about">About</Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  )

}

export default Navbar   