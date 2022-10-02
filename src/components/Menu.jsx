import { current } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

function Menu() {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <>
            <div className="logo-brand">
                <Logo />
                <span>"Rester fluide, ouvert et prudent"</span>
            </div>
            <nav className="nav">
            <span
                    className="iconMenu"
                    onClick={()=>handleMenu()}
                >
                    <img src="./images/iconMenu.png" alt="Menu Responsive" />
                </span>
                <ul className={menu ? 'navMenu close' : 'navMenu open'}>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to={'/'}>Accueil</Link>
                    </li>
                    <li className={splitLocation[1] === "a-propos-de" ? "active" : ""}>
                        <Link to={'/a-propos-de'}>A propos de</Link>
                    </li>
                    <li className={splitLocation[1] === "portfolio" ? "active" : ""}>
                        <Link to={'/portfolio'}>Porfolio</Link>
                    </li>
                    <li className={splitLocation[1] === "cv" ? "active" : ""}>
                        <Link to={'/cv'}>Cv</Link>
                    </li>
                    <li className={splitLocation[1] === "contact" ? "active" : ""}>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu