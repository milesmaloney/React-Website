import React from 'react';
import './Header.css';

/*This react componenet holds the different possible formats of a header and its relevant methods*/
export default class Header extends React.Component {
    /*
    Props:
        Divs: A boolean array representing the divs that are to be filled in the header (in format [leftDiv, middleDiv, rightDiv])
        Content: The content meant to fill the divs (in format [leftContent, midContent, rightContent], or simply left-to-right if not all divs are filled)
    States:
        None; This component only uses the props passed to it to determine its content, it does not change dynamically
    */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /*
    render() adjusts styles based on the page being displayed and renders the page accordingly
    Parameters:
        None; Uses the divs prop to indicate format and the content prop to indicate what should be displayed
    Returns:
        Content; renders the content to the DOM within the web browser
    */
    render() {
        //Initialize the style variables for the three possible divs
        var leftStyle = {};
        var midStyle = {};
        var rightStyle = {};
        /*Header contains a left div*/
        if(this.props.divs[0]) {
            /*Header contains a left and middle div*/
            if(this.props.divs[1]) {
                /*Header contains a left, middle, and right div*/
                if(this.props.divs[2]) {
                    leftStyle = {left: '0%', width: '33%', height: '100%', position: 'absolute'};
                    midStyle = {left: '33%', width: '34%', height: '100%', position: 'absolute'};
                    rightStyle = {left: '67%', width: '33%', height: '100%', position: 'absolute'};
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
                    leftStyle = {left: '0%', width: '33%', height: '100%', position: 'absolute'}
                    midStyle = {left: '33%', width: '67%', height: '100%', position: 'absolute'}
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
                leftStyle = {left: '0%', width: '50%', height: '100%', position: 'absolute'};
                rightStyle = {left: '50%', width: '50%', height: '100%', position: 'absolute'};
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
                midStyle = {left: '0%', width: '67%', height: '100%', position: 'absolute'}
                rightStyle = {left: '67%', width: '33%', height: '100%', position: 'absolute'}
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
