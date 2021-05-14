import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

import './ask.css';

import shieldCheck from './../../../../Images/shieldCheck.png';

function AskAnswer(props) {
    const classes = ['askAnswerBlock'];

    if (props.answer.showAnswer){
        classes.push('show')
    }

    return(
        <div className="askAnswerItem" onClick={props.onQuest}>
            <button className="askButtonAnswer" >
                <FontAwesomeIcon className="askAnswerIcon" icon={faChevronDown}/>
                {props.answer.question}
            </button>
            <div className={classes.join(' ')}>
                <p>{props.answer.answer}</p>
            </div>
        </div>
    )
}

class Ask extends Component{
    state ={
        answer : [
            {
                showAnswer: false,
                question: 'Lorem ipsum dolor sit amet1',
                answer: 'Lorem ipsum dolor sit amet'
            },
            {
                showAnswer: false,
                question: 'Lorem ipsum dolor sit amet2',
                answer: 'Lorem ipsum dolor sit amet'
            },
            {
                showAnswer: false,
                question: 'Lorem ipsum dolor sit amet3',
                answer: 'Lorem ipsum dolor sit amet'
            },
            {
                showAnswer: false,
                question: 'Lorem ipsum dolor sit amet4',
                answer: 'Lorem ipsum dolor sit amet'
            },
            {
                showAnswer: false,
                question: 'Lorem ipsum dolor sit amet5',
                answer: 'Lorem ipsum dolor sit amet'
            },
            {
                showAnswer: false,
                question: 'Lorem ipsum dolor sit amet6',
                answer: 'Lorem ipsum dolor sit amet'
            }
        ],
    };

    clickQuestion = (quest) =>{
        const answers = this.state.answer.concat();
        const answer = answers.find(a => a.question === quest);
        answer.showAnswer = !answer.showAnswer;

        this.setState({answer: answers})
    };

    renderAnswer = () =>{
        return this.state.answer.map((answer, i) =>{
            return (
                <AskAnswer
                    answer={answer}
                    key={i}
                    onQuest={this.clickQuestion.bind(this, answer.question)}
                />
                )
        })
    };

    render() {
        return (
            <div className="ask">
                <div className="askContainer">
                    <div className="askAnswer">
                        <h1>Ответы на вопросы</h1>
                        {
                            this.renderAnswer()
                        }
                    </div>
                    <div className="askUserSupport">
                        <h1>Напишите нам</h1>
                        <div className="askUserForm">
                            <form action="">
                                <div className="askUserName">
                                    <input type="text" placeholder="Фамилия Имя Отчество"/>
                                </div>
                                <div className="askUserEmail">
                                    <div className="askUserTel">
                                        <p>Мобильный телефон</p>
                                        <input type="tel" id="tel" placeholder="+996("/>
                                    </div>
                                    <input type="email" placeholder="Электронная почта"/>
                                </div>
                                <div className="askUserMessage">
                                    <textarea  placeholder="Сообщение"/>
                                </div>
                                <div className="askButton">
                                    <div className="askSecurityText">
                                        <img src={shieldCheck} alt="shieldCheckIcon"/>
                                        <p>Мы гарантируем безопасть и сохранность ваших данных</p>
                                    </div>
                                    <div className="askButtonConfirm">
                                        <input type="submit" value="Продолжить"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


};

export default Ask;