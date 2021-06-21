import React, {Component} from 'react';
import Slider from 'react-slick';
import {withRouter} from "react-router";
import {connect} from "react-redux";

import './Events.css';
import './media.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {CalendarBlank, Clock, CurrencyCircleDollar, GlobeHemisphereWest} from "phosphor-react";


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
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}

class Event extends Component {
    state = {
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
                    this.props.events.map((events, i) => {
                        return (
                            <div key={i}>
                                <div className="eventCard">
                                    <img className="eventImg" src={events.img} alt=""/>
                                    <div className="eventTitleCard">
                                        <h1>{events.title}</h1>
                                        <div className="eventParameters">
                                            <div className="eventTime">
                                                <p><CalendarBlank size={20} className="eventIcon"/>Когда: {events.data}</p>
                                                <p><CurrencyCircleDollar size={20} className="eventIcon"/>Cумма: {events.coins}<span>{events.value}</span></p>
                                            </div>
                                            <div className="eventTime">
                                                <p><Clock size={20} className="eventIcon"/>Время: {events.time}</p>
                                                <p><GlobeHemisphereWest size={20} className="eventIcon"/>Где: {events.location}</p>
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
        const {screen6} = this.state;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: !window.matchMedia("(max-width: 900px)").matches ? 3 : 2,
            slidesToScroll: 1,
            className: 'eventSlides',
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        return (
            <div className="event" id='2'>
                <div className="eventContainer">
                    <div className="eventTitle">
                        <h1>Мероприятия</h1>
                    </div>
                    { screen6 ?
                        this.showOneSlides() :
                        <Slider {...settings}>
                            {
                                this.props.events.map((events, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="eventCard">
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
                        </Slider>
                    }
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    events: state.slice.events,
});

export default withRouter(connect(mapStateToProps)(Event));