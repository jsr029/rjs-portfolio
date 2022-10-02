import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { cv } from '../utils/presentation/cv'
import { title } from './Home'

function Cv() {
  console.log(cv)
  return (
    <>
      <h1>{title + ', Cv'}</h1>
      <Header />
      {cv && cv.length > 0 && cv.map((c, i) => {
        return (
          <div className='cv' key={i}>
            <div className="cv_header">
              <div className="cv_header-location">
                <ul>
                  <li>{c.header.adresse}</li>
                  <li>{c.header.lieu}</li>
                  <li>{c.header.tel}</li>
                </ul>
              </div>
              <div className="cv_header-contact">
                <ul>
                  <li>{c.contact.email}</li>
                  <li>{c.contact.webSite}</li>
                </ul>
              </div>
            </div>
            <div className="cv_objectif">
              <h2 className="cv_objectif-name">{c.objectif.name}</h2>
              <div className="cv_objectif-bloc">
                <div className='cv-objectif-title'><h2>{c.objectif.title}</h2></div>
                <div className="cv_objectif-text">
                  {c.objectif.text}
                </div>
              </div>
            </div>
            <div className='cv-skills'>
              <h2>Comptétences</h2>
              <div className="cv-skills-bloc">
                {c.competences.map((cpt, ind) => {
                  return (
                    <div className="cv_skills" key={ind}>
                      <div className="cv_skills-bloc">
                        <h2>{cpt.subtitle}</h2>
                        <ul>
                          {cpt.items.map((cp, p) => {
                            return (
                              <li key={p}>{cp}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="cv-xperiences">
              <h2>Experiences Professionnelles</h2>
              <div className="cv_xperiences-bloc">
                <h2>Developpeur d'Applications</h2>
                <p>Dunkerque</p>
                <p>2016 - 2018</p>
                <ul>
                  <li>Analyser les besoins du client</li>
                  <li>Réaliser des maquettes</li>
                  <li>Concevoir et développer les programmes</li>
                  <li>Analyser les problèmes techniques</li>
                  <li>Déterminer les mesures correctives</li>
                  <li>Réaliser les supports techniques</li>
                </ul>
              </div>
            </div>
          </div>
        )
      })}
      <Footer />
    </>
  )
}

export default Cv