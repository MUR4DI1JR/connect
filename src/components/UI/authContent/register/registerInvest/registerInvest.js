import React from 'react';
import {useHistory} from "react-router-dom";
import useInput from "../useInput";

import './registerInvest.css';


const RegisterInvest = () => {
    const coins = useInput(100000, {minNumber: 0});
    const sector = useInput('Выберите',  {isEmpty: true, sectorValue: true});
    const minCollab = useInput('', {isEmpty: true, maxNumber: 11});
    const maxCollab = useInput('', {isEmpty: true, maxNumber: 21});
    const collab = useInput('Выберите', {isEmpty: true, collabValue: true});

    let history = useHistory();


    const clickBack = () =>{
        history.push('/register-contact')
    };

    const ShowError = (props) =>{
        return <p style={{color: 'red'}}>{props.text}</p>
    };

    const style ={
        left: coins.value/120000 + "%"
    };


    const clickNext = (e) =>{
        e.preventDefault();
        if (!collab.investValid || !sector.investValid || !minCollab || !maxCollab){
            return false;
        }else {
            alert('Все готово!')
        }
    };

    return (
        <div className="registerInvest">
            <form>
                <div className="registerInvestContainer">
                    <div className="registerInvestItem">
                        <h1>Добро пожаловать, Имя!</h1>
                        <div className="registerSectorBusiness">
                            <div className="sectorBusiness">
                                <p>Сектор бизнеса</p>
                                <select name="sectorBusiness" id="sectorBussiness" onBlur={e => sector.onBlur(e)} onChange={e => sector.onChange(e)} value={sector.value} required>
                                    <option value="Выберите">Выберите</option>
                                    <option value="Основной">Основной</option>
                                    <option value="Креативный">Креативный</option>
                                </select>
                                {(sector.isDirty && sector.isEmpty) && <ShowError text='Выберите сектор бизнеса'/>}
                                {(sector.isDirty && sector.sectorError) && <ShowError text='Выберите сектор бизнеса'/>}
                            </div>
                        </div>
                        <div className="registerCountCollab">
                            <div className="countCollabTitle">
                                <p>Число сотрудников</p>
                                <div className="CountCollab">
                                    <input
                                        type="number"
                                        placeholder="5-10"
                                        value={minCollab.value}
                                        onChange={e => minCollab.onChange(e)}
                                        onBlur={e => minCollab.onBlur(e)}
                                        required
                                    />
                                    <input
                                        type="number"
                                        placeholder="11-20"
                                        value={maxCollab.value}
                                        onChange={e => maxCollab.onChange(e)}
                                        onBlur={e => maxCollab.onBlur(e)}
                                        required
                                    />
                                    <select name="Collabs" id="Collabs" value={collab.value} onChange={e => collab.onChange(e)} onBlur={e => collab.onBlur(e)} required>
                                        <option value="Выберите">Выберите</option>
                                        <option value="FrontEnd">FrontEnd</option>
                                        <option value="BackEnd">BackEnd</option>
                                    </select>
                                </div>
                                {(minCollab.isDirty && minCollab.isEmpty) && <ShowError text='Поле недолжен быть пустым'/>}
                                {(maxCollab.isDirty && maxCollab.isEmpty) && <ShowError text='Поле недолжен быть пустым'/>}
                                {(minCollab.isDirty && minCollab.maxNumberError) && <ShowError text='Неккоректные данные'/>}
                                {(minCollab.isDirty && maxCollab.maxNumberError) && <ShowError text='Неккоректные данные'/>}
                                {(collab.isDirty && collab.isEmpty) && <ShowError text='Выберите работников'/>}
                                {(collab.isDirty && collab.collabError) && <ShowError text='Выберите работников'/>}
                            </div>
                        </div>
                        <div className="registerInvests">
                            <div className="investsRange">
                                <p>Примерный оборот за прошедший год</p>
                                <input type="range" min="100000" max="10000000" required value={coins.value} onChange={e => coins.onChange(e)} onBlur={e => coins.onBlur(e)}/>
                                <div className="showCount">
                                    <span style={style}>{coins.value}</span>
                                </div>
                                <div className="countRange">
                                    <div><div className="circle1"></div>100 000c</div>
                                    <div><div className="circle2"></div>10 000 000с</div>
                                </div>
                                {(coins.isDirty && coins.minNumberError) && <ShowError text='Неккоректные данные'/>}
                            </div>
                        </div>
                        <div className="registerButtons">
                            <button className="registerLogin" onClick={clickBack}>Назад</button>
                            <input type="submit" onClick={clickNext} className="registerNext" value="Далее"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterInvest;