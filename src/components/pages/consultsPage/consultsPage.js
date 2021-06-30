import React from 'react';
import {useSelector} from "react-redux";
import icon from "../../../Images/Mask Group.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    Calendar,
    CalendarBlank,
    CurrencyCircleDollar,
    GlobeHemisphereWest, GlobeSimple,
    HourglassLow, MapPinLine,
    Storefront
} from "phosphor-react";
import {Link, useHistory} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import share from "../../../Images/Share.png";
import Pagination from "../../UI/pagination/pagination";
import Search from "../../UI/search/search";


import './consultsPage.css';
import './media.css';


const ConsultsPage = () => {
    const history = useHistory();
    const conss = useSelector(state => state.slice.items.conss);
    const value = useSelector(state => state.slice.searchValue);
    const currentPage = useSelector(state => state.slice.currentPage);
    const itemsPerPage = 9;

    const filteredItems = conss.filter(items =>{
        return items.title.toLowerCase().includes(value.toLowerCase());
    });

    const lastItemsIndex = currentPage * itemsPerPage;
    const firstItemsIndex = lastItemsIndex - itemsPerPage;
    const currentItem = filteredItems.slice(firstItemsIndex, lastItemsIndex);

    return (
        <div>
            <Search theme='Каталог консультантов' title=' / Фирм' item={conss} investTitle={true} underline={true}/>
            <div className='conssContainer'>
                <div className="conssItems">
                    {
                        currentItem.map((conss, i) => {
                            return (
                                <div className="conssPageBlock" key={i} onClick={()=> history.push(`/all-consults/${conss.id}`)}>
                                    <div className="conssPageItem">
                                        <div className="conssPageImg">
                                            <img src={icon} alt="iconTitle"/>
                                        </div>
                                        <div className="conssPageParameters">
                                            <div className="conssPageTitle">
                                                <h1>Название: {conss.title}</h1>
                                            </div>
                                            <div className="conssPageData">
                                                <p><Calendar  size={20} className="conssPageIcon"/><span className="conssParametersCatalog">Год основания:</span> {conss.ownerYear}</p>
                                                <p><GlobeSimple size={20} className="conssPageIcon"/><span className="conssParametersCatalog">Сфера деятельности:</span> {conss.work}</p>
                                            </div>
                                            <div className="conssPageEvents">
                                                <p><Storefront  size={20} className="conssPageIcon"/><span className="conssParametersCatalog">Услуги/продукты: </span> {conss.service}</p>
                                                <p><MapPinLine size={20} className="conssPageIcon"/><span className="conssParametersCatalog">Локация компании:</span> {conss.location}<span className="investsLocation">, {conss.country}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="conssPageText">
                                        {
                                            conss.desc.length > 113 ?
                                                <div className="conssBlockButton">
                                                    <Link to={`/invests-page/${conss.id}`}>Подробнее <FontAwesomeIcon className="conssTextIcon" icon={faArrowRight}/></Link>
                                                    <button className="conssShareIcon"><img src={share} alt="shareIcon"/></button>
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
                <Pagination itemsPerPage={itemsPerPage} totalItems={conss.length}/>
            </div>
        </div>

    );
};

export default ConsultsPage;