import React, {Component} from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';

import './Events.css';
import './media.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import card1 from './../../../../Images/card1.png';
import card2 from './../../../../Images/card2.png';
import card3 from './../../../../Images/card3.png';
import earth from './../../../../Images/earth.svg';
import value from './../../../../Images/value.svg';


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
                location: 'Лондон',
                country: 'Великобритания',
                coins: '5432',
                value: 'C'
            },
            {
                img:card2,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Лондон',
                country: 'Великобритания',
                coins: '5432',
                value: 'C'
            },
            {
                img:card3,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Лондон',
                country: 'Великобритания',
                coins: '5432',
                value: 'C'
            },
            {
                img:card1,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Лондон',
                country: 'Великобритания',
                coins: '5432',
                value: 'C'
            }
        ],
        screen9: false,
        screen6: window.matchMedia('(max-width: 650px)').matches,
    };

    componentDidMount() {
        const handler = e => this.setState({screen9: e.matches});
        const screenHandler = e => this.setState({screen6: e.matches});
        window.matchMedia("(max-width: 900px)").addListener(handler);
        window.matchMedia("(max-width: 650px)").addListener(screenHandler);
    }

    showOneSlides = () =>{
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: this.state.screen6 ? 1 : 2,
            slidesToScroll: 1,
            className: 'eventSlides',

        };

        return(
            <Slider {...settings}>
                {
                    this.state.events.map((events, i) => {
                        return (
                            <div key={i}>
                                <div className="eventCard">
                                    <img className="eventImg" src={events.img} alt=""/>
                                    <div className="eventTitleCard">
                                        <h1>{events.title}</h1>
                                        <div className="eventParameters">
                                            <div className="eventTime">
                                                <p><FontAwesomeIcon className="eventIcon" icon={faCalendar}/>Когда: {events.data}</p>
                                                <div className="eventLocation">
                                                    <img src={value} className="eventIcon" alt="valueIcon"/>
                                                    <p>Cумма: {events.coins}<span>{events.value}</span></p>
                                                </div>
                                            </div>
                                            <div className="eventTime">
                                                <p><FontAwesomeIcon className="eventIcon" icon={faClock}/>Время: {events.time}</p>
                                                <div className="eventLocation">
                                                    <img src={earth} className="eventIcon" alt="earthIcon"/>
                                                    <p>Где: {events.location}</p>
                                                </div>
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

    render() {
        const {events} = this.state;
        const {screen6} = this.state;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: !window.matchMedia("(max-width: 900px)").matches ? 3 : 2,
            slidesToScroll: 1,
            className: 'eventSlides',
            nextArrow: <SampleNextArrow />,
        };

        return (
            <div className="event">
                <div className="eventContainer">
                    <div className="eventTitle">
                        <h1>Мероприятия</h1>
                    </div>
                    { screen6 ?
                        this.showOneSlides() :
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
                                                            <p>{events.location}<span className="eventCountry">,{events.country}</span></p>
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
                    }

                </div>
            </div>
        );
    }
};

export default Event;