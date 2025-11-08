import React from 'react';
import './Emmanuel.css';

const Emmanuel: React.FC = () => {
  return (
    <div className="emmanuel-body">
      <div className="container">
        <header>
          <h1>EMMANUEL</h1>
          <div className="weather-info">
            26°C Mostly cloudy • 4:29 PM
          </div>
        </header>

        <div className="contact-details">
          <div className="info-section">
            <h3>🏫 École : GPEA</h3>
            <h3>⚽ Sport : Football</h3>
            <h3>🍽️ Plat préféré : Okok</h3>
            <h3>🎵 Musique : Afro</h3>
            <h3>🌍 Ville : Yaoundé</h3>
          </div>
        </div>

        <footer>
          <p>2023-10-25</p>
        </footer>
      </div>
    </div>
  );
};

export default Emmanuel;