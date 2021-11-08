import React from 'react';
import './Page.css';
//Layout imports
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import ProjectMain from './ProjectMain.jsx';
//Component Imports
import LocalClock from './LocalClock.jsx';
import ImageScroller from './ImageScroller.jsx';
//Asset Imports
import img0 from './Assets/images/img0.jpg';
import img1 from './Assets/images/img1.jpg';
import img2 from './Assets/images/img2.jpg';
import img3 from './Assets/images/img3.jpg';
import img4 from './Assets/images/img4.jpg';
import img5 from './Assets/images/img5.jpg';
import img6 from './Assets/images/img6.jpg';
import siteImg from './Assets/images/siteImg.png';
import allyWardenImg from './Assets/gameAssets/warden.png';
import allyWarriorImg from './Assets/gameAssets/warrior.png';
import enemySkeletonImg from './Assets/gameAssets/skeleton.png';
import enemyCultistImg from './Assets/gameAssets/cultist.png';
import playerArcaneMageImg from './Assets/gameAssets/pArcaneMage.png';
//import cubicVoiceAIDemoVideo from './Assets/demoVideos/demoVideo.mp4';

/*This react component displays a page based on the prop pageType, which specifies which page of the website is to be displayed*/
export default class Page extends React.Component {
    /*
    Props:
        pageType: The type of page to be displayed (e.g. 'home')
    States:
        pageType: Maintains the pageType and manages page changes
    */
    constructor(props) {
        super(props);
        this.state = {pageType: this.props.pageType, orientation: 'portrait'};
        this.changePageType = this.changePageType.bind(this);
    }

    /*
    render() adjusts styles based on the page being displayed and renders the page accordingly
    Parameters:
        None; Uses the pageType prop to indicate which page should be displayed
    Returns:
        Content; renders the content to the DOM within the web browser
    */
    render() {
        //Initializes the Sidebar content; any additions/changes to the Sidebar should happen here
        var sidebarContent = [
            <a href = "#home" onClick = {() => this.changePageType('home')}><h3 title = "Return to home page">Home</h3></a>,
            <a href = "https://www.linkedin.com/in/miles-maloney-0783051b9/" target = "_blank" rel = "noreferrer" title = "View Miles's LinkedIn profile">LinkedIn</a>,
            <a href = "https://github.com/milesmaloney" target = "_blank" rel = "noreferrer" title = "View Miles's Github profile">Github</a>,
            <a href = "#projects" onClick = {() => this.changePageType('projects')}><h3 title = "Learn about Miles's projects">Projects</h3></a>,
            <a href = "#aboutme" onClick = {() => this.changePageType('about me')}><h3 title = "Learn about Miles's background">About Me</h3></a>
        ];
        //Renders the content for the home page
        if(this.state.pageType === 'home') {
            return this.props.mobile ? this.getHomePage(sidebarContent, true) : this.getHomePage(sidebarContent);
        }
        //Renders the content for the about me page
        else if(this.state.pageType === 'about me') {
            return this.props.mobile ? this.getAboutMePage(sidebarContent, true) : this.getAboutMePage(sidebarContent);
        }
        //Renders the content for the projects page
        else if(this.state.pageType === 'projects') {
            return this.props.mobile ? this.getProjectsPage(sidebarContent, true) : this.getProjectsPage(sidebarContent);
        }
    }

    componentDidMount() {
        window.addEventListener('orientationchange', this.setOrientation());
    }


