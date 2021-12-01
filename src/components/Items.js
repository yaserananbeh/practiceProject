import React, { Component } from "react";
import "./mostViewed.css";

export class Items extends Component {
  render() {
    return (
      <div>
        <div className="mainContainer">
          <img src={this.props.src} alt="pic" />
          <div className="titleMostViewed"> {this.props.title}</div>
          <div className="priceMostViewed"> {this.props.price}</div>
        </div>
      </div>
    );
  }
}

export default Items;
