import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Insights from '../insights'
import MatchInfo from '../insights/match'
import About from '../about'

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/about">About</Link>
        </header>

        <main>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/insights" component={Insights}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route path="/insights/matches/:id" component={MatchInfo}></Route>
            
        </main>
    </div>
)

export default App