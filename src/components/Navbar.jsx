// import PropTypes from 'prop-types'
// eslint-disable-next-line
import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = (props) => {
  let navigate = useNavigate();

  let location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate("/login")
    props.showAlert("success", "Logged Out Successfully", "Login or signup to continue")

  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">iNoteBook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className={`nav-link ${location.pathname === '/iNotes' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} aria-current="page" to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          {localStorage.getItem('token') === null || localStorage.getItem('token') === 'undefined' ? <>
            <Link className="btn btn-outline-primary" to="/login" role="button">Login</Link>
            <Link className="btn btn-outline-primary" to="/signup" role="button">Sign Up</Link>
          </> : <a className="btn btn-outline-primary" href='/iNotes' onClick={handleLogout} role="button">Logout</a>
          }

        </div>
      </div>
    </nav>
  )

}

export default Navbar   