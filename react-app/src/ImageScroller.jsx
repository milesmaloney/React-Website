import React from 'react';
import './ImageScroller.css';
import img0 from './Assets/img0.jpg';
import img1 from './Assets/img1.jpg';
import img2 from './Assets/img2.jpg';

/*NOTE: Require-style code does not work properly; keep import-style code, and add any new images to import list and changeImage() 
switch case*/
export default class ImageScroller extends React.Component {
    constructor(props) {
        super(props);
/*require-style:
        this.state = {currentPicture: 0};
*/
/*import-style:*/
        this.state = { currentPicture: img0};

    }

    render() {
/*require-style:
        var image = "./Assets/img" + this.state.currentPicture.toString() + ".jpg";
        return (
            <div className = "ImageScroller">
                <Background src = {require(image)} onClick = {this.changeImage.bind(this)}/>
            </div>
        );
*/
/*import-style:*/

        var style = {backgroundImage: `url(${this.state.currentPicture})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"};
        return (
            <div id = 'ImageScroller' style = {style} onClick = {this.changeImage.bind(this)}>
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
/*require-style:
        if(this.currentPicture >= parseInt(this.props.numPictures)) {
            this.currentPicture = 0;
        }
        else {
            this.currentPicture++;
        }
        this.clearImageInterval();
        this.setImageInterval();
*/
/*import-style:*/
        switch(this.state.currentPicture) {
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
                this.setState({ currentPicture: img0 });
                this.clearImageInterval();
                this.setImageInterval();
                break;
            default:
                return;
        }
    }

    setImageInterval() {
        this.imageIntervalID = setInterval(this.changeImage.bind(this), 3000);
    }

    clearImageInterval() {
        clearInterval(this.imageIntervalID);
    }
}