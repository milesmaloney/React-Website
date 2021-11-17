import React from 'react';
import './ImageScroller.css';



export default class ImageScroller extends React.Component {
    /*
    Props:
        Shuffle: Decides whether or not the ImageScroller starts in shuffle mode
    States:
        Shuffle: Maintains whether or not the ImageScroller is scrolling through images sequentially or randomly
        currentPicture: Maintains which picture is currently being displayed
    Functions:
        changeImage: changes the current image being displayed
        toggleShuffle: Turns the shuffle value on/off
    */
    constructor(props) {
        super(props);
        this.state = { currentPicture: 0, shuffle: this.props.shuffle};
        this.changeImage = this.changeImage.bind(this);
        this.toggleShuffle = this.toggleShuffle.bind(this);
    }

    /*
    render() adjusts styles based on the page being displayed and renders the page accordingly
    Parameters:
        None; Uses the currentPicture and shuffle states to decide the style the ImageScroller should take and the image to be displayed
    Returns:
        Content; renders the content to the DOM within the web browser
    */
    render() {
        //Define the style variables for the style, slider, and shuffle button based on the shuffle state variable
        var scrollerStyle = {backgroundImage: `url(${this.props.images[this.state.currentPicture]})`, backgroundSize: `${this.props.mobile ? 'contain' : 'cover'}`};
        var sliderStyle = {backgroundColor: `${this.state.shuffle ? 'rgba(0,0,0,0.5)' : 'rgba(256,256,256,0.5)'}`, left: `${this.state.shuffle ? '80' : '0'}%`};
        var shuffleTexture = this.state.shuffle ? {backgroundColor: 'rgba(256,256,256,0.5)', color: 'rgba(0,0,0,0.5)'} : {backgroundColor: 'rgba(0,0,0,0.5)', color: 'rgba(256, 256, 256, 0.5)'};
        var shuffleDiv = this.state.shuffle ? <div id = "shuffleTexture" style = {shuffleTexture} title = "Turn off shuffle"><h2>ON</h2></div> : <div id = "shuffleTexture" style = {shuffleTexture} title = "Turn on shuffle"><h1>OFF</h1></div>;
        return (
            <div id = 'imageScrollerBackground' style = {{backgroundImage: `url(${this.props.bgSrc})`}}>
                <div id = 'loadingBg'>
                    <h1 style = {{fontSize: `${this.props.mobile ? '5vw' : '10vw'}`}}>Loading...</h1>
                </div>
                <div id = 'ImageScroller' style = {scrollerStyle} onClick = {this.changeImage} title = {"Continue to next image"}>
                    <div id = 'shuffleButton' onClick = {this.toggleShuffle}>
                        <div id = 'shuffleSlider' style = {sliderStyle}></div>
                        {shuffleDiv}
                    </div>
                </div>
            </div>
        );

    }

    /*
    This function describes what the component should do once it is rendered
    Parameters:
        None; sets an interval for changing images
    Returns:
        None; updates imageIntervalID for interval clearing upon unrendering the element
    */
    componentDidMount() {
        //Creates a interval to change the image every 3 seconds
        this.imageIntervalID = setInterval(this.changeImage, 3000);
    }

    /*
    This function describes what the component should do once it is unrendered
    Parameters:
        None; uses imageIntervalID to clear the interval
    Returns:
        None; clears any pending intervals to clear up processing power
    */
    componentWillUnmount() {
        clearInterval(this.imageIntervalID);
    }

    /*
    This function will change the image and reset the image change interval (handles onClick events)
    Parameters:
        None: Uses the shuffle and currentPicture states to decide whether or not the next image is chosen sequentially or random and what 
        the next image will be
    Returns:
        None: Changes the currentPicture state to reflect the new image we want to display
    */
    changeImage() {
        //Gets the next image (random b/w 0 and # of images if in shuffle) or restarts the scroller
        var newImage = this.state.shuffle ? Math.floor(Math.random() * this.props.images.length) : (this.state.currentPicture  === this.props.images.length - 1 ? 0 : this.state.currentPicture + 1);
        this.setState({ currentPicture: newImage});
        //Resets the image change interval (necessary for onClick call)
        clearInterval(this.imageIntervalID);
        this.imageIntervalID = setInterval(this.changeImage, 3000);
    }

    /*
    This function toggles the shuffle function of the ImageScroller on/off
    Parameters:
        None; uses the shuffle state to determine which shuffle state to change to
    Returns:
        None; changes shuffle state based on the current shuffle state
    */
    toggleShuffle() {
        this.state.shuffle ? this.setState({shuffle: 0}) : this.setState({shuffle: 1});
    }
}