import './App.css'

//Struttura della Pagina

function App() {

  return (
    <>
     <div className='main-sc'>
     <header class="header">
    <div class="container">
      <h1 class="logo">BrandLogo</h1>
      <nav class="nav">
        <button class="hamburger" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="main">
    <section class="hero">
      <div class="hero-content">
        <h2 class="hero-title">Benvenuto nella Pagina</h2>
        <p class="hero-description">Questa è una descrizione di esempio per introdurre la tua pagina.</p>
        <div class="hero-buttons">
          <button class="cta-button">Scopri di più</button>
          <button class="cta-button secondary">Visita la pagina dei post</button>
        </div>
      </div>
  </section>

  <section class="about">
      <div class="container">
        <h2>About Us</h2>
        <p>We are committed to protecting the future with clean energy solutions.</p>
        <div class="stats">
          <div class="stat">
            <h3>14</h3>
            <p>Years Experience</p>
          </div>
          <div class="stat">
            <h3>12K</h3>
            <p>Satisfied Clients</p>
          </div>
          <div class="stat">
            <h3>1GW</h3>
            <p>Production Capacity</p>
          </div>
        </div>
      </div>
    </section>

    <section class="services">
      <div class="container">
        <h2>Our Services</h2>
        <div class="service-items">
          <div class="service-item">
            <h3>House</h3>
            <p>Clean energy solutions for your home.</p>
          </div>
          <div class="service-item">
            <h3>Office</h3>
            <p>Energy-efficient solutions for workplaces.</p>
          </div>
          <div class="service-item">
            <h3>Garden</h3>
            <p>Green solutions for your outdoor spaces.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 Your Company. All rights reserved.</p>
    </div>
  </footer>
  </div>
    </>
  )
}

export default App
