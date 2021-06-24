import React, {useEffect, useState} from 'react';
import { useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


import './adsMSB.css';
import Search from "../../UI/search/search";
import {ArrowRight, Plus, Printer} from "phosphor-react";
import './media.css';
import Pagination from "../../UI/pagination/pagination";

const AdsMsb = () => {
    const ads = useSelector(state => state.slice.ads);
    const value = useSelector(state => state.slice.searchValue);
    const [screen, setScreen] = useState(window.matchMedia('(max-width: 450px)').matches);
    const currentPage = useSelector(state => state.slice.currentPage);
    const itemsPerPage = useSelector(state=> state.slice.itemsPerPage);

    useEffect(()=>{
        const handler = e => setScreen(e.matches);
        window.matchMedia('(max-width: 450px)').addListener(handler);
        window.scrollTo(0, 0);
    });

    const filteredItems = ads.filter(items =>{
        return items.title.toLowerCase().includes(value.toLowerCase());
    });

    const lastItemsIndex = currentPage * itemsPerPage;
    const firstItemsIndex = lastItemsIndex - itemsPerPage;
    const currentItem = filteredItems.slice(firstItemsIndex, lastItemsIndex);


    const addMsbAd = () =>{
      return(
          <div className='addMsdAd'>
              <button>
                  Разместить свое объявление
                  <Plus size={48} />
              </button>
          </div>
      )
    };

    return (
        <div className="adsMsb">
            <Search title='Поиск объявления МСБ' item={ads}/>
            {
                screen ? addMsbAd() : null
            }
            <div className="adsItems">
                {
                    currentItem.map((ads, i) => {
                        return (
                            <div key={i} className='adsItem'>
                                <div className="ads-msb-date">
                                    <div className="adsMsbTitle">
                                        <p>
                                            {ads.title}
                                        </p>
                                    </div>
                                    <div className="adsMsbDate">
                                        <h2>
                                            Размещено: <span>{ads.date}</span>
                                        </h2>
                                        <button>
                                            <Printer size={24}/>
                                        </button>
                                    </div>
                                </div>
                                <div className="adsMsbContent">
                                    <p>Назавание</p>
                                    <h1>{ads.title}</h1>
                                </div>
                                <div className="adsMsbContent">
                                    <p>Мне нужно</p>
                                    <h4>{ads.task}</h4>
                                </div>
                                <div className="adsMsbContent">
                                    <p>Я могу предложить</p>
                                    <h4>{ads.feedBack}</h4>
                                </div>
                                <div className="adsMsbContent">
                                    <p>Контакты</p>
                                    <h4>{ads.contact}</h4>
                                </div>
                                <div className="adsLink">
                                    <Link to={`/all-ads-msb/${ads.id}`}>ПЕРЕЙТИ К ОБЪЯВЛЕНИЮ</Link>
                                    <ArrowRight size={25} className='ads-msb-icon'/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Pagination itemsPerPage={itemsPerPage} totalItems={ads.length}/>
        </div>
    );
};

export default AdsMsb;