import React from 'react';
import './ProjectEntry.css';

export default class ProjectEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

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