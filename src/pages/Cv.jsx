import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { title } from './Home'

function Cv() {
  return (
    <>
      <h1>{title + ', Cv'}</h1>
      <Header />
      <div className='cv'>
        <Footer />
      </div>
    </>
  )
}

export default Cv