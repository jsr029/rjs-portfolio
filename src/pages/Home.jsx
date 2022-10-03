import React from 'react'
import Presentation from '../components/Presentation'
import Footer from './Footer'
import Header from './Header'

export const title = document.title = "R-JS | Portfolio"
function Home() {
    document.title =  title + ", Accueil"
    return (
        <>
            <h1>{title + ', Accueil'}</h1>
            <Header />
            <Presentation />
            <Footer />
        </>
    )
}

export default Home