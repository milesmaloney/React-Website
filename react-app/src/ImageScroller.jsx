import React from 'react';
import './ImageScroller.css';
import img0 from './Assets/img0.jpg';
import img1 from './Assets/img1.jpg';
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
import img4 from './Assets/img4.jpg';
import img5 from './Assets/img5.jpg';


export default class ImageScroller extends React.Component {
    /*
    Props:
        Shuffle: Decides whether or not the ImageScroller starts in shuffle mode
    States:
        Shuffle: Maintains whether or not the ImageScroller is scrolling through images sequentially or randomly
        currentPicture: Maintains which picture is currently being displayed
    */
    constructor(props) {
        super(props);
        this.state = { currentPicture: img0, shuffle: this.props.shuffle};
        this.changeImage = this.changeImage.bind(this);
        this.toggleShuffle = this.toggleShuffle.bind(this);
    }

    /*
    render() adjusts styles based on the page being displayed and renders the page accordingly
    Parameters:
        None; Uses the currentPicture and shuffle states to decide the style the ImageScroller should take and the image to be displayed
    Returns:
        None; renders the content within the web browser
    */
    render() {
        var scrollerStyle = {backgroundImage: `url(${this.state.currentPicture})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"};
        var shuffleStyle = {backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaQf9Veq0jYowgDiQ_X9IUhw7imnG5q8McA&usqp=CAU'})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"};
        var sliderStyle = {backgroundColor: `${this.state.shuffle ? 'rgba(0,0,0,0.5)' : 'rgba(256,256,256,0.5)'}`, top: '0%', left: `${this.state.shuffle ? '80' : '0'}%`, height: '100%', width: '20%', position: 'absolute'};
        var shuffleDiv = <div></div>;
        var shuffleTexture = {};
        shuffleTexture = this.state.shuffle ? {backgroundColor: 'rgba(256,256,256,0.5)', zIndex: '2', color: 'rgba(0,0,0,0.5)'} : {backgroundColor: 'rgba(0,0,0,0.5)', zIndex: '2', color: 'rgba(256, 256, 256, 0.5)'};
        shuffleDiv = this.state.shuffle ? <div id = "shuffleTexture" style = {shuffleTexture} title = "Turn off shuffle"><h2>ON</h2></div> : <div id = "shuffleTexture" style = {shuffleTexture} title = "Turn on shuffle"><h1>OFF</h1></div>;
        return (
            <div id = 'ImageScroller' style = {scrollerStyle} onClick = {this.changeImage}>
                <div id = 'shuffleButton' onClick = {this.toggleShuffle} style = {shuffleStyle}>
                    <div id = 'shuffleSlider' style = {sliderStyle}></div>
                    {shuffleDiv}
                </div>
            </div>
        );

    }

    /*This function describes what the component should do once it is rendered*/
    componentDidMount() {
        this.imageIntervalID = setInterval(this.changeImage, 3000);
    }

    /*This function describes what the component should do once it is unrendered*/
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
        const possibleImages = [img0,img1,img2,img3,img4,img5];
        var switchCase = this.state.currentPicture;
        if(this.state.shuffle) {
            switchCase = possibleImages[Math.floor(Math.random() * possibleImages.length)];
        }
        switch(switchCase) {
            case img0:
                this.setState({ currentPicture: img1 }) ;
                clearInterval(this.imageIntervalID);
                this.imageIntervalID = setInterval(this.changeImage, 3000);
                break;
            case img1:
                this.setState({ currentPicture: img2 });
                clearInterval(this.imageIntervalID);
                this.imageIntervalID = setInterval(this.changeImage, 3000);
                break;
            case img2:
                this.setState({ currentPicture: img3 });
                clearInterval(this.imageIntervalID);
                this.imageIntervalID = setInterval(this.changeImage, 3000);
                break;
            case img3:
                this.setState({ currentPicture: img4 });
                clearInterval(this.imageIntervalID);
                this.imageIntervalID = setInterval(this.changeImage, 3000);
                break;
            case img4:
                this.setState({ currentPicture: img5 });
                clearInterval(this.imageIntervalID);
                this.imageIntervalID = setInterval(this.changeImage, 3000);
                break;            
            case img5:
                this.setState({ currentPicture: img0 });
                clearInterval(this.imageIntervalID);
                this.imageIntervalID = setInterval(this.changeImage, 3000);
                break;
            default:
                return;
        }
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