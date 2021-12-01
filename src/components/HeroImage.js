import React, { Component } from "react";
import "../style/HeroImage.css";

export class HeroImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfImages: [
        "https://secureservercdn.net/160.153.137.99/epq.490.myftpupload.com/wp-content/uploads/2021/06/Slider3.jpg",
        "https://secureservercdn.net/160.153.137.99/epq.490.myftpupload.com/wp-content/uploads/2021/06/Slider-2.jpg",
      ],
      currentImgLink:
        "https://secureservercdn.net/160.153.137.99/epq.490.myftpupload.com/wp-content/uploads/2021/06/Slider3.jpg",
    };
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.currentImgLink === this.state.arrayOfImages[0]) {
        this.setState({
          currentImgLink: this.state.arrayOfImages[1],
        });
      } else {
        this.setState({
          currentImgLink: this.state.arrayOfImages[0],
        });
      }
    }, 5000);
  }
  handleToggleClick=(e)=>{
      let buttonClass=e.target.className
      if(buttonClass==="toggle1"){
          this.setState({
            currentImgLink: this.state.arrayOfImages[1],
          });
        }
        else{
          this.setState({
            currentImgLink: this.state.arrayOfImages[0],
          });

      }
  }

  render() {
    return (
      <div
        className="heroImageContainer"
        style={{ backgroundImage: `url(${this.state.currentImgLink})` }}
      >
        <div className="buttonsArea">
          <button className="shopNowBtn">Shop now</button>
          <div className="toggeleSlider">
            <button className="toggle1"onClick={this.handleToggleClick}></button>
            <button className="toggle2" onClick={this.handleToggleClick}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroImage;
