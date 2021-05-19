import React from 'react';
import {useHistory} from "react-router-dom";

import './registerMsb.css';

const RegisterMsb = () => {
    let history = useHistory();

    const nextRegister = () =>{
        history.push('/register-contact')
    };

    return (
        <div className="registerMSB">
            <div className="registerContainer">
                <div className="registerItem">
                    <h1>Регистрация</h1>
                    <div className="registerUserName">
                        <div className="userName">
                            <p>Имя*</p>
                            <input
                                type="text"
                                placeholder="Придумайте имя"
                            />
                        </div>
                        <div className="userName">
                            <p>Фамилия*</p>
                            <input
                                type="text"
                                placeholder="Придумайте фамилию"
                            />
                        </div>
                    </div>
                    <div className="registerUserEmail">
                        <div className="userEmail">
                            <p>Электронный адрес*</p>
                            <input
                                type="email"
                                placeholder="Введите адрес электронной почты"
                            />
                        </div>
                    </div>
                    <div className="registerPassword">
                        <div className="userPassword">
                            <p>Пароль*</p>
                            <input
                                type="password"
                                placeholder="Придумайте пароль"
                            />
                        </div>
                        <div className="userPassword">
                            <p>Подтвердить пароль*</p>
                            <input
                                type="password"
                                placeholder="Повторите пароль"
                            />
                        </div>
                    </div>
                    <div className="registerButtons">
                        <button className="registerLogin">Войти</button>
                        <button className="registerNext" onClick={nextRegister}>Далее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterMsb;