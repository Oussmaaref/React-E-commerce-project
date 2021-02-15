import React from 'react'
import Home from './Pages/Home'
import Women from './Pages/women'
import Men from './Pages/men'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function MainRouter() {
    return (
        <Switch>
            <Route exact path="/">
                <Container>
                    <Home />
                </Container>
            </Route>
            <Route exact path="/men">
                <Container>
                    <Men />
                </Container>
            </Route>
            <Route exact path="/women">
                <Container>
                    <Women />
                </Container>
            </Route>
        </Switch>
    )
}
