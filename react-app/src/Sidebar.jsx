import React from 'react';
import './Sidebar.css';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id = "sidebar" style = {this.props.style}>
                {this.props.content[0]}
            </div>
        );
    }
}
