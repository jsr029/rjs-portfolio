import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { title } from './Home'

function Contact() {
  return (
    <>
      <h1>{title + ', Contact'}</h1>
      <Header />
      <div className='contact'>
        <Footer />
      </div>
    </>
  )
}

export default Contact