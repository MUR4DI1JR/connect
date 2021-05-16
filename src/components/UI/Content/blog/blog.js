import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';

import './blog.css';
import './media.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        },
        {
            img: blog3,
            title: 'Стипендиальная программа для иностранных студентов',
            data: '5 мая 2021',
            time: '11:57'
        }
    ];

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
                    blog.map((blog, i) => {
                        return (
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
                                    blog.map((blog, i) => {
                                        return (
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
                            </Slider>
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;