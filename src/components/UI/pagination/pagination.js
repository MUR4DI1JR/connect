import React, {useState} from 'react';
import {paginate} from "../../../redux/sliceReducer";
import {useDispatch} from "react-redux";

import './pagination.css';

const Pagination = ({itemsPerPage, totalItems}) => {
    const dispatch = useDispatch();
    const pageNumbers = [];
    const [active, setActive] = useState(-1);

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i)
    }


    return (
        <div className='pagination_container'>
            <ul className="pagination">
                {
                    pageNumbers.map((number, index) =>(
                        <li className="pagination__item" key={index}>
                            <a href="#" className={ active === index ? "pagination__link" : "pagination__link".concat(' is_active')} onClick={()=> {dispatch(paginate(number)); setActive(index)}}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;