import React from 'react'
import Typewriter from 'typewriter-effect'

function Presentation() {
  return (
    <div className='presentation'>
      <div className="presentation_bloc">
        <h2>Bonjour, je m'appelle <Typewriter
          options={{
            strings: ['Rakotonirina-JS', 'React-JS'],
            autoStart: true,
            loop: true,
          }}
        />.</h2>
        <p>Pendant 14 mois, l'école OpenClassRooms m'a formé pour devenir Développeur d'Applications Front-End,
          à travers 14 projets validés, tous aussi pertinents, les uns que les autres.
          De la rédaction d'outils au codage en Vanilla Js, puis en React et ses subtilités.
          Accompagné d'un fabuleux mentor et de l'équipe OpenClassRooms en "backend",
          j'ai pu atteindre mes objectifs, en ne ressentant pas trop les difficultés.</p>
      </div>
      <div className="presentation_projets">
        <h2>Mes Projets Validés</h2>
        <div className='p-flex'>
          <div className="presentation_projets-bloc">
            <h3>Reservia</h3>
            <a href="https://jean-sebastien-rakotonirina-2-29072021-g6ks-fk265omfe-jsr029.vercel.app/">
              <img src="./images/Reservia.JPG" alt="Reservia" />
            </a>
          </div>
          <div className="presentation_projets-bloc">
            <h3>Oh My Food</h3>
            <a href="https://rakotonirina-jean-sebsatien-3-29072021-yp9c-ppoguqbjy-jsr029.vercel.app/">
              <img src="./images/Omyfood.JPG" alt="Oh my food" />
            </a>
          </div>
          <div className="presentation_projets-bloc">
            <h3>Game On</h3>
            <a href="https://jsr029.github.io/RakotonirinaJeanSebastien_4_29072021/starterOnly/">
              <img src="./images/GameOn.JPG" alt="Oh my food" />
            </a>
          </div>
          <div className="presentation_projets-bloc">
            <h3>Fisheye</h3>
            <a href="https://rakotonirina-jean-sebastien-6-18102021-3qgz.vercel.app/">
              <img src="./images/FishEye.JPG" alt="Oh my food" />
            </a>
          </div>
          </div>
        </div>
      </div>
      )
}

      export default Presentation