import React from 'react';
import {Link, useLocation, NavLink} from "react-router-dom";

const Header = () => {

    // const {pathname} = useLocation();
    // console.log(pathname);

    return (
        <header className='header'>
            <div className='container'>
                <ul className='header__list'>
                    <li className='header__list-item'>
                        <NavLink className='header__link' to='/'>Home</NavLink>
                    </li>
                    <li className='header__list-item'>
                        <NavLink className='header__link' to='/contact'>Contact</NavLink>
                    </li>
                    <li className='header__list-item'>
                        <NavLink className='header__link' to='/about'>About</NavLink>
                    </li>
                    <li className='header__list-item'>
                        <NavLink className='header__link' to='/login'>Log In</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;