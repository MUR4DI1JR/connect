import React, {useEffect} from 'react';
import Invests from "../../UI/Content/Invests/invests";
import Search from "../../UI/search/search";
import {useSelector} from "react-redux";
import Pagination from "../../UI/pagination/pagination";

const InvestsPage = () => {
    const currentPage = useSelector(state => state.slice.currentPage);
    const itemsPerPage = useSelector(state=> state.slice.itemsPerPage);
    const invests = useSelector(state => state.slice.invests);
    const value = useSelector(state => state.slice.searchValue);

    const filteredItems = invests.filter(items =>{
        return items.title.toLowerCase().includes(value.toLowerCase());
    });

    useEffect(()=>{
        window.scrollTo(0,0)
    });

    const lastItemsIndex = currentPage * itemsPerPage;
    const firstItemsIndex = lastItemsIndex - itemsPerPage;
    const currentItem = filteredItems.slice(firstItemsIndex, lastItemsIndex);

    return (
        <div>
            <Search item={invests} title='Гранты / Инвестиции'/>
            <Invests button={false} filteredItem={currentItem}/>
            <Pagination itemsPerPage={itemsPerPage} totalItems={invests.length}/>
        </div>
    );
};

export default InvestsPage;