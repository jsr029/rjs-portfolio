import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function Menu() {
    return (
        <>
            <Logo />
            <nav className='nav'>
                <ul>
                    <li>
                        <Link to={'/'}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={'/a-propos-de'}>A propos de</Link>
                    </li>
                    <li>
                        <Link to={'/portfolio'}>Porfolio</Link>
                    </li>
                    <li>
                        <Link to={'/cv'}>Cv</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu