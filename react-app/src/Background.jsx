import React from 'react';



export default class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var style = {backgroundImage: this.props.src, backgroundSize: 'cover'};
        return(
            <div id = "background" style={style}></div>
        );
    }
}