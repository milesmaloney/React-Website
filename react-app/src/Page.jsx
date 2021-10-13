import React from 'react';
import './Page.css';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import LocalClock from './LocalClock.jsx';
import ImageScroller from './ImageScroller.jsx';
import ProjectMain from './ProjectMain.jsx';


export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pageType: this.props.pageType};
        this.changeState = this.changeState.bind(this);
    }
    render() {
        var mainStyle = {};
        var sidebarStyle = {};
        var headerStyle = {};
        var sidebarContent = [
            <a href = "#home"><h3 onClick = {() => this.changeState('home')}>Home</h3></a>,
            <a href = "https://www.linkedin.com/in/miles-maloney-0783051b9/" target = "_blank" rel = "noreferrer">LinkedIn</a>,
            <a href = "https://github.com/milesmaloney" target = "_blank" rel = "noreferrer">Github</a>,
            <a href = "#projects"><h3 onClick = {() => this.changeState('projects')}>Projects</h3></a>,
            <a href = "#aboutme"><h3 onClick = {() => this.changeState('about me')}>About Me</h3></a>
        ];
        if(this.state.pageType === 'home') {
            mainStyle = {left: '20%', top: '10%', width: '80%', height: '90%'};
            sidebarStyle = {left: '0%', top: '10%', width: '20%', height: '90%'};
            headerStyle = {left: '0%', top: '0%', width: '100%', height: '10%'};
            return (
                <div id = "page">
                    <Header divs = {[1,1,0]} content = {[<LocalClock/>, <h1>Miles Maloney</h1>]} style = {headerStyle}/>
                    <Sidebar content = {sidebarContent} style = {sidebarStyle}/>
                    <div id = "main" style = {mainStyle}>
                        <ImageScroller/>
                    </div>
                </div>
            );
        }
        else if(this.state.pageType === 'about me') {
            mainStyle = {left: '20%', top: '0%', height: '100%', width: '80%', backgroundImage: 'url(https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260})', backgroundSize: 'cover', backgroundPosition: 'center'};
            sidebarStyle = {left: '0%', top: '0%', width: '20%', height: '100%'};
            return (
                <div id = "page">
                    <Sidebar content = {sidebarContent} style = {sidebarStyle}/>
                    <div id = "main" style = {mainStyle}>
                        <p>Hello! My name is Miles Maloney, and I am a recent graduate of the B.S. Computer Science program at University of San Diego. I have a Bachelor's Degree with a major in Computer Science and a Minor in Theatre Arts. This website is a hub for you to find everything you might want to learn about my background as a software engineer. You can click the links on the left to view my LinkedIn and Github profiles as well as go back to the home page or visit the projects page to check out some of the projects I have worked on. I hope you have a nice day!</p>
                    </div>
                </div>
            );
        }
        else if(this.state.pageType === 'projects') {
            mainStyle = {left: '20%', top: '0%', width: '80%', height: '100%', backgroundImage: 'url(https://prod-discovery.edx-cdn.org/media/programs/card_images/e0de6882-c5d1-43f3-99e0-17e386489dca-9c3bda2df48f.jpg)', backgroundSize: 'cover', backgroundPosition: 'left'};
            sidebarStyle = {left: '0%', top: '0%', width: '20%', height: '100%'};
            var projectList = [
                {title: 'Cubic Voice AI', srcLink: 'https://github.com/milesmaloney/virtual-ticket-agent', description: 'In this industry-sponsored project, three fellow students from University of San Diego and I created a conversational ticket agent using natural language processing engine Mycroft AI. This virtual ticket agent was built in Python on Raspberry Pi hardware, and used SQLite3 for database purposes. It has the functionalities of creating an account, buying a pass, routing you to your destination via transit, and checking your account balance.'},
                {title: 'Turn-based Game', srcLink: 'https://github.com/milesmaloney/Game-Builder', description: 'In this javascript project, I decided to create a game in order to develop my skills and learn more about javascript. This turn-based game allows a user to select a name and class and battle alongside AI allies against AI enemies. I plan to include a demo when I am finished making the game compatible with React.'},
                {title: 'React Website', srcLink: 'https://github.com/milesmaloney/React-Website', description: 'I created this React Website in response to the surprising amount of demand for web developers in the current job market. I found that this project was very helpful in understanding front-end technologies and the challenges that come with it, as well as the surprising convenience of many features of React. You are currently viewing this exact website, which was built from scratch in React.js.'},
            ];
            return (
                <div id = "page">
                    <Sidebar content = {sidebarContent} style = {sidebarStyle}/>
                    <div id = "main" style = {mainStyle}>
                        <ProjectMain listEntries = {projectList}/>
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
            case 'projects':
                this.setState({pageType: 'projects'});
                break;
            default:
                break;
        }
    }
}