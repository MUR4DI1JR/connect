import React, {useEffect, useMemo, useState} from 'react';
import {MagnifyingGlass} from "phosphor-react";
import {useDispatch} from 'react-redux';
import {filtered} from "../../../redux/sliceReducer";

import './search.css';
import './media.css';

const Search = (props) => {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const dispatch = useDispatch();

    const  filteredItems = props.item.filter(items =>{
        return items.title.toLowerCase().includes(value.toLowerCase());
    });


    useMemo(() =>{
        const showItem = () =>{
            dispatch(filtered(filteredItems))
        };
        showItem()
    }, []);


    const itemClickHandler = (e) =>{
        setValue(e.target.textContent);
        setIsOpen(!isOpen);
        dispatch(filtered(filteredItems));
    };

    const inputClickHandler = (e) =>{
        setIsOpen(true);
        dispatch(filtered(filteredItems))
    };

    return (
        <div className="searchComponent">
            <div className="searchContainer">
                <div className="searchTitle">
                    <h1>{props.title}</h1>
                </div>
                <div className="searchItem">
                    <div className="searchInput">
                        <input type="text"
                               placeholder='Введите полностью или часть номера, наименование и так далее, в общем тут должен список по ключивым словам'
                               value={value}
                               onChange={event => setValue(event.target.value)}
                               onClick={inputClickHandler}
                        />
                        <MagnifyingGlass size={25} color='#7C7C7C' className='searchIcon'/>
                    </div>
                    <ul className="autocomplete">
                        {
                            value && isOpen ?
                                filteredItems.map((item, id) => {
                                    return <li className='autocomplete__item'
                                               key={id}
                                               onClick={itemClickHandler}
                                    >
                                        {item.title}
                                    </li>
                                })
                                :
                                null
                        }
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Search;