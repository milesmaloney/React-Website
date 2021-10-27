import React from 'react';
import ProjectEntry from './ProjectEntry.jsx';
import './ProjectMain.css';


/*This react component holds the necessary styling and props for the main section of the projects page*/
export default class ProjectMain extends React.Component {
    /*
    Props:
        List Entries:
            An array of list entries for the ProjectMain component to use to fill in ProjectEntry objects within the ProjectMain component
    States:
        None; This component uses the listEntries prop to determine format and content and does not change dynamically
    */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /*
    render() adjusts styles based on the page being displayed and renders the page accordingly
    Parameters:
        None; Uses the listEntries prop to indicate format and what should be displayed
    Returns:
        None; renders the content within the web browser
    */
    render() {
        var heightPerEntry =  50;
        var listEntries = [];
        //Populates listEntries with corresponding list elements with partitioned styles for each entry
        for(var i = 0; i < this.props.listEntries.length; i++) {
            var currStyle = {top: `${0 + (heightPerEntry * i)}%`, left: '0%', height: `${heightPerEntry}%`, width: '100%', position: 'absolute'};
            listEntries.push(<li key = {i}><ProjectEntry title = {this.props.listEntries[i].title} srcLink = {this.props.listEntries[i].srcLink} demo = {this.props.listEntries[i].demo} imgLinks = {this.props.listEntries[i].imgLinks} description = {this.props.listEntries[i].description} style = {currStyle} /></li>)
        }
        return (
            <div id = "projectMain">
                <a target = "_blank" href = "https://github.com/milesmaloney" rel = "noreferrer">
                    <div id = "ghicon" title = "Redirect to Github"></div>
                </a>
                <ul>
                    {listEntries}
                </ul>
            </div>
        )
    }
}