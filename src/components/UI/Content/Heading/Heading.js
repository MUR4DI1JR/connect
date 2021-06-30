import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from "react-router";
import {useSelector} from "react-redux";

import './Heading.css';
import './media.css';
import {Crown} from "phosphor-react";

const Heading = () => {
    const user = useSelector(state => state.slice.users);
    const history = useHistory();

    return (
        <div className={user.length === 0 ? "heading" : "heading".concat(' userActive')}>
            {
                user.length === 0 ?
                    <div className="headingContainer">
                        <div className="headingText">
                            <h1>Найдите лучшие фирмы для вашего следующего большого проекта</h1>
                            <p>Ваш полевой гид на основе данных для принятия решений о покупке и найме в B2B</p>
                        </div>
                        <div className="headingButton">
                            <span className="buttonDB">
                                <button onClick={() => history.push('/data-base')}>База данных</button>
                                <FontAwesomeIcon icon={faChevronDown} className="arrow-down"/>
                            </span>
                        </div>
                    </div>
                    :
                    <div className={user.length === 0 ? "headingContainer" : "headingContainer".concat(' userActive')}>
                        <div className={user.length === 0 ? "headingText" : "headingText".concat(' userActive')}>
                            <h1>Твори без ограничений</h1>
                            <p>Получи доступ к более 13 149 000 <span><Crown size={24} />Premium</span> ресурсам Получай на что хочешь, отписывайся, когда захочешь</p>
                        </div>
                        <div className={user.length === 0 ? "headingButton" : "headingButton".concat(' userActive')}>
                            <button onClick={() => history.push('/data-base')}>Стать премиум</button>
                        </div>
                    </div>
            }

        </div>
    );
};

export default Heading;