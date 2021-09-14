import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        /*Header contains a left div*/
        if(this.props.divs[0]) {
            /*Header contains a left and middle div*/
            if(this.props.divs[1]) {
                /*Header contains a left, middle, and right div*/
                if(this.props.divs[2]) {
                    var leftStyle = {left: '0%', width: '33%', height: '100%', position: 'absolute'};
                    var midStyle = {left: '33%', width: '34%', height: '100%', position: 'absolute'};
                    var rightStyle = {left: '67%', width: '33%', height: '100%', position: 'absolute'};
                    return (
                        <div id = "header" style = {this.props.style}>
                            <div id = "headerLeft" style = {leftStyle}>
                                {this.props.content[0]}
                            </div>
                            <div id = "headerMid" style = {midStyle}>
                                {this.props.content[1]}
                            </div>
                            <div id = "headerRight" style = {rightStyle}>
                                {this.props.content[2]}
                            </div>
                        </div>
                    );
                }
                /*Header contains only a left and middle div (left corner and single mid-right section)*/
                else {
                    var leftStyle = {left: '0%', width: '33%', height: '100%', position: 'absolute'}
                    var midStyle = {left: '33%', width: '67%', height: '100%', position: 'absolute'}
                    return (
                        <div id = "header" style = {this.props.style}>
                            <div id = "headerLeft" style = {leftStyle}>
                                {this.props.content[0]}
                            </div>
                            <div id = "headerMid" style = {midStyle}>
                                {this.props.content[1]}
                            </div>
                        </div>
                    );
                }
            }
            /*Header contains only a left and right div (header divided between the two divs)*/
            else if(this.props.divs[2]) {
                var leftStyle = {left: '0%', width: '50%', height: '100%', position: 'absolute'};
                var rightStyle = {left: '50%', width: '50%', height: '100%', position: 'absolute'};
                return (
                    <div id = "header" style = {this.props.style}>
                        <div id = "headerLeft" style = {leftStyle}>
                            {this.props.content[0]}
                        </div>
                        <div id = "headerRight" style = {rightStyle}>
                            {this.props.content[1]}
                        </div>
                    </div>
                );
            }
            
            /*Else header contains only a left div (This is handled by the base case. One div will span the entire header regardless) */

        }
        /*Header contains a middle div. Header does not contain a left div*/
        else if(this.props.divs[1]) {
            /*Header contains only a middle and right div (right corner and single left-mid section)*/
            if(this.props.divs[2]) {
                var midStyle = {left: '0%', width: '67%', height: '100%', position: 'absolute'}
                var rightStyle = {left: '67%', width: '33%', height: '100%', position: 'absolute'}
                return (
                    <div id = "header" style = {this.props.style}>
                        <div id = "headerMid" style = {midStyle}>
                            {this.props.content[0]}
                        </div>
                        <div id = "headerRight" style = {rightStyle}>
                            {this.props.content[1]}
                        </div>
                    </div>
                );
            }
            /*Else header contains only a middle div (This is handled by the base case) */
        }

        /*Else header contains only a right div (This is handled by the base case) */
    
        /*Base Case: Either no extra divs or only one (Would span the entire header) */
        else {
            return (
                <div id = "header" style = {this.props.style}>
                    {this.props.content[0]}
                </div>
            );
        }
    }
}
