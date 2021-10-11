import React from 'react';
import SidebarEntry from './SidebarEntry';
import './Sidebar.css';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var listElements = [];
        var pcntPerElement = 100 / this.props.content.length;
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
