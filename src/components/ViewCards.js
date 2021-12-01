import React, { Component } from 'react'
import MostWanted from './MostWanted'
import "../style/viewCards.css"
export class viewCards extends Component {
    render() {
           this.objCard=[
                {src:"./assets/images/blover.jpg",
                value:"Long Running Hoodie",
                    price:"45 JOD"},
                    {src:"./assets/images/yellow shirt.jpg",
                    value:"Crossover Hem T-Shirt",
                    price:"30JOD"},
                    {src:"./assets/images/sport.jpg",
                    value:"High-Low Set",
                    price:"65 JOD"},
                    {src:"./assets/images/LightGrey.jpg",
                    value:"High-Low Grey Set",
                    price:"67 JOD"}
                ]
            
                 let source=this.objCard.map((item,key)=>(
                   <MostWanted src={item.src} value={item.value} price={item.price}key={key}/>
                   ))
            return (
                <div className='BtnCont'>
                   <button className='Btn'>Most Wanted</button><br/>
                <div className="cardContainer">
                    {source}
                   </div>
                   </div>
            
        )
    }
}

export default viewCards
