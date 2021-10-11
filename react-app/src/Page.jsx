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
            var mainStyle = {left: '20%', top: '10%', width: '80%', height: '90%'};
            var sidebarStyle = {left: '0%', top: '10%', width: '20%', height: '90%'};
            var headerStyle = {left: '0%', top: '0%', width: '100%', height: '10%'};
            return (
                <div id = "page">
                    <Header divs = {[1,1,0]} content = {[<LocalClock/>, <h1>Miles Maloney</h1>]} style = {headerStyle}/>
                    <Sidebar content = {[
                        <h3 onClick = {() => this.changeState('home')}><a href = "#">Home</a></h3>,
                        <a href = "https://www.linkedin.com/in/miles-maloney-0783051b9/">LinkedIn</a>,
                        <a href = "https://github.com/milesmaloney">Github</a>,
                        <h3 onClick = {() => this.changeState('projects')}><a href = "#">Projects</a></h3>,
                        <h3 onClick = {() => this.changeState('about me')}><a href = "#">About Me</a></h3>
                    ]} style = {sidebarStyle}/>
                    <div id = "main" style = {mainStyle}>
                        <ImageScroller/>
                    </div>
                </div>
            );
        }
        else if(this.state.pageType === 'about me') {
            var mainStyle = {left: '20%', top: '0%', width: '80%', height: '100%'};
            var sidebarStyle = {left: '0%', top: '0%', width: '20%', height: '100%'};
            return (
                <div id = "page">
                    <Sidebar content = {[
                        <h3 onClick = {() => this.changeState('home')}><a href = "#">Home</a></h3>,
                        <a href = "https://www.linkedin.com/in/miles-maloney-0783051b9/">LinkedIn</a>,
                        <a href = "https://github.com/milesmaloney">Github</a>,
                        <h3 onClick = {() => this.changeState('projects')}><a href = "#">Projects</a></h3>,
                        <h3 onClick = {() => this.changeState('about me')}><a href = "#">About Me</a></h3>
                    ]} style = {sidebarStyle}/>
                    <div id = "main" style = {mainStyle}>
                        <p>Hello! My name is Miles Maloney, and I am a recent graduate of the B.S. Computer Science program at University of San Diego. I have a Bachelor's Degree with a major in Computer Science and a Minor in Theatre Arts. This website is a hub for you to find everything you might want to learn about my background as a software engineer. You can click the links on the left to view my LinkedIn and Github profiles as well as go back to the home page or visit the projects page to check out some of the projects I have worked on. I hope you have a nice day!</p>
                    </div>
                </div>
            );
        }
        else if(this.state.pageType === 'projects') {
            var mainStyle = {left: '20%', top: '0%', width: '80%', height: '100%'};
            var sidebarStyle = {left: '0%', top: '0%', width: '20%', height: '100%'};
            return (
                <div id = "page">
                    <Sidebar content = {[
                        <h3 onClick = {() => this.changeState('home')}><a href = "#">Home</a></h3>,
                        <a href = "https://www.linkedin.com/in/miles-maloney-0783051b9/">LinkedIn</a>,
                        <a href = "https://github.com/milesmaloney">Github</a>,
                        <h3 onClick = {() => this.changeState('projects')}><a href = "#">Projects</a></h3>,
                        <h3 onClick = {() => this.changeState('about me')}><a href = "#">About Me</a></h3>
                    ]} style = {sidebarStyle}/>
                    <div id = "main" style = {mainStyle}>
                        <p>This page has not yet been implemented.</p>
                    </div>
                </div>
            )
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
            case 'projects':
                this.setState({pageType: 'projects'});
                break;
            default:
                break;
        }
    }
}