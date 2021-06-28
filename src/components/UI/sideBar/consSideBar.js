import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

import './consSideBar.css';
import {CalendarBlank, CurrencyCircleDollar, GlobeHemisphereWest, HourglassLow} from "phosphor-react";
import icon from "../../../Images/Mask Group.png";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import share from "../../../Images/Share.png";

const ConsSideBar = () => {
    const conss = useSelector(state => state.slice.items.conss);
    const history = useHistory();
    const itemSideBar = conss.slice(0, 3);

    return (
        <div className='conssSideBar'>
            <h1>Возможно вам интересно:</h1>
            {
                itemSideBar.map((conss, i) => {
                    return (
                        <div className="conssSideBarContent" key={i} onClick={()=> history.push(`/all-consults/${conss.id}`)}>
                            <div className="conssSideBarItem">
                                <div className="conssSideBarImg">
                                    <img src={icon} alt="iconTitle"/>
                                </div>
                                <div className="conssSideBarParameters">
                                    <div className="conssSideBarTitle">
                                        <h1>Название: {conss.title}</h1>
                                    </div>
                                    <div className="conssSideBarData">
                                        <p><HourglassLow size={20} className="conssPageIcon"/><span className="conssSideBarParametersCatalog">Год основания:</span> {conss.ownerYear}</p>
                                        <p><CurrencyCircleDollar size={20} className="conssPageIcon"/><span className="conssSideBarParametersCatalog">Сфера деятельности:</span> {conss.work}</p>
                                    </div>
                                    <div className="conssSideBarEvents">
                                        <p><CalendarBlank size={20} className="conssPageIcon"/><span className="conssSideBarParametersCatalog">Услуги/продукты:</span> {conss.service}</p>
                                        <p><GlobeHemisphereWest size={20} className="conssPageIcon"/><span className="conssSideBarParametersCatalog">Локация компании:</span> {conss.location}<span className="conssSideBarLocation">, {conss.country}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="conssSideBarText">
                                {
                                    conss.desc.length > 113 ?
                                        <div className="conssSideBarBlockButton">
                                            <Link to={`/invests-page/${conss.id}`}>Подробнее <FontAwesomeIcon className="conssSideBarTextIcon" icon={faArrowRight}/></Link>
                                            <button className="conssSideBarShareIcon"><img src={share} alt="shareIcon"/></button>
                                        </div>
                                        :
                                        <p>{conss.desc}</p>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ConsSideBar;