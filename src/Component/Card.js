import React, { Component } from "react";
import './Card.css';

class Card extends Component {
  constructor(){
    super();
    this.snowHandler=this.snowHandler.bind(this);
  }

snowHandler=()=>{

};
  render() {
    return (
      <div className="myCard" onClick={this.snowHandler}>
        <img src="https://github.com/Jo-Zh/Portfolio/raw/main/imagines/CardBackground.jpg" className="card-img" alt="Christmas celebration card" />
         <div className="card-img-overlay">

          <h5 className="title">{`To dear ${this.props.inputR}`}</h5>
          <p className="text">
            {this.props.inputTxt}
          </p>
          <h5 className="title">{`Love from ${this.props.inputS}`}</h5>
         </div>
       
      </div>
    );
  }
}

export default Card;