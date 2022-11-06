import './Header.css';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Logo from '../../images/copy.png';
import Home from "../Home/Home";
import React from 'react';
import Catalog from '../Catalog/Catalog';




function Header() {
    const selected = 'active-item'
    return (
        <BrowserRouter>
            <header className="header">
                <div className="header-container">
                    <NavLink>
                        <div className="header__logo">
                            <img src={Logo} alt="logo"/>
                        </div>
                    </NavLink>
                    <nav className="header__items">
                        <ul>
                            <li className="header__item">
                                <NavLink id='first'  to='/' end className={({ isActive }) => isActive ? selected : undefined}>Home</NavLink>
                            </li>
                            <li className="header__item">
                                <NavLink id='second'  to='/catalog' className={({ isActive }) => isActive ? selected : undefined}>Catalog</NavLink>
                            </li>
                            <li className="header__item">
                                <NavLink id='third'  to='/cart' className={({ isActive }) => isActive ? selected : undefined}>Card</NavLink>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/catalog' element={<Catalog />}></Route>
                <Route>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
};


export default Header;