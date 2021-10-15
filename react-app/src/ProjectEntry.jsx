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
        this.state = {};
    }

    /*
    render() adjusts styles based on the page being displayed and renders the page accordingly
    Parameters:
        None; Uses the title, description, image, and demo props to decide what the format and content should look like
    Returns:
        None; renders the content within the web browser
    */
    render() {
        var imageStyle = {height: '0%', width: '0%'};
        var descriptionStyle = {height: '0%', width: '0%'};
        var demoStyle = {height: '0%', width: '0%'};
        var imageDiv = <div></div>;
        var demoDiv = <div></div>;
        if(this.props.image) {
            imageStyle = {top: '20%', left: '60%', width: '40%', backgroundImage: `url(${this.props.image})`, backgroundSize: 'cover',backgroundPosition: 'center'};
            imageDiv = <div id = "image" style = {imageStyle}></div>;
        }
        if(this.props.demo) {
            demoStyle = {bottom: '0%', height: '30%', width: '100%', left: '0%'};
            demoDiv = <div id = "demo" style = {demoStyle}>{this.props.demo}</div>;
        }
        //The description should use the remainder of the space;
        descriptionStyle = {top: '10%', left: '0%', width: (this.props.image ? '60%':'100%'), height: (this.props.demo ? '60%':'90%')};
        return (
            <div id = "projectEntry">
                <div id = "title">
                    <a href = {this.props.srcLink} target = "_blank" rel = "noreferrer"><h1>{this.props.title}</h1></a>
                </div>
                <div id = "description" style = {descriptionStyle}>
                    {imageDiv}
                    <h3>{this.props.description}</h3>
                </div>
                {demoDiv}
            </div>
        )
    }
}