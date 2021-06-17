import React from 'react';
import {MagnifyingGlass} from "phosphor-react";

import './search.css';
import './media.css';

const Search = (props) => {
    return (
        <div className="searchComponent">
            <div className="searchContainer">
                <div className="searchTitle">
                    <h1>{props.title}</h1>
                </div>
                <div className="searchItem">
                    <div className="searchInput">
                        <input type="text" placeholder='Введите полностью или часть номера, наименование и так далее, в общем тут должен список по ключивым словам'/>
                        <MagnifyingGlass size={25} color='#7C7C7C' className='searchIcon'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;