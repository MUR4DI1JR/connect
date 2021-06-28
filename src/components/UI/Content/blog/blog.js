import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {clickedItem} from "../../../../redux/sliceReducer";

import './blog.css';
import './media.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
    const blogs = useSelector(state => state.slice.items.blogs);
    const dispatch = useDispatch();
    const history = useHistory();

    const [showOneSlide, setShowOneSlide] = useState(window.matchMedia('(max-width: 650px)').matches);
    const [showTwoSlide, setShowTwoSlide] = useState(window.matchMedia('(max-width: 900px)').matches);

    useEffect(() =>{
        const handler = (e) =>{setShowOneSlide(e.matches)};
        window.matchMedia('(max-width: 650px)').addListener(handler);
        const screenHandler = (e) =>{setShowTwoSlide(e.matches)};
        window.matchMedia('(max-width: 900px)').addListener(screenHandler);
    });

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={"icon " + className}
                style={{ ...style, marginRight: "45px", marginTop: '-20px', display: "none"}}
                onClick={onClick}
            />
        );
    }

    const showSlide = () =>{
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: !showOneSlide ? 2 : 1,
            slidesToScroll: 1,
            className: 'eventSlides',
            nextArrow: <SampleNextArrow />,
        };
        return (
            <Slider {...settings}>
                {
                    blogs.map((blog, i) => {
                        return (
                            <div className="blogCard" key={i} onClick={() => {history.push(`/blog-page`); dispatch(clickedItem(blog.id))}}>
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
            </Slider>
        )
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: !showTwoSlide ? 3 : 2,
        slidesToScroll: 1,
        className: 'eventSlides',
        nextArrow: <SampleNextArrow />,
    };

    return (
        <div className="blog">
            <div className="blogContainer">
                <div className="blogTitle">
                    <h1>Блог</h1>
                </div>
                <div className="blogItems">
                    {
                        showOneSlide ?
                            showSlide() :
                            <Slider {...settings}>
                                {
                                    blogs.map((blog, i) => {
                                        return (
                                            <div className="blogCard" key={i} onClick={() => {history.push(`/blog-page`); dispatch(clickedItem(blog.id))}}>
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
                            </Slider>
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;