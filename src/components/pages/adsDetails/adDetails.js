import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Printer, TelegramLogo} from "phosphor-react";

import './adDetail.css';
import './media.css';
import EventSideBar from "../../UI/sideBar/eventSideBar";
import Descriptions from "../../UI/Content/descriptions/descriptions";
import Comment from "../../UI/comments/comment";
import SearchSideBar from "../../UI/searchSideBar/searchSideBar";

const AdDetails = (props) => {
    const ads = useSelector(state => state.slice.items.ads);
    let adsItem = [];
    const itemId = props.match.params.id;

    useEffect(()=>{
        window.scrollTo(0, 0)
    });

    for (var i = 0; i < ads.length; i++) {
        if (itemId === ads[i].id.toString()) {
            adsItem.push(ads[i]);
            break;
        }
    }

    return (
        <div className='adsDetailContainer'>
            <div className="adsDetailItems">
                {
                    adsItem.map((ads, i) => {
                        return (
                            <div key={i} className='adsDetailItem'>
                                <div className="ads-Detail-msb-date">
                                    <div className="adsDetailMsbTitle">
                                        <p>
                                            {ads.title}
                                        </p>
                                    </div>
                                    <div className="adsDetailMsbDate">
                                        <h2>
                                            Размещено: <span>{ads.date},{ads.time}</span>
                                        </h2>
                                        <button>
                                            <Printer size={24}/>
                                        </button>
                                    </div>
                                </div>
                                <div className="adsDetailMsbContent">
                                    <p>Название</p>
                                    <h1>{ads.title}</h1>
                                </div>
                                <div className="adsDetailMsbContent">
                                    <p>Мне нужно</p>
                                    <h4>{ads.task}</h4>
                                </div>
                                <div className="adsDetailMsbContent">
                                    <p>Я могу предложить</p>
                                    <h4>{ads.feedBack}</h4>
                                </div>
                                <div className="adsDetailMsbContent">
                                    <p>Контакты</p>
                                    <h4>{ads.contact}</h4>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="adsTelegramDetails">
                    <h1>Все самое интересное в Telegram!</h1>
                    <TelegramLogo className="adsTelegramIcon" size={20} />
                </div>
                {
                    adsItem.map((content, i) =>( <Descriptions key={i} width='97%' margin='30px 0 0 0' description={content.description} programs={content.programs}  req={content.req}/>))
                }
                <Comment item={"ads"} comments={adsItem[0].comments} id={itemId}/>
            </div>
            <div className="otherEventDetail">
                <SearchSideBar addItem={true} items={ads}/>
            </div>
        </div>
    );
};

export default AdDetails;