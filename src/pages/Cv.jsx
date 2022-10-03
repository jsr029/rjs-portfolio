import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { cv } from '../utils/presentation/cv'
import { title } from './Home'

function Cv() {
  document.title = title + ", Cv"
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
            <div className="cv_xperiences">
              <h2>Experiences Professionnelles</h2>
              {c.xperiences.map((x, inde) => {
                return (
                  <div className="cv_xperiences-bloc" key={inde}>
                    <h2>{x.jobTitle}</h2>
                    <p>{x.startDate + ' - ' + x.endDate}</p>
                    <p>{x.lieu}</p>
                    <p>{x.jobLocation}</p>
                    <ul>
                      {x.descriptions.map((d, di) => {
                        return (
                          <li key={di}>{d}</li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
      <Footer />
    </>
  )
}

export default Cv