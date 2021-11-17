import React from 'react';
import SidebarEntry from './SidebarEntry';
import './Sidebar.css';

/*The Sidebar react component displays the necessary styling and creates SidebarEntry objects to be displayed within it*/
export default class Sidebar extends React.Component {
    /*
    Props:
        Content: An array of content to be displayed in each SidebarEntry in format {title, srcLink, description}
    States:
        None; This react component does not change dynamically, and uses the content prop passed to it to indicate content and 
        algrebraically decides formatting based on the length of the content prop
    Values:
        bgImages: An array of image objects containing a src url as well as height and width in order to size planets appropriately
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
        Content: renders the content to the DOM within the web browser
    */
    render() {
        var listElements = [];
        //Defines the height of each sidebar entry
        var pcntPerElement = 100 / this.props.content.length;
        //Gives a style to each element in such a way that each prop has an equal amount of space within the sidebar & the sidebar gets covered
        for(var i = 0; i < this.props.content.length; i++) {
            var currStyle = {top: `${(0 + (pcntPerElement * i))}%`, left: '0%', height: `${pcntPerElement}%`, width: '100%', position: 'absolute'};
            //Creates a list element with a sidebarEntry with bgImage = (i + 3)rd planet and bgStyle = a random position within the sidebarEntry
            listElements.push(<li key = {i} style = {currStyle}><SidebarEntry content = {this.props.content[i]} bgStyle = {{top: `${Math.floor(Math.random() * (100 - this.bgImages[i].height))}%`, left: `${Math.floor(Math.random() * (100 - this.bgImages[i].width))}%`, height: `${this.bgImages[i].height}%`, width: `${this.bgImages[i].width}%`, backgroundImage: `url(${this.bgImages[i].src})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'absolute'}}/></li>);
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
