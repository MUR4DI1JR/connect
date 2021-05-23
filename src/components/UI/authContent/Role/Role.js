import React, {Component} from 'react';
import { User} from "phosphor-react";

import './Role.css';

class Role extends Component {

    registerMsb = () =>{
        this.props.history.push('/register-msb')
    };

    registerCons = () =>{
        this.props.history.push('/register-cons-user')
    };

    render() {
        return (
            <div className="role">
                <div className="roleContainer">
                    <div className="roleTitle">
                        <h1>Выберите роль:</h1>
                    </div>
                    <div className="roleChooser">
                        <div className="roleMSB" onClick={this.registerMsb}>
                            <div className="roleIcon">
                                <User size={88}/>
                            </div>
                            <div className="roleInfo">
                                <div className="roleTitleText">
                                    <h1>Регистрация пользователя (МСБ):</h1>
                                </div>
                                <div className="roleText">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sem massa pretium quam venenatis lorem sagittis. </p>
                                </div>
                            </div>
                        </div>
                        <div className="roleCons" onClick={this.registerCons}>
                            <div className="roleIcon">
                                <User size={88}/>
                            </div>
                            <div className="roleInfo">
                                <div className="roleTitleText">
                                    <h1>Регистрация провайдера (консультант):</h1>
                                </div>
                                <div className="roleText">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie sem massa pretium quam venenatis lorem sagittis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="roleHelp">
                        <div className="roleHelpText">
                            <p>Подробную инструкцию о регистрации можно получить в разделе <span>Помощь</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Role;