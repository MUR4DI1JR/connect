import React from 'react';
import {useSelector} from "react-redux";

import './eventSideBar.css';
import {CalendarBlank, Clock, CurrencyCircleDollar, GlobeHemisphereWest} from "phosphor-react";

const EventSideBar = () => {
    const events = useSelector(state => state.slice.events);
    const itemSideBar = events.slice(0, 3);
    return (
        <div className='itemSideBar'>
            <h1>Возможно вам интересно:</h1>
            {
                itemSideBar.map(event => (
                    <div className="eventSideBarCard">
                        <img className="eventSideBarImg" src={event.img} alt=""/>
                        <div className="eventSideBarTitleCard">
                            <h1>{event.title}</h1>
                            <div className="eventSideBarParameters">
                                <p><CalendarBlank size={20} className="eventSideBarIcon"/>Когда: {event.data}</p>
                                <p><Clock size={20} className="eventSideBarIcon"/>Время: {event.time}</p>
                                <p><GlobeHemisphereWest size={20} className="eventSideBarIcon"/>Где: {event.location}<span
                                    className="eventSideBarCountry">,{event.country}</span></p>
                                <p><CurrencyCircleDollar size={20}
                                                         className="eventSideBarIcon"/>Cумма: {event.coins}<span>{event.value}</span>
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