import React from 'react';
import {useHistory} from 'react-router-dom';

import './registerMSBcontact.css';

const RegisterMsBcontact = () => {
    let history = useHistory();

    const nextRegister = () =>{
        history.push('/register-invest')
    };

    const clickBack = () =>{
        history.push('/register-msb')
    };

    return (
        <div className="registerMSBContact">
            <div className="registerContactContainer">
                <div className="registerContactItem">
                    <h1>Добро пожаловать, <span>Имя!</span></h1>
                    <div className="registerUserTel">
                        <div className="userName">
                            <p>Номер телефона</p>
                            <input
                                type="text"
                                placeholder="+996"
                            />
                        </div>
                        <div className="userName">
                            <p>Телеграм</p>
                            <input
                                type="text"
                                placeholder="+996"
                            />
                        </div>
                    </div>
                    <div className="registerUserBorn">
                        <p>Дата рождения*</p>
                        <div className="userBorn">
                            <input
                                type="number"
                                placeholder="День"
                            />
                            <select name="month" id="month">
                                <option value="Месяц">Месяц</option>
                                <option value="Январь">Январь</option>
                                <option value="Февраль">Февраль</option>
                                <option value="Март">Март</option>
                                <option value="Апрель">Апрель</option>
                                <option value="Май">Май</option>
                                <option value="Июнь">Июнь</option>
                                <option value="Июль">Июль</option>
                                <option value="Август">Август</option>
                                <option value="Сентябрь">Сентябрь</option>
                                <option value="Октябрь">Октябрь</option>
                                <option value="Ноябрь">Ноябрь</option>
                                <option value="Декабрь">Декабрь</option>
                            </select>
                            <input
                                type="number"
                                placeholder="Год"
                            />
                        </div>
                    </div>
                    <div className="userSex">
                        <select name="sex" id="sex">
                            <option value="Пол">Пол</option>
                            <option value="Мужской">Мужской</option>
                            <option value="Женский">Женский</option>
                        </select>
                    </div>
                    <div className="registerCountry">
                        <div className="userCountry">
                            <p>Страна</p>
                            <select name="country" id="country">
                                <option value="Выберите">Выберите</option>
                                <option value="Кыргызстан">Кыргызстан</option>
                                <option value="Россия">Россия</option>
                                <option value="Казахстан">Казахстан</option>
                            </select>
                        </div>
                        <div className="userCity">
                            <p>Город/село</p>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="registerButtons">
                        <button className="registerLogin" onClick={clickBack}>Назад</button>
                        <button className="registerNext" onClick={nextRegister}>Далее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterMsBcontact;