import React, {Component} from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './ads.css';
import './media.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Conss from "../conss/conss";

class Ads extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ads : [
                {
                    name: 'ads1',
                    date: "5 мая 2021, 11:57",
                    title: 'Объявления МСБ',
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999'
                },
                {
                    name: 'ads1',
                    date: "5 мая 2021, 11:57",
                    title: 'Объявления МСБ',
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999'
                },
                {
                    name: 'ads1',
                    date: "5 мая 2021, 11:57",
                    title: 'Объявления МСБ',
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999'
                },
                {
                    name: 'ads1',
                    title: 'Объявления МСБ',
                    date: "5 мая 2021, 11:57",
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999'
                },
                {
                    name: 'ads1',
                    title: 'Объявления МСБ',
                    date: "5 мая 2021, 11:57",
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999'
                },
                {
                    name: 'ads1',
                    title: 'Объявления МСБ',
                    date: "5 мая 2021, 11:57",
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999'
                },
            ]
        };
    }

    render() {
        const {ads} = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'slides',
            adaptiveHeight: true,
            customPaging: i => (
                <div className="paging" key={i+1}>

                </div>
            )
        };
        return (
            <div className="adsCommon">
                <div className="adsContainer">
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        {
                            ads.map(ads =>{
                                return(
                                    <div>
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
                        <button>
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

export default Ads;