import React from 'react'
import { Link } from 'react-router'

export default function Main() {
  return (
    <> 
  <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Welcome to the Page!!</h2>
        <p className="hero-description">This is a sample description.</p>
        <div className="hero-buttons">
          <Link to={"/credits"} className='cta-button'>Find out more</Link>
          <Link to={"/posts"} className='cta-button secondary'>Discover our Posts</Link>
        </div>
      </div>
  </section>

  <section className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>We are committed to protecting the future with clean energy solutions.</p>
        <div className="stats">
          <div className="stat">
            <h3>14</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>12K</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat">
            <h3>1GW</h3>
            <p>Production Capacity</p>
          </div>
        </div>
      </div>
    </section>

    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-items">
          <div className="service-item">
            <h3>House</h3>
            <p>Clean energy solutions for your home.</p>
          </div>
          <div className="service-item">
            <h3>Office</h3>
            <p>Energy-efficient solutions for workplaces.</p>
          </div>
          <div className="service-item">
            <h3>Garden</h3>
            <p>Green solutions for your outdoor spaces.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
