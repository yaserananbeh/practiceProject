import { Component } from "react";
import "../style/mostWanted.css"
export default class MostWanted extends Component {
    render(){
        return(
        <div className="card">
           <img src={this.props.src}  alt="item"/><br/>
            <p className="name">{this.props.value}
            </p><br/>
            <p className="price">{this.props.price}</p>
        </div>
        )}};
