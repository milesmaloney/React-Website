import React from 'react';
import './SidebarEntry.css';

/*This react component holds the necessary styling for a SidebarEntry in the Sidebar component*/
export default class SidebarEntry extends React.Component {
    /*
    Props:
        Content: The content to be displayed in the SidebarEntry objects (formatted as an array of list objects)
    States:
        None; This react component does not change dynamically
    */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /*
    render() adjusts styles based on the page being displayed and renders the page accordingly
    Parameters:
        None; Uses the content prop to indicate what should be displayed
    Returns:
        Content: renders the content to the DOM within the web browser
    */
    render() {
        return (
            <div id = "sidebarEntry">
                <div id = "sidebarBackground" style = {this.props.bgStyle}></div>
                {this.props.content}
            </div>
        )
    }
}