import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';

import './dataBasePage.css';
import './mediaDataBase.css';
import {MagnifyingGlass} from "phosphor-react";

const DataBasePage = () => {
    const countsDataBase = [
        {
            id: 1,
            title: 'Количество грантов',
            count: 1000,
        },
        {
            id: 2,
            title: 'Стоимость грантов',
            count: 2700000,
        },
        {
            id: 3,
            title: 'Количество спонсоров',
            count: 2350,
        },
        {
            id: 4,
            title: 'Количество получателей',
            count: 305017,
        },
    ];


    const catalog = [
        {
            id: 1,
            catalog: 'Малый и средний бизнес',
            info: [
                {
                    id: 1,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 2,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 3,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 13
                }
            ]
        },
        {
            id: 2,
            catalog: 'Доноры',
            info: [
                {
                    id: 1,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 2,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 3,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                }
            ]
        },
        {
            id: 3,
            catalog: 'Инвесторы',
            info: [
                {
                    id: 1,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 2,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 3,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                }
            ]
        },
        {
            id: 4,
            catalog: 'Проекты',
            info: [
                {
                    id: 1,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 2,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 3,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                }
            ]
        },
        {
            id: 5,
            catalog: 'Бизнес план',
            info: [
                {
                    id: 1,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 2,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 3,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                }
            ]
        },
        {
            id: 6,
            catalog: 'Центр поддержки',
            info: [
                {
                    id: 1,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 2,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 3,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                }
            ]
        },
        {
            id: 7,
            catalog: 'Госорганы для бизнеса',
            info: [
                {
                    id: 1,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 2,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                },
                {
                    id: 3,
                    name: '«Фонд М. Коперника (Николая Коперника)»',
                    city: 'Бишкек',
                    country: 'Кыргызстан',
                    value: 15698745,
                    count: 12
                }
            ]
        },
    ];

    const [active, setActive] = useState(2);
    const [item, setItem] = useState('');
    const tableName =['Имя получается',  'Город', 'Страна', 'Стоимость', 'Количество'];
    const lastItem = catalog[active].info.length;
    const [screen11, setScreen11] = useState(window.matchMedia('(max-width: 1165px)').matches);
    const [screen7, setScreen7] = useState(window.matchMedia('(max-width: 720px)').matches);


    useEffect(()=>{
        const handler = e => setScreen11(e.matches);
        window.matchMedia("(max-width: 1160px)").addListener(handler);
        const screenHandler = e => setScreen7(e.matches);
        window.matchMedia("(max-width: 720px)").addListener(screenHandler)
    }, []);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={'dataBaseIcon ' + className}
                style={{ ...style, display: "block"}}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "green" }}
                onClick={onClick}
            />
        );
    }

    const settingsCatalog = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: screen11 ? 6 : 7,
        slidesToScroll: 1,
        className: 'dataBaseSlides',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        adaptiveHeight: true,
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: screen7 ? 1 : 5,
        slidesToScroll: 1,
        className: 'tableSlide',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        adaptiveHeight: true,
    };



    const tableSlide = () => {
        return (
            <div className="dataBaseTable">
                <Slider {...settings}>
                    {
                        tableName.map((item, i) => <th key={i} onClick={e => setItem(e.target.textContent)}>{item}</th>)
                    }
                </Slider>
                    {
                        catalog[active].info.map((catalog, i) =>{
                            if ((lastItem - 1) === i){
                                return(
                                    <tbody key={i}>
                                    <tr  style={{borderBottom: 'none'}}>
                                        <td>
                                            {
                                                item === 'Имя получается' ? catalog.name : catalog.city
                                                &&
                                                item === 'Город' ? catalog.city : catalog.country
                                                &&
                                                item === 'Страна' ? catalog.country : catalog.value
                                                &&
                                                item === 'Стоимость' ? catalog.value : catalog.count
                                                &&
                                                item === 'Количество' ? catalog.count : catalog.name
                                            }
                                        </td>
                                    </tr>
                                    </tbody>
                                )
                            }else {
                                return(
                                    <tbody key={i}>
                                    <tr>
                                        <td>
                                            {
                                                item === 'Имя получается' ? catalog.name : catalog.city
                                                &&
                                                item === 'Город' ? catalog.city : catalog.country
                                                &&
                                                item === 'Страна' ? catalog.country : catalog.value
                                                &&
                                                item === 'Стоимость' ? catalog.value : catalog.count
                                                &&
                                                item === 'Количество' ? catalog.count : catalog.name
                                            }
                                        </td>
                                    </tr>
                                    </tbody>
                                )
                            }
                        })
                    }
            </div>

        )
    };

    return (
        <div className='dataBase'>
            <div className="dataBaseHeading">
                <div className="dataBaseHeadingContent">
                    <h1>База данных</h1>
                    <div className="searchHeading">
                        <div className="commSearch">
                            <label htmlFor="commSearch">ОБЩИЙ ПОИСК</label>
                            <div className="commSearchInput">
                                <input type="text" id='commSearch' placeholder='Введите полностью или часть '/>
                                <MagnifyingGlass size={25} color='#7C7C7C' className='searchIcon'/>
                            </div>
                        </div>
                        <div className="locationSearch">
                            <label htmlFor="location">МЕСТОПОЛОЖЕНИЕ</label>
                            <div className="locationSearchInput">
                                <input type="text" id='location' placeholder='Введите полностью или часть '/>
                                <MagnifyingGlass size={25} color='#7C7C7C' className='searchIcon'/>
                            </div>
                        </div>
                        <div className="headingParametersSearch">
                            <select name="searchDataBase" id="searchBase">
                                <option value="Параметры поиска">Параметры поиска</option>
                            </select>
                        </div>
                    </div>
                    <div className="countDataBase">
                        {
                            countsDataBase.map((count, id) =>{
                                return (
                                    <div className="cardDataBase" key={id}>
                                        <p>{count.title}</p>
                                        {
                                            count.title === 'Стоимость грантов' ?
                                                <h1>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'KGS' }).format(count.count)}</h1>
                                                :
                                                <h1>{new Intl.NumberFormat('de-DE').format(count.count)}</h1>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="dataBaseContainer">
                <div className="dataBaseItem">
                    <div className="dataBaseContent">
                        <div className="dataBaseCatalog">
                            <Slider  {...settingsCatalog}>
                                {
                                    catalog.map((catalog, i) => (
                                        <div
                                            className={active !== i ? 'cardCatalog' : 'cardCatalog'.concat(' catalogActive')}
                                            onClick={() => setActive(i)} key={i}>
                                            <h1>{catalog.catalog}</h1>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                        <div className="dataBaseInfo">
                            <p>305 015 получателей, начиная с 2003 г. по настоящее время</p>
                            {
                                screen7 ?
                                    tableSlide()
                                    :
                                    <table className="dataBaseTable">
                                        <thead>
                                        <tr>
                                            <th>Имя получается</th>
                                            <th>Город</th>
                                            <th>Страна</th>
                                            <th>Стоимость</th>
                                            <th>Количество</th>
                                        </tr>
                                        </thead>
                                        {
                                            catalog[active].info.map((catalog, i) => {
                                                if ((lastItem - 1) === i) {
                                                    return (
                                                        <tbody key={i}>
                                                        <tr style={{borderBottom: 'none'}}>
                                                            <td>{catalog.name}</td>
                                                            <td>{catalog.city}</td>
                                                            <td>{catalog.country}</td>
                                                            <td>{catalog.value}</td>
                                                            <td>{catalog.count}</td>
                                                        </tr>
                                                        </tbody>
                                                    )
                                                } else {
                                                    return (
                                                        <tbody key={i}>
                                                        <tr>
                                                            <td>{catalog.name}</td>
                                                            <td>{catalog.city}</td>
                                                            <td>{catalog.country}</td>
                                                            <td>{catalog.value}</td>
                                                            <td>{catalog.count}</td>
                                                        </tr>
                                                        </tbody>
                                                    )
                                                }
                                            })
                                        }
                                    </table>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataBasePage;