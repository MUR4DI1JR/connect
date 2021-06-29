import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

import './header.css';
import './media.css';
import logo from './../../../Images/logo.png';
import {openHandle} from "../../../redux/sliceReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTelegramPlane, faTwitter, faVk} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    const active = useSelector(state => state.slice.active);
    const user = useSelector(state => state.slice.users);
    let history = useHistory();
    const navText = ['Финансы', 'Консультанты', 'Мероприятия', 'Форум', 'О нас', 'Дать Объявление'];
    const [screen, setScreen] = useState(window.matchMedia('(max-width: 915px)').matches);
    const dispatch = useDispatch();

    const clickHeader = e =>{
        dispatch(openHandle());
        if (e.target.textContent === 'О нас') {
            history.push('/about-us')
        }
    };

    let showText = navText.map((text, i) => {
        return (
            <p key={i}><a href={`#${i}`} onClick={clickHeader}>{text}</a></p>
        )
    });

    useEffect(() => {
        const handler = e => setScreen(e.matches);
        window.matchMedia('(max-width: 915px)').addListener(handler)
    });


    const registerClick = () =>{
        dispatch(openHandle());
        history.push('/role');
    };

    const loginClick = () =>{
        dispatch(openHandle());
        history.push('/login')
    };

    const mainPage = () =>{
        history.push('/')
    };

    console.log(user);

    const adaptiveHeader = () =>{
        if (active){
            document.body.style.overflow = 'visible'
        }else {
            document.body.style.overflow = 'hidden'
        }
        return(
            <div className='container'>
                <div className={active ? "burger" : "burger".concat(' active')} onClick={() => dispatch(openHandle())}>
                    <span></span>
                </div>
                <div className="logo" onClick={mainPage}>
                    <img src={logo} alt="logo"/>
                    <h1>Connect<span>4pro</span></h1>
                </div>
                <div className="magnifier">
                    {
                        !user ?
                            null
                            :
                            <img src={user[0].avatar} alt=""/>
                    }
                </div>
                <div className={active ? "wallpaper" : "wallpaper".concat(' active')}>
                    <div className={active ? "menu-burger" : "menu-burger".concat(' active')}>
                        {
                            active ? null
                                :
                                <div className="signInHeader">
                                    <button className={ active ? "signIn" : "signIn".concat(' active')} onClick={loginClick}>Вход</button>
                                </div>
                        }
                        <div className="navBar">
                            {
                                showText
                            }
                        </div>
                        <div className="auth-log">
                            <button className="signUp" onClick={registerClick}>Регистрация</button>
                        </div>
                        <div className="headerButtonLang">
                            <select size="1">
                                <option value="Russian">Русский</option>
                                <option value="English">English</option>
                            </select>
                        </div>
                        <hr/>
                        <div className="headerNavLink">
                            <div className="headerText">
                                <p>Есть информация про грант / инвестицию, пришлите на
                                    почту <span>prof4dev@gmail.com</span></p>
                            </div>
                            <div className="headerTel">
                                <p>+996 700 123-456</p>
                            </div>
                            <div className="headerSocial">
                                <FontAwesomeIcon className="headerSocialIcon" icon={faFacebookF}/>
                                <FontAwesomeIcon className="headerSocialIcon" icon={faTwitter}/>
                                <FontAwesomeIcon className="headerSocialIcon" icon={faVk}/>
                                <FontAwesomeIcon className="headerSocialIcon" icon={faTelegramPlane}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="header">
            {
                screen ? adaptiveHeader()
                    :
                    <div className="container">
                        <div className="logo" onClick={mainPage}>
                            <img src={logo} alt="logo"/>
                            <h1>Connect<span>4pro</span></h1>
                        </div>
                        <div className={active ? "burger" : "burger".concat(' active')} onClick={() => openHandle()}>
                            <span></span>
                        </div>
                        <div className={active ? "menu-burger" : "menu-burger".concat(' active')}>
                            <div className="navBar">
                                {
                                    showText
                                }
                            </div>
                            {
                                user ?
                                    <div className="magnifier">
                                        <img src={user[0].avatar} alt=""/>
                                    </div>
                                    :
                                    <div className="auth-log">
                                        <button className="signIn" onClick={loginClick}>Вход</button>
                                        <button className="signUp" onClick={registerClick}>Регистрация</button>
                                    </div>
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Header;