import React from 'react';
import {useHistory} from "react-router";
import {useSelector} from "react-redux";

const InvestsDetailsPage = () => {
    const invests = useSelector(state => state.slice.invests);
    let investsItem = [];
    const history = useHistory();
    const itemId = history.location.pathname.slice(14);


    for (var i = 0; i < invests.length; i++) {
        if (itemId === invests[i].id.toString()) {
            investsItem.push(invests[i]);
            break;
        }
    }


    return (
        <div>
            {
                investsItem.map((content, id) =>{
                    return(
                        <div key={id}>
                            <h1>{content.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default InvestsDetailsPage;