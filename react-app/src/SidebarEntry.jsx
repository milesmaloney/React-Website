import React from 'react';
import './SidebarEntry.css';

export default class SidebarEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id = "sidebarEntry">
                {this.props.content}
            </div>
        )
    }
}