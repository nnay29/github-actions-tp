import React from 'react';
import './Yann.css'; // Import the CSS file

const Yann: React.FC = () => {
  return (
    <div className="yann-body">
      <div className="profile-card">
        
        <header className="header">
          <div id="my-picture-placeholder" className="picture-placeholder">
            <img src="/yann.jpg" alt="Photo Portrait" className="profile-image" />
          </div>
          
          <h1 className="name-heading">Yann Tiger</h1>
          <p className="alias-text">aka pilé-pommes Master</p>
        </header>

        <section className="section">
          <h2 className="section-heading">Un peu de moi</h2>
          <p className="bio-text">
            Je m'appelle Yann. 
            J'aime passer du temps à écouter de la musique, surtout des rythmes afrobeat (Wizkid the GOAT dayo) qui me mettent de bonne humeur.
            Mon plat préféré est les pilé-pommes — 
            <span className="emphasis-text black"> pas plantain, ni patate, ni ignames </span> — 
            <span className="emphasis-text orange">pilé-pommes &#9825;</span>.
            Rien ne vaut un koumbou bien chaud après une journée bien remplie
            juste après un cours de Versioning avec Github ; ).
          </p>
        </section>

        <section className="section">
          <h2 className="section-heading">Mes Favoris</h2>

          <div className="favorites-container">
            
            <div className="favorite-item">
              <h3 className="favorite-title">Mon repas préféré</h3>
              <div id="meal-image-placeholder" className="image-placeholder-small meal-bg">
                <img src="/pommes-pilees.jpeg" alt="Image de mon repas préféré" className="favorite-image" />
              </div>
              <p className="favorite-caption">Pilé-pommes</p>
            </div>
            
            <div className="favorite-item">
              <h3 className="favorite-title">Album Préféré</h3>
              <div id="album-image-placeholder" className="image-placeholder-small album-bg">
                <img src="/gnx.jpeg" alt="Image of Favorite Music Album" className="favorite-image" />
              </div>
              <p className="favorite-caption">gnx - Kendrick Lamar</p>
            </div>

          </div>
        </section>

      </div> 
    </div>
  );
};

export default Yann;