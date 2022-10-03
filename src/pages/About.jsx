import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { title } from './Home'

function About() {
  document.title =  title + ", A propos de"
  return (
    <>
      <h1>{title + ', A propos de'}</h1>
      <Header />
      <div className='apropos'>
        <Footer />
      </div>
    </>
  )
}

export default About