import React from 'react';
import './LocalClock.css';


//The LocalClock React component creates a clock that will switch between local time and date
export default class LocalClock extends React.Component {
    //constructor sets the initial states and props
    constructor(props) {
        super(props);
        this.state = { date: new Date(), timeOrDate : 'time'};
        this.changeToDate = this.changeToDate.bind(this);
        this.changeToTime = this.changeToTime.bind(this);
    }

    //render mounts the component to the web app
    render() {
        var shownDigits = [];
        var digitStyles = [];
        for(var i = 0; i < 10; i++) {
            digitStyles.push({top: '0%', left: `${0 + i * 7.5}%`, height: '100%', width: '7.5%', position: 'absolute'});
        }
        var digitPairs = (this.state.timeOrDate === 'time' ? this.state.date.toLocaleTimeString().replace(" ","").split(":") : this.state.date.toLocaleDateString().split("/"))
        for(var j = 0; j < digitPairs.length; j++) {
            if(digitPairs[j].length % 2 === 1) {
                digitPairs[j] = '0' + digitPairs[j];
            }
        }
        //Gets the string in array format as opposed to divided digit pairs
        shownDigits = digitPairs.join("").split("");
        return (
            <div id = "clock">
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

    //componentDidMount handles everything that needs to happen once the component is mounted
    componentDidMount() {
        //updates time every second
        this.timeIntervalID = setInterval(() => {
            this.setState({ date: new Date()})
        }, 1000);

        //switches between time and date every specified interval (5 seconds of date : 10 seconds of time)
        this.state.timeOrDate === 'time' ? this.changeToDate() : this.changeToTime();
    }

    //componentWillUnmount handles what should be done when the component is unmounted
    componentWillUnmount() {
        clearInterval(this.timeIntervalID);
        clearInterval(this.transitionIntervalID);
        clearTimeout(this.clockIntervalID);
    }

    //returns the time interval to be used on state change (5 seconds for date, 10 seconds for time)
    changeToTime() {
        clearTimeout(this.clockIntervalID);
        this.setState({ timeOrDate: 'time' });
        this.clockIntervalID = setTimeout(this.changeToDate, 10000);
    }
    changeToDate() {
        clearTimeout(this.clockIntervalID);
        this.setState({ timeOrDate: 'date'});
        this.clockIntervalID = setTimeout(this.changeToTime, 5000);
    }
}