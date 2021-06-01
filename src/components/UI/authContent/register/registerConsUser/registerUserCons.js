import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router";
import useInput from './../useInput';

import './registerUserCons.css';
import './media.css';

const RegisterUserCons = () => {
    const surname = useInput('', {isEmpty: true, minLength: 3});
    const name = useInput('', {isEmpty: true, minLength: 3});
    const password = useInput('', {isEmpty: true, maxLength: 8, minLength: 3});
    const confirmPassword = useInput('', {isEmpty: true});
    const email = useInput('', {isEmpty: true, isEmail: true, minLength: 3});
    const telegram = useInput('', {isEmpty: true, minLength: 8});
    const link = useInput('');
    const country = useInput('Выберите', {isEmpty: true, countryValue: false});
    const city = useInput('', {isEmpty: true});
    const [passwordError, setPasswordError] = useState(false);
    const day = useInput('', {isEmpty: true, maxNumber: 31});
    const month = useInput('Месяц', {monthValue: false});
    const year = useInput('', {isEmpty: true,  maxLength: 4, minLength: 4, minNumber: 1930});
    const gender = useInput('Пол',  {genderValue: true});
    const number = useInput('', {isEmpty: true, minLength: 8});



    const history = useHistory();

    const ShowError = (props) =>{
        return <p style={{color: 'red'}}>{props.text}</p>
    };


    const clickNext = (e) =>{
        e.preventDefault();
        if (!surname.consValid || !name.consValid || !number.inputValid  || !day.inputValid || month.value === 'Месяц' || !year.inputValid || !email.consValid || !telegram.consValid || country.value === 'Выберите' || !city.consValid){
            return false
        }else {
            if (password.value.trim()){
                if (password.value === confirmPassword.value){
                    setPasswordError(false);
                    history.push('/register-cons')
                }else {
                    setPasswordError(true);
                    return false
                }
            }else {
                return false
            }
        }
    };

    return (
        <div className='registerUserCons'>
            <div className="registerUserConsContainer">
                <form>
                    <div className="registerUserConsItem">
                        <div className="registerUserConsTitle">
                            <h1>Регистрация провайдера (консультант):</h1>
                        </div>
                        <div className="registerUserInfo">
                            <div className="registerInputOne">
                                <h1>Имя<span>*</span></h1>
                                <input type="text" onBlur={e => name.onBlur(e)} onChange={e => name.onChange(e)} value={name.value}/>
                                {(name.isDirty && name.isEmpty) && <ShowError text='Поле не должен быть пустым'/>}
                                {(name.isDirty && name.minLengthError) && <ShowError text='Неккоректная длина'/>}
                            </div>
                            <div className="registerInputTwo">
                                <h1>Фамилия<span>*</span></h1>
                                <input type="text" onBlur={e => surname.onBlur(e)} onChange={e => surname.onChange(e)} value={surname.value}/>
                                {(surname.isDirty && surname.isEmpty) && <ShowError text='Поле не должен быть пустым'/>}
                                {(surname.isDirty && surname.minLengthError) && <ShowError text='Неккоректная длина'/>}
                            </div>
                        </div>
                        <div className="registerEmailCons">
                            <div className="registerEmail">
                                <h1>Электронный адрес<span>*</span></h1>
                                <input type="email" required onBlur={e => email.onBlur(e)} onChange={e => email.onChange(e)} value={email.value}/>
                                {(email.isDirty && email.isEmpty) && <ShowError text='Поле не должен быть пустым'/>}
                                {(email.isDirty && email.emailError) && <ShowError text='Неккоректный Email'/>}
                                {(email.isDirty && email.minLengthError) && <ShowError text='Неккоректная длина'/>}
                            </div>
                        </div>
                        <div className="registerConsPassword">
                            <div className="registerPasswordOne">
                                <h1>Пароль<span>*</span></h1>
                                <input type="password" onBlur={e => password.onBlur(e)} onChange={e => password.onChange(e)} value={password.value}/>
                                {(password.isDirty && password.isEmpty) && <ShowError text='Поле не должен быть пустым'/>}
                                {(password.isDirty && password.maxLengthError) && <ShowError text='Неккоректная длина'/>}
                                {(password.isDirty && password.minLengthError) && <ShowError text='Неккоректная длина'/>}
                            </div>
                            <div className="registerPasswordTwo">
                                <h1>Подтвердить пароль<span>*</span></h1>
                                <input type="password" onBlur={e => confirmPassword.onBlur(e)} onChange={e => confirmPassword.onChange(e)} value={confirmPassword.value}/>
                                {passwordError ? <ShowError text='Пароли несовпадают'/> : null}
                                {(confirmPassword.isDirty && confirmPassword.isEmpty) && <ShowError text='Поле не должен быть пустым'/>}
                                {(confirmPassword.isDirty && confirmPassword.minLengthError) && <ShowError text='Неккоректная длина'/>}
                            </div>
                        </div>
                        <div className="registerConsUserBorn">
                            <h1>Дата рождения<span>*</span></h1>
                            <div className='userConsBorn'>
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
                        <div className="userConsGender">
                            <select name="gender" form='user' id="gender" onBlur={e => gender.onBlur(e)} onChange={e => gender.onChange(e)} value={gender.value}>
                                <option value="Пол">Пол</option>
                                <option value="Мужской">Мужской</option>
                                <option value="Женский">Женский</option>
                            </select>
                            {(gender.isDirty && gender.genderError) && <p style={{color: 'red'}}>Выберите пол</p>}
                        </div>
                        <div className="registerUserConsLocation">
                            <div className="registerLocationOne">
                                <h1>Страна</h1>
                                <select name="country"  onBlur={e => country.onBlur(e)} onChange={e => country.onChange(e)} value={country.value}>
                                    <option value="Выберите">Выберите</option>
                                    <option value="Кыргызстан">Кыргызстан</option>
                                    <option value="Россия">Россия</option>
                                    <option value="Казахстан">Казахстан</option>
                                </select>
                                {(country.isDirty && country.isEmpty) && <ShowError text='Выберите страну которой проживаете'/>}
                                {(country.isDirty && country.countryError) && <ShowError text='Выберите страну которой проживаете'/>}
                            </div>
                            <div className="registerLocationTwo">
                                <h1>Город/село</h1>
                                <input type="text" onBlur={e => city.onBlur(e)} onChange={e => city.onChange(e)} value={city.value}/>
                                {(city.isDirty && city.isEmpty)&& <ShowError text='Поле не должен быть пустым'/>}
                            </div>
                        </div>
                        <div className="registerUserConsContact">
                            <div className="registerContactOne">
                                <h1>Номер телефона<span>*</span></h1>
                                <input
                                    type="text"
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
                            <div className='registerContactTwo'>
                                <h1>Telegram</h1>
                                <input type="text" onBlur={e => telegram.onBlur(e)} onChange={e => telegram.onChange(e)} value={telegram.value} placeholder="+996"/>
                                {(telegram.isDirty && telegram.isEmpty) && <ShowError text='Поле не должен быть пустым'/>}
                                {(telegram.isDirty && telegram.minLengthError) && <ShowError text='Неккоректная длина'/>}
                            </div>
                        </div>
                        <div className="registerConsSocialLink">
                            <h1>Ссылка на сайт или соцсети</h1>
                            <input type="text" onChange={e => link.onChange(e)} value={link.value}/>
                        </div>
                        <div className="registerButtons">
                            <button className="registerLogin">Войти</button>
                            <input onClick={clickNext} type='submit' className="registerNext" value='Далее' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterUserCons;