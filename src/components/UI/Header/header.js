import React, {useState} from 'react';

import './header.css';
import './media.css';
import logo from './../../../Images/logo.png';

const Header = () => {
    const [active, setActive] = useState(true);
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
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
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
                        <button className="signIn">Вход</button>
                        <button className="signUp">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;