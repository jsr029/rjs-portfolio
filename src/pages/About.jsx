import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { title } from './Home'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
//import Parallaxing from '../components/Parallaxing'
import place from '../images/place.webp'
import Theatre from '../images/Theatre.jpg'

function About() {
  document.title = title + ", A propos de"
  return (
    <>
      <h1>{title + ', A propos de'}</h1>
      <Header />
      <div className="about">
        <ParallaxProvider>
          <Parallax speed={0}>
            <div>
              <img src="./images/place.webp" alt="" />
            </div>
          </Parallax>
          <Parallax speed={-10}>
            <div>
              <p>
                Au début, j'étais Parisien.<br />
                Place d'Italie. <br />
                Image du site 123RF. 
              </p>
            </div>
          </Parallax>
          <Parallax speed={-5}>
            <div>
              <img src="./images/Theatre.jpg" alt="" />
            </div>
          </Parallax>
          <Parallax speed={-10}>
            <div>
              <p>
                Puis, Normand.<br />
                Théâtre d'Evreux. <br />
                Image du site wikipédia. 
              </p>
            </div>
          </Parallax>
          <Parallax speed={-5}>
            <div>
              <img src="./images/Malo.jpg" alt="" />
            </div>
          </Parallax>
          <Parallax speed={-10}>
            <div>
              <p>
                Puis, Ch'Nordiste.<br />
                Mairie de Malo-les-bains. <br />
                Image du site wikipédia. 
              </p>
            </div>
          </Parallax>
          <Parallax speed={-10}>
            <div>
              <img src="./images/Quimper.jpg" alt="" />
            </div>
          </Parallax>
          <Parallax speed={-10}>
            <div>
              <p>
                Aujourd'hui, Breton. Demain Qui sait ?<br />
                Ville de Quimper. <br />
                Image du site wikipédia. 
              </p>
            </div>
          </Parallax>
        </ParallaxProvider>
      </div>
      <Footer />
    </>
  )
}

export default About