import React, {useState} from 'react';
import {useHistory} from "react-router";
import {CreditCard} from "phosphor-react";

import './userPage.css';
import './media.css';
import avatar from './../../../Images/avatar.jpg';
import logo from './../../../Images/logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";
import dart from "../../../Images/dart.png";

const UserPage = () => {
    const user = [
        {
            id: 1,
            avatar: avatar,
            name: 'Muradil',
            surname: 'Koychubekov',
            telNumber: '+9969999999',
            payCard: [
                {
                    card: '1234 **** **** 5678',
                },
                {
                    card: 'ОДеньги'
                }
            ]
        }
    ];
    const history = useHistory();
    const [facebook, setFaceBook] = useState(false);
    const [google, setGoogle] = useState(false);
    const [show, setShow] = useState(false);

    const passShow = () => {
        return (
            <div className='passUserContainer'>
                <div className='passUserContent'>
                    <div className="passCalculatorItem">
                        <div className="passCalculator">
                            <div className="passCalcTitle">
                                <h1>Калькулятор </h1>
                                <p>показывает вероятность получения гранта/инвестиции</p>
                                <p>1.Попробовать?</p>
                            </div>
                            <div className="passButtonCalc">
                                <button onClick={() => history.push(`/calculator`)}>Да</button>
                                <button>Нет</button>
                            </div>
                            <img src={dart} alt="dart"/>
                        </div>
                    </div>
                    <div className="passUserSubscribe">
                        <div className="passPlan">
                            <h1>Доступный план</h1>
                            <div className="passPlanCard">
                                <div className="passPlanLogo">
                                    <img src={logo} alt="Logo"/>
                                    <h1>Connect<span>4pro</span></h1>
                                </div>
                                <div className="passDesc">
                                    <h1>Премиум аккаунт</h1>
                                    <div className="passDescButton">
                                        <p>Купите план и наслаждайтесь преимуществами премиум-пользователя</p>
                                        <button>Стать Премиум</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="passPay">
                            <h1>Способ оплаты</h1>
                            {
                                user[0].payCard.map((pay, i)=>(
                                    <div className="passCardPay" key={i}>
                                        <div className="passCardText">
                                            <CreditCard size={48} />
                                            <p>{pay.card}</p>
                                        </div>
                                        <button>{pay.card.match(/\d/g) ? 'Обновить карту' : 'Поменять номер'}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className='userPage'>
            <div className="userNavBar">
                <button onClick={() => setShow(false)}>Профиль</button>
                <button onClick={()=> setShow(true)}>Подписка</button>
            </div>
            {
                show ?
                    passShow()
                    :
                    <div className="userContainer">
                        <div className="userContent">
                            <div className="userCard">
                                {
                                    user.map((user, i) => {
                                        return (
                                            <div className="userLogo" key={i}>
                                                <img src={user.avatar} alt="avatar"/>
                                                <h1>{user.name}</h1>
                                                <p>{user.telNumber}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="userEdit">
                                <div className="userSocialButtonsItem">
                                    <h1>Подключиться</h1>
                                    <div className={!facebook && !google ? "userSocialButtons" : "userSocialButtons".concat(' loginSocial')}>
                                        {
                                            !facebook ?
                                            <button className='facebookLogin' onClick={() => setFaceBook(true)}>
                                                <FontAwesomeIcon className='loginIcon'
                                                                 icon={faFacebook}
                                                />Facebook
                                            </button>
                                                :
                                                <button className='facebookLogin'>
                                                    Зарегистрирован в Facebook
                                                </button>
                                        }
                                        {
                                            !google ?
                                                <button className='googleLogin' onClick={() => setGoogle(true)}>
                                                    <FontAwesomeIcon className='loginIcon'
                                                                     icon={faGoogle}
                                                    />Google
                                                </button>
                                                :
                                                <button className='googleLogin'>
                                                    Зарегистрирован в Google
                                                </button>
                                        }
                                    </div>
                                </div>
                                <div className="userEditItems">
                                    <div className="userDataBase">
                                        <h1>Личные данные</h1>
                                        <div className="userEditForms">
                                            <div className="userPageInfo">
                                                <div className="userInputOne">
                                                    <h1>Имя<span>*</span></h1>
                                                    <input type="text" placeholder='Придумайте имя'/>
                                                </div>
                                                <div className="userInputTwo">
                                                    <h1>Фамилия<span>*</span></h1>
                                                    <input type="text" placeholder='Придумайте фамилию'/>
                                                </div>
                                            </div>
                                            <div className="userConsUserBorn">
                                                <h1>Дата рождения<span>*</span></h1>
                                                <div className='userPageConsBorn'>
                                                    <input
                                                        type="number"
                                                        name="day"
                                                        placeholder="День"
                                                        required
                                                    />
                                                    <select name="month" id="month" required>
                                                        <option value="Месяц">Месяц</option>
                                                        <option value="Январь">Январь</option>
                                                        <option value="Февраль">Февраль</option>
                                                        <option value="Март">Март</option>
                                                        <option value="Апрель">Апрель</option>
                                                        <option value="Май">Май</option>
                                                        <option value="Июнь">Июнь</option>
                                                        <option value="Июль">Июль</option>
                                                        <option value="Август">Август</option>
                                                        <option value="Сентябрь">Сентябрь</option>
                                                        <option value="Октябрь">Октябрь</option>
                                                        <option value="Ноябрь">Ноябрь</option>
                                                        <option value="Декабрь">Декабрь</option>
                                                    </select>
                                                    <input
                                                        type="number"
                                                        name="year"
                                                        placeholder="Год"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="userPageConsGender">
                                                <select name="gender" id="gender">
                                                    <option value="Пол">Пол</option>
                                                    <option value="Мужской">Мужской</option>
                                                    <option value="Женский">Женский</option>
                                                </select>
                                            </div>
                                            <div className="userPageConsLocation">
                                                <div className="userPageLocationOne">
                                                    <h1>Страна</h1>
                                                    <select name="country">
                                                        <option value="Выберите">Выберите</option>
                                                        <option value="Кыргызстан">Кыргызстан</option>
                                                        <option value="Россия">Россия</option>
                                                        <option value="Казахстан">Казахстан</option>
                                                    </select>
                                                </div>
                                                <div className="userPageLocationTwo">
                                                    <h1>Город/село</h1>
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <div className="userPageContact">
                                                <div className="userPageContactOne">
                                                    <h1>Номер телефона<span>*</span></h1>
                                                    <input
                                                        type="text"
                                                        name="number"
                                                        placeholder="+996"
                                                        required
                                                    />
                                                </div>
                                                <div className='userPageContactTwo'>
                                                    <h1>Telegram</h1>
                                                    <input type="text" placeholder="+996"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userAccount">
                                        <h1>Данные аккаунта</h1>
                                        <div className="userPageEmail">
                                            <div className="registerEmail">
                                                <h1>Электронный адрес<span>*</span></h1>
                                                <input type="email"/>
                                            </div>
                                            <div className="userPageSocialLink">
                                                <h1>Ссылка на сайт<span>*</span></h1>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userMailing">
                                    <h1>Уведомления</h1>
                                    <div className="userMailingItem">
                                        <p>Я хочу получать рассылку, предложения и новости от компании Connect4pro.</p>
                                        <input className="apple-switch" type="checkbox"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
        </div>
    );
};

export default UserPage;