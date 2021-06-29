import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle,faFacebook} from "@fortawesome/free-brands-svg-icons";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {addUser} from "../../../../redux/sliceReducer";

import './login.css';
import './media.css';
import logo from '../../../../Images/New_Logo.png';
import avatar from "../../../../Images/avatar.jpg";

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const login = () => {
        const user = {
            id: 1,
            avatar: avatar,
            name: 'Muradil',
            surname: 'Koychubekov',
            telNumber: '+9969999999',
            payCard: [
                {
                    card: '1234 **** **** 5678',
                },
                {
                    card: 'ОДеньги'
                }
            ]
        };
        dispatch(addUser(user));
        history.push(`/user`)
    };

    return (
        <div className='login'>
            <div className="loginContainer">
                <div className="loginItem">
                    <div className="loginLogo">
                        <img src={logo} alt="loginLogo"/>
                    </div>
                    <div className="loginSocialButtons">
                        <button className='googleLogin'><FontAwesomeIcon className='loginIcon' icon={faGoogle}/>Google
                        </button>
                        <button className='facebookLogin'><FontAwesomeIcon className='loginIcon' icon={faFacebook}/>Facebook
                        </button>
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
                        <button onClick={login}>Войти</button>
                        <a href="#">Забыли пароль?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;