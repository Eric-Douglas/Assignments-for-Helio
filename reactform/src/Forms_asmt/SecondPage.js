import React from 'react'
import {Link} from 'react-router-dom'
export default function SecondPage(props) {

    let [message, setMessage] = React.useState(props.initialMessage)
    let [fName, setfName] = React.useState("")
    let [lName, setlName] = React.useState("")
    
    const onClickHandler = () => {
        setMessage("Try again later.")
    }

    const onChangeHandler = (event) => {

        switch (event.target.name) {
            case 'fName':
                setfName(event.target.value)
            break
            case 'lName':
                setlName(event.target.value)
            break
            default:

        }
    }

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={onClickHandler}>Submit</button>
            First Name: <input onChange= {onChangeHandler} name = "fName" value= {fName}></input>
            Last Name: <input onChange= {onChangeHandler} name = "lName" value= {lName}></input>
            <Link to = "reactform">Redirect to home</Link>
        </div>
    )
}