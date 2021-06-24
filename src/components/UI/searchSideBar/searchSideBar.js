import React, {useState} from 'react';

import './searchSideBar.css';

const SearchSideBar = (props) => {
    const [location, setLocation] = useState('');
    const [onlineFormat, setOnlineFormat] = useState(false);
    const [offlineFormat, setOfflineFormat] = useState(false);
    const [startFilter, setStartFilter] = useState('');
    const [endFilter, setEndFilter] = useState('');

    // const  filteredItems = invests.filter(items =>{
    //     return items.title.toLowerCase().includes(value.toLowerCase());
    // });

    const filterLocation = props.items.filter(item =>{
        return  item.location.toLowerCase().includes(location.toLowerCase());
    });

    if (onlineFormat){
        const filterFormat = filterLocation.filter(item =>{
            return item.format.toLowerCase().includes('Онлайн'.toLowerCase());
        });
    }else if(offlineFormat){
        const filterFormat = filterLocation.filter(item =>{
            return item.format.toLowerCase().includes('Офлайн'.toLowerCase());
        });
    };

    return (
        <div className='searchSideBar'>
            <h1>Параметры поиска</h1>
            <div className="searchSideBarContainer">
                <div className="sort">
                    <p>Сортировать по:</p>
                    <select name="sortSearch" id="">
                        <option value="Дата обновления">Дата обновления</option>
                    </select>
                </div>
                <hr/>
                <div className="searchParameters">
                    <h1>Формат мероприятия</h1>
                    <div>
                        <input type="checkbox" id='1' checked={onlineFormat} onChange={() => setOnlineFormat(!onlineFormat)}/>
                        <label htmlFor="1">Онлайн</label>
                    </div>
                    <div>
                        <input type="checkbox" id='2' checked={offlineFormat} onChange={() => setOfflineFormat(!offlineFormat)}/>
                        <label htmlFor="2">Офлайн</label>
                    </div>
                </div>
                <hr/>
                <div className="searchLocation">
                    <h1>Местоположение:</h1>
                    <select name="sortSearch" id="" value={location} onChange={e => setLocation(e.target.value)}>
                        <option value="выбрать">выбрать</option>
                        {
                            props.items.map((item, i) =>(<option key={i} value={item.location}>{item.location}</option>))
                        }
                    </select>
                </div>
                <hr/>
                <div className="postedSearch">
                    <h1>Дата публикации</h1>
                    <div className="dateSearch">
                        <input type="date" onChange={e => setStartFilter(e.target.value)}/>
                        <hr/>
                        <input type="date" onChange={e => setEndFilter(e.target.value)}/>
                    </div>
                </div>
                <hr/>
                <div className="valueSearch">
                    <h1>Сумма</h1>
                    <div className="valueConfirm">
                        <input type="text"/>
                        <hr/>
                        <input type="text"/>
                    </div>
                </div>
                <div className="buttonConfirm">
                    <button>Применить</button>
                    <button>Сбросить</button>
                </div>
            </div>
        </div>
    );
};

export default SearchSideBar;