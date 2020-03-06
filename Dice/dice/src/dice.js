
import React, { Component } from 'react'

export default class Body extends Component {
  state = {
    dieSides: [6, 12, 20]
  } // we use an array so each number doesn't have to be set elsewhere. It's easier to target a collection

  render() {
    return this.state.dieSides.map(die => {
      return <Number key={die} sides={die} />
    })
  }

}

class Number extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    };
    this.generateRandomNumber = this.generateRandomNumber.bind(this);

  }

  generateRandomNumber = (sides) => {
    const min = 1
    const max = this.props.sides + 1
    const actualNum = parseInt(Math.floor(min + Math.random() * (max - min)))
    console.log("generated", actualNum)

    this.setState({ number: actualNum })
  }

  render() {
    return (
      <div>
        <button onClick={(event, sides = 6) => this.generateRandomNumber(event)}>Sides {this.props.sides}
        </button>
        <p>{this.state.number}</p>
      </div>
    );
  }
}


