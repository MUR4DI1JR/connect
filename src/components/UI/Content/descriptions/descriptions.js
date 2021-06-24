import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import './descriptions..css';

const Descriptions = (props) => {
    return (
        <div className='descriptionContainer' style={{width: props.width, margin: props.margin}}>
            <div className="descriptionItem">
                <h1>Описание</h1>
                <div className="descriptionText">
                    {props.description}
                </div>
                <div className="descPrograms">
                    <p>Получить стипендию могут иностранные студенты, которые поступают на одну из таких программ:</p>
                    <ul className='listDescPrograms'>
                        {
                            props.programs.map((program, i) =>(<li key={i}>{program}</li>))
                        }
                    </ul>
                </div>
                <div className="descCntract">
                    <p>Стипендиальная выплачивается размером до 10 000€ в год (комиссия принимает решение о размере гранта для каждого студента). Стипендия покрывает оплату обучения на протяжении 1 года, также оплачивает расходы связанные с страхованием и медицинской страховкой. Также стипендия оплачивает проживание, но выплаты на проживание каждый год разные. </p>
                    <p>Для магистерских программ, обучение на которых длиться 2 года стипендия продлевается на второй год только если студент закончил на отлично первый год.</p>
                </div>
            </div>
            <div className="requirementItem">
                <h1>Требования к кандидатам</h1>
                <div className="requirementList">
                    <p>Стипендию могут получить студенты, которые:</p>
                    <ul>
                        {props.req.map((req, i) =>(<li key={i}>{req}</li>))}
                    </ul>
                </div>
                <div className="requirementDesc">
                    <p>Студентам необходимо поступить на одну из программ магистратуры факультета науки. После <span>заполнения заявки</span>, Вы увидите сообщение, в котором будет сказано, что заявка успешно подана. Вам необходимо сделать скриншот данного сообщения.  Потом необходимо подать заявку на стипендию и загрузить скриншот сообщения.</p>
                    <p>На получение стипендии будут рассмотрены только те кандидаты, которые были зачислены на обучение и зарегистрировались на сайте стипендии до 15 февраля.</p>
                    <a href="#">Подробнее о стипендии на сайте организаторов.</a>
                </div>
            </div>
            <div className="shareDesc">
                <button><FontAwesomeIcon className='descIcon' icon={faFacebook}/>Поделиться</button>
            </div>
        </div>
    );
};

export default Descriptions;