import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import './blogPage.css';
import {useHistory} from "react-router";
import Pagination from "../../UI/pagination/pagination";

const BlogPage = () => {
    const blogs = useSelector(state => state.slice.items.blogs);
    const itemActive = useSelector(state => state.slice.clicked);
    const currentPage = useSelector(state => state.slice.currentPage);
    const itemsPerPage = useSelector(state=> state.slice.itemsPerPage);
    const history = useHistory();

    useEffect(()=>{
        window.scrollTo(0, 0)
    });

    const lastItemsIndex = currentPage * itemsPerPage;
    const firstItemsIndex = lastItemsIndex - itemsPerPage;
    const currentItem = blogs.slice(firstItemsIndex, lastItemsIndex);

    return (
        <div className='blogPage'>
            <div className="blogPageTitle">
                <div className="blogText">
                    <h1>Блог</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa ac erat ac vel dictum nisl enim. Nulla arcu morbi duis pretium orci, volutpat ut. Odio sit habitant integer mauris netus varius sed gravida imperdiet.</p>
                </div>
            </div>
            <div className="blogPageContainer">
                <div className="blogPageContent">
                    {
                        currentItem.map((blog, i) => {
                            return (
                                <div className={itemActive === blog.id ? "blogPageCard".concat(" blogActive") : "blogPageCard"} key={i} onClick={() => history.push(`/blog-page/${blog.id}`)}>
                                    <div className="blogPageImg">
                                        <img src={blog.img} alt="blogPageImg"/>
                                    </div>
                                    <div className="blogPageText">
                                        <p>{blog.data + ", " + blog.time}</p>
                                        <h1>{blog.title}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Pagination itemsPerPage={itemsPerPage} totalItems={blogs.length}/>
            </div>
        </div>
    );
};

export default BlogPage;