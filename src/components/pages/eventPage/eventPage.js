import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

import {CalendarBlank, Clock, CurrencyCircleDollar, GlobeHemisphereWest} from "phosphor-react";

const EventPage = () => {
    const events = useSelector(state => state.slice.events);
    const history = useHistory();

    return (
        <div>
            {
                events.map((events, i) => {
                    return (
                        <div key={i}>
                            <div className="eventCard" onClick={() => history.push(`/event-page/${events.id}`)}>
                                <img className="eventImg" src={events.img} alt=""/>
                                <div className="eventTitleCard">
                                    <h1>{events.title}</h1>
                                    <div className="eventParameters">
                                        <p><CalendarBlank size={20} className="eventIcon"/>Когда: {events.data}</p>
                                        <p><Clock size={20} className="eventIcon"/>Время: {events.time}</p>
                                        <p><GlobeHemisphereWest size={20} className="eventIcon"/>Где: {events.location}<span className="eventCountry">,{events.country}</span></p>
                                        <p><CurrencyCircleDollar size={20} className="eventIcon"/>Cумма: {events.coins}<span>{events.value}</span></p>
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

export default EventPage;