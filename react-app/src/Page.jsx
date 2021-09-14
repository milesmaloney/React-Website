import React from 'react';
import './Page.css';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import LocalClock from './LocalClock.jsx';
import ImageScroller from './ImageScroller.jsx';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        /*Header exists*/
        if(this.props.contentType[0]) {
            /*Sidebar and Header exist*/
            if(this.props.contentType[1]) {
                /*Sidebar, header, and footer exist*/
                if(this.props.contentType[2]) {
                    return (
                        <div id = "page">
                            <Header divs = {[1, 1, 1]} content = {[<ImageScroller />, <h1>Hey there!</h1>, <ImageScroller/>]}/>
                            <Sidebar content = {[(
                            <ul>
                                <li><a href = "https://www.linkedin.com/in/miles-maloney-0783051b9/">LinkedIn</a></li>
                                <li><a href = "https://github.com/milesmaloney">Github</a></li>
                                <li>About Me</li>
                            </ul>
                            )]}/>
                            <div id = "main">
                                <ImageScroller />
                            </div>
                            <Footer divs = {[1, 1, 1]} content = {[<LocalClock/>, <h1>Hi there! It's me! The middle content!</h1>, <ImageScroller/>]}/>
                        </div>
                    );
                }
                /*Header and sidebar exist, no footer*/
                else {
                    var mainStyle = {top: '15%', left: '15%', height: '85%', width: '85%'};
                    var headerStyle = {top: '0%', left: '0%', height: '15%', width: '100%'};
                    var sidebarStyle = {top: '15%', left: '0%', height: '85%', width: '15%'};
                    return (
                        <div id = "page">
                            <Header divs = {[1, 1, 1]} content = {[<ImageScroller />, <h1>Yo what up G? It's me! Middle guy!</h1>, <ImageScroller/>]} style = {headerStyle}/>
                            <Sidebar content = {[(
                            <ul>
                                <li><a href = "https://www.linkedin.com/in/miles-maloney-0783051b9/">LinkedIn</a></li>
                                <li><a href = "https://github.com/milesmaloney">Github</a></li>
                                <li>About Me</li>
                            </ul>
                            )]} style = {sidebarStyle}/>
                            <div id = "main" style = {mainStyle}>
                                <ImageScroller />
                            </div>
                        </div>
                    )
                }
            }
            /*Header and footer exist, no sidebar*/
            else if(this.props.contentType[2]) {
                var mainStyle = {top: '15%', left: '0%', height: '75%', width: '100%'};
                var headerStyle = {top: '0%', left: '0%', height: '15%', width: '100%'};
                var footerStyle = {bottom: '-10%', left: '0%', height: '20%', width: '100%'};
                return (
                    <div id = "page">
                        <Header divs = {[1, 1, 1]} content = {[<ImageScroller />, <h1>Yo what up G? It's me! Middle guy!</h1>, <ImageScroller/>]} style = {headerStyle}/>
                        <div id = "main" style = {mainStyle}>
                            <ImageScroller />
                        </div>
                        <Footer divs = {[1, 1, 1]} content = {[<LocalClock/>, <h1>Hi there! It's me! The middle content!</h1>, <ImageScroller/>]} style = {footerStyle}/>
                    </div>
                );
            }
            /*Only header exists*/
            else {
                var mainStyle = {top: '15%', left: '0%', height: '85%', width: '100%'};
                var headerStyle = {top: '0%', left: '0%', height: '15%', width: '100%'};
                return (
                    <div id = "page">
                        <Header divs = {[1 , 1, 1]} content = {[<ImageScroller />, <h1>It's me! Middle guy!</h1>, <ImageScroller/>]} style = {headerStyle}/>
                        <div id = "main" style = {mainStyle}>
                            <ImageScroller />
                        </div>
                    </div>
                );
            }
        }
        /*Sidebar exists, no header*/
        else if(this.props.contentType[1]) {
            /*Sidebar and footer exist, no header*/
            if(this.props.contentType[2]) {
                var mainStyle = {top: '0%', left: '15%', height: '90%', width: '85%'};
                var sidebarStyle = {top: '0%', left: '0%', height: '100%', width: '15%'};
                var footerStyle = {bottom: '-10%', left: '15%', height: '20%', width: '85%'};
                return (
                    <div id = "page">
                        <Sidebar content = {[(
                            <ul>
                                <li><a href = "https://www.linkedin.com/in/miles-maloney-0783051b9/">LinkedIn</a></li>
                                <li><a href = "https://github.com/milesmaloney">Github</a></li>
                                <li>About Me</li>
                            </ul>
                            )]} style = {sidebarStyle}/>
                        <div id = "main" style = {mainStyle}>
                            <ImageScroller />
                        </div>
                        <Footer divs = {[1, 1, 1]} content = {[<LocalClock/>, <h1>Hi there! It's me! The middle content!</h1>, <ImageScroller/>]} style = {footerStyle}/>
                    </div>
                );
            }
            /*Only sidebar exists*/
            else {
                var mainStyle = {left: '15%', top: '0%', width: '85%', height: '100%'};
                var sidebarStyle = {left: '0%', top: '0%', width: '15%', height: '100%'};
                return (
                    <div id = "page">
                        <Sidebar content = {[(
                            <ul>
                                <li><a href = "https://www.linkedin.com/in/miles-maloney-0783051b9/">LinkedIn</a></li>
                                <li><a href = "https://github.com/milesmaloney">Github</a></li>
                                <li>About Me</li>
                            </ul>
                            )]} style = {sidebarStyle}/>
                        <div id = "main" style = {mainStyle}>
                            <ImageScroller />
                        </div>
                    </div>
                );
            }
        }
        /*Only footer exists*/
        else if(this.props.contentType[2]) {
            var mainStyle = {left: '0%', top: '0%', height: '90%', width: '100%'};
            var footerStyle = {left: '0%', bottom: '-10%', height: '20%', width: '100%'};
            return (
                <div id = "page">
                    <div id = "main" style = {mainStyle}>
                        <ImageScroller />
                    </div>
                    <Footer divs = {[1, 1, 1]} content = {[<LocalClock/>, <h1>Hi there!</h1>, <ImageScroller/>]} style = {footerStyle}/>
                </div>
            );
        }
        /*No header, sidebar, or footer*/
        else {
            var mainStyle = {left: '0%', top: '0%', height: '100%', width: '100%'};
            return (
                <div id = "page">
                    <div id = "main" style = {mainStyle}>
                        <ImageScroller />
                    </div>
                </div>   
            );
        }
    }
}