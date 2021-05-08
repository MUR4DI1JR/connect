import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './Heading.css';
import './media.css';

const Heading = () => {
    return (
        <div className="heading">
            <div className="headingContainer">
                <div className="headingText">
                    <h1>Найдите лучшие фирмы для вашего следующего большого проекта</h1>
                    <p>Ваш полевой гид на основе данных для принятия решений о покупке и найме в B2B</p>
                </div>
                <div className="headingButton">
                    <span className="buttonDB">
                        <button>База данных</button>
                        <FontAwesomeIcon icon={faChevronDown} className="arrow-down"/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Heading;