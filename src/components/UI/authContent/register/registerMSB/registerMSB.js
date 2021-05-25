import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

import './registerMsb.css';
import './media.css';

const RegisterMsb = () => {
    const [user, setUser] = useState({
        name: '',
        surname: '',
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [surnameDirty, setSurnameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [confirmDirty, setConfirmDirty] = useState(false);
    const [errorEmail, setErrorEmail] = useState('Емейл не должен быть пустым!');
    const [errorPassword, setErrorPassword] = useState('Пароль не должен быть пустым!');
    const [errorConfirm, setErrorConfirm] = useState('Пароль не должен быть пустым!');
    const [formValid, setFormValid] = useState(false);
    let history = useHistory();

    useEffect(() =>{
        if (errorEmail || errorPassword){
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [errorEmail, errorPassword]);


    const blurHandle = e =>{
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'name':
                setNameDirty(true);
                break;
            case 'surname':
                setSurnameDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            case 'confirm':
                setConfirmDirty(true);
                break;
        }
    };

    const userHandle = e =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        });
    };

    const emailHandle = e =>{
        setEmail(e.target.value);
        if (!e.target.value){
            setEmailDirty(true);
        }else{
            setEmailDirty(false);
            setErrorEmail('')
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailDirty(true);
            setErrorEmail('Не корректный Емейл!');
        }else {
            setEmailDirty(false);
            setErrorEmail('')
        }
    };

    const passwordHandle = e =>{
        setPassword(e.target.value);
        if (e.target.value.length < 3 || e.target.value.length > 8){
            setErrorPassword('Пароль не должен быть длиннее 3 и меньше 8!');
            if (!e.target.value){
                setErrorPassword('Пароль не должен быть пустым!')
            }
        }else {
            setErrorPassword('')
        }
    };

    const confirmHandle = e =>{
        setConfirmPassword(e.target.value);
        if (!e.target.value){
            setErrorConfirm('Пароль не должен быть пустым!')
        }else {
            setErrorConfirm('')
        }
    };

    const checkPassword = (e) =>{
        e.preventDefault();
        if (password === confirmPassword){
            history.push('/register-contact');
            setErrorConfirm('')
        }else {
            setErrorConfirm('Пароли не совпадают!');
            return false;
        }
    };


    return (
        <div className="registerMSB">
            <form>
                <div className="registerContainer">
                    <div className="registerItem">
                        <h1>Регистрация</h1>
                        <div className="registerUserName">
                            <div className={nameDirty ? "userName".concat(' error') : "userName"}>
                                <p>Имя<span>*</span></p>
                                <input
                                    onBlur={e => blurHandle(e)}
                                    type="text"
                                    placeholder="Придумайте имя"
                                    required
                                    value={user.name}
                                    onChange={userHandle}
                                    name="name"
                                />
                            </div>
                            <div className={surnameDirty ? "userName".concat(' error'):"userName"}>
                                <p>Фамилия<span>*</span></p>
                                <input
                                    onBlur={e => blurHandle(e)}
                                    type="text"
                                    placeholder="Придумайте фамилию"
                                    required
                                    value={user.surname}
                                    onChange={userHandle}
                                    name="surname"
                                />
                            </div>
                        </div>
                        <div className="registerUserEmail">
                            <div className={emailDirty ? 'userEmail'.concat(' error') : 'userEmail'}>
                                <p>Электронный адрес<span>*</span></p>
                                <input
                                    onBlur={e => blurHandle(e)}
                                    type="email"
                                    placeholder="Введите адрес электронной почты"
                                    required
                                    value={email}
                                    onChange={emailHandle}
                                    name="email"
                                />
                                {emailDirty ? <p style={{color: 'red'}}>{errorEmail}</p> : null}
                            </div>
                        </div>
                        <div className="registerPassword">
                            <div className={passwordDirty ? 'userPassword'.concat(' error') : 'userPassword'}>
                                <p>Пароль<span>*</span></p>
                                <input
                                    onBlur={e => blurHandle(e)}
                                    type="password"
                                    name='password'
                                    placeholder="Придумайте пароль"
                                    value={password}
                                    onChange={passwordHandle}
                                    required
                                />
                                {passwordDirty ? <p style={{color: "red"}}>{errorPassword}</p> : null}
                            </div>
                            <div className={confirmDirty ? 'userPassword'.concat(' error') : 'userPassword'}>
                                <p>Подтвердить пароль<span>*</span></p>
                                <input
                                    onBlur={e => blurHandle(e)}
                                    type="password"
                                    name='confirm'
                                    placeholder="Повторите пароль"
                                    value={confirmPassword}
                                    onChange={confirmHandle}
                                    required
                                />
                                {confirmDirty ? <p style={{color: "red"}}>{errorConfirm}</p> : null}
                            </div>
                        </div>
                        <div className="registerButtons">
                            <button className="registerLogin">Войти</button>
                            <button onClick={checkPassword} type='submit' className="registerNext"  disabled={!formValid}>Далее</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterMsb;