import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

import './registerInvest.css';

const RegisterInvest = () => {

    const [value, setValue] = useState(1321254);
    let history = useHistory();

    const showCount = (e) =>{
        setValue(e.target.value)
    };

    const clickBack = () =>{
        history.push('/register-contact')
    };

    const style ={
        left: value/120000 + "%"
    };

    return (
        <div className="registerInvest">
            <form action="">
                <div className="registerInvestContainer">
                    <div className="registerInvestItem">
                        <h1>Добро пожаловать, Имя!</h1>
                        <div className="registerSectorBusiness">
                            <div className="sectorBusiness">
                                <p>Сектор бизнеса</p>
                                <select name="sectorBusiness" id="sectorBussiness" required>
                                    <option value="Выберите">Выберите</option>
                                    <option value="Основной">Основной</option>
                                    <option value="Креативный">Креативный</option>
                                </select>
                            </div>
                        </div>
                        <div className="registerCountCollab">
                            <div className="countCollabTitle">
                                <p>Число сотрудников</p>
                                <div className="CountCollab">
                                    <input
                                        type="number"
                                        placeholder="5-10"
                                        required
                                    />
                                    <input
                                        type="number"
                                        placeholder="11-20"
                                        required
                                    />
                                    <select name="Collabs" id="Collabs" required>
                                        <option value="Выберите">Выберите</option>
                                        <option value="FrontEnd">FrontEnd</option>
                                        <option value="BackEnd">BackEnd</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="registerInvests">
                            <div className="investsRange">
                                <p>Примерный оборот за прошедший год</p>
                                <input type="range" min="100000" max="10000000" value={value} onInput={showCount} required/>
                                <div className="showCount">
                                    <span style={style}>{value}</span>
                                </div>
                                <div className="countRange">
                                    <div><div className="circle1"></div>100 000c</div>
                                    <div><div className="circle2"></div>10 000 000с</div>
                                </div>
                            </div>
                        </div>
                        <div className="registerButtons">
                            <button className="registerLogin" onClick={clickBack}>Назад</button>
                            <input type="submit" className="registerNext" value="Далее"/>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default RegisterInvest;