// import React from 'react'
// import {Link} from 'react-scroll/modules'

// function Header() {
//   return (
//     <div className='p-5 bg-primary flex justify-between w-full'>
//         {/* <h1 className='text-secondary text-4xl font-semibold'>K</h1>
//         <h1 className='text-white text-4xl font-semibold'>S</h1>
//         <h1 className='text-tertiary text-4xl font-semibold'>R</h1> */}
//         <Link to='about'smooth={true} className='text-white text-2xl cursor-pointer'>About</Link>

//         <Link to='experience'smooth={true} className='text-white text-2xl cursor-pointer'>Experience</Link> 

//         <Link to='projects'smooth={true} className='text-white text-2xl cursor-pointer'>Projects</Link> 

//         <Link to='contact'smooth={true} className='text-white text-2xl cursor-pointer'>Contact Us</Link>
//     </div>
//   )
// }

// export default Header




import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import {Link as NavLink} from 'react-scroll/modules'
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span><img src={require("./logo.png")} /></span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              <CodeIcon />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="about"
                smooth
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="experience"
                smooth
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Experiences
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="projects"
                smooth
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="contact"
                smooth
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;