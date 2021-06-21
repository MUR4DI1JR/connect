import React from 'react';
import {useHistory} from "react-router";
import {useSelector} from "react-redux";

import './investDetails.css';
import icon from "../../../Images/Mask Group.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import {CalendarBlank, Clock, CurrencyCircleDollar, GlobeHemisphereWest, HourglassLow} from "phosphor-react";
import EventSideBar from "../../UI/sideBar/eventSideBar";

const InvestsDetailsPage = () => {
    const invests = useSelector(state => state.slice.invests);
    let investsItem = [];
    const history = useHistory();
    const itemId = history.location.pathname.slice(14);


    for (var i = 0; i < invests.length; i++) {
        if (itemId === invests[i].id.toString()) {
            investsItem.push(invests[i]);
            break;
        }
    }



    return (
        <div className='investsDetails'>
            <div className="investsDetailsItems">
                {
                    investsItem.map((content, id) =>{
                        return(
                            <div className='investsDetailsItem' key={id}>
                                <div className="investsIMG">
                                    <p>Размещено: {content.posted}</p>
                                    <img src={content.img} alt=""/>
                                </div>
                                <div className="investsDetailsBlock">
                                    <div className="investsDetailsTitle">
                                        <img src={icon} alt="iconTitle"/>
                                        <h1>{content.title}{content.star ? <FontAwesomeIcon className="investsDetailsCheckIcon" icon={faCheckCircle} /> : null}</h1>
                                    </div>
                                    <div className="investsDetailsParameters">
                                        <div className="investsDetailsData">
                                            <p><HourglassLow size={20} className="investsDetailsIcon"/><span className="parametersCatalog">Дедлайн:</span> {content.deadline}</p>
                                            <p><CurrencyCircleDollar size={20} className="investsDetailsIcon"/><span className="parametersCatalog">Сумма:</span> {content.coins} <span>{invests.value}</span></p>
                                        </div>
                                        <div className="investsEvents">
                                            <p><CalendarBlank size={20} className="investsDetailsIcon"/><span className="parametersCatalog">Когда:</span> {content.events}</p>
                                            <p><GlobeHemisphereWest size={20} className="investsDetailsIcon"/><span className="parametersCatalog">Где:</span> {content.geolocation}<span className="investsLocation">, {invests.country}</span></p>
                                        </div>
                                    </div>
                                    <div className="investsDetailsText">
                                        <p>{content.text}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="otherInvestsDetail">
                <EventSideBar/>
            </div>
        </div>
    );
};

export default InvestsDetailsPage;