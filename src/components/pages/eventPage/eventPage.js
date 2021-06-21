import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

import {CalendarBlank, Clock, CurrencyCircleDollar, GlobeHemisphereWest} from "phosphor-react";
import Search from "../../UI/search/search";

import './eventPage.css';

const EventPage = () => {
    const events = useSelector(state => state.slice.events);
    const history = useHistory();

    return (
        <div>
            <Search item={events} title='Мероприятия'/>
            <div className="eventItemContainer">
                <div className="eventItems">
                    {
                        events.map((events, i) => {
                            return (
                                <div key={i}>
                                    <div className="eventItemCard" onClick={() => history.push(`/event-page/${events.id}`)}>
                                        <img className="eventItemImg" src={events.img} alt=""/>
                                        <div className="eventItemTitleCard">
                                            <h1>{events.title}</h1>
                                            <div className="eventItemParameters">
                                                <p><CalendarBlank size={20} className="eventItemIcon"/>Когда: {events.data}</p>
                                                <p><Clock size={20} className="eventItemIcon"/>Время: {events.time}</p>
                                                <p><GlobeHemisphereWest size={20} className="eventItemIcon"/>Где: {events.location}<span className="eventCountry">,{events.country}</span></p>
                                                <p><CurrencyCircleDollar size={20} className="eventItemIcon"/>Cумма: {events.coins}<span>{events.value}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default EventPage;