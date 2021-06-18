import React from 'react';
import Invests from "../../UI/Content/Invests/invests";
import Search from "../../UI/search/search";
import {useSelector} from "react-redux";

const InvestsPage = () => {
    const invests = useSelector(state => state.slice.invests);

    return (
        <div>
            <Search item={invests} title='Гранты / Инвестиции'/>
            <Invests/>
        </div>
    );
};

export default InvestsPage;