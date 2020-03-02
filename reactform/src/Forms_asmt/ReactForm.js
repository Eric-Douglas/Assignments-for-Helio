// class component
import React from 'react'

export default class Forms extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.initialMessage,
            fName: "",
            lName: ""
        }

        this.onClickHandler = this.onClickHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)

    } // end of constructor

    onClickHandler() {
        this.setState({name: "This is a test page."})
    }

    onChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
    }

    render() {

        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick= {this.onClickHandler}>Change Text</button>
                First Name: <input onChange= {this.onChangeHandler} name = "fName" value= {this.state.fName}></input>
                Last Name: <input onChange= {this.onChangeHandler} name = "lName" value= {this.state.lName}></input>

            </div>
        )

    }

}