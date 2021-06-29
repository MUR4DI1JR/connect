import React from 'react';
import EventSideBar from "../../UI/sideBar/eventSideBar";

import './aboutUs.css';
import './media.css';
import aboutImg from '../../../Images/about.png';
import {TelegramLogo} from "phosphor-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <div className="aboutUsHeading">
                <div className="aboutUsHeadingTitle">
                    <h1>О нас</h1>
                </div>
            </div>
            <div className="aboutUsContainer">
                <div className="aboutUsContent">
                    <div className="aboutImg">
                        <img src={aboutImg} alt="aboutIMG"/>
                        <p>5 мая 2021, 11:57</p>
                    </div>
                    <div className="aboutUsText">
                        <h1>О проекте Connect<span>4pro</span></h1>
                        <div className="aboutTelegramDetails">
                            <h1>Все самое интересное в Telegram!</h1>
                            <TelegramLogo className="aboutTelegramIcon" size={20} />
                        </div>
                        <div className="aboutText">
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa feugiat dui adipiscing blandit et enim turpis eu. Sagittis arcu, augue amet elementum. Et quam diam etiam vel mauris. Ac et tempus, sed non ut. Ante faucibus egestas feugiat ullamcorper est. Dui, in diam malesuada enim, dignissim lectus risus fermentum. Lectus libero, massa nunc velit pulvinar pretium tincidunt aliquam, nisl. Enim nunc ac sollicitudin et mauris blandit in. Malesuada tellus volutpat turpis et nunc rhoncus. Id turpis ac scelerisque viverra sagittis, eget praesent at scelerisque. Orci, amet volutpat ut et suspendisse tempor semper aliquet vitae. Ligula purus dui aliquam sagittis sit. Elementum gravida tortor lectus blandit nulla dignissim venenatis sagittis. Dictum ut pellentesque feugiat nunc ullamcorper sed. Eget dui dignissim praesent tincidunt sagittis, massa at. Bibendum tellus pulvinar parturient lacus mi quis quis in dui. Odio massa malesuada adipiscing nunc elit tellus. Nulla nibh sed ipsum erat id commodo nunc massa rhoncus. Magna ut velit nam volutpat.</p>
                        </div>
                        <div className="aboutCollab">
                            <h1>Сотрудничество</h1>
                            <p>Мы любим интересный контент, он драйвит. Всегда приятно узнать что-то новенькое и полезное. Не менее приятно осознавать, что такой контент может драйвить и бизнес. Это просто дабл удовольствие. Согласны? Возможно, у вас есть такой материал на примете? Или идея, о чем написать? Или вообще нереально крутой проект, который точно должен увидеть свет?</p>
                            <p>Тогда скорее пишите нам на prof4dev@gmail.com и будем обсуждать сотрудничество.</p>
                            <p>Написали? Отлично, первый вклад в качественную публикацию сделан. А мы уже открыли почту и испугались 100500 сообщений читаем именно ваше письмо. Скоро ответим 🙂 а пока — почитайте наши последние новости. Там такое! Так сказать, креатив — наше все. Ну ладно не только креатив, здесь много всего интересного.</p>
                        </div>
                        <div className="aboutShare">
                            <button><FontAwesomeIcon className='aboutIcon' icon={faFacebook}/>Поделиться</button>
                        </div>
                    </div>
                </div>
                <div className="aboutSideBar">
                    <EventSideBar/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;