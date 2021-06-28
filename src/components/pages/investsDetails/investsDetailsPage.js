import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import './investDetails.css';
import icon from "../../../Images/Mask Group.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import {
    CalendarBlank,
    CurrencyCircleDollar,
    GlobeHemisphereWest,
    HourglassLow,
    TelegramLogo
} from "phosphor-react";
import EventSideBar from "../../UI/sideBar/eventSideBar";
import Descriptions from "../../UI/Content/descriptions/descriptions";
import Comment from "../../UI/comments/comment";

const InvestsDetailsPage = (props) => {
    const invests = useSelector(state => state.slice.items.invests);
    let investsItem = [];
    const itemId = props.match.params.id;

    useEffect(()=>{
        window.scrollTo(0, 0)
    });


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
                                    <p>Размещено: {content.posted},{content.postedTime}</p>
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
                                            <p><CurrencyCircleDollar size={20} className="investsDetailsIcon"/><span className="parametersCatalog">Сумма:</span> {content.coins} <span>{content.value}</span></p>
                                        </div>
                                        <div className="investsEvents">
                                            <p><CalendarBlank size={20} className="investsDetailsIcon"/><span className="parametersCatalog">Когда:</span> {content.events}</p>
                                            <p><GlobeHemisphereWest size={20} className="investsDetailsIcon"/><span className="parametersCatalog">Где:</span> {content.geolocation}<span className="investsDetailsLocation">, {content.country}</span></p>
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
                <div className="telegramDetails">
                    <h1>Все самое интересное в Telegram!</h1>
                    <TelegramLogo className="telegramIcon" size={20} />
                </div>
                {
                    investsItem.map((content, i) =>( <Descriptions key={i} width='97%' margin='30px 0 0 0' description={content.description} programs={content.programs}  req={content.req}/>))
                }
                <Comment item={"invests"} comments={investsItem[0].comments} id={itemId}/>
            </div>
            <div className="otherInvestsDetail">
                <EventSideBar/>
            </div>
        </div>
    );
};

export default InvestsDetailsPage;