import React,{useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {CalendarBlank, CurrencyCircleDollar, GlobeHemisphereWest, HourglassLow} from "phosphor-react";

import './invests.css';
import './media.css';
import icon from './../../../../Images/Mask Group.png';
import share from './../../../../Images/Share.png';

const Invests = () => {
    const invests = [
        {
            img: "",
            title: "Международная стипендия Warwick Chancellor’s International Scholarships",
            star: false,
            deadline: '9 мая 2021',
            coins: 5432,
            value: "c",
            events: "каждый год",
            geolocation: "Лондон",
            country: 'Великобритания',
            text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
        },
        {
            img: "",
            title: "Международная стипендия Warwick Chancellor’s International Scholarships",
            star: true,
            deadline: '9 мая 2021',
            coins: 10000,
            value: "$",
            events: "каждый год",
            geolocation: "Лондон",
            country: 'Великобритания',
            text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться muradil... "
        },
        {
            img: "",
            title: "Международная стипендия Warwick Chancellor’s International Scholarships",
            star: false,
            deadline: '9 мая 2021',
            coins: 5432,
            value: "c",
            events: "каждый год",
            geolocation: "Лондон",
            country: 'Великобритания',
            text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
        },
        {
            img: "",
            title: "Международная стипендия Warwick Chancellor’s International Scholarships",
            star: false,
            deadline: '9 мая 2021',
            coins: 5432,
            value: "c",
            events: "каждый год",
            geolocation: "Лондон",
            country: 'Великобритания',
            text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
        },
        {
            img: "",
            title: "Международная стипендия Warwick Chancellor’s International Scholarships",
            star: false,
            deadline: '9 мая 2021',
            coins: 5432,
            value: "c",
            events: "каждый год",
            geolocation: "Лондон",
            country: 'Великобритания',
            text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
        },
        {
            img: "",
            title: "Международная стипендия Warwick Chancellor’s International Scholarships",
            star: false,
            deadline: '9 мая 2021',
            coins: 5432,
            value: "c",
            events: "каждый год",
            geolocation: "Лондон",
            country: 'Великобритания',
            text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
        },

    ];
    const [showGrands, setShowGrands] = useState(true);
    const [showInvests, setShowInvests] = useState(false);
    const [screen, setScreen] = useState(window.matchMedia('(max-width: 900px)').matches);

    const clickShowItem = e =>{
      if (!showGrands || showInvests){
          setShowGrands(true);
          setShowInvests(false)
      }else {
          setShowGrands(false);
          setShowInvests(true);
      }
    };

    useEffect(() =>{
       const handler = (e) =>{setScreen(e.matches)};
       window.matchMedia('(max-width: 900px)').addListener(handler);
    });


    const showItem = () =>{
        if (screen){
            let listInvests = invests.slice(0, -3);
            return listInvests.map((invests, i)=>{
                return(
                    <div className="investsBlock" key={i}>
                        <div className="investsTitle">
                            <img src={icon} alt="iconTitle"/>
                            <h1>{invests.title}{invests.star ? <FontAwesomeIcon className="investsCheckIcon" icon={faCheckCircle} /> : null}</h1>
                        </div>
                        <div className="investsParameters">
                            <div className="investsData">
                                <p><HourglassLow size={18} className="investsIcon"/><span className="parametersCatalog">Дедлайн:</span> {invests.deadline}</p>
                                <p><CurrencyCircleDollar size={18} className="investsIcon"/><span className="parametersCatalog">Сумма:</span> {invests.coins} <span>{invests.value}</span></p>
                            </div>
                            <div className="investsEvents">
                                <p><CalendarBlank size={18} className="investsIcon"/><span className="parametersCatalog">Когда:</span> {invests.events}</p>
                                <p><GlobeHemisphereWest size={18} className="investsIcon"/><span className="parametersCatalog">Где:</span> {invests.geolocation}<span className="investsLocation">, {invests.country}</span></p>
                            </div>
                        </div>
                        <div className="investsText">
                            {
                                invests.text.length > 113 ?
                                    <div className="investsBlockButton">
                                        <button>Подробнее <FontAwesomeIcon className="investsTextIcon" icon={faArrowRight}/></button>
                                        <button className="investsShareIcon"><img src={share} alt="shareIcon"/></button>
                                    </div>
                                    :
                                    <p>{invests.text}</p>
                            }
                        </div>
                    </div>
                )
            })
        }
    };

    return (
        <div className="invests">
            <div className="investsButtonsItem">
                <div className="investsButton">
                    <button onClick={clickShowItem} className={showGrands ? "investsGrands":"investsGrands".concat(" active")}>Гранты</button>
                    <button onClick={clickShowItem} className={showInvests ? "investsInvests":"investsInvests".concat(" active")}>Инвестиции</button>
                </div>
            </div>
            <div className="investsItems">
                {screen ?
                    showItem() :
                    invests.map((invests, i) => {
                        return (
                            <div className="investsBlock" key={i}>
                                <div className="investsTitle">
                                    <img src={icon} alt="iconTitle"/>
                                    <h1>{invests.title}{invests.star ? <FontAwesomeIcon className="investsCheckIcon" icon={faCheckCircle} /> : null}</h1>
                                </div>
                                <div className="investsParameters">
                                    <div className="investsData">
                                        <p><HourglassLow size={20} className="investsIcon"/><span className="parametersCatalog">Дедлайн:</span> {invests.deadline}</p>
                                        <p><CurrencyCircleDollar size={20} className="investsIcon"/><span className="parametersCatalog">Сумма:</span> {invests.coins} <span>{invests.value}</span></p>
                                    </div>
                                    <div className="investsEvents">
                                        <p><CalendarBlank size={20} className="investsIcon"/><span className="parametersCatalog">Когда:</span> {invests.events}</p>
                                        <p><GlobeHemisphereWest size={20} className="investsIcon"/><span className="parametersCatalog">Где:</span> {invests.geolocation}<span className="investsLocation">, {invests.country}</span></p>
                                    </div>
                                </div>
                                <div className="investsText">
                                    {
                                        invests.text.length > 113 ?
                                            <div className="investsBlockButton">
                                                <button>Подробнее <FontAwesomeIcon className="investsTextIcon" icon={faArrowRight}/></button>
                                                <button className="investsShareIcon"><img src={share} alt="shareIcon"/></button>
                                            </div>
                                            :
                                            <p>{invests.text}</p>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="allShowInvests">
                <div className="allShowInvestsButton">
                    <button>Показать еще</button>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </div>
        </div>
    );
};

export default Invests;