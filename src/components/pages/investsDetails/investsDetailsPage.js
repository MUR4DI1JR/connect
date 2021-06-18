import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {useSelector} from "react-redux";

const InvestsDetailsPage = () => {
    const invests = useSelector(state => state.slice.invests);
    const investsItem = [];
    const history = useHistory();

    useEffect(()=>{
        console.log(invests);
        const itemId = history.location.pathname.slice(14);
        for (var i = 0; i < invests.length; i++){
            if (itemId === invests[i].id.toString()){

            }else {
                console.log("false");
            }
        }
    });

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