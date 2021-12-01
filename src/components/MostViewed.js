import React, { Component } from "react";
import Items from "./Items";

export class MostViewed extends Component {
  render() {
    const MostItems = [
      {
        id: "e1",
        src: "./assets/images/img1.jpg",
        title: "Crossover Hem T-Shirt",
        price: "28 JD",
      },
      {
        id: "e2",
        src: "./assets/images/img2.jpg",
        title: "High-Low Set",
        price: "65 JD",
      },
      {
        id: "e3",
        src: "./assets/images/img3.jpg",
        title: "Jogger SweatPants",
        price: "38 JD",
      },
    ];
    return (
      <>
        <h2 className="title"> Most Viewed Items</h2>
        <div className="main-item-container">
          {MostItems.map((item,index) => {
            return (
              <Items key={index} src={item.src} title={item.title} price={item.price} />
            );
          })}
        </div>
      </>
    );
  }
}

export default MostViewed;
