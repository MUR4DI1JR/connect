import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

import './conss.css';
import './media.css';
import icon from './../../../../Images/Mask Group.png';


const Conss = () => {
    const conss = [
        {
            img: '',
            name: 'Объявления мсб',
            contact: '+996 999 999 999'
        },
        {
            img: '',
            name: 'Объявления мсб',
            contact: '+996 999 999 999'
        }
    ];
    return (
        <div className="consults" id='1'>
            <div className="conssButton">
                <div className="conssTitle">
                    <h1>Консультанты</h1>
                </div>
                <div className="allConss">
                    <button>
                        Все консультанты
                    </button>
                    <FontAwesomeIcon className="adsIcon" icon={faArrowRight}/>
                </div>
            </div>
            {
                conss.map((conss, i) => {
                    return (
                        <div className="conssItem" key={i}>
                            <div className="conss">
                                <img src={icon} alt="icon"/>
                                <div className="conssText">
                                    <div className="conssName">
                                        <p>Название услуги / продукты</p>
                                        <h1>{conss.name}</h1>
                                    </div>
                                    <div className="conssContact">
                                        <p>Контакты</p>
                                        <h4>{conss.contact}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Conss;