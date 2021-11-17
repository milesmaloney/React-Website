import React from 'react';
import './LocalClock.css';


/*The LocalClock React component creates a clock that will switch between local time and date*/
export default class LocalClock extends React.Component {
    /*
    Props:
        fontSize: defines the font size of the clock
    States:
        date: The current date/time
        timeOrDate: Boolean value denoting whether the clock is showing time or date
    Functions:
        changeState: Changes the timeOrDate state
    */
    constructor(props) {
        super(props);
        this.state = { date: new Date(), timeOrDate : 'time'};
        this.changeState = this.changeState.bind(this);
    }

    /*
    render() adjusts styles based on the page being displayed and renders the page accordingly
    Parameters:
        None; Uses the timeOrDate and date states to decide what to display and in what format
    Returns:
        None; renders the content within the web browser
    */
    render() {
        //Populates the digitStyles with positioning for each digit in relation to the others
        var digitStyles = [];
        for(var i = 0; i < 10; i++) {
            digitStyles.push({bottom: '0%', left: `${0 + i * 7.5}%`, height: '100%', width: '7.5%', position: 'absolute', fontSize: `${this.props.fontSize}`});
        }
        //Rounds out any single-digit values and adds leading 0's for consistency
        var digitPairs = (this.state.timeOrDate === 'time' ? this.state.date.toLocaleTimeString().replace(" ","").split(":") : this.state.date.toLocaleDateString().split("/"))
        for(var j = 0; j < digitPairs.length; j++) {
            if(digitPairs[j].length % 2 === 1) {
                digitPairs[j] = '0' + digitPairs[j];
            }
        }
        //Gets the string in array format as opposed to divided digit pairs
        var shownDigits = digitPairs.join("").split("");
        return (
            <div id = "clock" onClick = {this.changeState} title = {`Change clock to ${this.state.timeOrDate === 'time' ? 'date' : 'time'}`}>
                <div id = "digits">
                    <div id = "digitOne" style = {digitStyles[0]}>
                        <h4>{shownDigits[0]}</h4>
                    </div>
                    <div id = "digitTwo" style = {digitStyles[1]}>
                        <h4>{shownDigits[1]}</h4>
                    </div>
                    <div id = "digitThree" style = {digitStyles[2]}>
                        <h4>{this.state.timeOrDate === 'time' ? ':' : '/'}</h4>
                    </div>
                    <div id = "digitFour" style = {digitStyles[3]}>
                        <h4>{shownDigits[2]}</h4>
                    </div>
                    <div id = "digitFive" style = {digitStyles[4]}>
                        <h4>{shownDigits[3]}</h4>
                    </div>
                    <div id = "digitSix" style = {digitStyles[5]}>
                        <h4>{this.state.timeOrDate === 'time' ? ':' : '/'}</h4>
                    </div>
                    <div id = "digitSeven" style = {digitStyles[6]}>
                        <h4>{shownDigits[4]}</h4>
                    </div>
                    <div id = "digitEight" style = {digitStyles[7]}>
                        <h4>{shownDigits[5]}</h4>
                    </div>
                    <div id = "digitNine" style = {digitStyles[8]}>
                        <h4>{shownDigits[6]}</h4>
                    </div>
                    <div id = "digitTen" style = {digitStyles[9]}>
                        <h4>{shownDigits[7]}</h4>
                    </div>
                </div>
            </div>
        );
    }

    /*
    This function handles everything that needs to happen once the component is rendered
    Parameters:
        None; Starts a timer interval to update the clock and calls changeState to begin the interval loop
    Returns:
        None; Begins intervals for changing between time and date and updating the datetime variable
    */
    componentDidMount() {
        //updates time every second
        this.timeIntervalID = setInterval(() => {
            this.setState({ date: new Date()})
        }, 1000);

        //switches between time and date every specified interval (5 seconds of date : 10 seconds of time)
        this.changeState();
    }

    /*
    This function handles what should be done when the component is unrendered
    Parameters:
        None; uses all interval ID's to clear any pending intervals to free up processing power
    Returns:
        None; stops any pending intervals
    */
    componentWillUnmount() {
        clearInterval(this.timeIntervalID);
        clearInterval(this.transitionIntervalID);
        clearTimeout(this.clockIntervalID);
    }

    /*
    Parameters:
        None; Only called to transition states
    Returns:
        None; changes the state to the complementary state and starts the corresponding timer
    */
    changeState() {
        clearTimeout(this.clockIntervalID);
        if(this.state.timeOrDate === 'time') {
            this.setState({ timeOrDate: 'date' });
            this.clockIntervalID = setTimeout(this.changeState, 5000);
        }
        else {
            this.setState({ timeOrDate: 'time' });
            this.clockIntervalID = setTimeout(this.changeState, 10000);
        }
    }
}