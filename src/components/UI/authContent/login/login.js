import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle,faFacebook} from "@fortawesome/free-brands-svg-icons";

import './login.css';
import logo from '../../../../Images/New_Logo.png';

class Login extends Component {
    render() {
        return (
            <div className='login'>
                <div className="loginContainer">
                    <div className="loginItem">
                        <div className="loginLogo">
                            <img src={logo} alt="loginLogo"/>
                        </div>
                        <div className="loginSocialButtons">
                            <button className='googleLogin'><FontAwesomeIcon className='loginIcon' icon={faGoogle}/>Google</button>
                            <button className='facebookLogin'><FontAwesomeIcon className='loginIcon' icon={faFacebook}/>Facebook</button>
                        </div>
                        <div className="loginOr">
                            <hr/>
                            <p>или</p>
                            <hr/>
                        </div>
                        <div className="loginFormContent">
                            <h1>Войти</h1>
                            <p>Новый пользователь? <span>Создать учетную запись</span></p>
                            <div className="loginForm">
                                <label htmlFor="userEmail">Адрес электронный адрес<span>*</span></label>
                                <input type="email" id='userEmail' placeholder='Введите адрес электронной почты'/>
                                <div className="loginPassword">
                                    <label htmlFor="userPassword">Пароль<span>*</span></label>
                                    <input type="password" id='userPassword'/>
                                </div>
                            </div>
                        </div>
                        <div className="loginButton">
                            <button>Войти</button>
                            <a href="#">Забыли пароль?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;