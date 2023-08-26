import React from 'react'
import {useState} from "react"
import "./Home.css"


const Navbar = () => {
  const [show, setShow] = useState("");
    return (
        <div>
            <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <a href="#Home">Home</a>

            </li>
            <li className="sideNavbar">
              <a href="#About">About</a>
            </li>
            {/* <li className="sideNavbar">
              <a href="#services">Services</a>
            </li> */}
            <li className="sideNavbar">
            <a href="#Project">Project</a>
            </li>
            <li className="sideNavbar">
              <a href="#Experience">Experience</a>
            </li>
            <li className="sideNavbar">
              <a href="#Contact">Contact</a>
            </li>
              </ul>
          </div>
           ) :null}
        </div>
    )
}

export default Navbar
