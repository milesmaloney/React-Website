import React from 'react';
//import ReactDOM from 'react-dom';


//The LocalClock React component creates a clock that will switch between local time and date
export default class LocalClock extends React.Component {
    //constructor sets the initial states and props
    constructor(props) {
        super(props);
        this.state = { date: new Date(), timeOrDate : 'time' };
        this.changeToDate = this.changeToDate.bind(this);
        this.changeToTime = this.changeToTime.bind(this);
    }

    //render mounts the component to the web app
    render() {
        let shownClock;
        if(this.state.timeOrDate === 'time') {
            shownClock = "The time right now is " + this.state.date.toLocaleTimeString();
        }
        else {
            shownClock = "The date today is " + this.state.date.toLocaleDateString();
        }
        return (
            <h2 onClick = {this.state.timeOrDate === 'time' ? this.changeToDate : this.changeToTime}>{shownClock}</h2>
        );
    }

    //componentDidMount handles everything that needs to happen once the component is mounted
    componentDidMount() {
        //updates time every second
        this.timeIntervalID = setInterval(() => {
            this.setState({ date: new Date()})
        }, 1000);

        //switches between time and date every specified interval (5 seconds of date : 10 seconds of time)
        if(this.state.timeOrDate === 'time') {
            this.changeToDate();
        }
        else {
            this.changeToTime();
        }

    }

    //componentWillUnmount handles what should be done when the component is unmounted
    componentWillUnmount() {
        clearInterval(this.timeIntervalID);
        clearTimeout(this.clockIntervalID);
    }

    //returns the time interval to be used on state change (5 seconds for date, 10 seconds for time)
    changeToTime() {
        clearTimeout(this.clockIntervalID);
        this.setState({ timeOrDate: 'time' });
        this.clockIntervalID = setTimeout(this.changeToDate.bind(this), 10000);
    }
    changeToDate() {
        clearTimeout(this.clockIntervalID);
        this.setState({ timeOrDate: 'date'});
        this.clockIntervalID = setTimeout(this.changeToTime.bind(this), 5000);
    }
}

//ReactDOM.render(<LocalClock/>, document.getElementById('headerRight'));