import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import './eventSideBar.css';
import {CalendarBlank, Clock, CurrencyCircleDollar, GlobeHemisphereWest} from "phosphor-react";
import {useHistory} from "react-router";

const EventSideBar = () => {
    const events = useSelector(state => state.slice.items.events);
    const history = useHistory();
    const itemSideBar = events.slice(0, 3);

    useEffect(()=>{
       window.scrollTo(0,0)
    });

    return (
        <div className='itemSideBar'>
            <h1>Возможно вам интересно:</h1>
            {
                itemSideBar.map((event, i) => (
                    <div className="eventSideBarCard" key={i} onClick={() => history.push(`/event-page/${event.id}`)}>
                        <img className="eventSideBarImg" src={event.img} alt=""/>
                        <div className="eventSideBarTitleCard">
                            <h1>{event.title}</h1>
                            <div className="eventSideBarParameters">
                                <p><CalendarBlank size={20} className="eventSideBarIcon"/><span>Когда:</span> {event.data}</p>
                                <p><Clock size={20} className="eventSideBarIcon"/><span>Время:</span> {event.time}</p>
                                <p><GlobeHemisphereWest size={20} className="eventSideBarIcon"/><span>Где:</span> {event.location}<span className="eventSideBarCountry">,{event.country}</span></p>
                                <p><CurrencyCircleDollar size={20}
                                                         className="eventSideBarIcon"/><span>Cумма:</span> {event.coins}<span className="eventSideBarValue">{event.value}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default EventSideBar;