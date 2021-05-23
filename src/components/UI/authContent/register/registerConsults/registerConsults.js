import React, {Component} from 'react';
import {useHistory} from "react-router";

import './registerConsults.css';

const RegisterConsults = () => {
    const history = useHistory();

    const clickNext = () =>{
        alert('Good jobs')
    };

    const clickBack = () =>{
        history.push('/role')
    };

    return (
        <div className="registerCons">
            <div className="registerConsContainer">
                <div className="registerConsItem">
                    <div className="registerConsTitle">
                        <h1>Регистрация</h1>
                    </div>
                    <div className="skils">
                        <h1>Знания</h1>
                        <input type="text" placeholder='Добавить +'/>
                    </div>
                    <div className="skils">
                        <h1>Навыки</h1>
                        <input type="text" placeholder='Добавить +'/>
                    </div>
                    <div className="skils">
                        <h1>Методологии</h1>
                        <input type="text" placeholder='Добавить +'/>
                    </div>
                    <div className="registerButtons">
                        <button onClick={clickBack} className="registerLogin">Назад</button>
                        <button onClick={clickNext} type='submit' className="registerNext">Далее</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterConsults;