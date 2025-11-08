import React from 'react';
import './Dorian.css';

const Dorian: React.FC = () => {
  return (
    <div className="dorian-body">
      <div className="bg-circle bg-circle1"></div>
      <div className="bg-circle bg-circle2"></div>
      <div className="bg-circle bg-circle3"></div>

      <div className="content">
        <div className="avatar-container">
          <img src="/dorian.jpg" alt="Mon avatar" className="avatar-img" />
        </div>
      </div>

      <div className="content">
        <p>Je m'appelle Dorian,<br />
          J'aime le sport , aider les gens , partager de la bonne humeur ,<br />
          J'aime la vérité, j'aime aussi danser mais en cachette,<br />
          Mais ils ne dansent pas plus que moi<br />
          Mon sport préféré c'est le judo pour ses valeurs et son histoire,<br />
          J'aime en particulier Shoei Ono c'est le goat pour moi<br />
          <br />
          Mon plat préféré c'est l'okok sucré je ne veux pas discuter avec quelqu'un c'est le meilleur</p>

        <div className="artists">
          <div className="artist-card">
            <img src="/fally.jpg" alt="Fally Ipupa" className="artist-img" />
            <p className="artist-text">Mon Artiste préféré c'est FALLY IPUPA</p>
          </div>
          <div className="artist-card">
            <img src="/mj.jpg" alt="Michael Jackson" className="artist-img" />
            <p className="artist-text">mais en parallèle j'aime aussi Michael Jackson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dorian;