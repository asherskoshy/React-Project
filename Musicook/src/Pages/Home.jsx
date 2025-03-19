import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
export const Home = (props) => {
  return (
    <div>
       {/* Header Section */}
      <header>
        <nav>
          <ul>
            <li><Link to="/Insert" >Insert </Link></li>
            <li><Link to="/List" >List </Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Discover Your New Favorite Song</h1>
        <p>Explore a vast library of music and create your own playlists</p>
        <button>Get Started</button>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <h2>Featured Artists</h2>
        <div className="artist-cards">
          <div className="artist-card">
            <img src="artist-image.jpg" alt="Artist Image" />
            <h3>Artist Name</h3>
            <p>Song Title</p>
            <button>Play</button>
          </div>
          {/* Add more artist cards here */}
        </div>
      </section>

      {/* Discover Section */}
      <section className="discover">
        <h2>Discover New Music</h2>
        <div className="genre-cards">
          <div className="genre-card">
            <img src="genre-image.jpg" alt="Genre Image" />
            <h3>Genre Name</h3>
            <p>Description</p>
            <button>Explore</button>
          </div>
          {/* Add more genre cards here */}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="call-to-action">
        <h2>Join the Musicook Community</h2>
        <p>Create an account to access exclusive features and content</p>
        <button>Sign Up</button>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2023 Musicook. All rights reserved.</p>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Home