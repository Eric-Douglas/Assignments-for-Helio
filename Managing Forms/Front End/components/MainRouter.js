import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Appbar from './Appbar'
import UsersF from './UsersF'

export default function MainRouter() {

    return (

        <div>
            <Router>
                <Appbar>  </Appbar>
                <Switch>


                    <Route path="/signup">
                        <SignUp initialMessage="Sign up"></SignUp>
                    </Route>
                    <Route path="/users">
                        <UsersF></UsersF>
                    </Route>
                    <Route path="/">
                        <Login initialMessage="Login"></Login>
                    </Route>

                </Switch>

            </Router>
        </div>
    )
}