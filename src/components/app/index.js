import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => {
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/insight">Insight</Link>
            <Link to="/about">About</Link>
        </header>

        <main>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/insight" component={Insight}></Route>
            <Route exact path="/about" component={About}></Route>
        </main>
    </div>
}