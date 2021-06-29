import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {TelegramLogo} from "phosphor-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import EventSideBar from "../../UI/sideBar/eventSideBar";

import './blogDetails.css';
import './media.css';
import Comment from "../../UI/comments/comment";

const BlogDetails = (props) => {
    const blogs = useSelector(state => state.slice.items.blogs);
    let blogItem = [];
    const itemId = props.match.params.id;

    useEffect(()=>{
        window.scrollTo(0, 0)
    });

    for (var i = 0; i < blogs.length; i++) {
        if (itemId === blogs[i].id.toString()) {
            blogItem.push(blogs[i]);
            break;
        }
    }
    return (
        <div>
            {
                blogItem.map((blog, i) =>(
                    <div className="blogDetailContainer" key={i}>
                        <div className="blogDetailContent">
                            <div className="blogDetailImg">
                                <img src={blog.img} alt="aboutIMG"/>
                                <p>{blog.data},{blog.time}</p>
                            </div>
                            <div className="blogDetailTitle">
                                <h1>{blog.title}</h1>
                                <div className="blogTelegramDetails">
                                    <h1>Все самое интересное в Telegram!</h1>
                                    <TelegramLogo className="blogTelegramIcon" size={20} />
                                </div>
                                <div className="blogDetailText">
                                    <h1>{blog.descTitle}</h1>
                                    <p>{blog.description}</p>
                                    <p>Программа направлена на развитие навыков и знаний, которые позволят гражданам 21 века быть успешным и в личном развитии, и в профессиональной карьере.</p>
                                </div>
                                <div className="blogShare">
                                    <button><FontAwesomeIcon className='blogIcon' icon={faFacebook}/>Поделиться</button>
                                </div>
                            </div>
                            <Comment item={"blogs"} comments={blogItem[0].comments} id={itemId}/>
                        </div>
                        <div className="blogSideBar">
                            <EventSideBar/>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogDetails;