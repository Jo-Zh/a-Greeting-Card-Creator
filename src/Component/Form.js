import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      inputTitle: "",
      inputWish: "",
      inputSend: "",
    };
  }
  titleChangeHandler = (e) => {
    this.props.parentCallbackT(e.target.value); // function to pass data to Parent
    //the following steps are necessary of using an input element to pass the data,
    this.setState({
      inputTitle: e.target.value,
    });
  };
  wordsChangeHandler = (e) => {
    this.props.parentCallbackW(e.target.value); // function to pass data to Parent
    //the following steps are necessary of using an input element to pass the data,
    this.setState({
      inputWish: e.target.value,
    });
  };
  sendChangeHandler = (e) => {
    this.props.parentCallbackS(e.target.value); // function to pass data to Parent
    //the following steps are necessary of using an input element to pass the data,
    this.setState({
      inputSend: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter receiver Name"
            value={this.state.inputTitle}
            onChange={this.titleChangeHandler}
          />
          <br></br>
          <br></br>
          <textarea cols='20' rows='8'
            type="text"
            placeholder="Enter wishe words"
            value={this.state.inputWish}
            onChange={this.wordsChangeHandler}
          >This is my statement one.&#13;&#10;This is my statement2</textarea>
          <br></br>
          <br></br>
          <input
            type="text"
            placeholder="Enter sender Name"
            value={this.state.inputSend}
            onChange={this.sendChangeHandler}
          />
        </form>
      </div>
    );
  }
}
export default Form;
