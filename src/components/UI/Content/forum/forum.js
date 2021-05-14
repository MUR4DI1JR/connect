import React from 'react';

import './forum.css';
import forumLogo from './../../../../Images/forum_logo.png';

const Forum = () => {
    const forumContent = [
        {
            title: "Гранты/инвестиции",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sem massa pretium quam venenatis lorem sagittis. "
        },
        {
            title: "Купля/продажа бизнеса",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sem massa pretium quam venenatis lorem sagittis. Pulvinar sit elementum facilisis vulputate elementum malesuada pharetra dui habitant."
        },
        {
            title: "Юр.вопросы",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sem massa pretium quam venenatis lorem sagittis. Pulvinar sit elementum facilisis vulputate elementum malesuada pharetra dui habitant."
        },
        {
            title: "Партнерство и др.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sem massa pretium quam venenatis lorem sagittis. Pulvinar sit elementum facilisis vulputate elementum malesuada pharetra dui habitant."
        },
    ];

    return (
        <div className="forum">
            <h1>Форум</h1>
            <div className="forumContainer">
                <div className="forumImg">
                    <img src={forumLogo} alt="forumLogoIcon"/>
                </div>
                <div className="forumText">
                    {
                        forumContent.map((forum, i) =>{
                            return(
                                <div className="forumCatalog" key={i}>
                                    <div className="forumTitle">
                                        <h1>{forum.title}</h1>
                                    </div>
                                    <p>{forum.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Forum;