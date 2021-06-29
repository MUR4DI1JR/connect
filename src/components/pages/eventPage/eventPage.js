import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

import {CalendarBlank, Clock, CurrencyCircleDollar, GlobeHemisphereWest} from "phosphor-react";
import Search from "../../UI/search/search";

import './eventPage.css';
import './media.css';
import SearchSideBar from "../../UI/searchSideBar/searchSideBar";
import Pagination from "../../UI/pagination/pagination";

const EventPage = () => {
    const events = useSelector(state => state.slice.items.events);
    const itemActive = useSelector(state => state.slice.clicked);
    const currentPage = useSelector(state => state.slice.currentPage);
    const itemsPerPage = useSelector(state=> state.slice.itemsPerPage);
    const history = useHistory();
    const value = useSelector(state => state.slice.searchValue);

    const  filteredItems = events.filter(items =>{
        return items.title.toLowerCase().includes(value.toLowerCase());
    });

    useEffect(()=>{
        window.scrollTo(0, 0)
    });

    const lastItemsIndex = currentPage * itemsPerPage;
    const firstItemsIndex = lastItemsIndex - itemsPerPage;
    const currentItem = filteredItems.slice(firstItemsIndex, lastItemsIndex);

    return (
        <div>
            <Search item={events} title='Мероприятия' investTitle={false}/>
            <div className="eventItemContainer">
                <div className="eventItems">
                    {
                        currentItem.map((events, i) => {
                            return (
                                <div className={itemActive === events.id ? "eventItemCard".concat(' itemActive') : "eventItemCard"} key={i}
                                     onClick={() => history.push(`/event-page/${events.id}`)}>
                                    <img className="eventItemImg" src={events.img} alt=""/>
                                    <div className="eventItemTitleCard">
                                        <h1>{events.title}</h1>
                                        <div className="eventItemParameters">
                                            <p><CalendarBlank size={20} className="eventItemIcon"/>Когда: {events.data}
                                            </p>
                                            <p><Clock size={20} className="eventItemIcon"/>Время: {events.time}</p>
                                            <p><GlobeHemisphereWest size={20}
                                                                    className="eventItemIcon"/>Где: {events.location}<span
                                                className="eventCountry">,{events.country}</span></p>
                                            <p><CurrencyCircleDollar size={20}
                                                                     className="eventItemIcon"/>Cумма: {events.coins}<span>{events.value}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <Pagination itemsPerPage={itemsPerPage} totalItems={events.length}/>
                </div>
                <div className="eventSideBar">
                    <SearchSideBar items={events}/>
                </div>
            </div>
        </div>
    );
};

export default EventPage;