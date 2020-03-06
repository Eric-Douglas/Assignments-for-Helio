
import React, { Component } from 'react'

export default class Body extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      number: 0
    };
    this.generateRandomNumber = this.generateRandomNumber.bind(this);
  } // Class is made here. I choose body for simplicity's sake even though I don't know if it's a member or React or not

  generateRandomNumber = () => {
    const min = 1
    const max = 13
    const actualNum = Math.floor(min + Math.random() * (max - min))
    console.log("generated")
    this.setState({number: actualNum})
  } // Here's a function. I stole it from the web and have made some modification. It seemed malleable enough for my taste.
  // I need to figure out how to put the actualNum constant I made and put it into the generator.
  //presently, the generator gives me random numbers that are mostly decimals. It's a start I suppose

  // LEAVE ALL THIS ALONE BELOW
  render(){
    return(
      <div>
        <button onClick={this.generateRandomNumber}>Random number</button>
        <Number myNumber={this.state.number}/>
      </div>
    );
  }
} 

class Number extends Component {
  render(){
    return(
      <div>
        <br />
        <p>{this.props.myNumber}</p>
      </div>
    );
  }
} 

//for more promising results, use the code above 

