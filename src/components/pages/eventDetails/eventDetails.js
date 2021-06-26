import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

import './eventDetails.css';
import {CalendarBlank, Clock, CurrencyCircleDollar, GlobeHemisphereWest} from "phosphor-react";
import EventSideBar from "../../UI/sideBar/eventSideBar";
import Descriptions from "../../UI/Content/descriptions/descriptions";
import Comment from "../../UI/comments/comment";

const EventDetails = () => {
    const events = useSelector(state => state.slice.events);
    let investsItem = [];
    const history = useHistory();
    const itemId = history.location.pathname.slice(12);


    for (var i = 0; i < events.length; i++) {
        if (itemId === events[i].id.toString()) {
            investsItem.push(events[i]);
            break;
        }
    }

    return (
        <div className='eventDetailContainer'>
            <div className="eventDetailItems">
                {
                    investsItem.map((content, id) =>{
                        return(
                            <div className='eventDetailItem' key={id}>
                                <div className="eventDetailImg">
                                    <img src={content.img} alt="imgEvent"/>
                                    <p>Размещено: {content.posted},{content.timePosted}</p>
                                </div>
                                <div className="eventDetailTitleCard">
                                    <h1>{content.title}</h1>
                                    <div className="eventDetailParameters">
                                        <div className="timeParameters">
                                            <p><CalendarBlank size={20} className="eventDetailIcon"/>Когда: {content.data}</p>
                                            <p><Clock size={20} className="eventDetailIcon"/>Время: {content.time}</p>
                                        </div>
                                        <div className="locationParameters">
                                            <p><GlobeHemisphereWest size={20} className="eventDetailIcon"/>Где: {content.location}<span className="eventDetailCountry">,{content.country}</span></p>
                                            <p><CurrencyCircleDollar size={20} className="eventDetailIcon"/>Cумма: {content.coins}<span>{content.value}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <Descriptions width='92%' margin='0 auto' description={content.description} programs={content.programs}  req={content.req}/>
                                <div className="eventComment">
                                    <Comment/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <EventSideBar/>
        </div>
    );
};

export default EventDetails;