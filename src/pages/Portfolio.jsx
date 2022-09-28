import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { title } from './Home'

function Portfolio() {
  document.title = "R-JS | Portfolio"
  return (
    <>
      <h1>{title}</h1>
      <Header />
      <div className='portfolio'>
        <Footer />
      </div>
    </>
  )
}

export default Portfolio