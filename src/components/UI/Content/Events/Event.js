import React, {Component} from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';

import './Events.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import card1 from './../../../../Images/card1.png';
import card2 from './../../../../Images/card2.png';
import card3 from './../../../../Images/card3.png';
import earth from './../../../../Images/earth.png';
import value from './../../../../Images/value.png';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={"icon " + className}
            style={{ ...style, marginRight: "45px", marginTop: '-20px', display: "flex"}}
            onClick={onClick}
        />
    );
}

class Event extends Component {
    state = {
        events: [
            {
                img:card1,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Где: Лондон, Великобритания',
                coins: '5432',
                value: 'C'
            },
            {
                img:card2,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Где: Лондон, Великобритания',
                coins: '5432',
                value: 'C'
            },
            {
                img:card3,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Где: Лондон, Великобритания',
                coins: '5432',
                value: 'C'
            },
            {
                img:card1,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Где: Лондон, Великобритания',
                coins: '5432',
                value: 'C'
            }
        ]
    };

    render() {
        const {events} = this.state;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            className: 'eventSlides',
            adaptiveHeight: true,
            nextArrow: <SampleNextArrow />,
        };
        return (
            <div className="event">
                <div className="eventContainer">
                    <div className="eventTitle">
                        <h1>Мероприятия</h1>
                    </div>
                    <Slider {...settings}>
                        {
                            events.map((events, i) => {
                                return (
                                    <div key={i}>
                                        <div className="eventCard">
                                            <img className="eventImg" src={events.img} alt=""/>
                                            <div className="eventTitleCard">
                                                <h1>{events.title}</h1>
                                                <div className="eventParameters">
                                                    <p><FontAwesomeIcon className="eventIcon" icon={faCalendar}/>{events.data}</p>
                                                    <p><FontAwesomeIcon className="eventIcon" icon={faClock}/>{events.time}</p>
                                                    <div className="eventLocation">
                                                        <img src={earth} className="eventIcon" alt="earthIcon"/>
                                                        <p>{events.location}</p>
                                                    </div>
                                                    <div className="eventLocation">
                                                        <img src={value} className="eventIcon" alt="valueIcon"/>
                                                        <p>{events.coins}<span>{events.value}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        );
    }
};

export default Event;