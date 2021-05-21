import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {parsePhoneNumberFromString} from "libphonenumber-js";

import './registerMSBcontact.css';

const RegisterMsBcontact = () => {
    const [number, setNumber] = useState('');
    const [telegram, setTelegram] = useState('');
    const [numberDirty, setNumberDirty] = useState(false);
    const [telegramDirty, setTelegramDirty] = useState(false);
    const [errorNumber, setErrorNumber] = useState('Номер не должен быть пустым!');
    const [errorTelegram, setErrorTelegram] = useState('Номер не должен быть пустым!');
    const [day, setDay] = useState(null);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState(null);
    const [dayDirty, setDayDirty] = useState(false);
    const [yearDirty, setYearDirty] = useState(false);
    const [errorDate, setErrorDate] =useState('Неверные данные!');
    const [userGender, setUserGender] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [formValid, setFormValid] = useState(false);
    let history = useHistory();

    const normalizePhoneNumber = (value) =>{
        const phoneNumber = parsePhoneNumberFromString(value);
        if(!phoneNumber){
            return value
        }
        return(
            phoneNumber.formatInternational()
        )
    };

    useEffect(()=>{

    }, []);


    const telegramNumber = e =>{
        setTelegram(normalizePhoneNumber(e.target.value));
        setTelegramDirty(false);
        setErrorTelegram('')
    };

    const handleNumber = (event) =>{
        if (!event.target.value){
            setErrorNumber('Номер не должен быть пустым!')
            setNumberDirty(true)
        }else{
            setNumberDirty(false)
        }
        setNumber(normalizePhoneNumber(event.target.value));
        setNumberDirty(false);
        setErrorNumber('')
    };
    console.log(numberDirty);

    const blurHandler = e =>{
        switch (e.target.name) {
            case 'number':
                setNumberDirty(true);
                break;
            case 'userTelegram':
                setTelegramDirty(true);
                break;
            case 'day':
                setDayDirty(true);
                break;
            case 'year':
                setYearDirty(true);
                break;
        }
    };


    const handleDate = (event) =>{
        if (event.target.name === 'day'){
            setDay(event.target.value);
            setDayDirty(false);
            setErrorDate('');
            if (event.target.value > 32){
                setDayDirty(true)
            }else {
                setDayDirty(false)
            }
        }else if(event.target.name === 'year'){
            setYear(event.target.value);
            if (event.target.value.length < 5){
                setYearDirty(false);
                if (event.target.value > 2021){
                    setYearDirty(true);
                }else {
                    setYearDirty(false)
                }
            }else {
                setYearDirty(true)
            }
        }
    };


    const clickBack = () =>{
        history.push('/register-msb')
    };


    return (
        <div className="registerMSBContact">
            <form>
                <div className="registerContactContainer">
                    <div className="registerContactItem">
                        <h1>Добро пожаловать, <span>Имя!</span></h1>
                        <div className="registerUserTel">
                            <div className={numberDirty ? 'userName'.concat(' error') : 'userName' }>
                                <p>Номер телефона</p>
                                <input
                                    onBlur={e => blurHandler(e)}
                                    type="tel"
                                    maxLength={18}
                                    name="number"
                                    value={number}
                                    onChange={handleNumber}
                                    placeholder="+996"
                                />
                                {numberDirty ? <p style={{color: 'red'}}>{errorNumber}</p> : null}
                            </div>
                            <div className={telegramDirty ? 'userName'.concat(' error') : 'userName' }>
                                <p>Телеграм</p>
                                <input
                                    onBlur={e => blurHandler(e)}
                                    type="tel"
                                    maxLength={18}
                                    name="userTelegram"
                                    value={telegram}
                                    onChange={telegramNumber}
                                    placeholder="+996"
                                    required
                                />
                                {telegramDirty ? <p style={{color: 'red'}}>{errorTelegram}</p> : null}
                            </div>
                        </div>
                        <div className="registerUserBorn">
                            <p>Дата рождения*</p>
                            <div className={dayDirty || yearDirty ? 'userBorn'.concat(' error') : 'userBorn'}>
                                <input
                                    onBlur={e => blurHandler(e)}
                                    type="number"
                                    name="day"
                                    placeholder="День"
                                    value={day}
                                    onChange={handleDate}
                                    required
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
                                    onBlur={e => blurHandler(e)}
                                    type="number"
                                    name="year"
                                    placeholder="Год"
                                    value={year}
                                    onChange={handleDate}
                                    required
                                />
                            </div>
                            {dayDirty || yearDirty ?  <p style={{color: 'red'}}>{errorDate}</p> : null}
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
                                <input
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                        <div className="registerButtons">
                            <button className="registerLogin" onClick={clickBack}>Назад</button>
                            <input type="submit" className="registerNext"  value="Далее"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterMsBcontact;