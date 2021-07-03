import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";

import './Events.css';
import './media.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {CalendarBlank, Clock, CurrencyCircleDollar, GlobeHemisphereWest} from "phosphor-react";
import {clickedItem} from "../../../../redux/sliceReducer";

const Event = () => {
    const events = useSelector(state => state.slice.items.events);
    const dispatch = useDispatch();
    const history = useHistory();
    const [screen9, setScreen9] = useState(false);
    const [screen6, setScreen6] = useState( window.matchMedia('(max-width: 650px)').matches);
    const [screen4, setScreen4] = useState( window.matchMedia('(max-width: 450px)').matches);
    const [screen3, setScreen3] = useState( window.matchMedia('(max-width: 420px)').matches);

    useEffect( () => {
        const handler = e => setScreen9(e.matches);
        const screenHandler = e => setScreen6( e.matches);
        const screen4Handler = e => setScreen4(e.matches);
        const screen3Handler = e => setScreen3(e.matches);
        window.matchMedia("(max-width: 900px)").addListener(handler);
        window.matchMedia("(max-width: 650px)").addListener(screenHandler);
        window.matchMedia("(max-width: 450px)").addListener(screen4Handler);
        window.matchMedia("(max-width: 420px)").addListener(screen3Handler);
    });


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                id={'eventContainer'}
                className={"icon " + className}
                style={{
                    ...style,
                    marginRight: !screen6 ? "45px" : "52px",
                    marginTop: !screen6 ? '-20px' : '65px' || !screen4 ? '5px' : '35px' || !screen3 ? '5px' : '5px',
                    display: "flex"
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{...style, display: "none", background: "green"}}
                onClick={onClick}
            />
        );
    }

    const showOneSlides = () => {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: screen6 ? 1 : 2,
            slidesToScroll: 1,
            className: 'eventSlides',
            nextArrow: <SampleNextArrow/>,
        };

        return (
            <Slider {...settings}>
                {
                    events.map((events, i) => {
                        return (
                            <div key={i}>
                                <div className="eventCard" onClick={() => {
                                    history.push(`/event-page`);
                                    dispatch(clickedItem(events.id))
                                }}>
                                    <img className="eventImg" src={events.img} alt=""/>
                                    <div className="eventTitleCard">
                                        <h1>{events.title}</h1>
                                        <div className="eventParameters">
                                            <div className="eventTime">
                                                <p><CalendarBlank size={20} className="eventIcon"/>Когда: {events.data}
                                                </p>
                                                <p><CurrencyCircleDollar size={20}
                                                                         className="eventIcon"/>Cумма: {events.coins}<span>{events.value}</span>
                                                </p>
                                            </div>
                                            <div className="eventTime">
                                                <p><Clock size={20} className="eventIcon"/>Время: {events.time}</p>
                                                <p><GlobeHemisphereWest size={20}
                                                                        className="eventIcon"/>Где: {events.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        )
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: !screen9 ? 3 : 2,
        slidesToScroll: 1,
        className: 'eventSlides',
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    return (
        <div className="event" id='2'>
            <div className="eventContainer">
                <div className="eventTitle">
                    <h1>Мероприятия</h1>
                </div>
                {screen6 ?
                    showOneSlides() :
                    <Slider {...settings}>
                        {
                            events.map((events, i) => {
                                return (
                                    <div key={i}>
                                        <div className="eventCard" onClick={() => {
                                            history.push(`/event-page`);
                                            dispatch(clickedItem(events.id))
                                        }}>
                                            <img className="eventImg" src={events.img} alt=""/>
                                            <div className="eventTitleCard">
                                                <h1>{events.title}</h1>
                                                <div className="eventParameters">
                                                    <p><CalendarBlank size={20}
                                                                      className="eventIcon"/>Когда: {events.data}</p>
                                                    <p><Clock size={20} className="eventIcon"/>Время: {events.time}</p>
                                                    <p><GlobeHemisphereWest size={20}
                                                                            className="eventIcon"/>Где: {events.location}<span
                                                        className="eventCountry">,{events.country}</span></p>
                                                    <p><CurrencyCircleDollar size={20}
                                                                             className="eventIcon"/>Cумма: {events.coins}<span>{events.value}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                }
            </div>
        </div>
    );
};



export default Event;