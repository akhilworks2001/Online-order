import React, { useState } from 'react';
import './landingPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import MainImg from '../../images/landing page/main.png';
import DesignImg from '../../images/landing page/design.png';
import Logo from '../../images/landing page/logo.png';
import VegImg  from '../../images/landing page/4.png';
import CapcicumImg  from '../../images/landing page/5.png';
import CorainderImg  from '../../images/landing page/3.png';
import GarlicImg  from '../../images/landing page/garlic.png';
import OnionImg  from '../../images/landing page/Onion.png';
import TomatoImg  from '../../images/landing page/tomato.png';

const LandingPage = function () {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="main">

            <img className="main-img" src={MainImg} alt="" />
            <img className="design-img" src={DesignImg} alt="" />
            <img className="veg-img-1" src={VegImg} alt="" />
            <img className="veg-img-2" src={VegImg} alt="" />
            <img className="veg-img-3" src={VegImg} alt="" />
            <img className="veg-img-4" src={VegImg} alt="" />
            <img className="capcicum-img" src={CapcicumImg} alt="" />
            <img className="onion-img" src={OnionImg} alt="" />
            <img className="tomato-img" src={TomatoImg} alt="" />
            <img className="corainder-img" src={CorainderImg} alt="" />
            <img className="garlic-img" src={GarlicImg} alt="" />

            {/* Navbar */}
            <nav className="navbar">
                {/* Logo Section */}
                <img href="Home" className="logo" src={Logo} alt="" />

                {/* Menu Items */}
                <ul className={`menu ${menuOpen ? "show" : ""}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Product</a></li>
                    <li><a href="#contact">Promo</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>

                {/* Search Icon */}
            <div className="search">
                < FontAwesomeIcon icon={faSearchengin} />
            </div>

            {/* Hamburger Menu Toggle */}
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            </nav>

            {/* Heading */}
            <div className="main-heading">
                <h1 className="heading">Title Here</h1>
                <p className="about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat ducimus deleniti nostrum tempora.</p>
                <button className="order-btn">ORDER NOW</button>
            </div>
            
        </div>
    )

};

export default LandingPage;
