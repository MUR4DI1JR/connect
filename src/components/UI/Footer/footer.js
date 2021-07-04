import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegramPlane, faTwitter, faVk} from '@fortawesome/free-brands-svg-icons';
import {useHistory} from "react-router";

import './footer.css';
import './media.css';

import logo from './../../../Images/logo.png';

const Footer = () => {
    const navs = ['Финансы', 'Консультанты', 'Мероприятия', 'Гранты', 'Форум', 'Инвестиция',  'О нас'];
    const history = useHistory();
    const [footer, setFooter] = useState(window.matchMedia('(max-width: 900px)').matches);
    const [page, setPage] = useState(false);

    const click = () =>{
        if (page){
            setPage(false)
        }else {
            setPage(true)
        }
    };

    const nextPage = e =>{
        click();
        switch (e.target.textContent) {
            case 'О нас':
                history.push('/about-us');
                break;
            case 'Форум':
                history.push('/forum');
                break;
            case 'Инвестиция':
                history.push('/invests-page');
                break;
        }
    };

    let showText = navs.map((nav, i) => {
        return (
            <p key={i}>
                <a href={history.action === "POP" ? `/#${i}` : `#${i}`} onClick={nextPage}>{nav}</a>
            </p>
        )
    });

    useEffect(()=>{
        const screenHandler = (e) =>{setFooter(e.matches)};
        window.matchMedia('(max-width: 900px)').addListener(screenHandler);
    });




    const showFooter = () =>{
      return(
          <div className="footer">
              <div className="footerContainer">
                  <div className="footerHead">
                      <div className="footerLogoText">
                          <div className="footerLogo">
                              <img src={logo} alt="footerLogoIcon"/>
                              <div className="footerTextLink">
                                  <a href="/">Connect<span>4pro</span></a>
                              </div>
                          </div>
                          <div className="footerButtonLang">
                              <select size="1">
                                  <option value="Russian">Русский</option>
                                  <option value="English">English</option>
                              </select>
                          </div>
                      </div>
                  </div>
                  <div className="footerNavBar">
                      {
                          showText
                      }
                  </div>
                  <div className="footerNav">
                      <div className="footerNavLink">
                          <div className="footerText">
                              <p>Есть информация про грант / инвестицию, пришлите на
                                  почту <span>prof4dev@gmail.com</span></p>
                          </div>
                          <div className="footerNavSocial">
                              <div className="footerTel">
                                  <p>+996 700 123-456</p>
                              </div>
                              <div className="footerSocial">
                                  <FontAwesomeIcon className="footerSocialIcon" icon={faFacebookF}/>
                                  <FontAwesomeIcon className="footerSocialIcon" icon={faTwitter}/>
                                  <FontAwesomeIcon className="footerSocialIcon" icon={faVk}/>
                                  <FontAwesomeIcon className="footerSocialIcon" icon={faTelegramPlane}/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="footerBottom">
                      <div className="footerTextSecurity">
                          <p>Все права защищены.</p>
                          <p>Политика конфидициальности.</p>
                      </div>
                  </div>
              </div>
          </div>
      )
    };


    return (
        <div>
            {
                footer ? showFooter() :
                    <div className="footer">
                        <div className="footerContainer">
                            <div className="footerHead">
                                <div className="footerLogoText">
                                    <div className="footerLogo">
                                        <img src={logo} alt="footerLogoIcon"/>
                                        <div className="footerTextLink">
                                            <a href="/">Connect<span>4pro</span></a>
                                        </div>
                                    </div>
                                    <div className="footerNavBar">
                                        {
                                            showText
                                        }
                                    </div>
                                </div>
                                <div className="footerNavLink">
                                    <div className="footerText">
                                        <p>Есть информация про грант / инвестицию, пришлите на
                                            почту <span>prof4dev@gmail.com</span></p>
                                    </div>
                                    <div className="footerTel">
                                        <p>+996 700 123-456</p>
                                    </div>
                                    <div className="footerSocial">
                                        <FontAwesomeIcon className="footerSocialIcon" icon={faFacebookF}/>
                                        <FontAwesomeIcon className="footerSocialIcon" icon={faTwitter}/>
                                        <FontAwesomeIcon className="footerSocialIcon" icon={faVk}/>
                                        <FontAwesomeIcon className="footerSocialIcon" icon={faTelegramPlane}/>
                                    </div>
                                </div>
                            </div>
                            <div className="footerBottom">
                                <div className="footerTextSecurity">
                                    <p>Все права защищены.</p>
                                    <p>Политика конфидициальности.</p>
                                </div>
                                <div className="footerButtonLang">
                                    <select size="1">
                                        <option value="Russian">Русский</option>
                                        <option value="English">English</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Footer;