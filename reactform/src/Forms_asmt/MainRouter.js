import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Forms from './ReactForm'
import SecondPage from './SecondPage'

export default function MainRouter() {

    return (

        <div>
            <Router>
                <Switch>
                    <Route path="/page2">
                        <SecondPage initialMessage="Still testing..."></SecondPage>
                    </Route>
                    <Route path="/">
                        <Forms initialMessage="This is a test page."></Forms>
                    </Route>

                </Switch>
            </Router>
        </div>
    )
}