    getHomePage(sidebarContent, mobile = false) {
        //Initializes the array of image links for the image scroller to iterate through
        var images = [img0,img1,img2,img3,img4,img5];
        var mainStyle = {};
        var headerStyle = {left: '0%', top: '0%', width: '100%', height: '10%'};
        if(this.props.mobile) {
            mainStyle = {left: '0%', top: '10%', width: '100%', height: '80%'};
            return (
                <div id = "page">
                    <Header divs = {[1,1,0]} content = {[<LocalClock fontSize = '3vw'/>, <h1 onClick = {() => this.changePageType('about me')}>Miles Maloney</h1>]} style = {headerStyle}/>
                    <div id = "main" style = {mainStyle}>
                        <ImageScroller shuffle = {0} images = {images} bgSrc = {'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                    </div>
                    <Footer divs = {[0,0,1]} content = {[sidebarContent]}/>
                </div>
            )
        }
        else {
            mainStyle = {left: '20%', top: '10%', width: '80%', height: '90%'};
            var sidebarStyle = {left: '0%', top: '10%', width: '20%', height: '90%', borderRight: '5px groove rgba(0,0,0,1)'};
            return (
                <div id = "page">
                    <Header divs = {[1,1,0]} content = {[<LocalClock fontSize = '3vw'/>, <h1 style = {{fontSize: '6vw'}} onClick = {() => this.changePageType('about me')}>Miles Maloney</h1>]} style = {headerStyle}/>
                    <Sidebar content = {sidebarContent} style = {sidebarStyle}/>
                    <div id = "main" style = {mainStyle}>
                        <ImageScroller shuffle = {0} images = {images} bgSrc = {'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                    </div>
                </div>
            );
        }
    }


    getAboutMePage(sidebarContent, mobile = false) {
        var mainStyle = {left: '20%', top: '10%', height: '90%', width: '80%', backgroundImage: 'url(https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260})', backgroundSize: 'cover', backgroundPosition: 'center'};
        var sidebarStyle = {left: '0%', top: '10%', width: '20%', height: '90%'};
        var headerStyle = {left: '0%', top: '0%', width: '100%', height: '10%'};
        //Initializes the content for the about me section; any additions/changes to the About Me page should happen here
        var aboutMeContent = [
            <p>{'\t'}Hello! My name is Miles Maloney, and I am a recent graduate (May 2021) of the B.S. Computer Science program at University of San Diego with a major in Computer Science and a minor in Theatre Arts. This website is a hub for you to find everything you might want to learn about my background as a software engineer. You can click the embedded links or the links in the sidebar to view my {<a href = "https://www.linkedin.com/in/miles-maloney-0783051b9/" target = "_blank" rel = "noreferrer" title = "View Miles's LinkedIn profile">LinkedIn</a>} and {<a href = "https://github.com/milesmaloney" target = "_blank" rel = "noreferrer" title = "View Miles's Github profile">Github</a>} profiles as well as visit the {<a href = "#projects" onClick = {() => this.changePageType('projects')} title = "Learn about Miles's projects">projects</a>} page to check out some of the projects I have worked on. I hope you have a nice day!</p>
        ];
        var headerRightContent = [
            <div id = "images">
                <div style = {{right: '0%', width: '35%', backgroundImage: `url(${img6})`, backgroundSize: 'cover'}}></div>
                <div style = {{right: '35%', width: '25%', backgroundImage: 'url(https://www.sandiego.edu/assets/global/images/logos/usd-logo-stacked-inverse.png)', backgroundSize: 'contain'}}></div>
            </div>
        ];
        return (
            <div id = "page">
                <Header divs = {[1,1,1]} content = {[<LocalClock fontSize = '3vw'/>, <h1 style = {{fontSize: '5.5vw'}} onClick = {() => this.changePageType('about me')}>Miles Maloney</h1>, headerRightContent[0]]} style = {headerStyle}/>
                <Sidebar content = {sidebarContent} style = {sidebarStyle}/>
                <div id = "main" style = {mainStyle}>
                    <div id = "aboutMe">
                        {aboutMeContent}
                    </div>
                </div>
            </div>
        );
    }


    getProjectsPage(sidebarContent, mobile = false) {
        var mainStyle = {left: '20%', top: '0%', width: '80%', height: '100%', backgroundImage: 'url(https://prod-discovery.edx-cdn.org/media/programs/card_images/e0de6882-c5d1-43f3-99e0-17e386489dca-9c3bda2df48f.jpg)', backgroundSize: 'cover', backgroundPosition: 'left'};
        var sidebarStyle = {left: '0%', top: '0%', width: '20%', height: '100%', outline: '2px groove rgba(128, 0, 256, 0.75)'};
        //Initializes the project list entries; any additions/changes to ProjectMain should happen here
        var projectList = [
            {title: 'Cubic Voice AI', srcLink: 'https://github.com/milesmaloney/virtual-ticket-agent', demo: <iframe width="100%" height="98%" src="https://www.youtube.com/embed/_1iAEM2Z0rE" title="Cubic Voice AI Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, imgLinks: ['https://mycroft.ai/wp-content/uploads/2018/01/Mycroft-Logo-Square-Web-thumb.png', 'https://www.sandiego.edu/assets/global/images/logos/usd-logo-stacked-inverse.png', 'https://www.servicenow.com/content/dam/servicenow/images/customers-asset/details/logo/logo-cubic-transportation.png.imgw.720.720.jpg'], description: '\tIn this industry-sponsored project, three fellow students from University of San Diego and I created a conversational ticket agent using natural language processing engine Mycroft AI. This virtual ticket agent was built in Python on Raspberry Pi hardware, and used SQLite3 for database purposes. It has the functionalities of creating an account, buying a pass, routing you to your destination via transit, and checking your account balance.'},
            {title: 'Turn-based Game', srcLink: 'https://github.com/milesmaloney/Game-Builder', demo: <h1>{'\t'}The demo for this project is currently unavailable due to an in-progress conversion from a command line interface to a React.js interface. In the meantime, you can run this project through the command line by following the instructions in the <a href = 'https://github.com/milesmaloney/Game-Builder' target = "_blank" rel = "noreferrer">source code repository</a>'s README file.</h1> , imgLinks: [allyWardenImg, allyWarriorImg, playerArcaneMageImg, enemySkeletonImg, enemyCultistImg], description: '\tIn this javascript project, I decided to create a game in order to further develop my programming skills and learn more about javascript. This turn-based game allows a user to select a name and class and battle alongside AI allies against AI enemies. I plan to include a demo when I am finished making the game compatible with React. In the meantime, you may view the source code by clicking the title and run the game from the command line if you\'d like.'},
            {title: 'React Portfolio Website', srcLink: 'https://github.com/milesmaloney/React-Website', demo: <h1>{'\t'}You are currently browsing the React Portfolio Website project. To view its functionalities in more detail, you can explore the website and see what happens when you click or hover on each and every part of the site.</h1>, imgLinks: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png', siteImg] , description: '\tI created this React website in response to the surprising amount of demand for web developers in the current job market. I found that this project was very helpful in understanding front-end technologies and the challenges that come with them, as well as the surprising convenience of many features of React. You are currently viewing this exact website, which was built from scratch using React.js.'},
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

    /*
    changePageType() handles transitions between pages (e.g. moving from home page to about me page)
    Parameters:
        newState: The state to be transitioned to
    Returns:
        None; changes the state.pageType value to the pageType specified by newState
    */
    changePageType(newState) {
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

    setOrientation() {
        window.matchMedia("(orientation: portrait)").matches ? this.setState({orientation: 'portrait'}) : this.setState({orientation: 'landscape'});
    }
}