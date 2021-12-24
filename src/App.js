import React, { Component } from "react";
import Card from "./Component/Card";
import Form from "./Component/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      inputTitle: " ",
      inputWish: " ",
      inputSend: " ",
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }


  // button function
  onClickHandler=(e)=> {
        e.preventDefault();
        this.setState((prevState) => ({
          open: !prevState.open,  
        }));
      }

  //Data from the Form, handleCallback in arrow-function, if not there is bug, reason is unknown?
  handleCallbackT=(childData)=>{
    this.setState({ inputTitle: childData });
  };
  handleCallbackW=(childData)=>{
    this.setState({ inputWish: childData });
  };
  handleCallbackS=(childData)=>{
    this.setState({ inputSend: childData });
  };
  render() {
   
    return (
      <div className="container">
        {this.state.open ? 
        (<Form 
          parentCallbackT={this.handleCallbackT}
          parentCallbackW={this.handleCallbackW} 
          parentCallbackS={this.handleCallbackS} 

          
        
        />)
        :(
          <Card
            inputR={this.state.inputTitle}
            inputTxt={this.state.inputWish}
            inputS={this.state.inputSend}
          />
        )}
        <div className="row">
          
        <button type="submit" onClick={this.onClickHandler}>
          {this.state.open ? "create a Card" : "reset Card"}
        </button>
        </div>
      </div>
    );
  }
}
export default App;

