import React from 'react';
import './ProjectEntry.css';

/*This react component contains all necessary formatting and styling for a projectEntry in the projects page*/
export default class ProjectEntry extends React.Component {
    /*
    Props:
        Title: The title of the project
        srcLink: A link to the source code of the project (usually a github repo)
        Description: A brief description of the project
        Image: An optional image to be added to the project entry
        Demo: An optional demo to be added to the project entry
    States:
        demoMode: A boolean value denoting whether or not the ProjectEntry is in demo mode
    Functions:
        toggleDemoMode: This function will turn demoMode on/off by setting the demoMode state
    */
    constructor(props) {
        super(props);
        this.state = {demoMode: false};
        this.toggleDemoMode = this.toggleDemoMode.bind(this);
    }

    /*
    render() adjusts styles based on the page being displayed and renders the page accordingly
    Parameters:
        None; Uses the title, description, image, and demo props to decide what the format and content should look like
    Returns:
        Content; renders the content to the DOM within the web browser (ProjectEntry will either return a description screen or demo screen as denoted by the demoMode state value)
    */
    render() {
        //Rendering the description screen
        if(!this.state.demoMode) {
            //Checks if a demo was defined in the props, and creates a prompt to switch to demo mode (or doesn't) accordingly
            var demoText = this.props.demo ? <h3 style = {{fontSize: `${this.props.mobile ? `${this.props.orientation === 'portrait' ? '3vw' : '1vw'}` : '1.5vw'}`}}>Click <a href = "#projects" rel = "noreferrer" onClick = {this.toggleDemoMode} title = {`View the demo for ${this.props.title}`}>here</a> to view a demo of the {this.props.title} project</h3> : null;
            var descriptionStyle = {top: '20%', left: '0%', height: `${this.props.demo ? '70' : '80'}%`, width: '100%'};
            var demoTextStyle = this.props.demo ? {bottom: '0%', left: '0%', height: '10%', width: '100%'} : {height: '0%', width: '0%'};
            //Checks if images for the background of the project entry were defined, and creates their components (or doesn't) accordingly
            var images = [];
            if(this.props.imgLinks) {
                var widthPerImage = 100 / this.props.imgLinks.length;
                for(var i = 0; i < this.props.imgLinks.length; i++) {
                    images.push(<div id = "image" key = {i} style = {{left: `${0 + (widthPerImage * i)}%`, width: `${widthPerImage}%`, backgroundImage: `url(${this.props.imgLinks[i]})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>)
                }
            }
            return (
                <div id = "projectEntry" style = {this.props.style}>
                    <div id = "images">
                        {images}
                    </div>
                    <div id = "title">
                        <h1 title = {`View source code for ${this.props.title}`}><a style = {{fontSize: `${this.props.mobile ? `${this.props.orientation === 'portrait' ? '6vw' : '4vw'}` : '4vw'}`}} href = {this.props.srcLink} target = "_blank" rel = "noreferrer">{this.props.title}</a></h1>
                    </div>
                    <div id = "description" style = {descriptionStyle}>
                        <h3 style = {{fontSize: `${this.props.mobile ? `${this.props.orientation === 'portrait' ? '3.5vw' : '1vw'}` : '2vw'}`}}>{this.props.description}</h3>
                    </div>
                    <div id = "demoText" style = {demoTextStyle}>
                        {demoText}
                    </div>
                </div>
            )
        }
        //Rendering the demo screen
        else {
            return (
                <div id = "projectEntry" style = {this.props.style}>
                    <div id = "demoEntry">
                        <div id = "demo">
                            {this.props.demo}
                        </div>
                        <div id = "returnText">
                            <h3 style = {{fontSize: `${this.props.mobile ? `${this.props.orientation === 'portrait' ? '3vw' : '1vw'}` : '1.5vw'}`}}>Click <a href = "#projects" rel = "noreferrer" onClick = {this.toggleDemoMode} title = {`Return to the description for ${this.props.title}`}>here</a> to return to the description of {this.props.title}</h3>
                        </div>
                    </div>
                </div>
            )
        }
    }

    /*
    This function toggles the demo mode on/off for the ProjectEntry that calls it
    Parameters:
        None; uses demoMode state variable as parameter
    Returns:
        None; updates the demoMode state variable
    */
    toggleDemoMode() {
        this.state.demoMode ? this.setState({demoMode: false}) : this.setState({demoMode: true});
    }
}