import React, { useEffect } from 'react';
import './Ines.css';

const Ines: React.FC = () => {
  useEffect(() => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <div className="ines-body">
      <div className="card">
        <img id="profilePic" src="https://i.pravatar.cc/150?img=3" alt="Photo de profil" />
        <h1>Ines</h1>
        <p>Je suis une personne curieuse, créative et passionnée par le web.</p>
        <div className="tags">
          <span className="tag">HTML</span>
          <span className="tag">CSS</span>
          <span className="tag">JavaScript</span>
        </div>
        <button className="btn" onClick={() => alert('Merci de ta visite ! 😊')}>Me contacter</button>
        <footer>© <span id="year"></span> Ines — Fait avec ❤️</footer>
      </div>
    </div>
  );
};

export default Ines;