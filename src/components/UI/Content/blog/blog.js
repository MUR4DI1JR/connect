import React from 'react';

import './blog.css';

import blog1 from './../../../../Images/blog1.png';
import blog2 from './../../../../Images/blog2.png';
import blog3 from './../../../../Images/blog3.png';


const Blog = () => {
    const blog = [
        {
            img: blog1,
            title: 'Стипендиальная программа для иностранных студентов',
            data: '5 мая 2021',
            time: '11:57'
        },
        {
            img: blog2,
            title: 'Стипендиальная программа для иностранных студентов',
            data: '5 мая 2021',
            time: '11:57'
        },
        {
            img: blog3,
            title: 'Стипендиальная программа для иностранных студентов',
            data: '5 мая 2021',
            time: '11:57'
        }
    ];

    return (
        <div className="blog">
            <div className="blogContainer">
                <div className="blogTitle">
                    <h1>Блог</h1>
                </div>
                <div className="blogItems">
                    {
                        blog.map((blog, i) =>{
                            return(
                                <div className="blogCard" key={i}>
                                    <div className="blogImg">
                                        <img src={blog.img} alt="blogImg"/>
                                    </div>
                                    <div className="blogText">
                                        <p>{blog.data + ", " + blog.time}</p>
                                        <h1>{blog.title}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;