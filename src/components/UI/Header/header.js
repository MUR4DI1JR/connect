import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

import './header.css';
import './media.css';
import logo from './../../../Images/logo.png';

const Header = () => {
    const [active, setActive] = useState(true);
    let history = useHistory();
    const navText = ['Финансы', 'Консультанты', 'Мероприятия', 'Форум', 'О нас', 'Дать Объявление'];

    let showText = navText.map((text, i) =>  <p key={i}><a href="#">{text}</a></p>);

    let showNavBar = e =>{
        e.preventDefault();
        if (active){
            setActive(false)
        }else {
            setActive(true)
        }
    };

    const registerClick = () =>{
        history.push('/role')
    };

    const loginClick = () =>{
        history.push('/login')
    };

    const mainPage = () =>{
        history.push('/')
    };

    return (
        <div className="header">
            <div className="container">
                <div className="logo" onClick={mainPage}>
                    <img src={logo} alt="logo"/>
                    <h1>Connect<span>4pro</span></h1>
                </div>
                <div className={active ? "burger" : "burger".concat(' active')} onClick={showNavBar}>
                    <span></span>
                </div>
                <div className={active ? "menu-burger" : "menu-burger".concat(' active')}>
                    <div className="navBar">
                        {
                            showText
                        }
                    </div>
                    <div className="auth-log">
                        <button className="signIn" onClick={loginClick}>Вход</button>
                        <button className="signUp" onClick={registerClick}>Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;