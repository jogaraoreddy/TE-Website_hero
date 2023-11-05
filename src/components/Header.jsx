import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className="hero-section">

      <div className="text-content">
        <h1>Revolutionizing Waste Management</h1>
        <h4> The Smart Solution for a Cleaner Tomorrow </h4>
        <button className="cta-button"><span> Get Started </span></button>
        <p>Click "Get Started" to learn more and be a part of the revolution.</p>
      </div>

      <div className="video-content">
        <video
          src="src/Hero-video.mp4"
          autoPlay
          muted
        />
      </div>

      
    </div>
  )
}

export default Header