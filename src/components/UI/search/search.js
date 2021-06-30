import React, {useState} from 'react';
import {MagnifyingGlass} from "phosphor-react";
import {useDispatch, useSelector} from 'react-redux';
import {filtered} from "../../../redux/sliceReducer";

import './search.css';
import './media.css';

const Search = (props) => {
    const value = useSelector(state => state.slice.searchValue);
    const [isOpen, setIsOpen] = useState(true);
    const dispatch = useDispatch();

    const filteredItems = props.item.filter(items =>{
        return items.title.toLowerCase().includes(value.toLowerCase());
    });

    const itemClickHandler = (e) =>{
        dispatch(filtered(e.target.textContent));
        setIsOpen(!isOpen);
    };

    const inputClickHandler = (e) =>{
        setIsOpen(true);
    };


    return (
        <div className="searchComponent">
            <div className="searchContainer">
                <div className="searchTitle">
                    {
                        props.investTitle ?
                            <h1><span style={{textDecoration: props.underline ? 'underline' : 'none'}}>{props.theme}</span>{props.title}</h1>
                            :
                            <h1>{props.title}</h1>
                    }
                </div>
                <div className="searchItem">
                    <div className="searchInput">
                        <input type="text"
                               placeholder='Введите полностью или часть номера, наименование и так далее, в общем тут должен список по ключивым словам'
                               value={value}
                               onChange={event => dispatch(filtered(event.target.value))}
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