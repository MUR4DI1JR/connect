import React, {useEffect, useState} from 'react';
import { useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


import './adsMSB.css';
import Search from "../../UI/search/search";
import {ArrowRight, Plus, Printer} from "phosphor-react";
import './media.css';

const AdsMsb = () => {
    const ads = useSelector(state => state.slice.ads);
    const filteredItems = useSelector(state => state.slice.filteredItems);
    const [screen, setScreen] = useState(window.matchMedia('(max-width: 450px)').matches);


    useEffect(()=>{
        const handler = e => setScreen(e.matches);
        window.matchMedia('(max-width: 450px)').addListener(handler)
    });

    console.log(filteredItems);

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

    console.log('ads',filteredItems);

    return (
        <div className="adsMsb">
            <Search title='Поиск объявления МСБ' item={ads}/>
            {
                screen ? addMsbAd() : null
            }
            <div className="adsItems">
                {
                    filteredItems.map((ads, i) => {
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
                                    <Link to={`/ads-msb/${ads.id}`}>ПЕРЕЙТИ К ОБЪЯВЛЕНИЮ</Link>
                                    <ArrowRight size={25} className='ads-msb-icon'/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AdsMsb;