import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

const EventDetails = () => {
    const events = useSelector(state => state.slice.events);
    let investsItem = [];
    const history = useHistory();
    const itemId = history.location.pathname.slice(12);


    for (var i = 0; i < events.length; i++) {
        if (itemId === events[i].id.toString()) {
            investsItem.push(events[i]);
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

export default EventDetails;