import React, {Component} from 'react';
import Heading from "./Heading/Heading";
import Ads from "./ads/ads";
import Invests from "./Invests/invests";
import Event from "./Events/Event";
import Forum from "./forum/forum";
import Blog from "./blog/blog";
import Ask from "./ask/ask";
import {withRouter} from "react-router";
import {connect} from "react-redux";

class MainPage extends Component {

    render() {
        return (
            <div>
                <Heading/>
                <Ads/>
                <Invests button={true} filteredItem={this.props.invests}/>
                <Event/>
                <Forum/>
                <Blog/>
                <Ask/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    invests: state.slice.invests,
});

export default withRouter(connect(mapStateToProps)(MainPage));