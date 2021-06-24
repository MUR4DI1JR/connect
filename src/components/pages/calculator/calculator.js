import React, {useState} from 'react';
import EventSideBar from "../../UI/sideBar/eventSideBar";

import './calculator.css'

const Calculator = () => {
    const [start, setStart] = useState(false);

    return (
        <div className='calculator'>
            <div className="calculatorHeading">
                <div className="calculatorHeadingText">
                    <h1>Калькулятор гранта</h1>
                    <p>Калькулятор показывает вероятность получение финансирования, исходя из вашего понимания ситуации. Возможно при более внимательном подходе или поддержке профессионалов ваша вероятность может повыситься.</p>
                    <p>Выберите наиболее подходящий %. Если вы знаете или уверены, что такого вопроса нет среди требований донора, тогда отметьте галочку “Пропустить вопрос”. Н-р, в критериях финансирования не требуется наличие собственного вклада, тогда нажмите кнопку “Пропустить вопрос”.</p>
                    <button onClick={() => setStart(true)}>Начать</button>
                </div>
            </div>
            <div className="calculatorContainer">
                <div className="calculatorContent">
                    <div className={start ? "questCalculator" : "questCalculator".concat(' notStart')}>
                        <p>1. Вы прочитали требования донора?</p>
                        <div className="answerUser">
                            <select name="answer" id="" disabled={!start}>
                                <option value="30%">30%</option>
                            </select>
                            <button onClick={() => console.log('click')} disabled={!start}>Пропустить вопрос</button>
                        </div>
                        <div className="showResult">
                            <button onClick={() => console.log('click')} disabled={!start}>Показать результат</button>
                        </div>
                    </div>
                    <div className="sideBar">
                        <EventSideBar/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;