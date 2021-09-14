import React from 'react';
import './Footer.css'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        /*Footer contains a left div*/
        if(this.props.divs[0]) {
            /*Footer contains a left and middle div*/
            if(this.props.divs[1]) {
                /*Footer contains a left, middle, and right div*/
                if(this.props.divs[2]) {
                    var leftStyle = {left: '0%', width: '33%', height: '100%', position: 'absolute'};
                    var midStyle = {left: '33%', width: '34%', height: '100%', position: 'absolute'};
                    var rightStyle = {left: '67%', width: '33%', height: '100%', position: 'absolute'};
                    return (
                        <div id = "footer" style = {this.props.style}>
                            <div id = "footerLeft" style = {leftStyle}>
                                {this.props.content[0]}
                            </div>
                            <div id = "footerMid" style = {midStyle}>
                                {this.props.content[1]}
                            </div>
                            <div id = "footerRight" style = {rightStyle}>
                                {this.props.content[2]}
                            </div>
                        </div>
                    );
                }
                /*Footer contains only a left and middle div (left corner and single mid-right section)*/
                else {
                    var leftStyle = {left: '0%', width: '33%', height: '100%', position: 'absolute'};
                    var midStyle = {left: '33%', width: '67%', height: '100%', position: 'absolute'};
                    return (
                        <div id = "footer" style = {this.props.style}>
                            <div id = "footerLeft" style = {leftStyle}>
                                {this.props.content[0]}
                            </div>
                            <div id = "footerMid" style = {midStyle}>
                                {this.props.content[1]}
                            </div>
                        </div>
                    );
                }
            }
            /*Footer contains only a left and right div (footer divided between the two divs)*/
            else if(this.props.divs[2]) {
                var leftStyle = {left: '0%', width: '50%', height: '100%', position: 'absolute'};
                var rightStyle = {left: '50%', width: '50%', height: '100%', position: 'absolute'};
                return (
                    <div id = "footer" style = {this.props.style}>
                        <div id = "footerLeft" style = {leftStyle}>
                            {this.props.content[0]}
                        </div>
                        <div id = "footerRight" style = {rightStyle}>
                            {this.props.content[1]}
                        </div>
                    </div>
                );
            }
            
            /*Else footer contains only a left div (This is handled by the base case. One div will span the entire footer regardless) */

        }
        /*Footer contains a middle div. Footer does not contain a left div*/
        else if(this.props.divs[1]) {
            /*Footer contains only a middle and right div (right corner and single left-mid section)*/
            if(this.props.divs[2]) {
                var midStyle = {left: '0%', width: '67%', height: '100%', position: 'absolute'};
                var rightStyle = {left: '67%', width: '33%', height: '100%', position: 'absolute'};
                return (
                    <div id = "footer" style = {this.props.style}>
                        <div id = "footerMid" style = {midStyle}>
                            {this.props.content[0]}
                        </div>
                        <div id = "footerRight" style = {rightStyle}>
                            {this.props.content[1]}
                        </div>
                    </div>
                );
            }
            /*Else footer contains only a middle div (This is handled by the base case) */
        }

        /*Else footer contains only a right div (This is handled by the base case) */
    
        /*Base Case: Either no extra divs or only one (Would span the entire footer) */
        else {
            return (
                <div id = "footer" style = {this.props.style}>
                    {this.props.content[0]}
                </div>
            );
        }
    }
}
