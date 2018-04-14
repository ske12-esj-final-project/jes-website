import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getAllMatches } from '../../actions/match'

class Insights extends Component {
    render() {
        return (
            <div>
                <h1>Insights</h1>
                <button onClick={() => this.props.getAllMatches()}>Get All Matches</button>
                <div>
                    { _.map(this.props.match.matches, match => {
                        return (
                            <div key={ match._id }>{ match.dateCreated } ({ match.duration })</div>
                        )
                    }) }
                </div>

                <button onClick={() => this.props.getAllPlayers()}>Get All Players</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        match: state.match,
        player: state.player
    }
}

export default connect(mapStateToProps, { getAllMatches })(Insights)