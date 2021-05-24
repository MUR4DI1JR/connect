import React from 'react';
import {useHistory} from 'react-router-dom';

import './registerMSBcontact.css';
import useInput from "../useInput";


const RegisterMsBcontact = () => {
    const number = useInput('', {isEmpty: true, minLength: 8,});
    const telegram = useInput('', {isEmpty: true, minLength: 8});
    const day = useInput('', {isEmpty: true, maxNumber: 31});
    const month = useInput('Месяц', {monthValue: false});
    const year = useInput('', {isEmpty: true,  maxLength: 4, minLength: 4, minNumber: 1930});
    const gender = useInput('Пол',  {genderValue: true});
    const country = useInput('Выберите', {countryValue: false});
    const city = useInput('', {isEmpty: true, minLength: 2});
    const history = useHistory();

    const clickBack = () =>{
        history.push('/register-msb')
    };

    console.log(gender.inputValid);

    const clickNext = (e) =>{
        e.preventDefault();
        if (!number.inputValid || !telegram.inputValid || !day.inputValid || month.value === 'Месяц' || !year.inputValid || gender.value === 'Пол' || country.value === 'Выберите' || !city.inputValid){
            return false
        }else {
            history.push('/register-invest')
        }
    };


    return (
        <div className="registerMSBContact">
            <form id='user'>
                <div className="registerContactContainer">
                    <div className="registerContactItem">
                        <h1>Добро пожаловать, <span>Имя!</span></h1>
                        <div className="registerUserTel">
                            <div className='userName'>
                                <p>Номер телефона</p>
                                <input
                                    type="tel"
                                    name="number"
                                    onChange={e => number.onChange(e)}
                                    onBlur={e => number.onBlur(e)}
                                    value={number.value}
                                    placeholder="+996"
                                    required
                                />
                                {(number.isDirty && number.isEmpty) && <p style={{color: 'red'}}>Поле не должен быть пустым</p>}
                                {(number.isDirty && number.minLengthError) && <p style={{color: 'red'}}>Неккоректная длина</p>}
                            </div>
                            <div className='userName'>
                                <p>Телеграм</p>
                                <input
                                    type="tel"
                                    name="userTelegram"
                                    onChange={e => telegram.onChange(e)}
                                    onBlur={e => telegram.onBlur(e)}
                                    value={telegram.value}
                                    placeholder="+996"
                                    required
                                />
                                {(telegram.isDirty && telegram.isEmpty) && <p style={{color: 'red'}}>Поле не должен быть пустым</p>}
                                {(telegram.isDirty && telegram.minLengthError) && <p style={{color: 'red'}}>Неккоректная длина</p>}
                            </div>
                        </div>
                        <div className="registerUserBorn">
                            <p>Дата рождения<span>*</span></p>
                            <div className='userBorn'>
                                <input
                                    type="number"
                                    name="day"
                                    onChange={e => day.onChange(e)}
                                    onBlur={e => day.onBlur(e)}
                                    value={day.value}
                                    placeholder="День"
                                    required
                                />
                                <select name="month" id="month" value={month.value} onBlur={e => month.onBlur(e)} onChange={e => month.onChange(e)} required>
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
                                    name="year"
                                    onBlur={e => year.onBlur(e)}
                                    onChange={e => year.onChange(e)}
                                    value={year.value}
                                    placeholder="Год"
                                    required
                                />
                            </div>
                            {(day.isEmpty && day.isDirty) && <p style={{color: 'red'}}>Поле не должен быть пустым</p>}
                            {(day.isDirty && day.maxNumberError) && <p style={{color: 'red'}}>Неверные данные</p>}
                            {(month.isDirty && month.monthError) && <p style={{color: 'red'}}>Выберите месяц которой вы родились!</p>}
                            {(year.isDirty && year.isEmpty) && <p style={{color: "red"}}>Поле не должен быть пустым</p>}
                            {(year.isDirty && year.maxLengthError) && <p style={{color: 'red'}}>Неккоректная длина</p>}
                            {(year.isDirty && year.value > new Date().getFullYear()) && <p style={{color: 'red'}}>Неверные данные</p>}
                            {(year.isDirty && year.minNumberError) && <p style={{color: 'red'}}>Неверные данные</p>}
                            {(year.isDirty && year.minLengthError) && <p style={{color: 'red'}}>Неккоректная длина</p>}
                        </div>
                        <div className="userGender">
                            <select name="gender" form='user' id="gender" onBlur={e => gender.onBlur(e)} onChange={e => gender.onChange(e)} value={gender.value}>
                                <option value="Пол">Пол</option>
                                <option value="Мужской">Мужской</option>
                                <option value="Женский">Женский</option>
                            </select>
                            {(gender.isDirty && gender.genderError) && <p style={{color: 'red'}}>Выберите пол</p>}
                        </div>
                        <div className="registerCountry">
                            <div className="userCountry">
                                <p>Страна</p>
                                <select name="country" required id="country" onBlur={e => country.onBlur(e)} onChange={e => country.onChange(e)} value={country.value}>
                                    <option value="Выберите">Выберите</option>
                                    <option value="Кыргызстан">Кыргызстан</option>
                                    <option value="Россия">Россия</option>
                                    <option value="Казахстан">Казахстан</option>
                                </select>
                                {(country.isDirty && country.countryError) && <p style={{color: 'red'}}>Выберите страну которой проживаете</p>}
                            </div>
                            <div className="userCity">
                                <p>Город/село</p>
                                <input
                                    type="text"
                                    name='city'
                                    onBlur={e => city.onBlur(e)}
                                    onChange={e => city.onChange(e)}
                                    value={city.value}
                                    required
                                />
                                {(city.isDirty && city.isEmpty) && <p style={{color: 'red'}}>Поле не должен быть пустым</p>}
                                {(city.isDirty && city.minLengthError) && <p style={{color: 'red'}}>Неккоректная длина</p>}
                            </div>
                        </div>
                        <div className="registerButtons">
                            <button className="registerLogin" onClick={clickBack}>Назад</button>
                            <input
                                type="submit"
                                className="registerNext"
                                value="Далее"
                                onClick={clickNext}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterMsBcontact;