// class component
import React from 'react'
import { Link } from '@material-ui/core'
import { Link as OurLink } from 'react-router-dom'
import { uriBase, api } from '../const'

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.initialMessage,
            userName: "",
            password: "",
            loggedIn: ""
        }

        this.onClickHandler = this.onClickHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)

    } // end of constructor

    onClickHandler() {
        let body = {
            userName: this.state.userName,
            password: this.state.password
        }

        fetch(`${uriBase}${api}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(httpResponse => {
                if (!httpResponse.ok) {
                    throw new Error("Couldn't send login ")
                }
                return httpResponse.json()
            })
            .then(user => {
                console.log(user)
                if (user.hasOwnProperty("fName")) {
                    this.setState({ loggedIn: "Logged in" })
                } else {
                    this.setState({ loggedIn: "Not logged in" })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    onChangeHandler(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state)
    }

    render() {

        return (
            <div>
                <div>
                    <h1>{this.state.name}</h1>
                    <h2>{this.state.loggedIn}</h2>
                    Username: <input onChange={this.onChangeHandler} name="userName" value={this.state.fName}></input>
                    <br></br>
                    Password: <input onChange={this.onChangeHandler} name="password" value={this.state.lName}></input>
                </div>
                <div>
                    <button onClick={this.onClickHandler}>Log in</button>
                </div>
                <div>
                    <OurLink to="signup"> Sign up here </OurLink>
                    <br></br>
                    <OurLink to="/users">Users</OurLink>
                </div>
            </div>
        )

    }

}