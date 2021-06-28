import React, {Component} from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

import './ads.css';
import './media.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Conss from "../conss/conss";
import {connect} from "react-redux";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={"icon " + className}
            style={{ ...style, marginRight: "45px", marginTop: '-20px', display: "none"}}
            onClick={onClick}
        />
    );
}

class Ads extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'slides',
            adaptiveHeight: true,
            nextArrow: <SampleNextArrow/>,
            customPaging: i => (
                <div className="paging" key={i+1}>
                </div>
            )
        };
        return (
            <div className="adsCommon">
                <div className={this.props.active ? "adsContainer" : "adsContainer".concat(' active')}>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        {
                            this.props.ads.map((ads, i) =>{
                                return(
                                    <div key={i}>
                                        <div className="ads-date">
                                            <p className="adsTitle">
                                                {ads.title}
                                            </p>
                                            <h2 className="adsTitle">
                                                {ads.date}
                                            </h2>
                                        </div>
                                        <div className="ads">
                                            <p>Назавание</p>
                                            <h1>{ads.title}</h1>
                                        </div>
                                        <div className="ads">
                                            <p>Мне нужно</p>
                                            <h4>{ads.task}</h4>
                                        </div>
                                        <div className="ads">
                                            <p>Я могу предложить</p>
                                            <h4>{ads.feedBack}</h4>
                                        </div>
                                        <div className="ads">
                                            <p>Контакты</p>
                                            <h4>{ads.contact}</h4>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    <div className="allAds">
                        <button onClick={()=> {this.props.history.push('/all-ads-msb')}}>
                            Все объявления
                        </button>
                        <FontAwesomeIcon className="adsIcon" icon={faArrowRight}/>
                    </div>
                </div>
                <Conss/>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    active: state.slice.active,
    ads: state.slice.items.ads,
});

export default withRouter(connect(mapStateToProps)(Ads));