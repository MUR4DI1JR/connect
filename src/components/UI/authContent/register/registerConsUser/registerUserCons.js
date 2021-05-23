import React from 'react';
import {useHistory} from "react-router";

import './registerUserCons.css';

const RegisterUserCons = () => {
    const history = useHistory();

    const clickNext = () =>{
        history.push('/register-cons')
    };

    return (
        <div className='registerUserCons'>
            <div className="registerUserConsContainer">
                <div className="registerUserConsItem">
                    <div className="registerUserConsTitle">
                        <h1>Регистрация</h1>
                    </div>
                    <div className="registerUserInfo">
                        <div className="registerInputOne">
                            <h1>Фамилия*</h1>
                            <input type="text"/>
                        </div>
                        <div className="registerInputTwo">
                            <h1>Имя*</h1>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="registerUserInfo">
                        <div className="registerInputOne">
                            <h1>Пароль*</h1>
                            <input type="text"/>
                        </div>
                        <div className="registerInputTwo">
                            <h1>Подтвердить пароль*</h1>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="registerUserInfo">
                        <div className="registerInputOne">
                            <h1>Год рождения*</h1>
                            <input type="text"/>
                        </div>
                        <div className="registerInputTwo">
                            <h1>Электронный адрес*</h1>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="registerUserInfo">
                        <div className="registerInputOne">
                            <h1>Telegram</h1>
                            <input type="text"/>
                        </div>
                        <div className="registerInputTwo">
                            <h1>Ссылка на сайт или соцсети</h1>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="registerUserInfo">
                        <div className="registerInputOne">
                            <h1>Страна*</h1>
                            <input type="text"/>
                        </div>
                        <div className="registerInputTwo">
                            <h1>Город*</h1>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="registerButtons">
                        <button className="registerLogin">Войти</button>
                        <button onClick={clickNext} type='submit' className="registerNext">Далее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterUserCons;