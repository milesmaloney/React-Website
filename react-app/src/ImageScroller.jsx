import React from 'react';
import './ImageScroller.css';
import img0 from './Assets/img0.jpg';
import img1 from './Assets/img1.jpg';
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
import img4 from './Assets/img4.jpg';
import img5 from './Assets/img5.jpg';
import img6 from './Assets/img6.jpg';


export default class ImageScroller extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPicture: img0, shuffle: this.props.shuffle};
        this.changeImage = this.changeImage.bind(this);
        this.toggleShuffle = this.toggleShuffle.bind(this);
    }

    render() {
        var scrollerStyle = {backgroundImage: `url(${this.state.currentPicture})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"};
        var shuffleStyle = {backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaQf9Veq0jYowgDiQ_X9IUhw7imnG5q8McA&usqp=CAU'})`, backgroundSize: "cover", backgroundPosition: "center"};
        var shuffleDiv = <div></div>;
        if(!this.state.shuffle) {
            var shuffleTexture = {backgroundColor: 'rgba(0,0,0,0.5)', zIndex: '2', color: 'rgba(256, 256, 256, 0.5)'};
            shuffleDiv = <div id = "shuffleTexture" style = {shuffleTexture}><h1>OFF</h1></div>
        }
        return (
            <div id = 'ImageScroller' style = {scrollerStyle} onClick = {this.changeImage}>
                <div id = 'shuffleButton' onClick = {this.toggleShuffle} style = {shuffleStyle}>
                    {shuffleDiv}
                </div>
            </div>
        );

    }

    componentDidMount() {
        this.setImageInterval();
    }

    componentWillUnmount() {
        this.clearImageInterval();
    }

    //This function will change the image and reset the image change interval (handles onClick events)
    changeImage() {
        const possibleImages = [img0,img1,img2,img3,img4,img5,img6];
        var switchCase = this.state.currentPicture;
        if(this.state.shuffle) {
            switchCase = possibleImages[Math.floor(Math.random() * possibleImages.length)];
        }
        switch(switchCase) {
            case img0:
                this.setState({ currentPicture: img1 }) ;
                this.clearImageInterval();
                this.setImageInterval();
                break;
            case img1:
                this.setState({ currentPicture: img2 });
                this.clearImageInterval();
                this.setImageInterval();
                break;
            case img2:
                this.setState({ currentPicture: img3 });
                this.clearImageInterval();
                this.setImageInterval();
                break;
            case img3:
                this.setState({ currentPicture: img4 });
                this.clearImageInterval();
                this.setImageInterval();
                break;
            case img4:
                this.setState({ currentPicture: img5 });
                this.clearImageInterval();
                this.setImageInterval();
                break;            
            case img5:
                this.setState({ currentPicture: img6 });
                this.clearImageInterval();
                this.setImageInterval();
                break;            
            case img6:
                this.setState({ currentPicture: img0 });
                this.clearImageInterval();
                this.setImageInterval();
                break;
            default:
                return;
        }
    }

    toggleShuffle() {
        if(this.state.shuffle) {
            this.setState({shuffle: 0});
        }
        else {
            this.setState({shuffle: 1});
        }
    }

    setImageInterval() {
        this.imageIntervalID = setInterval(this.changeImage.bind(this), 3000);
    }

    clearImageInterval() {
        clearInterval(this.imageIntervalID);
    }
}