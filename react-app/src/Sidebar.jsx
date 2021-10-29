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
        this.bgImages = [{src: 'https://nineplanets.org/wp-content/uploads/2019/09/earth.png', height: 50, width: 50}, {src: 'https://nineplanets.org/wp-content/uploads/2019/09/mars.png', height: 30, width: 30}, {src: 'https://nineplanets.org/wp-content/uploads/2019/09/jupiter.png', height: 80, width: 80}, {src: 'https://nineplanets.org/wp-content/uploads/2019/09/saturn.png', height: 70, width: 70}, {src: 'https://nineplanets.org/wp-content/uploads/2019/09/uranus.png', height: 60, width: 60}];
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
            listElements.push(<li key = {i} style = {currStyle}><SidebarEntry content = {this.props.content[i]} bgStyle = {{top: `${Math.floor(Math.random() * (100 - this.bgImages[i].height))}%`, left: `${Math.floor(Math.random() * (100 - this.bgImages[i].width))}%`, height: `${String(this.bgImages[i].height)}%`, width: `${String(this.bgImages[i].width)}%`, backgroundImage: `url(${this.bgImages[i].src})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'absolute'}}/></li>);
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
