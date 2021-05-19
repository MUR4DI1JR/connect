import React, {Component} from 'react';
import Heading from "./Heading/Heading";
import Ads from "./ads/ads";
import Invests from "./Invests/invests";
import Event from "./Events/Event";
import Forum from "./forum/forum";
import Blog from "./blog/blog";
import Ask from "./ask/ask";

class MainPage extends Component {
    render() {
        return (
            <div>
                <Heading/>
                <Ads/>
                <Invests/>
                <Event/>
                <Forum/>
                <Blog/>
                <Ask/>
            </div>
        );
    }
}

export default MainPage;