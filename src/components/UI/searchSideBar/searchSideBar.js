import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";


import './searchSideBar.css';

const SearchSideBar = (props) => {
    // const events = useSelector(state => state.slice.items.events);
    const [location, setLocation] = useState('');
    const [onlineFormat, setOnlineFormat] = useState(false);
    const [offlineFormat, setOfflineFormat] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [result, setResult] = useState(props.items);
    const [resultV2, setResultV2] = useState([]);

    const filterLocation = (location) => {
        setLocation(location);
        setResult(props.items.filter(item => {
            return item.location.toLowerCase().includes(location.toLowerCase());
        }));
    };


    // const checkDate = (obj) =>{
    //     obj.map(item =>{
    //         const date = new Date(item.posted);
    //         if(date >= startFilter && date <= endFilter){
    //             const rt = {title: item.title, date: item.data};
    //             group.push(rt)
    //         }
    //     })
    // };
    // const checkDate = props.items.filter(item=>{
    //     return new Date(item.posted) >= '2021-03-01' && new Date(item) <= endFilter
    // });


    const filterDate = (stDate = startDate, enDate = endDate)=>{
        // const start = new Date(stDate);
        // const end = new Date(enDate);

        setStartDate(stDate);
        setEndDate(enDate);

        // setResult(filteredDate);
    };

    const filterArrDateRange = (arr, start, end) => {
        return [...arr].filter(item => {
            const date = new Date(item.posted);
            return date >= new Date(start) && date <= new Date(end);
        })
    };

    // if (onlineFormat){
    //     const filterFormat = filterLocation.filter(item =>{
    //         return item.format === 'Онлайн'
    //     });
    //     // checkDate(filterFormat);
    // }else if(offlineFormat){
    //     const filterFormat = filterLocation.filter(item =>{
    //         return item.format === 'Офлайн'
    //     });
    //     // checkDate(filterFormat);
    // }

    const searchClick = () =>{
        const filteredDate = filterArrDateRange(result, startDate, endDate);
        setResult(filteredDate);
        console.log(result);
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
                    <select name="sortSearch" id="" value={location} onChange={e => filterLocation(e.target.value)}>
                        <option value="">выбрать</option>
                        {
                            props.items.map((item, i) =>(<option key={i} value={item.location}>{item.location}</option>))
                        }
                    </select>
                </div>
                <hr/>
                <div className="postedSearch">
                    <h1>Дата публикации</h1>
                    <div className="dateSearch">
                        <input type="date" value={startDate} onChange={e => filterDate(e.target.value, endDate)}/>
                        <hr/>
                        <input type="date" value={endDate} onChange={e => filterDate(startDate, e.target.value)}/>
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
                    <button onClick={searchClick}>Применить</button>
                    <button>Сбросить</button>
                </div>
            </div>
        </div>
    );
};

export default SearchSideBar;