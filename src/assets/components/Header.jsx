import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setClose] = useState(false);

    const handleOpenHamMenu = () =>{
        return setClose(value => !value);
    }

  return (
     <>
    <header className="header">
    <div className="container">
      <h1 className="logo">React-Pages</h1>
      <nav className="nav">
        <button className="hamburger" aria-label="Toggle menu" onClick={() => handleOpenHamMenu()}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
     </>
  )
}
