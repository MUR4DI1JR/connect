import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {CalendarBlank, CurrencyCircleDollar, GlobeHemisphereWest, HourglassLow, TelegramLogo} from "phosphor-react";
import Descriptions from "../../UI/Content/descriptions/descriptions";
import ConsSideBar from "../../UI/sideBar/consSideBar";

import './consultsDetail.css';
import Comment from "../../UI/comments/comment";

const ConsultsDetail = (props) => {
    const conss = useSelector(state => state.slice.items.conss);
    let conssItem = [];
    const itemId = props.match.params.id;

    useEffect(()=>{
        window.scrollTo(0, 0)
    });

    for (var i = 0; i < conss.length; i++) {
        if (itemId === conss[i].id.toString()) {
            conssItem.push(conss[i]);
            break;
        }
    }

    return (
        <div className='conssDetails'>
                <div className="conssDetailsItems">
                    {
                        conssItem.map((content, id) =>{
                            return(
                                <div className='conssDetailsItem' key={id}>
                                    <div className="conssIMG">
                                        <p>Размещено: {content.posted},{content.postedTime}</p>
                                        <img src={content.img} alt=""/>
                                    </div>
                                    <div className="conssDetailsBlock">
                                        <div className="conssDetailsTitle">
                                            <img src={content.img} alt="iconTitle"/>
                                            <h1>{content.title}</h1>
                                        </div>
                                        <div className="conssDetailsParameters">
                                            <div className="conssDetailsData">
                                                <p><HourglassLow size={20} className="conssDetailsIcon"/><span className="conssParametersCatalog">Год основания:</span> {content.ownerYear}</p>
                                                <p><CurrencyCircleDollar size={20} className="conssDetailsIcon"/><span className="conssParametersCatalog">Услуги/продукты:</span> {content.service} <span>{content.value}</span></p>
                                            </div>
                                            <div className="investsEvents">
                                                <p><CalendarBlank size={20} className="conssDetailsIcon"/><span className="conssParametersCatalog">Контакты:</span> {content.contact}</p>
                                                <p><GlobeHemisphereWest size={20} className="conssDetailsIcon"/><span className="conssParametersCatalog">Локация компании:</span> {content.location}<span className="conssDetailsLocation">, {content.country}</span></p>
                                            </div>
                                        </div>
                                        <div className="conssDetailsText">
                                            <p>{content.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="conssTelegramDetails">
                        <h1>Все самое интересное в Telegram!</h1>
                        <TelegramLogo className="conssTelegramIcon" size={20} />
                    </div>
                    <div className="conssDescItem">
                        <h1>{conssItem[0].title}</h1>
                    </div>
                    {
                        conssItem.map((content, i) =>(
                            <Descriptions
                                key={i}
                                width='97%'
                                margin='30px 0 0 0'
                                description={content.description}
                                programs={content.programs}
                                req={content.req}
                                services={content.services}
                                contacts={content.contacts}
                            />
                            )
                        )
                    }
                    <div className="commentItems">
                        <Comment item={"conss"} comments={conssItem[0].comments} id={itemId}/>
                    </div>
                </div>
                <div className="otherInvestsDetail">
                    <ConsSideBar/>
                </div>
            </div>
    );
};

export default ConsultsDetail;