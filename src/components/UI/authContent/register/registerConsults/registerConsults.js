import React, {useState} from 'react';
import {useHistory} from "react-router";
import useInput from "../useInput";


import './registerConsults.css';
import './media.css';

const RegisterConsults = () => {
    const textSkills = useInput('', {isDirty: true});
    const textKnow = useInput('', {isDirty: true});
    const textMethod = useInput('', {isDirty: true});

    const [skills, setSkills] = useState([]);
    const [knowledge, setKnowLedge] = useState([]);
    const [method, setMethod] = useState([]);
    const [errorSkills, setErrorSkills] = useState(true);
    const [errorKnow, setErrorKnow] = useState(true);
    const [errorMethod, setErrorMethod] = useState(true);

    const history = useHistory();


    const clickEnter = (e) =>{
        if (e.key === 'Enter'){
            if (e.target.name === 'skills'){
                skills.push(textSkills.value);
                setSkills(arr => [...arr]);
                setErrorSkills(false)
            }else if (e.target.name === 'knowledge'){
                knowledge.push(textKnow.value);
                setKnowLedge(arr => [...arr]);
                setErrorKnow(false)
            }else{
                method.push(textSkills.value);
                setMethod(arr => [...arr]);
                setErrorMethod(false)
            }
            e.target.value = '';
        }
    };

    const ItemSkills = () => {
        return (
            <div className='userSkill'>
                {
                    skills.map((skill, i) =>{
                        return <p key={i}>{'#' + skill + ','}</p>
                    })
                }
            </div>
        )
    };

    const ItemKnows = () => {
        return (
            <div className='userSkill'>
                {
                    knowledge.map((skill, i) =>{
                        return <p key={i}>{'#' + skill + ','}</p>
                    })
                }
            </div>
        )
    };

    const ItemMethod = () => {
        return (
            <div className='userSkill'>
                {
                    method.map((skill, i) =>{
                        return <p key={i}>{'#' + skill + ','}</p>
                    })
                }
            </div>
        )
    };

    const ShowError = (props) =>{
        return <p style={{color: 'red'}}>{props.text}</p>
    };

    const clickNext = () =>{
        if (!textKnow.inputValid || !textMethod.inputValid || !textSkills.inputValid){
            return false
        }else {
            alert('Good jobs')
        }
    };

    const clickBack = () =>{
        history.push('/register-cons-user')
    };


    return (
        <div className="registerCons">
            <div className="registerConsContainer">
                <div className="registerConsItem">
                    <div className="registerConsTitle">
                        <h1>Регистрация</h1>
                    </div>
                    <div className="skills">
                        <h1>Знания</h1>
                        <input type="text" name='knowledge' placeholder='Добавить +' onBlur={e => textKnow.onBlur(e)} onChange={e => textKnow.onChange(e)} onKeyPress={clickEnter}/>
                        {
                            knowledge ?  <ItemKnows/>  : null
                        }
                        { errorKnow ? (textKnow.isDirty && textKnow.isEmpty) && <ShowError text='Поле не должен быть пустым'/> : null}
                    </div>
                    <div className="skills">
                        <h1>Навыки</h1>
                        <input type="text" name='skills' placeholder='Добавить +' onBlur={e => textSkills.onBlur(e)} onChange={e => textSkills.onChange(e)} onKeyPress={clickEnter}/>
                        {
                            skills  ? <ItemSkills/>: null
                        }
                        {errorSkills ? (textSkills.isDirty && textSkills.isEmpty) && <ShowError text='Поле не должен быть пустым'/> : null}
                    </div>
                    <div className="skills">
                        <h1>Методологии</h1>
                        <input type="text" name='method' placeholder='Добавить +' onBlur={e => textMethod.onBlur(e)} onChange={e => textMethod.onChange(e)} onKeyPress={clickEnter}/>
                        {
                            method ? <ItemMethod /> : null
                        }
                        {errorMethod ? (textMethod.isDirty && textMethod.isEmpty) && <ShowError text='Поле не должен быть пустым'/> : null}
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