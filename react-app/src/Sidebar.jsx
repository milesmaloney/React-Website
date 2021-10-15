import React from 'react';
import SidebarEntry from './SidebarEntry';
import './Sidebar.css';

/*The Sidebar react component displays the necessary styling and creates SidebarEntry objects to be displayed within it*/
export default class Sidebar extends React.Component {
    /*
    Props:
        Content:
            An array of content to be displayed in each SidebarEntry in format {title, srcLink, description}
    States:
        None; This react component does not change dynamically, and simply uses the content prop passed to it to indicate content and 
        algrebraically decides formatting based on the length of the content prop
    */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /*
    render() adjusts styles based on the page being displayed and renders the page accordingly
    Parameters:
        None; Uses the content prop to indicate what to display and the length of the prop to indicate styling
    Returns:
        None; renders the content within the web browser
    */
    render() {
        var listElements = [];
        var pcntPerElement = 100 / this.props.content.length;
        //Gives a style to each element in such a way that each prop has an equal amount of space within the sidebar & the sidebar gets covered
        for(var i = 0; i < this.props.content.length; i++) {
            var currStyle = {top: `${(0 + (pcntPerElement * i)).toString()}%`, left: '0%', height: `${pcntPerElement.toString()}%`, width: '100%', position: 'absolute'};
            listElements.push(<li style = {currStyle}><SidebarEntry content = {this.props.content[i]}/></li>);
        }
        return (
            <div id = "sidebar" style = {this.props.style}>
                <ul>
                    {listElements}
                </ul>
            </div>
        );
    }
}
