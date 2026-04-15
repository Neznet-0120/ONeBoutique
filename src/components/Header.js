import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

const Header = ({ cartCount, onCartClick }) => {
    return (
        <header className="header">
            <div className="container header__container">
                {/* Логотип */}
                <div className="logo">
                    <span className="logo__one">ONe</span>
                    <span className="logo__boutique">Boutique</span>
                </div>

                {/* Навигация */}
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><Link to="/">Главная</Link></li>
                        <li className="nav__item"><Link to="/catalog">Каталог</Link></li>
                    </ul>
                </nav>

            
                <div className="cart-widget" onClick={onCartClick} style={{ cursor: 'pointer'}}>
                    <span className="cart-icon">🛒</span>
                    <span className="cart-count">{cartCount}</span>
                </div>
            </div>
        </header>
    );
};


export default Header;