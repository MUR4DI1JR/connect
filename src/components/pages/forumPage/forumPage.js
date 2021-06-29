import React, {Component} from 'react';
import Search from "../../UI/search/search";
import {connect} from "react-redux";

import logo from '../../../Images/logo.png';
import './forumPage.css';

class ForumPage extends Component {

    state={
        active: -1
    };

    render() {

        const filteredItems = this.props.forums.filter(items =>{
            return items.title.toLowerCase().includes(this.props.value.toLowerCase());
        });

        return (
            <div className='forumPage'>
                <Search title='Форум' item={this.props.forums} investTitle={false}/>
                <div className="forumPageContainer">
                    <div className="forumPageContent">
                        {
                            filteredItems.map((item, i) =>{
                                return(
                                    <div className='forumPageItem' key={i}>
                                        <div className="forumPageLogo" onClick={() => this.setState({active: i})}>
                                            <img src={logo} alt="logo"/>
                                            <div className="forumPageText">
                                                <h1>{item.title}</h1>
                                                <div className="forumPageInfo">
                                                    <p>Темы:<span>{new Intl.NumberFormat('de-DE').format(item.theme)}</span></p>
                                                    <p>Сообщении:<span>{new Intl.NumberFormat('de-DE').format(item.message)}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={this.state.active === i ? "forumPageAnswer".concat(' forumShow') : "forumPageAnswer"}>
                                            <ul>
                                                {item.forum.map((item, i)=>(
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    forums: state.slice.items.forums,
    forum: state.slice.items.forums.forum,
    value: state.slice.searchValue
});

export default connect(mapStateToProps)(ForumPage);