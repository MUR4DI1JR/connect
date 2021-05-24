import React from 'react';

import './forum.css';
import './media.css';
import dart from './../../../../Images/dart.png';

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
        <div className="forum" id='3'>
            <div className="forumContainer">
                <div className="forumCalc">
                    <div className="forumCalcTitle">
                        <h1>Калькулятор </h1>
                        <p>показывает вероятность получения гранта/инвестиции</p>
                        <p>1.Попробовать?</p>
                    </div>
                    <div className="forumButtonCalc">
                        <button>Да</button>
                        <button>Нет</button>
                    </div>
                    <img src={dart} alt="dart"/>
                </div>
                <div className="forumText">
                    <h1>Форум</h1>
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