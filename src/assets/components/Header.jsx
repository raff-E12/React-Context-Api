import React, { useState } from 'react'
import ReactIcon from "../../../public/react.svg"

export default function Header() {
    const [isOpen, setClose] = useState(false);

    const handleOpenHamMenu = () =>{
        return setClose(value => !value);
    }

  return (
     <>
    <header className="header">
    <div className="container">
      <div className='logo-sc'>
        <div className='logo-box-icon'>
          <img src={ReactIcon} alt="logo-icon" />
        </div>
        <h1 className="logo">React-Pages</h1>
      </div>
      <nav className="nav">
        <button className="hamburger" aria-label="Toggle menu" onClick={() => handleOpenHamMenu()}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li><p>Home</p></li>
          <li><p>About</p></li>
          <li><p>Services</p></li>
          <li><p>Projects</p></li>
          <li><p>Contact</p></li>
        </ul>
      </nav>
    </div>
  </header>
     </>
  )
}
