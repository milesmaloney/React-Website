import React from 'react';
import './ProjectEntry.css';

/*This react component contains all necessary formatting and styling for a projectEntry in the projects page*/
export default class ProjectEntry extends React.Component {
    /*
    Props:
        Title:
            The title of the project
        srcLink:
            A link to the source code of the project (usually a github repo)
        Description:
            A brief description of the project
        Image:
            An optional image to be added to the project entry
        Demo:
            An optional demo to be added to the project entry
    States:
        None: This component uses props to decide the content of the project and formats based on what optional content is present
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
        None; renders the content within the web browser
    */
    render() {
        if(!this.state.demoMode) {
            var demoText = this.props.demo ? <h3>Click <a href = "#projects" rel = "noreferrer" onClick = {this.toggleDemoMode} title = {`View the demo for ${this.props.title}`}>here</a> to view a demo of the {this.props.title} project</h3> : null;
            var descriptionStyle = {top: '20%', left: '0%', height: `${this.props.demo ? '70' : '80'}%`, width: '100%'};
            var demoTextStyle = this.props.demo ? {bottom: '0%', left: '0%', height: '10%', width: '100%'} : {height: '0%', width: '0%'};
            var images = [];
            if(this.props.imgLinks) {
                var widthPerImage = 100 / this.props.imgLinks.length;
                for(var i = 0; i < this.props.imgLinks.length; i++) {
                    images.push(<div id = "image" style = {{left: `${0 + (widthPerImage * i)}%`, width: `${widthPerImage}%`, backgroundImage: `url(${this.props.imgLinks[i]})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>)
                }
            }
            //The description should use the remainder of the space;
            return (
                <div id = "projectEntry" style = {this.props.style}>
                    <div id = "images">
                        {images}
                    </div>
                    <div id = "title">
                        <h1 title = {`View source code for ${this.props.title}`}><a href = {this.props.srcLink} target = "_blank" rel = "noreferrer">{this.props.title}</a></h1>
                    </div>
                    <div id = "description" style = {descriptionStyle}>
                        <h3>{this.props.description}</h3>
                    </div>
                    <div id = "demoText" style = {demoTextStyle}>
                        {demoText}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id = "projectEntry" style = {this.props.style}>
                    <div id = "demoEntry">
                        <div id = "demo">
                            {this.props.demo}
                        </div>
                        <div id = "returnText">
                            <h3>Click <a href = "#projects" rel = "noreferrer" onClick = {this.toggleDemoMode} title = {`Return to the description for ${this.props.title}`}>here</a> to return to the description of {this.props.title}</h3>
                        </div>
                    </div>
                </div>
            )
        }
    }

    toggleDemoMode() {
        this.state.demoMode ? this.setState({demoMode: false}) : this.setState({demoMode: true});
    }
}