import React from 'react'
import { connect } from 'react-redux'

const Home = props => (
    <div>
        <h1>Welcome to JES</h1>
        <p>Download game</p>
        <button>Windows</button>
        <button>macOS</button>
    </div>
)

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Home)