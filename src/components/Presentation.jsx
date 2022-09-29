import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import { projets } from '../utils/presentation/projets';

function Presentation() {
  let windowpop
    windowpop = (url, width, height) => {
      var leftPosition, topPosition;
      //Allow for borders.
      leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
      //Allow for title and status bars.
      topPosition = (window.screen.height / 2) - ((height / 2) + 50);
      //Open the window.
      window.open(url, "Window2", "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
    }

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
          {projets.map((p, index) => {
            return (
              <div className="presentation_projets-bloc" key={index}>
                <h3>{p.title}</h3>
                <a href="#"
                  onClick={() => windowpop(p.url, 1024, 600)}
                >
                  <img src={`${p.imgSrc}`} alt={p.title} />
                </a>

              </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default Presentation