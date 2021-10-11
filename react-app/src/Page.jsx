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
        this.state = {pageType: this.props.pageType};
        this.changeState = this.changeState.bind(this);
    }
    render() {
        if(this.state.pageType === 'home') {
            var mainStyle = {left: '25%', top: '10%', width: '75%', height: '90%'};
            var sidebarStyle = {left: '0%', top: '10%', width: '25%', height: '90%'};
            var headerStyle = {left: '0%', top: '0%', width: '100%', height: '10%'};
            return (
                <div id = "page">
                    <Header divs = {[1,1,0]} content = {[<LocalClock/>, <h1>Miles Maloney</h1>]} style = {headerStyle}/>
                    <Sidebar content = {[
                        <a href = "https://www.linkedin.com/in/miles-maloney-0783051b9/">LinkedIn</a>,
                        <a href = "https://github.com/milesmaloney">Github</a>,
                        <h1 onClick = {() => this.changeState('about me')}>About Me</h1>
                    ]} style = {sidebarStyle}/>
                    <div id = "main" style = {mainStyle}>
                        <ImageScroller/>
                    </div>
                </div>
            );
        }
        else if(this.state.pageType === 'about me') {
            var mainStyle = {left: '15%', top: '0%', width: '85%', height: '100%'};
            var sidebarStyle = {left: '0%', top: '0%', width: '15%', height: '100%'};
            return (
                <div id = "page">
                    <Sidebar content = {[
                        <h1 onClick = {() => this.changeState('home')}>Home</h1>,
                        <a href = "https://www.linkedin.com/in/miles-maloney-0783051b9/">LinkedIn</a>,
                        <a href = "https://github.com/milesmaloney">Github</a>
                    ]} style = {sidebarStyle}/>
                    <div id = "main" style = {mainStyle}>
                        <h1>Hello! My name is Miles Maloney, and I am a recent graduate of the B.S. Computer Science program at University of San Diego. This website is a hub for you to find everything you might want to learn about my background as a software engineer.</h1>
                    </div>
                </div>
            );
        }
    }
    changeState(newState) {
        console.log("Statechange!");
        switch(newState) {
            case 'home':
                this.setState({pageType: 'home'});
                break;
            case 'about me':
                this.setState({pageType: 'about me'});
                break;
        }
    }
}